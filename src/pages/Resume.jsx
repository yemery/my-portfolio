import TimeLine1 from "../components/Resume/TimeLine1";
import Badge from "../components/commons/Badge";
import { educationHistory, experience } from "/src/assets/data/sitedata.js";
const Resume = () => {
  return (
    <>
      <div>
        <h1 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
          Education
        </h1>

        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {educationHistory.map((education, index) => (
            <TimeLine1 key={index} {...education} />
          ))}
        </ol>
      </div>

      <div>
        <h1 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
          {" "}
          Experience
        </h1>
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {experience.map((experience, index) => (
            // <TimeLine key={index} {...education}  />
            <li className="mb-4 ms-4" key={index}>
              <div className="absolute w-3 h-3 bg-green-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-primary-500"></div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {experience.position}
              </h3>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {experience.company} | {experience.duration}
              </time>
              <p className="mb-4 text-base font-normal text-gray-600 dark:text-gray-400">
                {experience.description}
                <ol className="">
                  {experience.tasks.map((task, index) => (
                    <li key={index} className="">
                      - {task}
                    </li>
                  ))}
                </ol>
              </p>
              <ul className="list-none	flex gap-3 flex-wrap">
                {experience.tools.map((tool, index) => (
                  <li key={index} class="w-fit  ">
                    {" "}
                    <Badge content={tool} />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default Resume;
