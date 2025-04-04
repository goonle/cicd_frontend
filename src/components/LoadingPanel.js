import React from 'react';
import { Spinner } from 'react-bootstrap';

const styles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: 1050,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#fff',
        background: '#333',
        padding: '2rem',
        borderRadius: '1rem',
    },
    text: {
        marginTop: '1rem',
        fontSize: '1.2rem',
    }
};

const LoadingPanel = ({ message = "Loading..." }) => {
    return (
        <div style={styles.overlay}>
            <div style={styles.container}>
                <Spinner animation="border" role="status" variant="primary" />
                <span style={styles.text}>{message}</span>
            </div>
        </div>
    );
};



export default LoadingPanel;