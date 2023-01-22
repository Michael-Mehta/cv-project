import React, {Component} from 'react';
import Overview from './components/Overview';
import Education from './components/Education';
import Work from './components/Work';
import uniqid from "uniqid";
import { useRef } from 'react';

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

    job: [],

    editId: 0
    

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

    this.setState({ editId: id }, () => {
  console.log(this.state.editId);
}); 
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

    this.setState({ editId: id }, () => {
      console.log(this.state.editId);
    }); 

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

    this.setState({ editId: id }, () => {
      console.log(this.state.editId);
    }); 

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




  
  
  

  if(this.state.editId){


    
    

    const editBackground = this.state.background.find((i) => i.id === this.state.editId);

    const editEducation = this.state.education.find((i) => i.id === this.state.editId);

    const editJob = this.state.job.find((i) => i.id === this.state.editId);

    
    



   if(editBackground)
   {
  

          this.state.background.map((t) => {
        if(t.id === editBackground.id)
        {
          console.log(t);

          if(this.state.info.text != "")
           {
           t.text = this.state.info.text;
           }
          if(this.state.moreInfo.text != "")
           {
           t.text = this.state.moreInfo.text;
           }
          if(this.state.evenMoreInfo.text != "")
           {
           t.text = this.state.evenMoreInfo.text;
           }
           
          
          console.log(t);
          
           
        }
      }
        )
    }

    if(editEducation)
    {

        this.state.education.map((t) => {
          if(t.id === editEducation.id)
          {
            console.log(t);
  
            if(this.state.schoolName.text != "")
            {
            t.text = this.state.schoolName.text;
            }
           if(this.state.studied.text != "")
            {
            t.text = this.state.studied.text;
            }
           if(this.state.date.text != "")
            {
            t.text = this.state.date.text;
            }
            
            console.log(t);
             
          }
        }
          )
      }

      if(editJob)
      {

          this.state.job.map((t) => {
            if(t.id === editJob.id)
            {
              console.log(t);
    
              if(this.state.companyName.text != "")
            {
            t.text = this.state.companyName.text;
            }
           if(this.state.position.text != "")
            {
            t.text = this.state.position.text;
            }
           if(this.state.jobTasks.text != "")
            {
            t.text = this.state.jobTasks.text;
            }
            if(this.state.workedDates.text != "")
            {
            t.text = this.state.workedDates.text;
            }

              
              console.log(t);
               
            }
          }
            )
        }
 
        
    
        this.setState({
          
      editId: 0,
      info: { text: ""}
    });

    

    this.setState({

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
    



    

    return;
  
  }

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

        

       {this.state.editId? "Update" : "Submit"}

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
