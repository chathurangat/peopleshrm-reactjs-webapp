import React, {Component} from 'react';
import './App.css';
import './common/MainCss.js';
import LeftSidebar from "./left-sidebar/left-sidebar";
import TopNavbar from "./top-navbar/top-navbar";
import {EmployeeDetails} from "./employee-details/employee-details";


class App extends Component {


    state = {
        display: {
            visibility: 'hidden',
            opacity: 0
        }
    };

    notifier = () => {
        console.log(" click on notifier ");
        this.setState({display: {visibility: 'visible', opacity: 1}});
    };

    onClickNameHandler = () => {
        console.log(" click to change the name ");
        this.setState(
            {
                persons: [
                    {name: "Chathuranga -updated ", age: 33},
                    {name: "Darshana", age: 30}
                ]
            }
        );
    };


    render() {
        return (
            <div id="wrapper">

                <LeftSidebar/>

                <div className="content-page">

                    <TopNavbar/>

                    <EmployeeDetails/>

                </div>
            </div>
        );
    }
}

export default App;
