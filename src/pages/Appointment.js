import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import departmenDoctors from "../util/departmentDoctors";

function Appointment() {
  const [doctors, setDoctors] = useState("");
  const [values, setValues] = useState({
    name: "",
    department: "",
    doctor: "",
    date: "",
    phoneNumber: "",
  });
  const [isFormSubmited, setSubmited] = useState(false);

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

  const handleDptChange = (e) => {
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
    window.scrollTo(0, 0);
    setValues("");
    setSubmited(true);
    //console.log("values", values);
  };

  return (
    <div className="appointment">
      <div className="appointmentSection">
        {!isFormSubmited && (
          <h1>
            Make an <span>Appointment.</span>
          </h1>
        )}
        <div className="appointmentForm">
          {!isFormSubmited ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  required
                  onChange={(e) =>
                    setValues({ ...values, name: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="department">Department</label>
                <select
                  name="department"
                  id="dpt"
                  required
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
                  required
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
                  required
                  min={new Date().toISOString().split("T")[0]}
                  value={date}
                  onChange={(e) =>
                    setValues({ ...values, date: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Phone Number</label>
                <input
                  type="tel"
                  name="phone_number"
                  required
                  value={phoneNumber}
                  onChange={(e) =>
                    setValues({ ...values, phoneNumber: e.target.value })
                  }
                />
              </div>
              <button type="submit">Confirm Appointment</button>
            </form>
          ) : (
            <div className="formSubmited">
              <h1>Appointment Request Sent !</h1>
              <Link
                to="/appointment"
                className="makeAnotherAptBtn"
                onClick={() => setSubmited(false)}
              >
                Make another appointment
              </Link>
              <div className="returnBtns">
                <Link to="/">
                  <span> Return Home </span>
                </Link>
                <Link
                  onClick={() =>
                    window.scrollTo({
                      top: document.body.scrollHeight,
                      left: 0,
                      behavior: "smooth",
                    })
                  }
                >
                  <span>Contact Us </span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Appointment;
