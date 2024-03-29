const TimeLine1 = (props) => {
  return (
    <>
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-green-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-primary-500"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          {props.dates}
        </time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {props.school}
        </h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          {props.degree}
        </p>
      </li>
    </>
  );
};

export default TimeLine1;
