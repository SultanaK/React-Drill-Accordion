import React from 'react';
//import ReactDOM from 'react-dom';
import Accordion from './Accordion';
//import renderer from 'react-test-renderer';
import {
    shallow
} from "enzyme";
import toJson from "enzyme-to-json";
import Accordions from './Accordion';



describe(`Tabs Component`, () => {
    const sections = [{
            title: 'Section 1',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
            title: 'Section 2',
            content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
        },
        {
            title: 'Section 3',
            content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
        },
    ];
    
    it("renders empty given no tabs", () => {
        const wrapper = shallow(<Accordion /> );
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("renders the first tab by default", () => {
        const wrapper = shallow(<Accordion sections = {sections} />);
            expect(toJson(wrapper)).toMatchSnapshot();
                });

    it("closes the first tab and opens any clicked tab", () => {
         const wrapper = shallow(<Accordion sections = {sections} />)
             wrapper.find('button').at(1).simulate('click') 
             expect(toJson(wrapper)).toMatchSnapshot()
             });
    it("only open one Accordion at a time", () => {
            const wrapper = shallow(<Accordion sections = {sections} />)
                    wrapper.find('button').at(1).simulate('click')
                    wrapper.find('button').at(2).simulate('click')
                    expect(toJson(wrapper)).toMatchSnapshot()
                });

});