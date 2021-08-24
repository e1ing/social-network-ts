import React from "react";
import ProfileStatus from "./ProfileStatus";
import {create} from "domain";


 describe ("Profile component", ()=> {
     test ("status from props should be in the state", () => {
         const component = create(<ProfileStatus status="it-kamasutra.com"/>);
         const instance = component.getInstance();

         expect(instance.state.text).toBe("it-kamasutra.com")
     });


    test ("after creation <span> should be diplayed", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com"/>);
    const root = component.root;
    let span = root.findByType("span");
    expect(span.length).not.toBeNull();
});

test ("after creation <span> should be diplayed with correct status", () => {
    const component = create(<ProfileStatus status="it-kamasutra.com"/>);
const root = component.root;
let span = root.findByType("span");
expect(span.children[0]).toBe( "it-kamasutra.com");
});

     test ("after creation <input> should be diplayed", () => {
         const component = create(<ProfileStatus status="it-kamasutra.com"/>);
         const root = component.root;
         let span = root.findByType("input");
         expect(span.length).not.toBeNull();
     });


     test ("input should be diplayed in editMode instead of span", () => {
         const component = create(<ProfileStatus status="it-kamasutra.com"/>);
         const root = component.root;
         let span = root.findByType("span");
         span.props.onDoubleClick();
         let input = root.findByType("input");
         expect(input.props.value).toBe("it-kamasutra.com")
     });


 })
