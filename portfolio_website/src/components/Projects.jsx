import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Container, Grid } from '@mui/material';
import flaskLogo from '../assets/images/flaskLogo.png';
import bookPicture from '../assets/images/books.jpg'
import pugDash from '../assets/images/pugDash.png'
import leetCode from '../assets/images/leetcode.png';
import fermentationBuddy from '../assets/images/fermentationBuddy.png';
import nurse from '../assets/images/nurse.png';
import githubLogo from '../assets/images/githubLogo.png';
import { useInView } from 'react-intersection-observer';
import { isMobile } from 'react-device-detect';
import Fade from '@mui/material/Fade';
export const Projects = () => {
  const { ref, inView } = useInView({
    threshold: .25,
  });
  function onPictureHover(e) {
    e.target.style.filter = 'none';
  }
  function onPictureLeave(e) {
    e.target.style.filter = 'grayscale(100%)';
  }
  const projects = [
    {
      name: "Book Rating Website", description:
        `Developed a website where users can rate books. Utilized MERN stack for development and used JWT for authorization and authentication. Used kaggle book dataset for populating database.`,
      img: bookPicture,
      alt: "Picture of books",
      link: "https://github.com/haydentinker/book_rating"
    },
    {
      name: "Pug Dash", description:
        `Pug Dash is a game built using Python and Pygame. It is a side scroller similar to Google's dinosaur run game.`,
      img: pugDash,
      alt: "Picture of a pug running",
      link: "https://github.com/haydentinker/PugDash"
    },
    {
      name: "Fermentation Buddy", description:
        `Constructed an intuitive web application designed to assist users in managing their fermentation projects effectively, including automated email reminders. 
            Developed responsive frontend using React. Utilized Firebase to design and implement a reliable and scalable database,ensuring secure storage of user data and seamless data retrieval.`,
      img: fermentationBuddy,
      alt: "Fermentation Buddy logo",
      link: "https://github.com/haydentinker/Fermentation_Buddy"
    },
    {
      name: "Nursing Simulation", description:
        `As part of the capstone experience at Walla Walla University, I collaborated with a team to develop a web application for the Walla Walla University School of Nursing. This web application
            provided the school of Nursing an invaluable resource that allows students to experience realistic simulations of what they might experience in the workplace. 
            My contribution to this project was designing and implementing a relational database and Restful API using Dart Shelf.`,
      img: nurse,
      alt: "Nurse administering medication to a patient",
      link: './assets/HaydenTinkerSeniorProjectPoster.pdf'
    },
    {
      name: "WWU Wash & Dry", description:
        `Collaborated with a team to developer a web application that allows users to view the availability of dorm laundry machines at Walla Walla University.
            My contribution was utilizing Flask for backend design and implementation ensuring efficient data handling.`,
      img: flaskLogo,
      alt: "Flask python logo",
      link: "https://github.com/garrettkmoody/WWU-Wash-And-Dry-Backend"
    },

    {
      name: "Leet Code Solutions", description:
        `This repository is where I will be posting all of my submissions for Leet Code problems.`,
      img: leetCode,
      alt: "Leet Code Logo",
      link: "https://github.com/haydentinker/LeetCode"
    },
    {
      name: "My Github", description:
        `Github is where I will be pushing all my code for projects.`,
      img: githubLogo,
      alt: "Picture of the github logo",
      link: "https://github.com/haydentinker/"
    },
  ];
  return (
    <Fade ref={ref} in={inView || isMobile}>
      <Box sx={{ my: '4rem' }}>
        <Typography variant='h2' textAlign={'center'} gutterBottom borderBottom={"1px solid white"}> Projects</Typography>
        <Container maxWidth="md" >

          <Grid container spacing={4} py="8rem">
            {projects.map((project, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <CardMedia

                      onMouseOver={onPictureHover}
                      onMouseLeave={onPictureLeave}
                      component="div"
                      sx={{
                        pt: '75%',
                        objectFit: 'contain'
                      }}
                      style={{
                        filter: 'grayscale(100%)',
                        transition: 'filter 0.5s ease',
                      }}
                      image={project.img}
                      alt={project.alt}
                    />
                  </a>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {project.name}
                    </Typography>
                    <Typography>
                      {project.description}
                    </Typography>
                  </CardContent>

                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Fade>
  )
}
