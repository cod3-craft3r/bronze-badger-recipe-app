import React, { useState, useEffect } from "react";
import axios from "axios";

const Modal = (props) => {
  const [cocktailDetails, setCocktailDetails] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);

  useEffect(() => {
    const getCocktailDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${props.id}`
        );
        setCocktailDetails(response.data.drinks);
        // set ingredient lookup array to be empty if plan to add one
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    getCocktailDetails();
  }, []);

  useEffect(() => {
    if (cocktailDetails.length > 0) {
      let ings = [];
      let ing = "strIngredient";
      let i = 1;
      while (i <= 15) {
        ings.push(cocktailDetails[0][ing + i]);
        i++;
      }

      let measures = [];
      let measure = "strMeasure";
      i = 1;
      while (i <= 15) {
        measures.push(cocktailDetails[0][measure + i]);
        i++;
      }

      let nullIndexIngredient = ings.indexOf(null);
      let nullIndexMeasures = measures.indexOf(null);
      ings = ings.slice(0, nullIndexIngredient);
      measures = measures.slice(0, nullIndexMeasures);

      setIngredients(ings);
      setMeasures(measures);
    }
  }, [cocktailDetails]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 text-slate-900 dark:text-primary-text-light opacity-75"
        onClick={props.onConfirm}
      ></div>
      <div className="bg-secondary-color-light dark:bg-secondary-color-dark p-4 rounded-lg shadow-lg hover:drop-shadow-2xl dark:drop-shadow-darkMd dark:hover:drop-shadow-dark2xl transition-shadow duration-300 relative min-h-[300px] min-w-[300px] max-h-[500px] max-w-[500px]">
        <button
          className="absolute top-0 right-0 m-2 p-2 rounded-full text-slate-900 dark:text-primary-text-light hover:bg-secondary-bodyText"
          onClick={props.onConfirm}
        >
          <svg
            className="w-4 h-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 8.586L15.293 3.293a1 1 0 0 1 1.414 1.414L11.414 10l5.293 5.293a1 1 0 1 1-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L8.586 10 3.293 4.707A1 1 0 1 1 4.707 3.293L10 8.586z"
            />
          </svg>
        </button>
        {cocktailDetails.length > 0 ? (
          <div>
            <h2 className="mx-5 mb-5 mt-3 font-semibold text-3xl">
              {cocktailDetails[0].strDrink}
            </h2>
            <p className="mx-5">{cocktailDetails[0].strAlcoholic}</p>
            <p className="mx-5">{cocktailDetails[0].strCategory}</p>
            <table>
              <h3 className="font-medium mt-5 mx-5 text-xl">
                Ingredients required
              </h3>
              <tbody>
                <tr>
                  <td>
                    <ul className=" mx-12">
                      {ingredients.map((ingredient) => (
                        <li
                          key={Math.random().toString()}
                          className="list-disc"
                        >
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <ul className=" mx-12">
                      {measures.map((measure) => (
                        <li
                          key={Math.random().toString()}
                          className="list-none"
                        >
                          {measure}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <h3 className="font-medium mt-5 mx-5 text-xl">Instructions</h3>
            <div className="overflow-auto h-32 mb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
              <p className="mx-5">{cocktailDetails[0].strInstructions}</p>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Modal;
