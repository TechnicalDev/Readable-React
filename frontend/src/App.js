import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getAllCategories } from './actions/categories';
import { getAllPostsAndComments } from './actions/posts';
import Header from './components/header';
import Content from './components/content';
import Sidebar from './components/sidebar';
import Footer from './components/footer';

class App extends Component {
  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchPostsAndComments();
  }
  render() {
    return (
      <div className='wrapper'>
        <Header/>
        <Content/>
        <Sidebar/>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(connect(undefined,
  { fetchCategories: getAllCategories, fetchPostsAndComments: getAllPostsAndComments }
)(App));
