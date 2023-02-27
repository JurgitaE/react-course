import React from 'react';
import Button from './Button';
import Card from './Card';
import classes from './ErrorModal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = ({ onConfirm }) => {
    return (
        <div
            className={classes.backdrop}
            onClick={onConfirm}></div>
    );
};

const ModalOverlay = ({ onConfirm, title, message }) => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{title}</h2>
            </header>
            <div className={classes.content}>
                <p>{message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={onConfirm}>Okay</Button>
            </footer>
        </Card>
    );
};
const ErrorModal = ({ title, message, onConfirm }) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onConfirm={onConfirm} />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(
                <ModalOverlay
                    onConfirm={onConfirm}
                    title={title}
                    message={message}
                />,
                document.getElementById('overlay-root')
            )}
        </React.Fragment>
    );
};

export default ErrorModal;
