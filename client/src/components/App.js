import React from 'react';
import { Router, Route } from 'react-router-dom';
import Header from './Header';
import StreamList from '../components/streams/StreamList';
import StreamCreate from '../components/streams/StreamCreate';
import StreamDelete from '../components/streams/StreamDelete';
import StreamEdit from '../components/streams/StreamEdit';
import StreamShow from '../components/streams/StreamShow';
import history from '../history';

function App() {
  return (
    <div className='ui container'>
      <Router history={history}>
        <div>
          <Header />
          <Route exact path='/' component={StreamList} />
          <Route exact path='/streams/new' component={StreamCreate} />
          <Route exact path='/streams/delete/:id' component={StreamDelete} />
          <Route exact path='/streams/edit/:id' component={StreamEdit} />
          <Route exact path='/streams/show/:id' component={StreamShow} />
        </div>
      </Router>
    </div>
  );
}

export default App;
