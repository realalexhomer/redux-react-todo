import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { actions as counterActions } from '../redux/modules/counter'
import styles from './HomeView.scss'

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html

const mapStateToProps = (state) => ({
  counter: state.counter
})
export class HomeView extends React.Component {
  static propTypes = {
    increment: React.PropTypes.func,
    decrement: React.PropTypes.func,
    counter: React.PropTypes.number
  }

  render () {
    return (
      <div className='container text-center'>
        <h1>Welcome to the React Redux Starter Kit</h1>
        <h2>
          Sample Counter:&nbsp;
          <span className={styles['counter--green']}>{this.props.counter}</span>
        </h2>
        <div className={styles['button-row']}>
          <button className={styles['left-button'] + ' btn btn-default'}
                  onClick={this.props.increment}>
            Increment
          </button>
          <button className={styles['right-button'] + ' btn btn-default'}
                  onClick={this.props.decrement}>
            Decrement
          </button>
        </div>
        <hr />
        <Link to='/about' className={styles['block-link']}>Go To About View</Link>
        <Link to='/todo' className={styles['block-link']}>Go To Todo View</Link>
      </div>
    )
  }
}

export default connect(mapStateToProps, counterActions)(HomeView)
