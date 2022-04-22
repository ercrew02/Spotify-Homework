import {render, screen } from '@testing-library/react'
import Login from '..'

test('renders Login', () =>{
render(<Login/>);
const input = screen.getAllByLabelText(/login/i);
expect(input).toBeInTheDocument();
});