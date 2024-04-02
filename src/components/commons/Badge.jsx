import React from "react";

const Badge = ({ content, color }) => {
  return (
    <span
      className={`bg-green-100 
      } text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-primary-500 dark:text-black`}
      style={{ backgroundColor: color }}
    >
      {content}
    </span>
  );
};

export default Badge;
