import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredEmail.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: "An Error Occured!",
                message: "Something went wrong!",
            });
            return;
        }

        if (enteredAge < 1){
            setError({
                title: "An Error Occured!",
                message: "Something went wrong!",
            });
            return;
        }

        props.onAddUser(enteredUsername, enteredAge, enteredEmail);

        setEnteredAge('');
        setEnteredEmail('');
        setEnteredUsername('');
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

    const errorHandler = () => {
        setError(null);
    }
    
    return (
        <div>
            {error && <ErrorModal title = {error.title}  message = {error.message} onConfirm = {errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input id="username" type='text' value={enteredUsername} onChange={usernameChangeHandler} />
                    <label htmlFor='email'>Email</label>
                    <input id="email" type='email' value={enteredEmail} onChange={emailChangeHandler} />
                    <label htmlFor='age'>Age</label>
                    <input id="age" type='number' value={enteredAge} onChange={ageChangeHandler} />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;

