import io from 'socket.io-client';
import React from 'react';
import { render } from 'react-dom';

import { withSocket } from './react/App';

// Create socket connection
const socket = io('localhost:1235');

const rootElement = document.getElementById('root');
render(withSocket(socket), rootElement);
