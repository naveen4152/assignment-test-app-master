// import { render, screen } from '@testing-library/react';
// import Landing from '../Landing/Landing';
// import App from '../App'

// test('renders landing page text', () => {
//     render(<App />);
//     const linkElement = screen.getByText(/Nice rotating stuff./i)
//     expect(linkElement).toBeInTheDocument();
// });

import { render, screen, fireEvent, cleanup, waitFor } from "@testing-library/react";
import Enzyme, {shallow} from 'enzyme';
import { MemoryRouter } from "react-router-dom";
import Landing from './Landing'

afterEach(() => {
    cleanup();
});

test('test landing', () =>{
    render(<MemoryRouter><Landing /></MemoryRouter>);
    const txt = screen.getByText(/Nice rotating stuff./i);
    expect(txt).toBeInTheDocument();
});

test('shallow test landing', () => {
    const history = []
    const wrapper = shallow(<Landing.WrappedComponent history ={history} />);
    wrapper.instance().openHome();
    expect(history).toContain('/home');
});

test('mocking function in landing and testing', () => {
    const history = []
    const mockFunc = jest.fn();
    const wrapper = shallow(<Landing.WrappedComponent history={history} sharedFunc= {mockFunc} />);
})