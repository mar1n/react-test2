import { expect } from 'chai';
import React from 'react';
import App, { doIncrement, doDecrement, Counter } from './App';
import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Local State', () => {
    it('should increment the counter in state', () => {
        const state = { counter: 0 };
        const newState = doIncrement(state);

        expect(newState.counter).to.equal(1);
    })
    it('should decrement the counter in state', () => {
        const state = { counter: 0 };
        const newState = doDecrement(state);

        expect(newState.counter).to.equal(-1);
    })
})

describe('App Component', () => {
    it('renders the Counter wrapper', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Counter)).to.have.length(1);
    })
})