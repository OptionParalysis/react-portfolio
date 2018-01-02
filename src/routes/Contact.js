import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
// import Form from '../components/form/form';
import './contact.css';

class Contact extends Component {

    // state = {
    //     fields: {},
    // };

    // onChange = updatedValue => {
    //     this.setState({ 
    //         fields: {
    //             ...this.state.fields,
    //             ...updatedValue 
    //         }
    //     });
    // }

    render(){
        return(
            <div className="one-col-center">
                <h1>Contact</h1>
                {/* <Form onChange={fields => this.onChange(fields)} /> */}
                <form action="">
                    <Field
                        name="email"
                        // component={}
                    />
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'ConactForm'
})(Contact);