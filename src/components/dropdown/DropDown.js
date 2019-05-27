import React from 'react';

class DropDown extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isOpened:false
        }
    }

    toggleState (){
        this.setState({
            isOpened: !this.state.isOpened
        })
    }

    render() {
        console.log(this.state.isOpened);
        let dropDownText;
        if(this.state.isOpened){
            dropDownText = <div>Dropdown Text in variable shown!</div>
        }
        return (
            <div onClick={this.toggleState.bind(this)}>
                <p>Click Me and see what happens</p>
                {dropDownText}
            </div>

        );
    };
};

export default DropDown;