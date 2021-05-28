import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function Application() {
  let { id } = useParams();
  const [values, setValues] = useState({
    name: "",
    phoneNumber: "",
    role: "",
    description: "",
  });
  const [isFormSubmited, setSubmited] = useState(false);

  useEffect(() => {
    setValues({ ...values, role: id });
  }, []);

  const { name, phoneNumber, role, description } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    let emailData = {
      name: name,
      phoneNumber: phoneNumber,
      role: role,
      description: description,
    };
    console.log(emailData);
    ////new////
    const data = {
      service_id: "gmail",
      template_id: "template_h7yv5wb",
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
    setValues({
      name: "",
      phoneNumber: "",
      role: "",
    });
    setSubmited(true);
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
                <textarea
                  type="text"
                  name="description"
                  value={description}
                  onChange={(e) =>
                    setValues({ ...values, description: e.target.value })
                  }
                />
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
                <div
                  onClick={() =>
                    window.scrollTo({
                      top: document.body.scrollHeight,
                      left: 0,
                      behavior: "smooth",
                    })
                  }
                >
                  <span>Contact Us </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Application;
