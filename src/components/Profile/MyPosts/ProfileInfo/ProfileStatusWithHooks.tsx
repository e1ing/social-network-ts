import React, {ChangeEvent, Component, FC, useState} from "react";

type ProfileStatusPropsType = {
    status: boolean
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks: FC<ProfileStatusPropsType> = (status, updateStatus) => {

    let [editMode, setEditMode] = useState(false);
    let [statusLoc, setStatusLoc] = useState(status);
    const activateMode = () => {
        setEditMode(true);
    }
    const deactivateMode = () => {
        setEditMode(false);
        updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatusLoc(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateMode}>{status || "---"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateMode}
                       value={status}/>
            </div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks;