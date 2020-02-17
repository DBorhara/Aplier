import React from 'react';
import { Link } from 'react-router-dom';

const LoginSelector = props => (
  <div>
    <div className="candidateOrCompany">
      <br />
      <img
        className="circleCompany"
        src="data:image/png;base64,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"
        alt="companyImage"
      />
      <br />
      <h2>Log In</h2>
      <h3>Are you a/an?</h3>
      <div>
        <button className="customeButton">
          <Link to="/candidatelogin"> Candidate</Link>
        </button>
      </div>
      <br></br>
      <div>
        <button className="customeButton">
          <Link to="/userlogin">Employer </Link>
        </button>
      </div>
    </div>
  </div>
);

export default LoginSelector;
