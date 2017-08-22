import React from 'react';
import styles from './duration.css';

export default class Duration extends React.Component {
    render(){
        return (
            <div className={styles.duration}>{this.props.duration}</div>
        );
    }
}