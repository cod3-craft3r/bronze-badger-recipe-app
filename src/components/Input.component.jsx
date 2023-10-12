import React from "react";

export const Input = (props) => {
  //size = sm|md|lg
  //variant = primary|secondary
  const { size, variant } = props;
  switch (variant) {
    case "primary":
      switch (size) {
        case "sm":
          return (
            <label htmlFor="search" className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#EBEBEB"
                class="pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 right-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <input
                className="inp-primary m-1 p-2 text-sm rounded-xl"
                {...props}
              />
            </label>
          );
        case "md":
          return (
            <label htmlFor="search" className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#EBEBEB"
                class="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 right-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <input
                className="inp-primary m-1 py-2 px-3 text-lg rounded-2xl"
                {...props}
              />
            </label>
          );
        case "lg":
          return (
            <label htmlFor="search" className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#EBEBEB"
                class="pointer-events-none w-10 h-10 absolute top-1/2 transform -translate-y-1/2 right-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <input
                className="inp-primary m-1 py-3 px-4 text-2xl rounded-3xl"
                {...props}
              />
            </label>
          );
        default:
          break;
      }
      break;
    case "secondary":
      switch (size) {
        case "sm":
          return (
            <label htmlFor="search" className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#EBEBEB"
                class="pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 right-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <input
                className="inp-secondary m-1 p-[6px] text-sm rounded-xl"
                {...props}
              />
            </label>
          );
        case "md":
          return (
            <label htmlFor="search" className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#EBEBEB"
                class="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 right-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <input
                className="inp-secondary m-1 py-[6px] px-[11px] text-lg rounded-2xl"
                {...props}
              />
            </label>
          );
        case "lg":
          return (
            <label htmlFor="search" className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#EBEBEB"
                class="pointer-events-none w-10 h-10 absolute top-1/2 transform -translate-y-1/2 right-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <input
                className="inp-secondary m-1 py-[11px] px-[15px] text-2xl rounded-3xl"
                {...props}
              />
            </label>
          );
        default:
          break;
      }
      break;

    default:
      break;
  }
};
