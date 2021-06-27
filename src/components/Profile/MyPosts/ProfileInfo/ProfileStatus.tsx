import React, { Component } from "react";

type ProfileStatusPropsType = {
    status: string
}

 class ProfileStatus extends Component <ProfileStatusPropsType> {
    state = {
        editMode: false
    }

    activateEditMode=()=>{
        this.setState({
            editMode:true
        })
    }

    deactivateEditMode=()=>{
        this.setState({
            editMode:false
        })
    }
    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deactivateEditMode.bind} value={this.props.status}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;