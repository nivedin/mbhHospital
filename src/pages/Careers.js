import { Link } from "react-router-dom";
import careersList from "../util/careersList";

function Careers() {
  // let { id } = useParams();
  //console.log(id);

  return (
    <div className="careers">
      <div className="careersContainer">
        <h1>
          Start your Career with <strong>MBH.</strong>{" "}
        </h1>
        <div className="tableContainer" style={{ overflowX: "auto" }}>
          <table responsive>
            <thead>
              <tr>
                <th>No</th>
                <th>Title</th>
                <th>Qualification</th>
                <th>Experience</th>
                <th>Description</th>
                <th>Apply</th>
              </tr>
            </thead>
            <tbody>
              {careersList.map((career, i) => (
                <tr key={i}>
                  <td style={{ position: "relative" }}>
                    <span></span> {career.id}
                  </td>
                  <td>{career.title}</td>
                  <td>{career.qualification}</td>
                  <td>{career.experience}</td>
                  <td>{career.description}</td>
                  <td>
                    <Link to={career.applyLink}>Apply</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Careers;
