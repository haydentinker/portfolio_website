import React from 'react';
import { render,screen } from '@testing-library/react';
import { Contact} from '../components/Contact';
import './mocks/intersectionObserverMock';
import { toBeInTheDocument, toHaveStyle} from '@testing-library/jest-dom';
describe('Contact Component', () => {
 

  test('renders Contact Component with basic tests', async () => {
    const { container,getByText} = render(<Contact/>);

    const grid=container.querySelectorAll('.MuiGrid-container');
    expect(grid.length===3);
   
    const gridItems=container.querySelectorAll('.MuiGrid-item');
    expect(gridItems.length===5);
    
  
  });
});
