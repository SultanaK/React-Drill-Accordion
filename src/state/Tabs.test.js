import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './Tabs';
//import renderer from 'react-test-renderer';
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";


describe(`Tabs Component`, () => {
  // array of objects, each with a name and content
  const tabsProp = [
    {
      name: "First tab",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.",
    },
    {
      name: "Second tab",
      content:
        "Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "Third tab",
      content:
        "Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.",
    },
  ];

  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Tabs />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

   it("renders empty given no Accordion", () => {
    const wrapper =shallow(<Tabs />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

   it("renders the no section by default", () => {
    const wrapper = shallow (<Tabs tabs={tabsProp} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  }); 
  
  it('opens any clicked section ', () => {
    const wrapper = shallow (<Tabs tabs={tabsProp} />)
  wrapper.find('button').at(1).simulate('click')
  expect(toJson(wrapper)).toMatchSnapshot()
  });

});
