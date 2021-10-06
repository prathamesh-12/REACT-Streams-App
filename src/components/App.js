import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './header/Header';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Translate from './translate/translate';

const App = () => {
    return (
      <div className="ui container">
        <BrowserRouter>
        <Header />
          <div>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete" exact component={StreamDelete} />
            <Route path="/streams/show/:id" exact component={StreamShow} />
          </div>
        </BrowserRouter>
        <Translate />
      </div>
    );
}

export default App;