import { Outlet } from "react-router-dom";

const TimeLine = ({ title }) => {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
        {title}
      </h1>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <Outlet />
      </ol>
    </div>
  );
};

export default TimeLine;
