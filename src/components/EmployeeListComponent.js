import React, { Component } from 'react'
import  EmployeeService  from '../services/EmployeeService';


export class EmployeeListComponent extends Component {
constructor(props){
    super(props);
    this.state={
        employees:[],
        message:null
    }
}



componentDidMount(){
    this.getAllEmployees();
}


getAllEmployees(){
    EmployeeService.getAllEmployees().then(
        (response)=>{this.setState({employees:response.data})}
    );
}

deleteEmployee(id){
    console.log('employee'+id+' is deleted');
    EmployeeService.deleteEmployee(id).then(
        (response)=>{this.setState({message:response.data});
                     this.getAllEmployees();
    }
    );

    
}
    render() {
        return (
            <div>
             <h1 style={{textAlign: "center",color:"blue",textShadow: "2px 2px 8px #FF0000"}}> Employee List </h1>
                <table  className="table table-hover table-dark table-bordered table-sm" >
                    <thead>
                        <tr className="bg-info text-white">
                            <th style={{color:"white",backgroundColor:"blue"}}>Emp ID</th>
                            <th style={{color:"white",backgroundColor:"blue"}}>Emp Name</th>
                            <th style={{color:"white",backgroundColor:"blue"}}>Salary</th>
                            <th style={{color:"white",backgroundColor:"blue"}}>Department</th>
                            <th style={{color:"white",backgroundColor:"blue"}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
{ this.state.employees.map((emp)=>
                   ( <tr key="{emp.empId}">
                    
                            <td>{emp.empId}</td>
                            <td>{emp.empName}</td>
                            <td>{emp.empSal}</td>
                            <td>{emp.empDept}</td>
                            <td><button className="btn btn-danger" onClick={()=>this.deleteEmployee(emp.empId)}>DELETE</button></td>

                    </tr>)
                    )
    }
                    </tbody>

                    
                </table>
                { this.state.message  && (<div  style={{marginLeft: "282px",width: "50%",textAlign: "center"}}className="alert alert-danger">{this.state.message}</div>)}
            </div>
        )
    }
}

export default EmployeeListComponent
