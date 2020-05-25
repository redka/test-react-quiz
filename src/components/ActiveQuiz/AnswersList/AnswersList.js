import React from 'react';

import AnswerItem from './AnswerItem/AnswerItem';
import classes from './AnswersList.module.scss';

const AnswersList = props => (
    <ul className={classes.AnswersList}>
        { props.answers.map((answer, index) => {
            return (
                <AnswerItem 
                    state={props.state ? props.state[answer.id] : null}
                    onAnswerClick={props.onAnswerClick} 
                    key={index}
                    rightAnswerId={props.rightAnswerId}
                    answer={answer}/>
            )
        }) }
    </ul>
)

export default AnswersList;