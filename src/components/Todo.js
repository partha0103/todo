import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({onclick, completed, text}) => (
    <li
        onClick={onclick}
        style={{
            textDecoration: completed ? 'line-through': 'none'
        }}
    >
        {text}
    </li>
)

Todo.propTypes = {
    onclick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo
