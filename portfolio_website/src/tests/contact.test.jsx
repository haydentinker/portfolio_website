import {render,screen} from '@testing-library/react';
import { describe,test} from 'vitest';
import { Contact } from '../components/Contact';
import '@testing-library/jest-dom';
/**
 * @jest-environment jsdom
 */
describe('Contact Component', () => {
 

  test('renders Contact Component with basic tests', async () => {
    const { container,getByText} = render(<Contact/>);

    const grid=container.querySelectorAll('.MuiGrid-container');
    expect(grid.length===3);
   
    const gridItems=container.querySelectorAll('.MuiGrid-item');
    expect(gridItems.length===5);
    
  
  });
});
