import React from 'react';

import classes from './MenuToggle.module.scss';

const MenuToggle = props => {
    const cls =[
        classes.MenuToggle,
        'fa',
        props.isOpen ? 'fa-times' : 'fa-bars',
        props.isOpen ? classes.open : null
    ]
    
    return (
        <i 
            onClick={props.onToggle}
            className={cls.join(' ')} />
        
    )
}

export default MenuToggle;