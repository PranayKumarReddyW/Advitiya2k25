"use client";
import React, { useState } from "react";
import {
  Box,
  Tab,
  Tabs,
  Card,
  CardContent,
  Typography,
  Divider,
} from "@mui/material";

const EventSchedule: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const events = [
    {
      day: "25-01-2025",
      events: [
        {
          title: "Workshop",
          time: "Full Day",
          studentOrganizers: [
            "Vamsi Charan",
            "Sunitha",
            "Naga Harshitha",
            "Vara Prasad",
            "Sreevani",
          ],
          facultyOrganizers: ["Dr. Smith", "Prof. Johnson"],
          details: "Hands-on workshop covering various technical topics.",
        },
      ],
    },
    {
      day: "27-01-2025",
      events: [
        {
          title: "Inauguration",
          time: "9:00 AM - 11:30 AM",
          studentOrganizers: ["Event Team"],
          facultyOrganizers: ["Dr. Johnson"],
          details: "Official opening ceremony with keynote speakers.",
        },
        {
          title: "1st,2nd and 3rd Years Coding Contest",
          time: "09:15 AM - 12:00 PM",
          studentOrganizers: ["W.Pranay Kumar Reddy", "M.Sai Lakshmi"],
          facultyOrganizers: ["Penchal Prasad", "YP Srinath Reddy"],
          details: "Coding contest exclusively for 3rd-year students.",
        },
         {
          title: "Poster Presentation",
          time: "11:00 AM - 02:00 PM",
          studentOrganizers: ["Design Team"],
          facultyOrganizers: ["Dr. Art", "Prof. Design"],
          details: "Participants present innovative poster designs.",
        },
         {
          title: "Paper Presentation",
          time: "11:00 AM - 2:00 PM",
          studentOrganizers: ["Research Team"],
          facultyOrganizers: ["Dr. Scholar"],
          details: "Participants showcase their research and ideas.",
        },
        {
          title: "Web Development Contest",
          time: "11:00 AM - 12:00 PM",
          studentOrganizers: ["Web Dev Team"],
          facultyOrganizers: ["Prof. Web"],
          details: "Create a functional and innovative web application.",
        },
         {
          title: "Technical Quiz",
          time: "12:00 PM - 03:00 PM",
          studentOrganizers: ["Quiz Masters"],
          facultyOrganizers: ["Dr. Knowledge"],
          details: "Test your technical knowledge in this quiz competition.",
        },
        {
          title: "Flashmob",
          time: "3:30 PM - 5:00 PM",
          studentOrganizers: ["Cultural Team"],
          facultyOrganizers: ["Prof. Dance"],
          details:
            "A lively and energetic performance to entertain the audience.",
        },
        // {
        //   title: "1st Year Coding Contest",
        //   time: "1:00 PM - 3:00 PM",
        //   studentOrganizers: ["W.Pranay Kumar Reddy", "M.Sai Lakshmi"],
        //   facultyOrganizers: ["Penchal Prasad", "YP Srinath Reddy"],
        //   details: "Coding contest exclusively for 1st-year students.",
        // },
        // {
        //   title: "2nd Year Coding Contest",
        //   time: "2:00 PM - 4:00 PM",
        //   studentOrganizers: ["W.Pranay Kumar Reddy", "M.Sai Lakshmi"],
        //   facultyOrganizers: ["Penchal Prasad", "YP Srinath Reddy"],
        //   details: "Coding contest exclusively for 2nd-year students.",
        // },
      ],
    },
    {
      day: "28-01-2025",
      events: [
          {
          title: "Treasure Hunt",
          time: "9:00 AM - 12:00 PM",
          studentOrganizers: ["Adventure Team"],
          facultyOrganizers: ["Dr. Hunt"],
          details: "Solve riddles and find hidden treasures across the campus.",
        },
          {
          title: "Singing Competition & Dancing Competition",
          time: "10:00 AM - 11:30 AM",
          studentOrganizers: ["Music Club"],
          facultyOrganizers: ["Prof. Melody"],
          details: "Showcase your singing talent in this competition.",
        },
         {
          title: "Online Games",
          time: "10:00 AM - 12:00 PM",
          studentOrganizers: ["Gaming Club"],
          facultyOrganizers: ["Dr. Play"],
          details: "Participate in exciting online gaming challenges.",
        },
         {
          title: "Prize Distribution and Heritage Walk",
          time: "02:00 PM - 5:00 PM",
          studentOrganizers: ["Event Team"],
          facultyOrganizers: ["Dr. Heritage"],
          details: "Celebrate the winners and explore the campus heritage.",
        },
        // {
        //   title: "Poster Presentation",
        //   time: "9:00 AM - 11:00 AM",
        //   studentOrganizers: ["Design Team"],
        //   facultyOrganizers: ["Dr. Art", "Prof. Design"],
        //   details: "Participants present innovative poster designs.",
        // },
        // {
        //   title: "Technical Quiz",
        //   time: "12:00 PM - 2:00 PM",
        //   studentOrganizers: ["Quiz Masters"],
        //   facultyOrganizers: ["Dr. Knowledge"],
        //   details: "Test your technical knowledge in this quiz competition.",
        // },
        // {
        //   title: "Web Development Contest",
        //   time: "10:00 AM - 12:00 PM",
        //   studentOrganizers: ["Web Dev Team"],
        //   facultyOrganizers: ["Prof. Web"],
        //   details: "Create a functional and innovative web application.",
        // },
        // {
        //   title: "Paper Presentation",
        //   time: "11:00 AM - 2:00 PM",
        //   studentOrganizers: ["Research Team"],
        //   facultyOrganizers: ["Dr. Scholar"],
        //   details: "Participants showcase their research and ideas.",
        // },
        // {
        //   title: "Flashmob",
        //   time: "3:00 PM - 5:00 PM",
        //   studentOrganizers: ["Cultural Team"],
        //   facultyOrganizers: ["Prof. Dance"],
        //   details:
        //     "A lively and energetic performance to entertain the audience.",
        // },
      ],
    },
    // {
    //   day: "29-01-2025 ",
    //   events: [
    //     // {
    //     //   title: "Treasure Hunt",
    //     //   time: "9:00 AM - 12:00 PM",
    //     //   studentOrganizers: ["Adventure Team"],
    //     //   facultyOrganizers: ["Dr. Hunt"],
    //     //   details: "Solve riddles and find hidden treasures across the campus.",
    //     // },
    //     // {
    //     //   title: "Singing Competition",
    //     //   time: "10:00 AM - 11:00 AM",
    //     //   studentOrganizers: ["Music Club"],
    //     //   facultyOrganizers: ["Prof. Melody"],
    //     //   details: "Showcase your singing talent in this competition.",
    //     // },
    //     {
    //       title: "Online Games",
    //       time: "10:00 AM - 12:00 PM",
    //       studentOrganizers: ["Gaming Club"],
    //       facultyOrganizers: ["Dr. Play"],
    //       details: "Participate in exciting online gaming challenges.",
    //     },
    //     {
    //       title: "Offline Games",
    //       time: "10:00 AM - 12:00 PM",
    //       studentOrganizers: ["Sports Committee"],
    //       facultyOrganizers: ["Prof. Sports"],
    //       details: "Engage in fun offline games and activities.",
    //     },
    //     {
    //       title: "Prize Distribution and Heritage Walk",
    //       time: "3:00 PM - 5:00 PM",
    //       studentOrganizers: ["Event Team"],
    //       facultyOrganizers: ["Dr. Heritage"],
    //       details: "Celebrate the winners and explore the campus heritage.",
    //     },
    //   ],
    // },
  ];

  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          padding: "20px",
          color: "#E0E0E0",
          background: "linear-gradient(135deg, #1E1E2F, #121212)",
          overflowY: "auto",
          overflowX: "hidden",
          boxShadow: "inset 0 0 10px #000",
        }}
      >
        <Tabs
          value={value}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="event tabs"
          sx={{
            borderBottom: "1px solid #444",
            marginBottom: "20px",
          }}
        >
          {events.map((event, index) => (
            <Tab
              key={index}
              label={event.day}
              sx={{
                fontSize: { xs: "0.9rem", md: "1rem" },
                color: value === index ? "#ffeb3b" : "#bbb",
              }}
            />
          ))}
        </Tabs>

        {events.map((event, index) => (
          <div
            key={index}
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {event.events.map((eventItem, idx) => (
                <Card
                  key={idx}
                  sx={{
                    margin: "10px 0",
                    backgroundColor: "#1e1e1e",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.4)",
                    },
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        color: "#ffc107",
                        fontSize: { xs: "1rem", md: "1.2rem" },
                      }}
                    >
                      {eventItem.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "0.9rem", md: "1rem" },
                        color: "#80cbc4",
                        marginBottom: "8px",
                      }}
                    >
                      {eventItem.time}
                    </Typography>
                    <Divider
                      sx={{ marginBottom: "16px", backgroundColor: "#444" }}
                    />
                    <Typography
                      sx={{
                        fontSize: { xs: "0.85rem", md: "0.95rem" },
                        color: "#e0e0e0",
                      }}
                    >
                      {eventItem.details}
                    </Typography>
                    {/* <Typography
                      sx={{
                        fontSize: { xs: "0.85rem", md: "0.95rem" },
                        color: "#90caf9",
                        marginTop: "8px",
                      }}
                    >
                      <strong>Student Organizers: </strong>
                      {eventItem.studentOrganizers?.map((organizer, idx) => (
                        <span
                          key={idx}
                          style={{
                            color: idx % 2 === 0 ? "#ff8a65" : "#81c784",
                            marginLeft: "4px",
                          }}
                        >
                          {organizer}
                        </span>
                      ))}
                    </Typography> */}
                    {/* <Typography
                      sx={{
                        fontSize: { xs: "0.85rem", md: "0.95rem" },
                        color: "#90caf9",
                        marginTop: "8px",
                      }}
                    >
                      <strong>Faculty Organizers: </strong>
                      {eventItem.facultyOrganizers?.map((organizer, idx) => (
                        <span
                          key={idx}
                          style={{
                            color: idx % 2 === 0 ? "#ff8a65" : "#81c784",
                            marginLeft: "4px",
                          }}
                        >
                          {organizer}
                        </span>
                      ))}
                    </Typography> */}
                  </CardContent>
                </Card>
              ))}
            </Box>
          </div>
        ))}
      </Box>
    </div>
  );
};

export default EventSchedule;
