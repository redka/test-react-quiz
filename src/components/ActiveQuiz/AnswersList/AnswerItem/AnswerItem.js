import React from 'react';

import classes from './AnswerItem.module.scss'

const AnswerItem = props => {
    const classesArr = [classes.AnswerItem];
    if (props.state) {
        classesArr.push(classes[props.state])
    }
    
    return (
        <li
            onClick={() => props.onAnswerClick(props.answer.id)}
            className={classesArr.join(' ')}>
            { props.answer.text }
        </li>
    )
}

export default AnswerItem;