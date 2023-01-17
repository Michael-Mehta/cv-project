import React, {Component} from 'react';
import Overview from './components/Overview';
import Education from './components/Education';
import './App.css';

class App extends Component {

constructor(){


  super();


  this.state = {

    info: {text: ''},

    moreInfo: {text: ''},

    evenMoreInfo: {text: ''},

    evenEvenMoreInfo: {text: ''},

    schoolName: {text: ''},

    studied: {text: ''},

    date: {text: ''},

    companyName: {text: ''},

    position: {text: ''},

    jobTasks: {text: ''},

    workedDates: {text: ''},



    background: [],

    education: [],

    job: []
    

  };

}

handleInfoChange = (e) => {

  this.setState({

    info : {

      text: e.target.value,
      

    }

  });
};


handleMoreInfoChange = (e) => {

  this.setState({

    moreInfo : {

      text: e.target.value,
      

    }

  });
};

handleEvenMoreInfoChange = (e) => {

  this.setState({

    evenMoreInfo : {

      text: e.target.value,
      

    }

  });
};

handleEvenEvenMoreInfoChange = (e) => {

  this.setState({

    evenEvenMoreInfo : {

      text: e.target.value,
      

    }

  });
};

handleSchoolChange = (e) => {

  this.setState({

    schoolName : {

      text: e.target.value,
      

    }

  });
};


handleStudiedChange = (e) => {

  this.setState({

    studied : {

      text: e.target.value,
      

    }

  });
};


handleDateChange = (e) => {

  this.setState({

    date : {

      text: e.target.value,
      

    }

  });
};


onSubmitTask = (e) => {


  e.preventDefault();

  this.setState({

    background: this.state.background.concat(this.state.info, this.state.moreInfo,
      this.state.evenMoreInfo),
    
      education: this.state.education.concat(this.state.schoolName, this.state.studied,
        this.state.date),
      
    
    
    
    info: {text: ''},

    moreInfo: {text: ''},

    evenMoreInfo: {text: ''},

    
    schoolName: {text: ''},
  
    studied: {text: ''},
  
    date: {text: ''},
  



    

  });

};









  render(){

    const {info, moreInfo, evenMoreInfo, schoolName, studied, date, background, education} = this.state;


  return (
    

    <div> 

    <div>
      <h1> General Info</h1>

      <br />
          
    <form onSubmit = {this.onSubmitTask}>

      <label htmlFor="nameInput"> Name </label>

      <input onChange = {this.handleInfoChange} value = {info.text} type = "text" id = "nameInput"/>

      <label htmlFor="emailInput"> Email </label>

      <input onChange = {this.handleMoreInfoChange} value = {moreInfo.text} type = "text" id = "emailInput"/>


      <label htmlFor="phoneInput"> Phone Number </label>

      <input onChange = {this.handleEvenMoreInfoChange} value = {evenMoreInfo.text} type = "text" id = "phoneInput"/>

      <br />

      <h1>Education</h1>

      <label htmlFor="schoolNameInput"> School Name </label>

     <input onChange = {this.handleSchoolChange} value = {schoolName.text} type = "text" id = "schoolNameInput"/>

     <label htmlFor="studiedInput"> Studied </label>

     <input onChange = {this.handleStudiedChange} value = {studied.text} type = "text" id = "studiedInput"/>


     <label htmlFor="dateInput"> Date started </label>

     <input onChange = {this.handleDateChange} value = {date.text} type = "text" id = "dateInput"/>







      <button type = "submit">

        Add info

      </button>

    </form>

    <Overview background = {background} />
    <Education education = {education} />

    </div>

    <br />


    </div>


  );
  }

}

export default App;
