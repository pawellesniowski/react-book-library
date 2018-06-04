import React, { Component } from 'react';
import {connect} from 'react-redux';

import { selectBook } from '../actions';

class BookList extends Component {
    constructor(props){
        super(props);
    }

    renderList() {
        return this.props.books.map((book) => <li
            onClick={()=>this.props.onSelectBook(book)}
            key={book.title}>{book.title}
            </li>
        );
        // return <div>Book list...</div>
    }

    render() {
        return (
          <ul>
              {this.renderList()}
          </ul>
        );
    }

}

function mapStateToProps(state) {
    return {
        books: state.books
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onSelectBook: (book) => dispatch(selectBook(book))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
