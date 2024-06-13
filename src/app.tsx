import type { Component } from 'solid-js';
import Nav from './components/Nav';

const App: Component = (props) => {
  return (
		<>
			<Nav />
			<main>{props.children}</main>
		</>

  );
}

export default App;
