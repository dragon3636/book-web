import { useState } from 'react';

const List = () => {
  const [jobs, setJobs] = useState(() => {
    return localStorage.works ? JSON.parse(localStorage.works) : [];
  });
  const [job, setJob] = useState();
  const handleAddWork = (job) => {
    setJob('');
    setJobs((preValue) => {
      const newJob = [...preValue, job];
      localStorage.setItem('works', JSON.stringify(newJob));
      return newJob;
    });
  };
  return (
    <div className="p-3 flex-col gap-2 max-w-[320px] ">
      <div className="flex justify-between">
        <input
          type="text direc"
          name="work"
          id=""
          className="border border-slate-300"
          onChange={(e) => {
            setJob(e.target.value);
          }}
        />
        <button
          type="button"
          className=" px-3 py-1 inline-block bg-blue-200 border border-slate-400 rounded font-bold text-white"
          onClick={() => handleAddWork(job)}
        >
          Add Work
        </button>
      </div>
      <ul className="flex flex-col justify-between items-start">
        {jobs.length > 0 &&
          jobs.map((item, index) => (
            <li className="" key={index}>
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default List;
