import { configure } from '@storybook/react';
import '../src/index.css';
import requireContext from 'require-context.macro';


const req = requireContext('../src/components', true, /\.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
