import React from 'react';

export const IngredientCard = (props) => {
  const {name,img,type,alcohol} = props
  return (
    <div className='m-3 p-5 flex flex-col bg-slate-50 dark:bg-secondary-color-dark w-72 h-96 rounded-lg drop-shadow-md hover:drop-shadow-2xl dark:drop-shadow-darkMd dark:hover:drop-shadow-dark2xl transition-shadow duration-300' {...props}>
      <img className='h-3/5 rounded-md bg-primary-color-light dark:bg-primary-color-dark' src={`${img ? img : '/cocktail.svg'}`}/>
      <div className=' overflow-y-auto flex flex-col'>
        <h2 className='mt-2 font-Marker text-xl font-bold text-primary-color-dark dark:text-secondary-color-light'>{name}</h2>
        <p className='overflow-y-auto text-ellipsis text-slate-900 dark:text-primary-text-light'>{alcohol === 'Yes' ? 'Alcoholic' : 'Non-alcoholic'}</p>
        <p className='overflow-y-auto text-ellipsis text-slate-900 dark:text-primary-text-light'>{type}</p>
      </div>
    </div>
  )
}