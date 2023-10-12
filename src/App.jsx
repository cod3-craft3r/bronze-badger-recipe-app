import "./App.css";
import CardContainer from "./UI/CardContainer.component";
import React, { useState, useEffect, useRef } from "react";
import Search from "./components/Search.component";
import axios from "axios";
import { Navbar } from "./components/Navbar.component";
import Footer from "./components/Footer.component";

function App() {
  const [cocktails, setCocktails] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [queryType, setQueryType] = useState("");
  const [queryInput, setQueryInput] = useState("");

  useEffect(() => {
    const fetchSampleData = async () => {
      try {
        const response = await axios.get(
          "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
        );
        setCocktails(response.data.drinks.slice(0, 20));
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    fetchSampleData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      if (queryType === "1a") {
        try {
          const response = await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${queryInput}`
          );
          setCocktails(response.data.drinks);
          setIngredients([]);
        } catch (error) {
          console.error("Error: ", error);
        }
      } else if (queryType === "1b") {
        try {
          const response = await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${queryInput}`
          );
          setIngredients(response.data.ingredients);
          setCocktails([]);
        } catch (error) {
          console.error("Error: ", error);
        }
      } else if (queryType === "2a") {
        try {
          const response = await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${queryInput}`
          );
          setCocktails(response.data.drinks);
          setIngredients([]);
        } catch (error) {
          console.error("Error: ", error);
        }
      } else if (queryType === "2b") {
        try {
          const response = await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${queryInput}`
          );
          setIngredients(response.data.ingredients);
          setCocktails([]);
        } catch (error) {
          console.error("Error: ", error);
        }
      } else if (queryType === "3a") {
        try {
          const response = await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${queryInput}`
          );
          setCocktails(response.data.drinks);
          setIngredients([]);
        } catch (error) {
          console.error("Error: ", error);
        }
      } else if (queryType === "3b") {
        try {
          const response = await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${queryInput}`
          );
          setCocktails(response.data.drinks);
          setIngredients([]);
        } catch (error) {
          console.error("Error: ", error);
        }
      } else if (queryType === "3c") {
        try {
          const response = await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${queryInput}`
          );
          setCocktails(response.data.drinks);
          setIngredients([]);
        } catch (error) {
          console.error("Error: ", error);
        }
      }
    };

    getData();
  }, [queryType, queryInput]);

  const handleSearchType = (searchType, searchInput) => {
    setQueryType(searchType);
    setQueryInput(searchInput);
  };

  const getRandom = async () => {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/random.php`
      );
      setCocktails(response.data.drinks);
      setIngredients([]);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="m-auto w-[500px]">
        <Search query={handleSearchType} onClick={getRandom} />
      </div>

      <main className="h-full overflow-x-auto p-5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        <div className="flex flex-wrap overflow-x-auto justify-around">
          {cocktails.length > 0 || ingredients.length > 0 ? (
            <div>
              <CardContainer cocktails={cocktails} ingredients={ingredients} />
            </div>
          ) : (
            <div>
              {/* <CardContainer cocktails={cocktails} ingredients={ingredients} /> */}
              <p>Loading...</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
