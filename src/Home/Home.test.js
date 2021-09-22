import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';

import Enzyme, { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';


afterEach(() => {
    cleanup();
});

test('test home', () => {
    render(<MemoryRouter><Home /></MemoryRouter>);
    const btn = screen.getByText(/Click Me/i);
    const clickBtn = fireEvent.click(btn)
    expect(clickBtn).toBeTruthy();

});

test(" test home - get Name button", () => {
    render(<MemoryRouter><Home /></MemoryRouter>);
    const btn = screen.getByText(/Get Name/i)
    const clickBtn = fireEvent.click(btn)
    expect(clickBtn).toBeTruthy();
})