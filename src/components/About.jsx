
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AlumniRegistration() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <h2 className="mb-3 text-center">Alumni Registration</h2>
              <p className="text-muted text-center mb-4">
                Babu Lal Badamiya Devi Institute of Health, Ranchi
              </p>

              <p>
                Babu Lal Badamiya Devi Institute of Health, Ranchi values its alumni as an
                integral part of the institution’s growth and legacy. The Alumni
                Registration platform is designed to maintain lifelong connections
                with former students and to build a strong and active alumni network.
              </p>

              <h5 className="mt-4">Objectives of Alumni Registration</h5>
              <ul className="list-group list-group-flush mt-2">
                <li className="list-group-item">To stay connected with former students of the institute</li>
                <li className="list-group-item">To strengthen the alumni network and encourage collaboration</li>
                <li className="list-group-item">To promote mentoring, experience sharing, and career guidance</li>
                <li className="list-group-item">To share information about alumni meets, events, and seminars</li>
                <li className="list-group-item">To involve alumni in the academic and social development of the institute</li>
              </ul>

              <div className="alert alert-info mt-4">
                <strong>Eligibility:</strong> All students who have successfully completed
                their studies from the institute are eligible to register as alumni.
              </div>

              <div className="text-center mt-4">
                <button className="btn btn-primary px-4">Register as Alumni</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}