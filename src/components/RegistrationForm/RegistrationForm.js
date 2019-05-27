import React from 'react';

import './RegistrationForm.scss';

const initialState = {
    email:'',
};


class RegistrationForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = initialState;
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleEmailChange=this.handleEmailChange.bind(this);
    };

    handleSubmit(event){
        event.preventDefault();
        console.log('form is submitted. Email value is: ',this.state.email);
    }

    handleEmailChange(event){
        console.log('email was changed to: ',event.target.value);
        this.setState({email:event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
               <input
                    type={'text'}
                    placeholder={'e-mail'}
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    className={'email-field'}
               />
               <button type={'submit'}
                    className={'submit-button'}
               >Save</button>
            </form>

        );
    };
};

export default RegistrationForm;