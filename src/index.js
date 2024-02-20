import React from 'react';
import './styles/global-styles.css';

import { Home } from './templates/Home';

import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Home />);
