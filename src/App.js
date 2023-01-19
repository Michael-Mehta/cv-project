import React, {Component} from 'react';
import Overview from './components/Overview';
import Education from './components/Education';
import Work from './components/Work';
import uniqid from "uniqid";
import './App.css';

class App extends Component {

constructor(){


  super();


  this.state = {

    info: {text: '', id: uniqid()},

    moreInfo: {text: '', id: uniqid()},

    evenMoreInfo: {text: '', id: uniqid()},

    evenEvenMoreInfo: {text: '', id: uniqid()},

    schoolName: {text: '', id: uniqid()},

    studied: {text: '', id: uniqid()},

    date: {text: '', id: uniqid()},

    companyName: {text: '', id: uniqid()},

    position: {text: '', id: uniqid()},

    jobTasks: {text: '', id: uniqid()},

    workedDates: {text: '', id: uniqid()},



    background: [],

    education: [],

    job: []
    

  };

}

handleInfoChange = (e) => {

  this.setState({

    info : {

      text: e.target.value,
      id: this.state.info.id

    }

  });
};


handleMoreInfoChange = (e) => {

  this.setState({

    moreInfo : {

      text: e.target.value,
      id: this.state.moreInfo.id
      

    }

  });
};

handleEvenMoreInfoChange = (e) => {

  this.setState({

    evenMoreInfo : {

      text: e.target.value,
      id: this.state.evenMoreInfo.id
      

    }

  });
};

handleEvenEvenMoreInfoChange = (e) => {

  this.setState({

    evenEvenMoreInfo : {

      text: e.target.value,
      id: this.state.evenEvenMoreInfo.id
      

    }

  });
};

handleSchoolChange = (e) => {

  this.setState({

    schoolName : {

      text: e.target.value,
      id: this.state.schoolName.id

    }

  });
};


handleStudiedChange = (e) => {

  this.setState({

    studied : {

      text: e.target.value,
      id: this.state.studied.id

    }

  });
};


handleDateChange = (e) => {

  this.setState({

    date : {

      text: e.target.value,
      id: this.state.date.id

    }

  });
};


handleCompanyChange = (e) => {

  this.setState({

    companyName : {

      text: e.target.value,
      id: this.state.companyName.id

    }

  });
};

handlePositionChange = (e) => {

  this.setState({

    position : {

      text: e.target.value,
      id: this.state.position.id

    }

  });
};

handleJobTasksChange = (e) => {

  this.setState({

    jobTasks : {

      text: e.target.value,
      id: this.state.jobTasks.id


    }

  });
};

handleWorkedDatesChange = (e) => {

  this.setState({

    workedDates : {

      text: e.target.value,
      id: this.state.workedDates.id


    }

  });
};

handleEdit = (background, id) => {

  
 
  const editGeneral = background.find((i)=> i.id === id);

  

    if(editGeneral.id === background[0].id)
    {
      this.handleInfoEdit(background,id);
    }

    if(editGeneral.id === background[1].id)
    {
      this.handleMoreInfoEdit(background,id);
    }

    if(editGeneral.id === background[2].id)
    {
      this.handleEvenMoreInfoEdit(background,id);
    }

};

handleEducationEdit = (education, id) => {

  
 
  const editGeneral = education.find((i)=> i.id === id);

  

    if(editGeneral.id === education[0].id)
    {
      this.handleSchoolNameEdit(education,id);
    }

    if(editGeneral.id === education[1].id)
    {
      this.handleStudiedEdit(education,id);
    }

    if(editGeneral.id === education[2].id)
    {
      this.handleDateEdit(education, id);
    }

};


handleWorkEdit = (job, id) => {

  
 
  const editGeneral = job.find((i)=> i.id === id);

  

    if(editGeneral.id === job[0].id)
    {
      this.handleCompanyNameEdit(job,id);
    }

    if(editGeneral.id === job[1].id)
    {
      this.handlePositionEdit(job,id);
    }

    if(editGeneral.id === job[2].id)
    {
      this.handleJobTasksEdit(job,id);
    }

    if(editGeneral.id === job[3].id)
    {
      this.handleWorkedDatesEdit(job,id);
    }

};



handleInfoEdit = (background, id) => {

 
    const editGeneral = background.find((i)=> i.id === id);

      this.setState({

      info: {text: `${editGeneral.text}`}

    });
 
  };

