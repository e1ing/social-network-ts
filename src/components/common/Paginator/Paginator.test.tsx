import React from "react";
import {create} from "react-test-renderer";
import {Paginator} from "./Paginator";

describe("Paginator component tests", () => {
    test("pages count is 11 but should be showed only 10", ()=> {
        const component = create(<Paginator currentPage={1} pageSize={10} onPageChanged={() => {}} portionSize={10} totalItemsCount={100} />)
       const root = component.root;
        let spans = root.findAllByType("span");
        expect(spans.length).toBe(10);
    });

    test("if pages count is more then 10 button NEXT should be present", ()=> {
        const component = create(<Paginator  currentPage={1} pageSize={9} onPageChanged={() => {}} portionSize={10} totalItemsCount={100}/>);
        const root = component.root;
        let button = root.findAllByType("button");
        expect(button.length).toBe(1)
    })
})