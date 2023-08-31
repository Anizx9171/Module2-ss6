import React, { useState } from "react";

export default function Checkbox() {
  const listJobs = [
    {
      id: 0,
      job: "Job 1",
    },
    {
      id: 1,
      job: "Job 2",
    },
    {
      id: 2,
      job: "Job 3",
    },
    {
      id: 3,
      job: "Job 4",
    },
  ];
  const [job, setJobs] = useState([]);
  console.log(job);
  const handleCheck = (id) => {
    if (job.includes(id)) {
      setJobs(job.filter((job) => job !== id));
    } else {
      setJobs([...job, id]);
    }
  };
  return (
    <div>
      {listJobs.map((item) => (
        <div key={item.id}>
          <input
            type="checkbox"
            id={item.id}
            onChange={() => handleCheck(item.id)}
          />
          <label htmlFor={item.id}>{item.job}</label>
        </div>
      ))}
    </div>
  );
}
