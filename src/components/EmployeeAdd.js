import React, { Component } from "react";
import  EmployeeService  from "../services/EmployeeService";

export default class EmployeeAdd extends Component {
    state={
        empName:"",
        empSal:"",
        empDept:"",
        loading:false,
        message:""
    };
  

    changeData=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    };



    submitData=(e)=>{
        e.preventDefault();
        const empName=this.state.empName;
        const empSal=this.state.empSal;
        const empDept=this.state.empDept;

        const data={empName,empSal,empDept};


        this.setState({loading:true});
        EmployeeService.saveEmployee(data).then(response=>{
            console.log(response);
            this.setState({
                loading:false,
                message:response.data
            })}).catch(err=>{
                console.log(err);                
                this.setState({loading:false});
            });
        };
     
    


    loadOrShowMsg=()=>{
        if(this.state.loading)
        return <p>Loading..</p>
        else
        {return <p> {this.state.message}</p> }
       
    };
    render() {
        return (
            <div className="App">
                  <h3>Register Employee</h3>
                  <br/>
           <form  onSubmit={e=>this.submitData(e)}>
           <div className="form-row">
           <div className="form-group col-sm-offset-3">
             <b>  <label>Name:</label></b>
<input className="form-control" placeholder="Enter Name" name="empName"  value={this.state.empName} onChange={e=>this.changeData(e)} /> <br/><br/>
             </div>
             </div>

             <div className="form-row">
             <div className="form-group col-sm-offset-3">
              <b> <label>Salary:</label></b>
<input className="form-control" type="number" placeholder="Enter Salary" name="empSal"  value={this.state.empSal} onChange={e=>this.changeData(e)} /><br/><br/>
</div>
             </div>
    
<div className="form-row">
<div className="form-group col-sm-offset-3">
     <b><label>Department:</label></b>
<input className="form-control" placeholder="Enter Department" name="empDept"  value={this.state.empDept} onChange={e=>this.changeData(e)} /><br/><br/>

</div>
             </div>
{//<button    onClick={(e)=>this.onSubmit(e)}>Submit</button>
    }
    <br/>
<input className="btn btn-info" type="submit"/>




           </form>

{this.loadOrShowMsg()}
</div>
               
        );
    }
}