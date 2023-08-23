import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { About } from '../components/About';
import './mocks/intersectionObserverMock';
import { toBeInTheDocument, toHaveStyle} from '@testing-library/jest-dom';
describe('About Component', () => {
 

  test('renders About component and checks to make sure text and images are there', () => {
    const { getByText, getByAltText } = render(<About />);
    
    const heading = getByText(/About Me/i);
    expect(heading).toBeInTheDocument();
  
    const textContent = getByText(/Future owner of The World's First Pug Army/i);
    expect(textContent).toBeInTheDocument();
  
    const pugsImage = getByAltText('Pugs');
    expect(pugsImage).toHaveStyle('filter:grayscale(100%)');

    fireEvent.mouseEnter(pugsImage);
    expect(pugsImage).toHaveStyle('filter:none');

    fireEvent.mouseLeave(pugsImage);
    expect(pugsImage).toHaveStyle('filter:grayscale(100%)');
  });
});
