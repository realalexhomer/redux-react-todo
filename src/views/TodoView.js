import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { actions as todoActions } from '../redux/modules/todo'
// import styles from './TodoView.scss'

const mapStateToProps = (state) => ({
	todos: state.todos
})

class Todo extends React.Component {
	static propTypes = {
		id: React.proptypes.number,
		text: React.proptypes.string,
		completed: React.proptypes.bool
	}

	render () {
		return (
			<ul>
				<li>{this.props.id}</li>
				<li>{this.props.text}</li>
				<li>{this.props.completed}</li>
			</ul>
		)
	}
}

export class TodoView extends React.Component {
  static propTypes = {
	newTodo: React.PropTypes.func,
	todos: React.PropTypes.array
  }

  render () {
	return (
        <div>
            <button className='btn btn-default'
				onClick={this.props.newTodo}>
            </button>
            <Link to='/'>Back To Home View</Link>

        </div>
    )
  }
}

export default connect(mapStateToProps, todoActions)(TodoView)
