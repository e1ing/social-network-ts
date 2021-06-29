import React, {ChangeEvent, Component} from "react";

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

 class ProfileStatus extends Component <ProfileStatusPropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }


    activateEditMode=()=>{
        this.setState({
            editMode:true
        })
    }

    deactivateEditMode=()=>{
        this.setState({
            editMode:false
        });
        this.props.updateStatus(this.state.status);
    }

     onStatusChange = (e:ChangeEvent<HTMLInputElement>) =>{
         this.setState({
             status: e.currentTarget.value
         });
     }

     componentDidUpdate(prevProps, prevState) {
      if(prevProps.status!==this.props.stats)
       this.setState({status: this.props.status})
        let a = this.state
        let b = this.props
        console.log("")
     }

     render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{!this.props.status||"---"}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;