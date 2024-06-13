/* @refresh reload */
import './app.css';

import { render } from 'solid-js/web';
import { Router, Route } from '@solidjs/router';
import App from './app';
import Index from './routes/index';
import Tournament from './routes/tournament';
import About from './routes/about';
import { lazy } from 'solid-js';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(
  () => (
    <Router root={App}>
			<Route path="/" component={Index} />
			<Route path="/about" component={About} />
			<Route path="/tournament" component={Tournament} />
			<Route path="*404" component={lazy(() => import('./routes/404'))} />
    </Router>
  ),
  root,
);
