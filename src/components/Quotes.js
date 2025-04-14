import React from "react";


const Quote = () => {
    const [quote, setQuote] = React.useState("")

    const fetchApi = () =>{
        fetch('https://dummyjson.com/quotes')
        .then((res) => res.json())
            .then((data) => setQuote(data.quotes[0].quote)); // Accessing a single quote
    }
    return(
        <div className="main-div">
            <div className="quotes">
                <button onClick={fetchApi}>Get Quote</button> 
                <p>{quote}</p>
            </div>
        </div>
    )
}
export default Quote