import {render,screen} from '@testing-library/react';
import { describe,test} from 'vitest';
import { Experience } from '../components/Experience';
import '@testing-library/jest-dom';
import 'intersection-observer';
describe('Experience Component', () => {
 

  test('renders Experience Component and checks to make sure timeline element is in document', async() => {
    const { container,getByText}  = render(<Experience/>);
    
    const textContent = getByText('Education and Experience');
    await expect(textContent).toBeInTheDocument();
    const timeline=container.querySelectorAll('.MuiTimeline-root');
    await expect(timeline[0]).toBeInTheDocument();

    const experienceEvents=container.querySelectorAll('.MuiTimelineContent-root');
    experienceEvents.forEach( async(event) => {
        await expect(event).toBeInTheDocument();
      });
  });
});
