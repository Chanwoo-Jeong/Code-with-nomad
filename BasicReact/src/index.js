import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import BlogList from './BlogList';
import Cointracker from './Cointracker';
import MovieApp from './MovieApp';
import NomadTodo from './NomadTodo';
import Todo from './Todo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
    {/* <App />
    <BlogList /> */}
    {/* <Todo/> */}
    {/* <NomadTodo /> */}
    {/* <Cointracker/> */}
    {<MovieApp />}
    </div>
);

