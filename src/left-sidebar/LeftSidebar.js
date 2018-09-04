import React, {Component} from 'react';

export default class LeftSidebar extends Component {

    state = {
        display: 'none'
    };


    show = () => {
        this.setState({display:'block'});
        console.log("display navigation bar item")
    };


    render() {
        return (
            <div className="left side-menu">
                <div className="slimscroll-menu" id="remove-scroll">
                    <div className="topbar-left">
                        <a href="index.html" className="logo">
                            <span>
                                <img src="http://coderthemes.com/highdmin/default/assets/images/logo.png" alt=""
                                     height="22"/>
                            </span>
                            <i>
                                <img src="http://coderthemes.com/highdmin/default/assets/images/logo_sm.png" alt=""
                                     height="28"/>
                            </i>
                        </a>
                    </div>

                    <div className="user-box">
                        <div className="user-img">
                            <img src="http://coderthemes.com/highdmin/default/assets/images/users/avatar-2.jpg"
                                 alt="user-img" title="Mat Helme"
                                 className="rounded-circle img-fluid"/>
                        </div>
                        <h5><a href="#">Chathuranga Tennakoon</a></h5>
                        <p className="text-muted">Senior Software Engineer</p>
                    </div>

                    <div id="sidebar-menu">

                        <ul className="metismenu" id="side-menu">
                            <li>
                                <a href="javascript: void(0);">
                                    <i className="fi-air-play"></i><span
                                    className="badge badge-danger badge-pill pull-right">New</span>
                                    <span> Home </span>
                                </a>
                            </li>

                            <li>
                                <a href="javascript: void(0);" onClick={this.show}>
                                    <i className="fi-layers" aria-expanded="false"></i>
                                    <span> Employee </span>
                                    <span className="menu-arrow"></span>
                                </a>
                                <ul className="nav-second-level" aria-expanded="false" style={this.state}>
                                    <li><a href="/employees/new">Add New</a></li>
                                    <li><a href="/employees/all">All Employees</a></li>
                                    <li><a href="#">Transfer</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="javascript: void(0);"><i className="fi-layers"></i> <span> Projects </span>
                                    <span
                                        className="menu-arrow"></span></a>
                                <ul className="nav-second-level" aria-expanded="false">
                                    <li><a href="#">All Projects </a></li>
                                    <li><a href="#">Task Board</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="javascript: void(0);"><i className="fi-layers"></i> <span> Attendance </span>
                                    <span
                                        className="menu-arrow"></span></a>
                            </li>

                            <li>
                                <a href="javascript: void(0);"><i className="fi-layers"></i>
                                    <span> Event Management </span>
                                    <span
                                        className="menu-arrow"></span></a>
                            </li>


                            <li>
                                <a href="javascript: void(0);"><i className="fi-layers"></i> <span> Performance </span>
                                    <span
                                        className="menu-arrow"></span></a>
                                <ul className="nav-second-level" aria-expanded="false">
                                    <li><a href="#">Disciplinary action</a></li>
                                    <li><a href="#">Progress</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="javascript: void(0);"><i className="fi-layers"></i> <span> Recruitment </span>
                                    <span
                                        className="menu-arrow"></span></a>
                            </li>

                            <li>
                                <a href="javascript: void(0);"><i className="fi-layers"></i> <span> Off-Board </span>
                                    <span
                                        className="menu-arrow"></span></a>
                            </li>


                            <li>
                                <a href="javascript: void(0);"><i className="fi-layers"></i> <span> Assets </span> <span
                                    className="menu-arrow"></span></a>
                            </li>


                            <li>
                                <a href="javascript: void(0);"><i className="fi-layers"></i> <span> Finance </span>
                                    <span
                                        className="menu-arrow"></span></a>

                                <ul className="nav-second-level" aria-expanded="false">
                                    <li><a href="#">Salary</a></li>
                                    <li><a href="#">Petty Cash</a></li>
                                </ul>

                            </li>


                            <li>
                                <a href="javascript: void(0);"><i className="fi-layers"></i> <span>Health</span> <span
                                    className="menu-arrow"></span></a>

                                <ul className="nav-second-level" aria-expanded="false">
                                    <li><a href="#">Insurance Plan</a></li>
                                    <li><a href="#">Reimbursement</a></li>
                                </ul>

                            </li>

                        </ul>

                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        );
    }
}