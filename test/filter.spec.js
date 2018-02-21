import {expect} from 'code';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme'
import App from '../src/filter';



describe('<App />', () => {
	const wrapper = shallow(<App />);
	it('renders without crashing', () => {
		const div = document.createElement('div');
  		ReactDOM.render(<App />, div);
	});
});