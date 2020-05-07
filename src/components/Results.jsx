import React from 'react'

const Results = (props) => {
    const {firstName, lastName, email, password, confirmPassword} = props.result;
    return(

    <div>
            <h5>Your Form Data</h5>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
    )
};

export default Results;