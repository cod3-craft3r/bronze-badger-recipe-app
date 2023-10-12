import React from 'react';

export const Navbar = () => {

  return (
    <nav className="bg-primary-color-light dark:bg-primary-color-dark dark:text-secondary-color-dark  w-screen mb-auto flex items-center px-2 border-b-2 dark:border-secondary-color-dark border-secondary-color-light">
        <a className='flex mr-auto items-center hover:text-primary-text-light transition-colors duration-300' href='/'>
            <img className=' px-2 w-16 h-16' src='/drink.svg' alt='logo'/>
            <h2 className='text-2xl font-Marker'>Badger Cocktails</h2>
        </a>
        {/* <div className='m-auto w-[500px]'>
          <Search  query={handleSearchType} onClick={getRandom} />
        </div> */}
    </nav>
  )
}