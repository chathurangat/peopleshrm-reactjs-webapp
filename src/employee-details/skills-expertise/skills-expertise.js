import React, {Component} from 'react';
import './skills-expertise.css';

export class SkillsExpertise extends Component {

    state = {
        skills: [
            {
                name: 'skill 1',
            },
            {
                name: 'skill 2'
            },
            {
                name: 'skill 3'
            }
        ]
    };

    onSkillCreate = (e) => {
        if (e.key === 'Enter') {
            console.log(" on create [" + e.key + "] [" + e.target.value + "]");

            let skillToBeAdded = e.target.value;

            if (skillToBeAdded.trim() === '') {
                return;
            }

            let skillsList = this.state.skills;
            skillsList.push({name: skillToBeAdded});
            this.setState({skills: skillsList});

            //clear the last entered skill from the inout field
            //todo move with setting state
            e.target.value = '';
        }
    };


    onRemoveSkill = () => {
        console.log(" on close ");
    };

    render() {
        const skillsList = this.state.skills.map((skill) =>
            <span className="tag label label-info">
                {skill.name}
                <span data-role="remove" onClick={this.onRemoveSkill}/>
            </span>
        );

        return (
            <div className="card-box">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card-box">
                            <h4 className="header-title m-t-0 m-b-20">Skills and Expertise</h4>
                            <p className="mb-1 mt-4 font-weight-bold text-muted">Input Tags</p>

                            <div className="tags-default">
                                <div className="bootstrap-tagsinput">
                                    {skillsList}
                                    <input type="text" placeholder="Type here" onKeyPress={this.onSkillCreate}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group text-center m-b-0">
                        <button className="btn btn-primary waves-effect waves-light"
                                data-toggle="modal" data-target="#myModal"
                                type="button">
                            <i className="mdi mdi-plus"></i>
                            Add New Category
                        </button>
                    </div>
                </div>

                <div className="row">
                    <div className="modal" id="myModal">
                        <div className="modal-dialog">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h4 className="modal-title">Modal Heading</h4>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>

                                <div className="modal-body">
                                    Modal Body ...
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-12">
                        <div className="card-box">
                            <div id="signup-modal" className="modal fade" tabindex="-1" role="dialog"
                                 aria-labelledby="custom-width-modalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <h2 className="text-uppercase text-center m-b-30">
                                                <a href="index.html" className="text-success">
                                                        <span><img src="assets/images/logo.png" alt=""
                                                                   height="28"/></span>
                                                </a>
                                            </h2>

                                            <form className="form-horizontal" action="#">

                                                <div className="form-group m-b-25">
                                                    <div className="col-12">
                                                        <label for="username">Name</label>
                                                        <input className="form-control" type="email"
                                                               id="username" required=""
                                                               placeholder="Michael Zenaty"/>
                                                    </div>
                                                </div>

                                                <div className="form-group m-b-25">
                                                    <div className="col-12">
                                                        <label for="emailaddress">Email
                                                            address</label>
                                                        <input className="form-control" type="email"
                                                               id="emailaddress" required=""
                                                               placeholder="john@deo.com"/>
                                                    </div>
                                                </div>

                                                <div className="form-group m-b-25">
                                                    <div className="col-12">
                                                        <label for="password">Password</label>
                                                        <input className="form-control" type="password"
                                                               required="" id="password"
                                                               placeholder="Enter your password"/>
                                                    </div>
                                                </div>

                                                <div className="form-group m-b-20">
                                                    <div className="col-12">
                                                        <div className="checkbox checkbox-custom">
                                                            <input id="checkbox11" type="checkbox"
                                                                   checked/>
                                                            <label for="checkbox11">
                                                                I accept <a href="#">Terms and
                                                                Conditions</a>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group account-btn text-center m-t-10">
                                                    <div className="col-12">
                                                        <button
                                                            className="btn w-lg btn-rounded btn-primary waves-effect waves-light"
                                                            type="submit">Sign Up Free
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}