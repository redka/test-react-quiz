﻿import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Drawer.module.scss';
import Backdrop from '../../UI/Backdrop/Backdrop';

class Drawer extends Component {

    clickHandler = () => {
        this.props.onClose();
    }

    renderLinks(links) {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink 
                        exact={link.exact} 
                        to={link.to}
                        activeClassName={classes.active}
                        onClick={this.clickHandler}
                    >{link.label}</NavLink>
                </li>
            )
        })
    }
    
    render() {
        const cls = [classes.Drawer];
        if (!this.props.isOpen) {
            cls.push(classes.close)
        }
        
        const links = [
            { to: '/', label: 'List', exact: true }
        ]
        
        if (this.props.isAuthenticated) {
            links.push({ to: '/quiz-create', label: 'Create quiz', exact: false });
            links.push({ to: '/logout', label: 'Exit', exact: false})
        } else {
            links.push({ to: '/auth', label: 'Authorization', exact: false })
        }
        
        return (
            <>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks(links) }
                    </ul>
                </nav>
                { this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null }
            </>
        )
    }
}

export default Drawer;