import React, { useState } from "react";

const Quote = () => {
  const [quote, setQuote] = useState("");
  const [isLoading, setIsLoading] = useState(false); 

  const fetchApi = async () => {
    setIsLoading(true); // Set loading to true before fetching

    try {
      const response = await fetch("https://dummyjson.com/quotes");
      const data = await response.json();
      setQuote(data.quotes[0].quote);
    } catch (error) {
      console.error("Error fetching quote:", error);
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <div className="main-div">
      <div className="quotes">
        {isLoading ? (
          <p>Loading...</p> 
        ) : (
          <p>{quote}</p> /
        )}
        <button onClick={fetchApi} disabled={isLoading}>
          {isLoading ? "Getting Quote..." : "Get Quote"}
        </button>
      </div>
    </div>
  );
};

export default Quote;