import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary-color-light dark:bg-primary-color-dark py-5 w-screen mt-auto border-t-2 dark:border-secondary-color-dark border-secondary-color-light">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-primary-text-light dark:text-primary-text-dark mx-4">
              To <b>Hack Weekly</b>
            </p>
          </div>
          <div>
            <p className="text-primary-text-light dark:text-primary-text-dark mx-4">Made by Bronze Badger</p>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
