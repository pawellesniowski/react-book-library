import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        if(!this.props.activeBook.title){
            return <div>Select the book to display details</div>
        }
        return (
            <div>{this.props.activeBook.title}</div>
        )
    }
}

function mapStateToProps(state){
    console.log(state);
    return {
        activeBook: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail)


