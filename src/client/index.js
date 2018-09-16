import io from 'socket.io-client';
import { render } from 'react-dom';

import { withSocket } from './react/App';

// Create socket connection
const socket = io(':1235');

const rootElement = document.getElementById('root');
render(withSocket(socket), rootElement);
