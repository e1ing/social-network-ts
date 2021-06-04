import React from "react";
import preloader from "../../../asserts/images/loader.gif";

let Preloader = (props: any) => {
    return <div style={{backgroundColor: 'white'}}>
        <img src={preloader}/>
    </div>
}
    export default Preloader;