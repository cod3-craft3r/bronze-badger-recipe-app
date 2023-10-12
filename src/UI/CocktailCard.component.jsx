import React from "react";

export const CocktailCard = ((props) => {
  const { name, img, alcohol, category, tags } = props;

  const clickHandler = () => {
    props.onClick(props.id);
  };

  return (
    <div
      className="m-3 p-5 flex flex-col bg-slate-50 dark:bg-cardBg w-72 h-96 rounded-lg drop-shadow-md hover:drop-shadow-2xl dark:drop-shadow-darkMd dark:hover:drop-shadow-dark2xl transition-shadow duration-300 cursor-pointer"
      onClick={clickHandler}
    >
      <img
        className="h-3/5 rounded-md bg-secondary-color-light dark:bg-secondary-color-dark"
        src={`${img ? img : "/cocktail.svg"}`}
      />
      <div className="overflow-y-auto flex flex-col">
        <h2 className="mt-2 font-Marker text-xl font-bold text-primary-color-light dark:text-secondary-color-dark">{name}</h2>
        <p className="overflow-y-auto text-ellipsis text-slate-900 dark:text-primary-text-light">{alcohol}</p>
        <p className="overflow-y-auto text-ellipsis text-slate-900 dark:text-primary-text-light">{category}</p>
        <div className="flex">
        <p className="mt-8 text-xs italic overflow-y-auto text-ellipsis text-slate-900 dark:text-primary-text-light">{tags}</p>
        </div>
      </div>
    </div>
  );
});

        