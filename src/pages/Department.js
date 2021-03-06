import React, { useEffect, useState } from "react";
import departmenDoctors from "../util/departmentDoctors";

function Department() {
  const [doctors, setDoctors] = useState("");
  const [department, setDepartment] = useState("");
  const [dptDesc, setDptDesc] = useState("");
  useEffect(() => {
    departmenDoctors.forEach((departmenDoctor) => {
      if (departmenDoctor.department === "GENERAL MEDICINE DEPARTMENT") {
        setDoctors(departmenDoctor.doctors);
        setDptDesc(departmenDoctor.description);
        setDepartment("GENERAL MEDICINE DEPARTMENT");
      } else {
      }
    });
  }, []);
  const handleDptChange = (e) => {
    setDepartment(e.target.value);
    departmenDoctors.forEach((departmenDoctor, i) => {
      if (departmenDoctor.department === e.target.value) {
        setDoctors(departmenDoctor.doctors);
        setDptDesc(departmenDoctor.description);
      } else {
      }
    });
  };

  //console.log(department, doctors, dptDesc);
  return (
    <div className="department">
      <div className="departmentContainer">
        <h1>
          Our <strong style={{ color: "#005ea4" }}>Departments</strong>{" "}
        </h1>
        <div className="doctorForm">
          <div className="form-group">
            <label htmlFor="selectDpt">Select Prefered Department</label>
            <select
              name="selectDpt"
              value={department}
              onChange={handleDptChange}
            >
              {departmenDoctors.map((department, i) => (
                <option value={department.department} key={department.id}>
                  {department.department}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="availableDoctors">
          <h3>Available Doctors</h3>
          <ul>
            {doctors ? (
              doctors.map((doctor, i) => <li key={i}>{doctor}</li>)
            ) : (
              <h4>No doctors available</h4>
            )}
          </ul>
        </div>
        <div className="departmentDesc">
          {dptDesc ? <p>{dptDesc}</p> : null}
        </div>
      </div>
    </div>
  );
}

export default Department;
