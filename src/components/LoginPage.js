import React, { Component } from 'react';
import '../MyCss.css'

export class LoginPage extends Component {

    render() {
        return (
            



            <div className="container" style={{opacity: "0.9"}}>
            <div className="row">
                <div className="col-lg-3 col-md-2"></div>
                <div className="col-lg-6 col-md-8 login-box" style={{marginTop: "40px"}}>
                  
                    <div className="col-lg-12 login-title" style={{textShadow: "2px 2px 8px #FF0000"}}>
                        ADMIN PANEL
                    </div>
    
                    <div className="col-lg-12 login-form">
                        <div className="col-lg-12 login-form">
                            <form>
                                <div className="form-group">
                                    <label className="form-control-label" style={{color:"white",backgroundColor:"blue"}}>USERNAME</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label" style={{color:"white",backgroundColor:"blue"}}>PASSWORD</label>
                                    <input type="password" className="form-control" i/>
                                </div>
    
                                <div className="col-lg-12 loginbttm">
                                    <div className="col-lg-6 login-btm login-text">
                                     
                                    </div>
                                    <div className="col-lg-6 login-btm login-button">
                                        <button type="submit" className="btn btn-outline-primary">LOGIN</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2"></div>
                </div>
            </div>
    
    
            </div>
    
    

                
            
        )
    };
};

export default LoginPage
