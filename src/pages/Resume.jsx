import TimeLine from '../templates/TimeLine';
import { educationHistory } from '/src/assets/data/sitedata.js';
// import TimeLine from "../components/Resume/TimeLine";
const Resume = () => {
  return (
    <>
     {/* <h1 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Education</h1> */}
    
{/* <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
    {educationHistory.map((education,index) => ( 
      <TimeLine key={index} {...education}  />
    ))} 
</ol> */}

<TimeLine title="Education" list={educationHistory} />
</>

  )
}

export default Resume