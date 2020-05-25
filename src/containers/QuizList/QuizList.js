﻿import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './QuizList.module.scss';
import Loader from '../../components/UI/Loader/Loader';
import { fetchQuizes } from '../../store/actions/quiz';


class QuizList extends Component {
    renderQuizes() {
        return this.props.quizes.map((quiz) => {
            return (
                <li key={quiz.id}>
                    <NavLink to={'/quiz/' + quiz.id}>
                        {quiz.name}
                    </NavLink>
                </li>
            )
        })
    }
    
    componentDidMount() {
        this.props.fetchQuizes()
    }

    render() {
        return (
            <div className={classes.QuizList}>
                <div>
                    <h1>Quiz List</h1>
                    
                    { 
                        this.props.loading && this.props.quizes.length !== 0
                            ? <Loader/>
                            : <ul>
                                { this.renderQuizes() }
                            </ul>
                    }
                </div>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        loading: state.quiz.loading,
        quizes: state.quiz.quizes
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchQuizes: () => dispatch(fetchQuizes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizList)