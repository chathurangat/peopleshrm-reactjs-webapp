import React, {Component} from 'react';
import './skills-expertise.css';

export class SkillsExpertise extends Component {

    render() {
        return (
            <div className="card-box">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card-box">
                            <h4 className="header-title m-t-0 m-b-20">Skills and Expertise</h4>
                            <p className="mb-1 mt-4 font-weight-bold text-muted">Input Tags</p>

                            <div className="tags-default">
                                <div className="bootstrap-tagsinput">
                                    <span className="tag label label-info">
                                        Amsterdam
                                        <span data-role="remove"></span>
                                    </span>
                                    <span className="tag label label-info">
                                        Washington
                                        <span data-role="remove"></span>
                                    </span>
                                    <span className="tag label label-info">
                                        Sydney
                                        <span data-role="remove"></span>
                                    </span>
                                    <span className="tag label label-info">
                                        Beijing
                                        <span data-role="remove">

                                        </span>
                                    </span>
                                    <span
                                        className="tag label label-info">Cairo<span data-role="remove"></span></span>
                                    <input type="text" placeholder=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group text-center m-b-0">
                        <button className="btn btn-primary waves-effect waves-light"
                                data-toggle="modal" data-target="#signup-modal"
                                type="button">
                            <i className="mdi mdi-plus"></i>
                            Add New Category
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}