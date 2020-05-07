import React, {useState} from 'react';

const UserForm = (props) => {
    const {inputs, setInputs} = props;

    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    };

    return(
        <div class="jumbotron pt-0 pb-5 pl-5">
            <div class="row justify-content-center">
                <form>
                    <div class="form-group">
                        <label htmlFor="firstName">First Name: </label> 
                        <input onChange={onChange} type="text" name="firstName" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label htmlFor="lastName">Last Name: </label> 
                        <input onChange={onChange} type="text" name="lastName" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label for="email">Email Address: </label> 
                        <input onChange={onChange} type="text" name="email" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label for="password">Password: </label>
                        <input onChange={onChange} type="password" name="password" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label for="confirmPassword">Confirm Password: </label>
                        <input onChange={onChange} type="password" name="confirmPassword" class="form-control"/>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default UserForm;