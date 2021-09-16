
import React, {ChangeEvent, FC, useEffect, useState} from 'react';



const ProfileStatusWithHooks: FC<ProfileStatusPropsType> = ({status, updateStatus}) => {

    const [editMode, setEditMode] = useState(false)
    const [statusLoc, setStatusLoc] = useState(status)

    useEffect(() => {
        setStatusLoc(status)
    }, [])


    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
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
               <b>Status: </b> <span onDoubleClick={activateEditMode}>{status || "----"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                       value={status}/>
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}