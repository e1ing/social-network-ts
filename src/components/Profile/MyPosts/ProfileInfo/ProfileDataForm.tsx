import {ProfileType} from "../../../../api/api";
import React, {FC} from "react";
import {useFormik} from "formik";
import {saveProfile} from "../../../../redux/profile-reducer";
import {useDispatch} from "react-redux";
import s from "ProfileInfo.module.css"

type ProfileDataFormTypes = {
    profile: ProfileType | null
    isOwner: boolean
    goToEditMode: () => void
}
export const ProfileDataForm: FC<ProfileDataFormTypes> = ({profile, isOwner}) => {

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            fullName: '',
            lookingForAJob: true as boolean,
            skills: '',
            aboutMe: ''
        },
        onSubmit: values => {
           dispatch(saveProfile((values)))
        },
    })

    return <form onSubmit={formik.handleSubmit}>
        <div>
            <button onClick={() => {}}>save
            </button>
        </div>
        <div>
            <b> Full name </b>: <input placeholder="Full name"
                                       {...formik.getFieldProps('fullName')}/>

        </div>
        <div>
            <b> Looking for a job: </b> <input type="checkbox"
                                               {...formik.getFieldProps('lookingForAJob')}/>
        </div>

        {profile.lookingForAJob &&
        <div>
            <b>My professional skills:</b> <textarea {...formik.getFieldProps('skills')}/>
        </div>
        }

        <div>
            <b> About me:</b> <textarea {...formik.getFieldProps('aboutMe')}/>
        </div>
        <div>
            <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
            return <div className={s.contact}>
                <b>{key}: <input placeholder={key}
                                 {...formik.getFieldProps('')}
                /></b>
            </div>
        })}
        </div>
    </form>
}