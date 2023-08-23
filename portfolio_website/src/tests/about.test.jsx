import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { About } from '../components/About';
import './mocks/intersectionObserverMock';

describe('About Component', () => {
 

  it('renders the component correctly', () => {
    render(<About />);
    // Your existing test code
  });

  it('changes image filter on mouse hover', () => {
    // Set inView to true to simulate that the component is in view

    render(<About />);
    // Your existing test code
  });

  // Add more tests as needed
});
