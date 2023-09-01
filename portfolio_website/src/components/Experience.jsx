import { Box,  Typography} from '@mui/material'
import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineDot from '@mui/lab/TimelineDot';
import { useInView } from 'react-intersection-observer';
import Fade from '@mui/material/Fade';
import TimelineOppositeContent,{
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
export const Experience = () => {
  const { ref, inView} = useInView({
    threshold:.50,
  });
  const experience=[{companyName:'Software Developer at Walla Walla University',date:'Sept. 2021 - June 2023',description:
  `Designed and developed the backend of a web-based application using Dart Shelf for Walla 
  Walla University School of Nursing. Streamlined development with implementation of automated testing suite. 
  Collaborated with peers and technical mentors in weekly code reviews. Organized and overhauled documentation.
  `},
  {companyName:'Sales and Management Intern at Sherwin Williams',date:'June 2022 - Sept. 2022',description:`Partnered with store leadership to oversee store operations, providing strategic insights and leadership.
  Learned all aspects of operations, clients, and internal strategy to contribute significantly to the team's success.
  Generated growth and increased market share by targeting and selling to large commercial users.
  Analyzed market trends and developed relationships to promote and sell high-quality products.`},
  {companyName:"Walla Walla University",date:'June 2023',description:'Graduated with a Bachelor of Science degree in Computer Science and Business Administration.'}
]
  return (
    <Fade ref={ref} in={inView}>
    <Box my='4rem'>
      <Typography variant='h2' textAlign='center' gutterBottom borderBottom={'1px solid white'} >Experience</Typography>
      <Timeline
      sx={{
        py:'8rem',
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >

        {experience.map((item,index)=>

        <TimelineItem key={index}>
          <TimelineOppositeContent color='text.secondary'>
            {item.date}
          </TimelineOppositeContent>
          <TimelineSeparator>
          <TimelineDot/>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent>
       <Box>
        <Typography variant='h5' color='text.primary'>{item.companyName}</Typography>
        <Typography variant='p' color='text.secondary' lineHeight={2}>{item.description}</Typography>
       </Box>
        
        </TimelineContent>
        </TimelineItem>

        
        
        )}
      
      </Timeline>
      </Box>
      </Fade>
  )
}