  handleMoreInfoEdit = (background, id) => {

 
    const editGeneral = background.find((i)=> i.id === id);

      this.setState({

      moreInfo: {text: `${editGeneral.text}`}

    });

    console.log(background[0]);
 
  };

  handleEvenMoreInfoEdit = (background, id) => {

 
    const editGeneral = background.find((i)=> i.id === id);

      this.setState({

      evenMoreInfo: {text: `${editGeneral.text}`}

    });
 
  };

  handleSchoolNameEdit = (background, id) => {

 
    const editGeneral = background.find((i)=> i.id === id);

      this.setState({

      schoolName: {text: `${editGeneral.text}`}

    });
 
  };


  handleStudiedEdit = (background, id) => {

 
    const editGeneral = background.find((i)=> i.id === id);

      this.setState({

      studied: {text: `${editGeneral.text}`}

    });
 
  };


  handleDateEdit = (background, id) => {

 
    const editGeneral = background.find((i)=> i.id === id);

      this.setState({

      date: {text: `${editGeneral.text}`}

    });
 
  };

  handleCompanyNameEdit = (background, id) => {

 
    const editGeneral = background.find((i)=> i.id === id);

      this.setState({

      companyName: {text: `${editGeneral.text}`}

    });
 
  };

  handlePositionEdit = (background, id) => {

 
    const editGeneral = background.find((i)=> i.id === id);

      this.setState({

      position: {text: `${editGeneral.text}`}

    });
 
  };

  handleJobTasksEdit = (background, id) => {

 
    const editGeneral = background.find((i)=> i.id === id);

      this.setState({

      jobTasks: {text: `${editGeneral.text}`}

    });
 
  };


  handleWorkedDatesEdit = (background, id) => {

 
    const editGeneral = background.find((i)=> i.id === id);

      this.setState({

      workedDates: {text: `${editGeneral.text}`}

    });
 
  };



onSubmitTask = (e) => {


  e.preventDefault();

  this.setState({

    background: this.state.background.concat(this.state.info, this.state.moreInfo,
      this.state.evenMoreInfo),
    
    education: this.state.education.concat(this.state.schoolName, this.state.studied,
        this.state.date),
      
    job: this.state.job.concat(this.state.companyName, this.state.position, 
      this.state.jobTasks, this.state.workedDates),
    
    
    info: {text: '', id: uniqid()},

    moreInfo: {text: '', id: uniqid()},

    evenMoreInfo: {text: '', id: uniqid()},

    
    schoolName: {text: '', id: uniqid()},
  
    studied: {text: '', id: uniqid()},
  
    date: {text: '', id: uniqid()},


    companyName: {text: '', id: uniqid()},

    position: {text: '', id: uniqid()},

    jobTasks: {text: '', id: uniqid()},

    workedDates: {text: '', id: uniqid()}
  



    

  });

};









  render(){

    const {info, moreInfo, evenMoreInfo, schoolName, studied, date, companyName, position, jobTasks, 
      workedDates, background, education, job} = this.state;


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

     <br />

     <h1>Work Experience</h1>


     <label htmlFor="companyNameInput"> Company Name </label>

     <input onChange = {this.handleCompanyChange} value = {companyName.text} type = "text" id = "companyNameInput"/>

     <label htmlFor="positionInput"> Position </label>

     <input onChange = {this.handlePositionChange} value = {position.text} type = "text" id = "positionInput"/>


     <label htmlFor="jobTasksInput"> Job Tasks </label>

     <input onChange = {this.handleJobTasksChange} value = {jobTasks.text} type = "text" id = "jobTasksInput"/>


     <label htmlFor="workedDatesInput"> Worked Dates </label>

     <input onChange = {this.handleWorkedDatesChange} value = {workedDates.text} type = "text" id = "workedDatesInput"/>


     <br />
     <br />
     <br />


 
      <button type = "submit">

       Submit

      </button>

    </form>
    
    
    
    <Overview background = {background}
     handleEdit = {this.handleEdit}
    
    />
    <Education education = {education}
    handleEdit = {this.handleEducationEdit}
    />
    <Work work = {job}
    handleEdit = {this.handleWorkEdit}
    />
    

    </div>




    </div>


  );
  }

}

export default App;
