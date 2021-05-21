import React, { useEffect, useState } from "react";
import departmenDoctors from "../util/departmentDoctors";

function Department() {
  const [doctors, setDoctors] = useState("");
  const [department, setDepartment] = useState("");
  useEffect(() => {
    departmenDoctors.forEach((departmenDoctor, i) => {
      if (departmenDoctor.department === "GENERAL MEDICINE DEPARTMENT") {
        setDoctors(departmenDoctor.doctors);
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
      } else {
      }
    });
  };

  console.log(doctors);
  return (
    <div className="department">
      <div className="departmentContainer">
        <h1>Our Departments</h1>
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
      </div>
    </div>
  );
}

export default Department;
