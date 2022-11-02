import React, { MouseEventHandler } from "react";
import styles from './Button.module.scss'

interface IProps {
    children: JSX.Element
    primary?: boolean
    onClick: MouseEventHandler
}

const Button: React.FC<IProps> = ({ children, primary = false, onClick }) => {
    return (
        <div onClick={onClick} className={[styles.container, primary ? styles.primary : ''].join(' ')}>
            {children}
        </div>
    )
}

export default Button