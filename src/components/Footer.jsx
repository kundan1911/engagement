import React from "react";

/**
 * Footer Component
 * Displays a footer with a link to the developer's LinkedIn profile.
 *
 * @returns {JSX.Element} Rendered Footer component.
 */
const Footer = () => {
  return (
    <footer className="bottom-0 bg-gray-50 shadow flex items-center justify-center p-4 w-full dark:bg-gray-800">
      <p className="text-sm text-center text-gray-500 dark:text-gray-400">
        Designed & Developed by{" "}
        <a
          href="https://www.linkedin.com/in/shahzada-s/"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Team Unemployed
        </a>
      </p>
    </footer>
  );
};

export default Footer;
