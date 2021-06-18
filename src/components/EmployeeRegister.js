import React, { Component,useState } from "react";
import  EmployeeService  from "../services/EmployeeService";
import {Modal,Button,Alert}   from "react-bootstrap";
import '../MyCss.css'
import styled ,{keyframes} from 'styled-components';
import {bounce,fadeIn} from 'react-animations';

const Bounce =styled.div`animation: 2s ${keyframes `${fadeIn}`} `;
export default class EmployeeRegister extends Component {
    state={
        empName:"",
         empSal:"",
        empDept:"",
        loading:false,
        message:"",
          style:{backgroundColor:"white",textAlign:"center",display:"none"}
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
                message:response.data,
               style:{ backgroundColor:"white",textAlign:"center",display:"inline"}
            })}).catch(err=>{
                console.log(err);                
                this.setState({loading:false});
            });
        };
     
    


    loadOrShowMsg=()=>{
        if(this.state.loading)
        return <p style={{backgroundColor:"white"}}>Loading..</p>
        else
        {   
          //  return <div className="alert aler-success" style={this.state.style}> {this.state.message}</div>
         
         
        //  if(this.state.message)
        //  document.body.style.opacity = "0.8";
        //   else
         //  document.body.style.opacity = "1";
          return ( this.state.message && <Bounce> <Modal.Dialog style={{marginTop: "-343px"}}>
              
            <Modal.Header  style={{backgroundColor:"#C19A6B",opacity:"1"}} >
              <Modal.Title>Alert!</Modal.Title>
            </Modal.Header>
          
            <Modal.Body style={{ opacity: "1",backgroundColor:"#C19A6B"}}>
              <p>{this.state.message}</p>
            </Modal.Body>
          
            <Modal.Footer style={{backgroundColor:"#C19A6B"}}>
              <Button style={{backgroundColor:"red"}} onClick={()=>{this.setState(
                                                  {message:null, 
                                                   empName:"",
                                                   empSal:"",
                                                   empDept:"",
                                                   loading:false}
                                                 )
                                   }
                             } variant="secondary">Close </Button>

            </Modal.Footer>
          </Modal.Dialog>
          </Bounce>
          
          )


      
        
        
        
        
        }
       
    };
    render() {
        return (
            <div className="container" >
            <div className="row">
                <div className="col-lg-3 col-md-2"></div>
                <div className="col-lg-6 col-md-8 login-box" style={{marginTop: "40px",opacity:"0.9"}}>
                  
                    <div className="col-lg-12 login-title" style={{textShadow: "2px 2px 8px #FF0000"}}>
                        EMPLOYEE REGISTRATION
                    </div>
    
                    <div className="col-lg-12 login-form">
                        <div className="col-lg-12 login-form">
                            <form onSubmit={e=>this.submitData(e)}>
                                <div className="form-group">
                                    <label className="form-control-label " style={{color:"white",backgroundColor:"blue"}}>NAME</label>
                                    <input type="text" placeholder="Enter Name" className="form-control"  name="empName"  value={this.state.empName} onChange={e=>this.changeData(e)} autoComplete="off"/>
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label" style={{color:"white",backgroundColor:"blue"}}>SALARY</label>
                                    <input type="number" placeholder="Enter Salary" className="form-control" name="empSal"  value={this.state.empSal} onChange={e=>this.changeData(e)} />
                                </div>


                                <div className="form-group">
                                    <label className="form-control-label" style={{color:"white",backgroundColor:"blue"}}>DEPARTMENT</label>
                                    <input type="text"  placeholder="Enter Department" className="form-control" name="empDept"  value={this.state.empDept} onChange={e=>this.changeData(e)} />
                                </div>
    
                                <div className="col-lg-12 loginbttm">
                                    <div className="col-lg-6 login-btm login-text">
                                     
                                    </div>
                                    <div className="col-lg-6 login-btm login-button" >
                                        <button  type="submit" className="btn btn-outline-primary">Register</button>
                                    </div>
                                </div>
                            </form>
                           
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2"></div>
                </div>
<br/>
                {this.loadOrShowMsg()}
            </div>
    
    
            </div>
               
        );
    }
}




