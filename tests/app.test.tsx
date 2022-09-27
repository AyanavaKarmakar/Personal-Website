import { describe, test } from 'vitest';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '../src/App';

describe('App.tsx Render Test', () => {
  test('App.tsx Renders Without Crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
