import React, {Fragment} from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import StreamList from '../components/streams/StreamList';
import StreamCreate from '../components/streams/StreamCreate';
import StreamDelete from '../components/streams/StreamDelete';
import StreamEdit from '../components/streams/StreamEdit';
import StreamShow from '../components/streams/StreamShow';
import history from '../history';

function App() {
  return (
    <Fragment>
    <div className='ui container'>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={StreamList} />
            <Route exact path='/streams/new' component={StreamCreate} />
            <Route exact path='/streams/delete/:id' component={StreamDelete} />
            <Route exact path='/streams/edit/:id' component={StreamEdit} />
            <Route exact path='/streams/:id' component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
    <Footer/>
    </Fragment>
  );
}

export default App;
