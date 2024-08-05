import React from "react";
import { Typography, Box, List, ListItem } from "@mui/material";
import { styled } from "@mui/system";

const Section = styled(Box)({
  marginBottom: "0.5em",
});

const SubSection = styled(Box)({
  marginBottom: "30px",
});

const StyledList = styled(List)({
  paddingLeft: "0.5em",
});

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "32px",
  color: theme.palette.common.paua,
  marginBottom: "20px",

  [theme.breakpoints.down("md")]: {
    fontSize: "22px",
  },
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "24px",
  color: theme.palette.common.paua,
  marginBottom: "10px",

  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
  },
}));

const Description = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "16px",
  color: theme.palette.common.text,
  marginBottom: "20px",

  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
}));

const ListItemText = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "16px",
  color: theme.palette.common.text,
  marginBottom: "8px",
  marginLeft: "15px",

  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
    marginLeft: "8px",
  },
}));

const FastNucesExperience = () => {
  const SECTIONS = [
    {
      title: "Designing Educational Manuals:",
      points: [
        "Developed detailed and structured lab manuals that served as a critical resource for students. These manuals provided clear instructions, step-by-step guidance, and practical examples to help students grasp complex programming concepts.",
        "Ensured that the manuals were aligned with the course curriculum, enhancing the learning process by bridging theoretical knowledge with practical application.",
        "Included problem-solving exercises and real-world scenarios to challenge students and encourage critical thinking and innovation.",
      ],
    },
    {
      title: "Conducting Programming Labs:",
      points: [
        "Led programming lab sessions, demonstrating coding techniques, best practices, and the application of various programming languages and tools.",
        "Provided personalized guidance and support to students, helping them troubleshoot code, understand debugging techniques, and overcome challenges.",
      ],
    },

    {
      title: "Assessment and Feedback:",
      points: [
        "Evaluated students' progress through lab exercises, providing constructive feedback to help them improve their coding skills and understanding of key concepts.",
        "Conducted assessments and practical exams to measure the students' competency in applying what they learned in the labs.",
      ],
    },
    {
      title: "Continuous Improvement:",
      points: [
        "Regularly updated the lab manuals to incorporate new technologies, methodologies, and educational best practices.",
        "Collected feedback from students and peers to refine lab activities and enhance the overall effectiveness of the learning experience.",
      ],
    },
  ];
  return (
    <Box sx={{ margin: "auto" }}>
      <Title>Lab Instructor</Title>

      <Description>
        As a Lab Instructor, I played a pivotal role in shaping the learning
        experiences of students by designing comprehensive manuals and
        conducting hands-on programming labs. My responsibilities included:
      </Description>

      {SECTIONS.map(({ title, points }) => (
        <SubSection>
          <Heading>{title}</Heading>
          {points.map((point) => (
            <ListItemText>{point}</ListItemText>
          ))}
        </SubSection>
      ))}

      <Typography variant="body1" paragraph>
        This experience enhanced my ability to communicate complex technical
        information in an accessible and engaging manner, develop educational
        materials, and bring up a positive and productive learning environment.
      </Typography>
    </Box>
  );
};

export default FastNucesExperience;
