import { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [values, setValues] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isFormSubmited, setSubmited] = useState(false);

  const { name, phoneNumber, email, subject, message } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    let emailData = {
      name: name,
      phoneNumber: phoneNumber,
      email: email,
      subject: subject,
      message: message,
    };
    console.log(emailData);
    ////new////
    // const data = {
    //   service_id: "gmail",
    //   template_id: "template_3x9s8cr",
    //   user_id: "user_GVZ6fF8KzeSjL0wqYtwKR",
    //   template_params: emailData,
    // };

    // fetch("https://api.emailjs.com/api/v1.0/email/send", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    //   body: JSON.stringify(data),
    // }).then(
    //   (result) => {
    //     console.log(result.text);
    //   },
    //   (error) => {
    //     console.log(error.text);
    //   }
    // );

    ////new////
    window.scrollTo(0, 0);
    setSubmited(true);
  };

  return (
    <div className="appointment">
      <div className="appointmentSection">
        {!isFormSubmited && (
          <h1>
            <span>Contact</span> Us
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
                <label htmlFor="name">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
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
                <label htmlFor="name">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={subject}
                  required
                  onChange={(e) =>
                    setValues({ ...values, subject: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="name">Message</label>
                <textarea
                  type="text"
                  name="message"
                  value={message}
                  required
                  onChange={(e) =>
                    setValues({ ...values, message: e.target.value })
                  }
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          ) : (
            <div className="formSubmited">
              <h1>Contact Form Succesfully Sent !</h1>
              <div className="bookingSummary">
                <h3>Booking Summary</h3>
                <div className="bookingDetails">
                  <div className="rowDiv">
                    <div>
                      <span>Name : </span>
                      <span>{name}</span>
                    </div>
                    <div>
                      <span>Email : </span>
                      <span>{email}</span>
                    </div>
                  </div>
                  <div className="rowDiv">
                    <div>
                      <span>Phone Number : </span>
                      <span>{phoneNumber}</span>
                    </div>
                    <div>
                      <span>Subject</span>
                      <span>{subject}</span>
                    </div>
                  </div>
                  <div className="rowDiv">
                    <div>
                      <span>Message : </span>
                      <span>{message}</span>
                    </div>
                    {/* <div>
                      <span>Phone : </span>
                      <span>{phoneNumber}</span>
                    </div> */}
                  </div>
                  {/* <div className="rowDiv">
                    <div>
                      <span>Email : </span>
                      <span>{email}</span>
                    </div>
                  </div> */}
                </div>
              </div>
              <Link
                to="/contact"
                className="makeAnotherAptBtn"
                onClick={() => {
                  setSubmited(false);
                  setValues("");
                }}
              >
                Go Back
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

export default Contact;
