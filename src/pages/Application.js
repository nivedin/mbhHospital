import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function Application() {
  let { id } = useParams();
  const [values, setValues] = useState({
    name: "",
    phoneNumber: "",
    role: "",
  });
  const [isFormSubmited, setSubmited] = useState(false);

  useEffect(() => {
    setValues({ ...values, role: id });
  }, []);

  const { name, phoneNumber, role } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({
      name: "",
      phoneNumber: "",
      role: "",
    });
    setSubmited(true);
    console.log(values);
  };

  return (
    <div className="application">
      <div className="applicationContainer">
        {!isFormSubmited && <h1>Application</h1>}
        <div className="formContainer">
          {!isFormSubmited ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={name}
                  onChange={(e) =>
                    setValues({ ...values, name: e.target.value })
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
              <div className="form-group">
                <label htmlFor="name">Why should we hire you ?</label>
                <textarea type="text" name="reason" />
              </div>
              <input readOnly type="text" hidden value={role} />
              <button type="submit">Confirm Application</button>
            </form>
          ) : (
            <div className="formSubmited">
              <h1>Application Sent !</h1>
              <Link
                to="/careers"
                className="makeAnotherAptBtn"
                onClick={() => setSubmited(false)}
              >
                Apply for another
              </Link>
              <div className="returnBtns">
                <Link to="/">
                  <span> Return Home </span>
                </Link>
                <Link to="/contact">
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

export default Application;
