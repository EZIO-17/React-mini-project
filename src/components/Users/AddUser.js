import React from 'react';

const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault();
    };

    return (
        <form>
            <label htmlFor='username'>Username</label>
            <input id="username" type='text' />
            <label htmlFor='email'>Email</label>
            <input id="email" type='email' />
            <label htmlFor='age'>Age</label>
            <input id="age" type='number' />
            <button type='submit'>Add User</button>
        </form>
    );
};

export default AddUser;

