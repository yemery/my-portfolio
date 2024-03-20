const TimeLine = ({title,list}) => {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
        {title}
      </h1>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {list.map((e, index) => (
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {e.dates}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {e.school}
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {e.degree}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TimeLine;
