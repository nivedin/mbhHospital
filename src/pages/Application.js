import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

function Application() {
  let { id } = useParams();
  const [values, setValues] = useState({
    name: "",
    phoneNumber: "",
    role: "",
    description: "",
    resume: "",
  });
  const [isFormSubmited, setSubmited] = useState(false);

  useEffect(() => {
    setValues({ ...values, role: id });
  }, []);

  const { name, phoneNumber, role, description, resume } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    // toBase64(resume).then((dataUri) => {
    //   setValues({ ...values, resume: dataUri });
    // });
    // let emailData = {
    //   name: name,
    //   phoneNumber: phoneNumber,
    //   role: role,
    //   description: description,
    //   resume: resume,
    // };
    // console.log(emailData);
    ////new////
    // const data = {
    //   service_id: "gmail",
    //   template_id: "template_h7yv5wb",
    //   user_id: "user_GVZ6fF8KzeSjL0wqYtwKR",
    //   template_params: e.target,
    // };

    // fetch("https://api.emailjs.com/api/v1.0/email/send", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    //   body: data,
    // }).then(
    //   (result) => {
    //     console.log(result.text);
    //   },
    //   (error) => {
    //     console.log(error.text);
    //   }
    // );
    emailjs
      .sendForm(
        "gmail",
        "template_h7yv5wb",
        e.target,
        "user_GVZ6fF8KzeSjL0wqYtwKR"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.scrollTo(0, 0);
          setValues({
            name: "",
            phoneNumber: "",
            role: "",
          });
          setSubmited(true);
        },
        (error) => {
          alert(error.text);
        }
      );

    ////new////
  };

  return (
    <div className="application">
      <div className="applicationContainer">
        {!isFormSubmited && <h1>Application</h1>}
        <div className="formContainer">
          {!isFormSubmited ? (
            <form enctype="multipart/form-data" onSubmit={handleSubmit}>
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
              <div className="form-group">
                <label htmlFor="name">Upload Resume</label>
                <input
                  type="file"
                  name="resume"
                  onChange={(e) => {
                    setValues({ ...values, resume: e.target.files[0] });
                  }}
                />
                <small>Please upload file size less than 500kb.</small>
              </div>
              <input readOnly type="text" name="role" hidden value={role} />
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
