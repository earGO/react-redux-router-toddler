import React from 'react';
import Menu from "../Menu/Menu";
import '../../App.css';

class About extends React.Component {

    render() {
        return (
            <div className={'container'}>
                <Menu/>
                <p>The About smart component</p>
            </div>

        );
    };
};

export default About;