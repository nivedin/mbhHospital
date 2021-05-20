import React, { useEffect, useState } from "react";
import departmenDoctors from "./departmentDoctors";

function Appointment() {
  //const [department, setDepartment] = useState("");
  const [doctors, setDoctors] = useState("");
  //   const [selectedDoctor, setSelectedDoctor] = useState("");
  const [values, setValues] = useState({
    name: "",
    department: "",
    doctor: "",
    date: "",
    phoneNumber: "",
  });

  const { name, department, doctor, date, phoneNumber } = values;

  useEffect(() => {
    departmenDoctors.forEach((departmenDoctor, i) => {
      if (departmenDoctor.department === "GENERAL MEDICINE DEPARTMENT") {
        setDoctors(departmenDoctor.doctors);
        setValues({ ...values, department: "GENERAL MEDICINE DEPARTMENT" });
      } else {
      }
    });
  }, []);

  //console.log(department, doctors);

  const handleDptChange = (e) => {
    // setDepartment(e.target.value);
    setValues({
      ...values,
      department: e.target.value,
    });
    departmenDoctors.forEach((departmenDoctor, i) => {
      if (departmenDoctor.department === e.target.value) {
        setDoctors(departmenDoctor.doctors);
      } else {
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("values", values);
  };

  return (
    <div className="appointment">
      <div className="appointmentSection">
        <h1>
          Make an <span>Appointment.</span>
        </h1>
        <div className="appointmentForm">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="department">Department</label>
              <select
                name="department"
                id="dpt"
                onChange={handleDptChange}
                value={department}
              >
                {departmenDoctors.map((departmenDoctor, i) => (
                  <option
                    value={departmenDoctor.department}
                    key={departmenDoctor.id}
                  >
                    {departmenDoctor.department}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="doctors">Select Doctor</label>
              <select
                name="doctors"
                id="doc"
                onChange={(e) =>
                  setValues({ ...values, doctor: e.target.value })
                }
                value={doctor}
              >
                {doctors ? (
                  doctors?.map((doctor, i) => (
                    <option value={doctor} key={i}>
                      {doctor}
                    </option>
                  ))
                ) : (
                  <option value="sdsd">Select Doctor</option>
                )}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="name">Select Date</label>
              <input
                type="date"
                name="date"
                min={new Date().toISOString().split("T")[0]}
                value={date}
                onChange={(e) => setValues({ ...values, date: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Phone Number</label>
              <input
                type="tel"
                name="phone_number"
                value={phoneNumber}
                onChange={(e) =>
                  setValues({ ...values, phoneNumber: e.target.value })
                }
              />
            </div>
            <button>Confirm Appointment</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
