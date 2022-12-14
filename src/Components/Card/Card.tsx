import React from "react";
import styles from './Card.module.scss'

interface IProps {
    children: JSX.Element[]
}

const Card: React.FC<IProps> = ({ children }) => {
    return (
        <div className={styles.container}> { children }</div>
    )
}

export default Card