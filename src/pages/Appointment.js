import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// import emailjs from "emailjs-com";
import departmenDoctors from "../util/departmentDoctors";

function Appointment() {
  const departmentRef = useRef(null);
  const doctorRef = useRef(null);
  const [doctors, setDoctors] = useState("");
  const [values, setValues] = useState({
    name: "",
    department: "",
    doctor: "",
    date: "",
    time: "",
    phoneNumber: "",
  });
  const [isFormSubmited, setSubmited] = useState(false);

  const { name, department, doctor, date, time, phoneNumber } = values;

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
    setValues({
      ...values,
      doctor: doctorRef.current.value,
      department: departmentRef.current.value,
    });

    let emailData = {
      name: name,
      doctor: doctorRef.current.value,
      department: department,
      date: date,
      time: time,
      phoneNumber: phoneNumber,
    };
    //console.log(emailData);
    ////new////
    const data = {
      service_id: "gmail",
      template_id: "template_3x9s8cr",
      user_id: "user_GVZ6fF8KzeSjL0wqYtwKR",
      template_params: emailData,
    };

    fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    ////new////
    window.scrollTo(0, 0);
    setSubmited(true);
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
                  ref={departmentRef}
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
                  name="doctor"
                  id="doc"
                  required
                  ref={doctorRef}
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
                <label htmlFor="name">Select Time</label>
                <input
                  type="time"
                  name="time"
                  required
                  value={time}
                  onChange={(e) =>
                    setValues({ ...values, time: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
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
              <div className="bookingSummary">
                <h3>Booking Summary</h3>
                <div className="bookingDetails">
                  <div className="rowDiv">
                    <div>
                      <span>Name : </span>
                      <span>{name}</span>
                    </div>
                    <div>
                      <span>Date : </span>
                      <span>{date}</span>
                    </div>
                  </div>
                  <div className="rowDiv">
                    <div>
                      <span>Department : </span>
                      <span>{department}</span>
                    </div>
                    <div>
                      <span>Time : </span>
                      <span>{time}</span>
                    </div>
                  </div>
                  <div className="rowDiv">
                    <div>
                      <span>Doctor : </span>
                      <span>{doctor}</span>
                    </div>
                    <div>
                      <span>Phone : </span>
                      <span>{phoneNumber}</span>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                to="/appointment"
                className="makeAnotherAptBtn"
                onClick={() => {
                  setSubmited(false);
                  setValues("");
                }}
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
