import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
// makes sure the action we created flows trough all reducers
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className='list-group-item'>{book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // whatever is returned will show up as props inside BookList
  return {
    books: state.books
  };
}

// mapDispatchToProps: anything returned from this will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called the result should be passed to all reducers
  // dispatch function makes actions flow through reducers
  return bindActionCreators({ selectBook: selectBook}, dispatch)
}

// promote BookList from a component to a container - needs to know about dispatch method, selectBook. Makes it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
