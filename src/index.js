// @flow
import React from 'react';
import ReactDOM from 'react-dom';

interface IAppProps {

}

const App = (props: IAppProps) => {
  return (
    <div>Hello, world</div>
  );
}

const appElement = document.getElementById('app');

if (appElement)
  ReactDOM.render(<App />, appElement);