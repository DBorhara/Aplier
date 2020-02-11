import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

//components
import CompanyForm from './components/Auth/Signup/CompanySignup/CompanySignup';
import CandidateForm from './components/Auth/Signup/CandidateSignup/CandidateSignup';
// import NewPositionForm from './components/forms/NewPositionForm'
import LandingPage from './components/LandingPage';
//Auth
//Signup
import SignupSelector from './components/Auth/Signup/SignUpSelector';

//Login
import LoginSelector from './components//Auth/Login/LoginSelector/LoginSelector';
import UserLogin from './components/Auth/Login/UserLogin/UserLogin';
import CandidateLogin from './components/Auth/Login/CandidateLogin/CandidateLogin';

//CandidatePages
import Candidates from './components/candidate/Candidate';
import Companies from './components/company/Companies';

//CompanyPages
import CompanyAccount from './components/company/CompanyAccountView';
import NewPositionForm from './components/NewPositionSignup/NewPositionForm';
import CandidateAccount from './components/candidate/CandidateAccountView';
import CompanyPositions from './components/company/CompanyPositions';
import CompanyMatch from './components/company/CompanyMatch'
import ScreeningQuestions from './components/candidate/ScreeningQuestions';
import ScreeningConfirmation from './components/candidate/ScreeningConfirmation'

class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSignedUp: true,
      candidateSignedUp: true,
    };
  }

  handleCandidateToggle = () => {
    const { candidateSignedUp } = this.state;
    this.setState({
      candidateSignedUp: !candidateSignedUp,
    });
  };

  render() {
    // const { candidateSignedUp, userSignedUp } = this.state;

    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/signup" component={SignupSelector} />
        <Route path="/login" component={LoginSelector} />
        <Route path="/candidates" component={Candidates} />
        <Route path="/companysignup" component={CompanyForm} />
        <Route path="/newposition" component={NewPositionForm} />
        <Route path="/positions" component={CompanyPositions} />
        <Route path="/candidatesignup" component={CandidateForm} />
        <Route path="/userlogin" component={UserLogin} />
        <Route path="/candidatelogin" component={CandidateLogin} />
        <Route path="/positions" component={CompanyPositions} />
        <Route path="/companies" component={Companies} />
        <Route path="/companymatches" component={CompanyMatch} />
        <Route path="/screening" component={ScreeningQuestions} />
        <Route path="/screeningconfirmation" component={ScreeningConfirmation} />
        <Route path="/myaccount" component={CandidateAccount} />
        <Route path="/companyaccount" component={CompanyAccount} />

        {/*{userSignedUp && (*/}
         {/* <Fragment>
           <Route path="/candidates" component={Candidates} />
           <Route path="/newposition" component={NewPositionForm} />
           <Route path="/positions" component={CompanyPositions} />
         </Fragment> */}
        {/*)}*/}
        {/* {candidateSignedUp && (*/}
       {/* <Fragment>
           <Route
             path="/candidateAccount/:id"
            component={CandidateAccountView}
          />
         <Route path="/positions" component={CompanyPositions} />
         <Route path="/companies" component={Companies} />
          {/* <Route exact path="/companies" component={Companies} /> */}
        {/* </Fragment> */}

      </Switch>
    )
  }
}

export default Router;
