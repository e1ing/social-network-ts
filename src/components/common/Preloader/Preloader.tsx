import loader from "../../../asserts/images/loader.gif";
import React, {FC} from "react";

export const Preloader: FC = () => {
    return (
    <div  style={{backgroundColor:"white"}}>
        <img src={loader}/>
    </div>
    )
}
