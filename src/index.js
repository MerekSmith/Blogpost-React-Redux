import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import promise from 'redux-promise';

// import App from './components/app'; --This is no longer needed due to using React Router. We don't really need that central file now.
import reducers from './reducers';
import PostsIndex from './components/posts_index';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    {/* <App /> */}
    <BrowserRouter>
      <div>
        <Route path="/" component={PostsIndex} />
        {/* <Route path="/posts/new" component={PostNew} /> */}
        {/* <Route path="/posts/:id" component={PostShow} /> */}
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
