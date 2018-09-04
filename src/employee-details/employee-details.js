import React, {Component} from 'react';

export class EmployeeDetails extends Component {

    render() {
        return (
            <div className="content">
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-md-12">
                            <div className="card-box">
                                <h4 className="header-title m-t-0 m-b-30">Add New Employee</h4>
                                <p className="text-muted m-b-30 font-14">
                                    All the required/mandatory details are marked with <span
                                    className="text-danger">*</span>
                                </p>
                                <ul className="nav nav-tabs nav-justified">
                                    <li className="nav-item">
                                        <a href="#personal-information" data-toggle="tab" aria-expanded="true"
                                           className="nav-link active">
                                            <i className="fi-monitor mr-2"></i>Personal Details
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#employement-details" data-toggle="tab" aria-expanded="false"
                                           className="nav-link">
                                            <i className="fi-head mr-2"></i>Employment Details
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#work-experience-details" data-toggle="tab" aria-expanded="false"
                                           className="nav-link">
                                            <i className="fi-mail mr-2"></i>Work History
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#educational-details" data-toggle="tab" aria-expanded="false"
                                           className="nav-link">
                                            <i className="fi-head mr-2"></i>Education
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#skills-expertise-details" data-toggle="tab" aria-expanded="false"
                                           className="nav-link">
                                            <i className="fi-cog mr-2"></i>Skills
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="#language-proficiency-details" data-toggle="tab" aria-expanded="false"
                                           className="nav-link">
                                            <i className="fi-cog mr-2"></i>Languages
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="#dependency-details" data-toggle="tab" aria-expanded="false"
                                           className="nav-link">
                                            <i className="fi-cog mr-2"></i>Dependents
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="#emergency-contact-details" data-toggle="tab" aria-expanded="false"
                                           className="nav-link">
                                            <i className="fi-cog mr-2"></i>Emergency Contact
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content">

                                    {/*start personal information form*/}
                                    <div className="tab-pane show active" id="personal-information">

                                    </div>
                                    {/*end personal information form*/}


                                    {/*start employment details*/}
                                    <div className="tab-pane" id="employement-details">

                                    </div>
                                    {/*end employment details*/}


                                    {/*start educational details*/}
                                    <div className="tab-pane" id="educational-details">


                                    </div>
                                    {/*end educational details*/}


                                    {/*start work experience details*/}
                                    <div className="tab-pane" id="work-experience-details">


                                    </div>
                                    {/*end work experience details*/}


                                    {/*start skills and expertise details*/}
                                    <div className="tab-pane" id="skills-expertise-details">

                                    </div>
                                    {/*end skills and expertise details*/}


                                    {/*start language proficiency details*/}
                                    <div className="tab-pane" id="language-proficiency-details">

                                    </div>
                                    {/*end language proficiency details*/}


                                    {/*start dependency details*/}
                                    <div className="tab-pane" id="dependency-details">

                                    </div>
                                    {/*end dependency details*/}


                                    {/*start emergency details*/}
                                    <div className="tab-pane" id="emergency-contact-details">

                                    </div>
                                    {/*end emergency details*/}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}