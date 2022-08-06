import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredEmail.trim().length === 0 || enteredAge.trim().length === 0){
            return;
        }

        if (enteredAge < 1){
            return;
        }
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }
    
    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input id="username" type='text' onChange={usernameChangeHandler} />
                <label htmlFor='email'>Email</label>
                <input id="email" type='email' onChange={emailChangeHandler} />
                <label htmlFor='age'>Age</label>
                <input id="age" type='number' onChange={ageChangeHandler} />
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;

