import React from "react";

const Badge = ({ content }) => {
  return (
    <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-primary-500 dark:text-black">
      {content}
    </span>
  );
};

export default Badge;
