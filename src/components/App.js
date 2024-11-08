// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    // Fetch random dog image from the API
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        // Set the dog image state to the image URL
        setDogImage(data.message);
        setLoading(false); // Stop loading when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Stop loading on error
      });
  }, []); // Empty dependency array means this runs only once when the component mounts

  return (
    <div>
      {loading ? (
        <p>Loading...</p> // Show loading text while the image is being fetched
      ) : (
        <img src={dogImage} alt="A Random Dog" /> // Show the image after loading
      )}
    </div>
  );
}

export default App;
