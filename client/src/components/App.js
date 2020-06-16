import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import StreamList from '../components/streams/StreamList';
import StreamCreate from '../components/streams/StreamCreate';
import StreamDelete from '../components/streams/StreamDelete';
import StreamEdit from '../components/streams/StreamEdit';
import StreamShow from '../components/streams/StreamShow';

function App() {
  return (
    <div className='ui container'>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path='/' component={StreamList} />
          <Route exact path='/streams/new' component={StreamCreate} />
          <Route exact path='/streams/delete' component={StreamDelete} />
          <Route exact path='/streams/edit' component={StreamEdit} />
          <Route exact path='/streams/show' component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
