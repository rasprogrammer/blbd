// GrievanceCommittee.js
import 'bootstrap/dist/css/bootstrap.min.css';

export default function GrievanceCommittee() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <h2 className="mb-3 text-center">Grievance Committee</h2>
              <p className="text-muted text-center mb-4">
                Babu Lal Badamiya Devi Institute of Health, Ranchi
              </p>

              <p>
                The Grievance Committee of Babu Lal Badamiya Devi Institute of Health,
                Ranchi is constituted to provide a fair, transparent, and supportive
                environment for students, staff, and other stakeholders. The committee
                ensures that grievances are addressed promptly and impartially.
              </p>

              <h5 className="mt-4">Objectives of the Grievance Committee</h5>
              <ul className="list-group list-group-flush mt-2">
                <li className="list-group-item">To provide a platform for raising academic and administrative grievances</li>
                <li className="list-group-item">To ensure fair, unbiased, and timely resolution of complaints</li>
                <li className="list-group-item">To promote a harmonious and respectful campus environment</li>
                <li className="list-group-item">To safeguard the rights and dignity of students and staff</li>
                <li className="list-group-item">To maintain transparency and accountability in grievance redressal</li>
              </ul>

              <h5 className="mt-4">Grievance Redressal Process</h5>
              <ul className="list-group list-group-flush mt-2">
                <li className="list-group-item">Grievances may be submitted through the designated grievance mechanism</li>
                <li className="list-group-item">Each complaint is reviewed confidentially by the committee</li>
                <li className="list-group-item">Necessary action is taken after proper examination</li>
                <li className="list-group-item">The complainant is informed about the outcome in a timely manner</li>
              </ul>

              <div className="alert alert-warning mt-4">
                <strong>Note:</strong> All grievances are handled with strict confidentiality
                and sensitivity to ensure fairness and trust.
              </div>

              <div className="text-center mt-4">
                <button className="btn btn-danger px-4">Submit a Grievance</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
