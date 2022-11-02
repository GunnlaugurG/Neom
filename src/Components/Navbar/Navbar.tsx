import { Icon } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import { NavigationsModel } from "../../Models/Models";
import styles from './Navbar.module.scss'

interface IProps {
    navigations: NavigationsModel[]
}

const Navbar: React.FC<IProps> = ({ navigations}) => {
    const [activeNo, setActiveNo] = React.useState(0);

    const changeActive = (index: number) => {
        setActiveNo(index)
        console.log(activeNo)
    }
    
    return (
        <div className={styles.navigation}>
            <ul>
                {navigations.map((nav, index) => {
                    console.log(nav);
                    return (
                        <li key={nav.name} onClick={() => changeActive(index)} className={[styles.list, index === activeNo ? styles.active : ''].join(' ')}>
                            <Link to={nav.path}>
                                <span className={styles.icon}>
                                    <FontAwesomeIcon icon={nav.icon} />
                                </span>
                                <span className={styles.text}>{nav.name}</span>
                            </Link>
                        </li>
                    )
                })}
                <div className={styles.indicator}></div>
            </ul>
        </div>
    )
}

export default Navbar