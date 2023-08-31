import React, { useEffect, useRef, useState } from "react";
let idGlob = null;
export default function Todo() {
  const [job, setJobs] = useState([]);
  const [value, setValue] = useState("");
  const inputRef = useRef();
  const jobs = JSON.parse(localStorage.getItem("jobs")) || [];

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const deleteJob = (id) => {
    let newJobList = jobs.filter((jb) => jb.id != id);
    localStorage.setItem("jobs", JSON.stringify(newJobList));
    setJobs(newJobList);
  };
  const addNewJob = () => {
    if (idGlob != null) {
      jobs[idGlob].title = value;
      localStorage.setItem("jobs", JSON.stringify(jobs));
      idGlob = null;
      setValue("");
      setJobs(jobs);
      return;
    }
    let newJob = {
      id: Math.round(Math.random() * 8999999) + 1000000,
      title: value,
      completed: false,
    };
    setValue("");
    setJobs([...jobs, newJob]);
    localStorage.setItem("jobs", JSON.stringify([...jobs, newJob]));
  };
  const handelCheck = (e) => {
    let jobIndex = jobs.findIndex((element) => element.id == e);
    jobs[jobIndex].completed = !jobs[jobIndex].completed;
    localStorage.setItem("jobs", JSON.stringify(jobs));
    setJobs(jobs);
  };
  const editJob = (id) => {
    inputRef.current.focus();
    let jobIndex = jobs.findIndex((element) => element.id == id);
    if (jobIndex > -1) {
      setValue(jobs[jobIndex].title);
      idGlob = jobIndex;
    }
  };
  return (
    <div>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div
            className="row d-flex justify-content-center align-items-center
              h-100"
          >
            <div className="col col-xl-10">
              <div className="card">
                <div className="card-body p-5">
                  <h3 style={{ textAlign: "center", marginBottom: 40 }}>
                    MINI PROJECT TODO LIST
                  </h3>
                  <form
                    className="d-flex justify-content-center
                              align-items-center mb-4"
                  >
                    <div className="form-outline flex-fill">
                      <input
                        type="text"
                        id="form2"
                        className="form-control"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        ref={inputRef}
                      />
                      <label className="form-label" htmlFor="form2">
                        Thêm công việc
                      </label>
                    </div>
                    <button
                      type="submit"
                      onClick={addNewJob}
                      className="btn btn-info ms-2"
                    >
                      Thêm
                    </button>
                  </form>
                  <ul
                    className="nav nav-tabs mb-4 pb-2"
                    id="ex1"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <a className="nav-link active">Tất cả công việc</a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane fade show active">
                      <ul className="list-group mb-0">
                        {jobs.map((e, i) => (
                          <li
                            key={i}
                            className="list-group-item d-flex
                                          align-items-center border-0 mb-2
                                          justify-content-between"
                            style={{ backgroundColor: "#f4f6f7" }}
                          >
                            <div>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                checked={e.completed}
                                onChange={() => handelCheck(e.id)}
                              />
                              <span
                                style={
                                  e.completed
                                    ? { textDecoration: "line-through" }
                                    : { textDecoration: "none" }
                                }
                              >
                                {e.title}
                              </span>
                            </div>
                            <div>
                              <a
                                href="#!"
                                className="text-info"
                                title="Sửa công việc"
                              >
                                <i
                                  className="fas fa-pencil-alt me-3"
                                  onClick={() => editJob(e.id)}
                                />
                              </a>
                              <a
                                href="#!"
                                className="text-danger"
                                title="Xóa công việc"
                              >
                                <i
                                  className="fas fa-trash-alt"
                                  onClick={() => deleteJob(e.id)}
                                />
                              </a>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
