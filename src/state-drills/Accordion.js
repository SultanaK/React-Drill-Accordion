import React from 'react';


class Accordions extends React.Component{
    static defaultProps = {
        sectionss: []
    };
    state = {
        activeSectionIndex: 0,
    };
    handleSetActiveSection = (sectionIndex) => {
        this.setState({
            activeSectionIndex: sectionIndex
        }); 
    };
    renderItem(section, idx, activeSectionIndex) {
            return (<li className = 'Accordion__item'
                key = {idx}>
                    <button type = 'button'
                    onClick = {() => this.handleSetActiveSection(idx)} >
                    { section.title} </button> 
                    {(activeSectionIndex === idx) && <p> {section.content} </p>} 
                </li>
                )
            }

    render() {
       const { activeSectionIndex} = this.state
       const {sections} = this.props
       return ( 
           <ul className ='Accordion'>{
               sections.map((section, idx) =>
                   this.renderItem(section, idx, activeSectionIndex)
               )
           } </ul>
       )
       }

    
}
export default Accordions;