import React from 'react';
import PropTypes from 'prop-types';


const initialState = {};


class Header extends React.Component {
    static propTypes={
        items:PropTypes.array,
    };

    constructor(props) {
        super(props)
        this.state = initialState;
    };


    render() {
        const menuItems = this.props.items;
        return (
            <div>
                {
                    menuItems.map((item,index)=>{
                        return <a href={item.link} key={index}>{item.label}</a>
                })
                }
            </div>

        );
    };
};

export default Header;