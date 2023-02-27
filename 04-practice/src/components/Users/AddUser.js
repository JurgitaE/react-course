import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';

import classes from './AddUser.module.css';

const AddUsers = () => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = e => {
        e.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        if (+enteredAge < 1) {
            return;
        }
        console.log(enteredUserName, enteredAge);
        setEnteredUserName('');
        setEnteredAge('');
    };

    const userNameChangeHandler = e => {
        setEnteredUserName(e.target.value);
    };
    const ageChangeHandler = e => {
        setEnteredAge(e.target.value);
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">User Name</label>
                <input
                    type="text"
                    id="username"
                    onChange={userNameChangeHandler}
                    value={enteredUserName}
                />
                <label htmlFor="age">Age (Years)</label>
                <input
                    id="age"
                    type="number"
                    onChange={ageChangeHandler}
                    value={enteredAge}
                />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUsers;
