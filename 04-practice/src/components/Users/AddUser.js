import React, { useState } from 'react';

const AddUsers = () => {
    const addUserHandler = (e) => {
        e.preventDefault();
    };

    const onChangeHandler = () => { };

    return (
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">User Name</label>
            <input
                type="text"
                id="username"
                onChange={onChangeHandler}
            />
            <label htmlFor="age">Age (Years)</label>
            <input id='age' type="number" />
            <button type="submit" >Add User</button>
        </form>
    );
};

export default AddUsers;
