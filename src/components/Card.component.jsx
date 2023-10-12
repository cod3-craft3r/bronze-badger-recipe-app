import React from 'react'

export const Card = (props) => {
  return (
    <div className='m-3 p-5 flex flex-col bg-slate-50 dark:bg-cardBg w-72 h-80 rounded-lg drop-shadow-md hover:drop-shadow-2xl dark:drop-shadow-darkMd dark:hover:drop-shadow-dark2xl transition-shadow duration-300' {...props}>
      <img className='h-3/5 rounded-md bg-secondary-color-light dark:bg-secondary-color-dark' src={`${props.img ? props.img : '/cocktail.svg'}`}/>
      <div className=' overflow-y-auto flex flex-col'>
        <h2 className='font-Marker text-2xl font-bold text-primary-color-light dark:text-secondary-color-dark'>{props.name}</h2>
        <p className='overflow-y-auto text-ellipsis text-slate-900 dark:text-primary-text-light'>{props.tags}</p>
        <p className='overflow-y-auto text-ellipsis text-slate-900 dark:text-primary-text-light'>{props.alcohol}</p>
      </div>
    </div>
  )
}
