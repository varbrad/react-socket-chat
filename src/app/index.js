import './env'
// import io from 'socket.io-client';
import React from 'react';
import { render } from 'react-dom';

import App from './App';

// Get env values
const { SERVER_PORT, SERVER_HOST } = process.env;

// Create socket connection
// const socket = io('localhost:1235');

const rootElement = document.getElementById('root');
render(<App />, rootElement);
