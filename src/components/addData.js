// App.js
import React from "react";
import AddDataToFirestore from "../addDataToFirestore";

const AddData = () => {
  // Assuming you have the teachers data structure
  const studentsData = [
    {
      studentId: "1",
      name: "John",
      rollNumber: "CSE1001",
      branch: "Computer Science and Engineering",
      semester: "4",
      email: "john.doe@example.com",
      contactNumber: "123-456-7890",
      additionalInfo: "None",
      username: "john_student",
      password: "password123",
      attendance: [
        {
          date: "2023-11-07",
          status: "P",
        },
        {
          date: "2023-11-08",
          status: "P",
        },
        {
          date: "2023-11-09",
          status: "P",
        },
        {
          date: "2023-11-10",
          status: "P",
        },
        {
          date: "2023-11-11",
          status: "A",
        },
        {
          date: "2023-11-12",
          status: "P",
        },
        {
          date: "2023-11-13",
          status: "P",
        },
        {
          date: "2023-11-14",
          status: "P",
        },
        {
          date: "2023-11-15",
          status: "P",
        },
        {
          date: "2023-11-16",
          status: "P",
        },
      ],
    },
    {
      studentId: "2",
      name: "Jane Smith",
      rollNumber: "CSE1002",
      branch: "Computer Science and Engineering",
      semester: "4",
      email: "jane.smith@example.com",
      contactNumber: "987-654-3210",
      additionalInfo: "Allergies: None",
      username: "jane_student",
      password: "securepass",
      attendance: [
        {
          date: "2023-11-07",
          status: "P",
        },
        {
          date: "2023-11-08",
          status: "P",
        },
        {
          date: "2023-11-09",
          status: "P",
        },
        {
          date: "2023-11-10",
          status: "P",
        },
        {
          date: "2023-11-11",
          status: "P",
        },
        {
          date: "2023-11-12",
          status: "A",
        },
        {
          date: "2023-11-13",
          status: "P",
        },
        {
          date: "2023-11-14",
          status: "P",
        },
        {
          date: "2023-11-15",
          status: "P",
        },
        {
          date: "2023-11-16",
          status: "P",
        },
      ],
    },
    {
      studentId: "3",
      name: "Alex Brown",
      rollNumber: "CSE1003",
      branch: "Computer Science and Engineering",
      semester: "4",
      email: "alex.brown@example.com",
      contactNumber: "555-555-5555",
      additionalInfo: "Sports Enthusiast",
      username: "alex_student",
      password: "pass1234",
      attendance: [
        {
          date: "2023-11-07",
          status: "P",
        },
        {
          date: "2023-11-08",
          status: "A",
        },
        {
          date: "2023-11-09",
          status: "P",
        },
        {
          date: "2023-11-10",
          status: "P",
        },
        {
          date: "2023-11-11",
          status: "A",
        },
        {
          date: "2023-11-12",
          status: "A",
        },
        {
          date: "2023-11-13",
          status: "P",
        },
        {
          date: "2023-11-14",
          status: "A",
        },
        {
          date: "2023-11-15",
          status: "P",
        },
        {
          date: "2023-11-16",
          status: "P",
        },
      ],
    },
    {
      studentId: "4",
      name: "Emily Davis",
      rollNumber: "CSE1004",
      branch: "Computer Science and Engineering",
      semester: "4",
      email: "emily.davis@example.com",
      contactNumber: "333-333-3333",
      additionalInfo: "Programming Club Member",
      username: "emily_student",
      password: "mysecretpass",
      attendance: [
        {
          date: "2023-11-07",
          status: "P",
        },
        {
          date: "2023-11-08",
          status: "P",
        },
        {
          date: "2023-11-09",
          status: "P",
        },
        {
          date: "2023-11-10",
          status: "P",
        },
        {
          date: "2023-11-11",
          status: "A",
        },
        {
          date: "2023-11-12",
          status: "A",
        },
        {
          date: "2023-11-13",
          status: "P",
        },
        {
          date: "2023-11-14",
          status: "P",
        },
        {
          date: "2023-11-15",
          status: "P",
        },
        {
          date: "2023-11-16",
          status: "P",
        },
      ],
    },
    {
      studentId: "5",
      name: "Chris Wilson",
      rollNumber: "CSE1005",
      branch: "Computer Science and Engineering",
      semester: "4",
      email: "chris.wilson@example.com",
      contactNumber: "777-777-7777",
      additionalInfo: "Musician",
      username: "chris_student",
      password: "mypassword",
      attendance: [
        {
          date: "2023-11-07",
          status: "P",
        },
        {
          date: "2023-11-08",
          status: "P",
        },
        {
          date: "2023-11-09",
          status: "P",
        },
        {
          date: "2023-11-10",
          status: "P",
        },
        {
          date: "2023-11-11",
          status: "A",
        },
        {
          date: "2023-11-12",
          status: "A",
        },
        {
          date: "2023-11-13",
          status: "P",
        },
        {
          date: "2023-11-14",
          status: "P",
        },
        {
          date: "2023-11-15",
          status: "P",
        },
        {
          date: "2023-11-16",
          status: "P",
        },
      ],
    },
    {
      studentId: "6",
      name: "Sophie Lee",
      rollNumber: "CSE1006",
      branch: "Computer Science and Engineering",
      semester: "4",
      email: "sophie.lee@example.com",
      contactNumber: "999-999-9999",
      additionalInfo: "Art Club President",
      username: "sophie_student",
      password: "art123",
      attendance: [
        {
          date: "2023-11-07",
          status: "P",
        },
        {
          date: "2023-11-08",
          status: "P",
        },
        {
          date: "2023-11-09",
          status: "P",
        },
        {
          date: "2023-11-10",
          status: "P",
        },
        {
          date: "2023-11-11",
          status: "A",
        },
        {
          date: "2023-11-12",
          status: "P",
        },
        {
          date: "2023-11-13",
          status: "A",
        },
        {
          date: "2023-11-14",
          status: "P",
        },
        {
          date: "2023-11-15",
          status: "P",
        },
        {
          date: "2023-11-16",
          status: "P",
        },
      ],
    },
    {
      studentId: "7",
      name: "Mike Miller",
      rollNumber: "CSE1007",
      branch: "Computer Science and Engineering",
      semester: "4",
      email: "mike.miller@example.com",
      contactNumber: "666-666-6666",
      additionalInfo: "Robotics Club Member",
      username: "mike_student",
      password: "pass456",
      attendance: [
        {
          date: "2023-11-07",
          status: "P",
        },
        {
          date: "2023-11-08",
          status: "P",
        },
        {
          date: "2023-11-09",
          status: "P",
        },
        {
          date: "2023-11-10",
          status: "P",
        },
        {
          date: "2023-11-11",
          status: "P",
        },
        {
          date: "2023-11-12",
          status: "P",
        },
        {
          date: "2023-11-13",
          status: "P",
        },
        {
          date: "2023-11-14",
          status: "P",
        },
        {
          date: "2023-11-15",
          status: "P",
        },
        {
          date: "2023-11-16",
          status: "A",
        },
      ],
    },
    {
      studentId: "8",
      name: "Olivia White",
      rollNumber: "CSE1008",
      branch: "Computer Science and Engineering",
      semester: "4",
      email: "olivia.white@example.com",
      contactNumber: "444-444-4444",
      additionalInfo: "Gardening Enthusiast",
      username: "olivia_student",
      password: "flower789",
      attendance: [
        {
          date: "2023-11-07",
          status: "A",
        },
        {
          date: "2023-11-08",
          status: "P",
        },
        {
          date: "2023-11-09",
          status: "P",
        },
        {
          date: "2023-11-10",
          status: "P",
        },
        {
          date: "2023-11-11",
          status: "A",
        },
        {
          date: "2023-11-12",
          status: "P",
        },
        {
          date: "2023-11-13",
          status: "P",
        },
        {
          date: "2023-11-14",
          status: "A",
        },
        {
          date: "2023-11-15",
          status: "A",
        },
        {
          date: "2023-11-16",
          status: "P",
        },
      ],
    },
    {
      studentId: "9",
      name: "Daniel Harris",
      rollNumber: "CSE1009",
      branch: "Computer Science and Engineering",
      semester: "4",
      email: "daniel.harris@example.com",
      contactNumber: "888-888-8888",
      additionalInfo: "Chess Club Captain",
      username: "daniel_student",
      password: "checkmate123",
      attendance: [
        {
          date: "2023-11-07",
          status: "P",
        },
        {
          date: "2023-11-08",
          status: "P",
        },
        {
          date: "2023-11-09",
          status: "P",
        },
        {
          date: "2023-11-10",
          status: "P",
        },
        {
          date: "2023-11-11",
          status: "A",
        },
        {
          date: "2023-11-12",
          status: "P",
        },
        {
          date: "2023-11-13",
          status: "P",
        },
        {
          date: "2023-11-14",
          status: "P",
        },
        {
          date: "2023-11-15",
          status: "P",
        },
        {
          date: "2023-11-16",
          status: "P",
        },
      ],
    },
    {
      studentId: "10",
      name: "Ava Robinson",
      rollNumber: "CSE1010",
      branch: "Computer Science and Engineering",
      semester: "4",
      email: "ava.robinson@example.com",
      contactNumber: "222-222-2222",
      additionalInfo: "Science Fair Winner",
      username: "ava_student",
      password: "science456",
      attendance: [
        {
          date: "2023-11-07",
          status: "A",
        },
        {
          date: "2023-11-08",
          status: "P",
        },
        {
          date: "2023-11-09",
          status: "P",
        },
        {
          date: "2023-11-10",
          status: "P",
        },
        {
          date: "2023-11-11",
          status: "P",
        },
        {
          date: "2023-11-12",
          status: "P",
        },
        {
          date: "2023-11-13",
          status: "P",
        },
        {
          date: "2023-11-14",
          status: "P",
        },
        {
          date: "2023-11-15",
          status: "P",
        },
        {
          date: "2023-11-16",
          status: "P",
        },
      ],
    },
    {
      studentId: "11",
      name: "Ethan Taylor",
      rollNumber: "ECE2001",
      branch: "Electrical and Computer Engineering",
      semester: "4",
      email: "ethan.taylor@example.com",
      contactNumber: "111-222-3333",
      additionalInfo: "None",
      username: "ethan_student",
      password: "ecepass123",
      attendance: [
        {
          date: "2023-11-07",
          status: "P",
        },
        {
          date: "2023-11-08",
          status: "P",
        },
        {
          date: "2023-11-09",
          status: "P",
        },
        {
          date: "2023-11-10",
          status: "P",
        },
        {
          date: "2023-11-11",
          status: "P",
        },
        {
          date: "2023-11-12",
          status: "P",
        },
        {
          date: "2023-11-13",
          status: "A",
        },
        {
          date: "2023-11-14",
          status: "P",
        },
        {
          date: "2023-11-15",
          status: "P",
        },
        {
          date: "2023-11-16",
          status: "P",
        },
      ],
    },
    {
      studentId: "12",
      name: "Emma Harris",
      rollNumber: "ECE2002",
      branch: "Electrical and Computer Engineering",
      semester: "4",
      email: "emma.harris@example.com",
      contactNumber: "444-555-6666",
      additionalInfo: "Research Intern",
      username: "emma_student",
      password: "researcher567",
      attendance: [
        {
          date: "2023-11-07",
          status: "P",
        },
        {
          date: "2023-11-08",
          status: "A",
        },
        {
          date: "2023-11-09",
          status: "P",
        },
        {
          date: "2023-11-10",
          status: "A",
        },
        {
          date: "2023-11-11",
          status: "P",
        },
        {
          date: "2023-11-12",
          status: "P",
        },
        {
          date: "2023-11-13",
          status: "P",
        },
        {
          date: "2023-11-14",
          status: "P",
        },
        {
          date: "2023-11-15",
          status: "P",
        },
        {
          date: "2023-11-16",
          status: "P",
        },
      ],
    },
    {
      studentId: "13",
      name: "Liam Turner",
      rollNumber: "ECE2003",
      branch: "Electrical and Computer Engineering",
      semester: "4",
      email: "liam.turner@example.com",
      contactNumber: "777-888-9999",
      additionalInfo: "Robotics Club President",
      username: "liam_student",
      password: "robo123",
      attendance: [
        {
          date: "2023-11-07",
          status: "P",
        },
        {
          date: "2023-11-08",
          status: "P",
        },
        {
          date: "2023-11-09",
          status: "P",
        },
        {
          date: "2023-11-10",
          status: "P",
        },
        {
          date: "2023-11-11",
          status: "P",
        },
        {
          date: "2023-11-12",
          status: "P",
        },
        {
          date: "2023-11-13",
          status: "P",
        },
        {
          date: "2023-11-14",
          status: "P",
        },
        {
          date: "2023-11-15",
          status: "P",
        },
        {
          date: "2023-11-16",
          status: "P",
        },
      ],
    },
    {
      studentId: "14",
      name: "Olivia Moore",
      rollNumber: "ECE2004",
      branch: "Electrical and Computer Engineering",
      semester: "4",
      email: "olivia.moore@example.com",
      contactNumber: "111-222-3333",
      additionalInfo: "AI Enthusiast",
      username: "olivia_student",
      password: "ai456",
      attendance: [
        {
          date: "2023-11-07",
          status: "A",
        },
        {
          date: "2023-11-08",
          status: "P",
        },
        {
          date: "2023-11-09",
          status: "P",
        },
        {
          date: "2023-11-10",
          status: "P",
        },
        {
          date: "2023-11-11",
          status: "A",
        },
        {
          date: "2023-11-12",
          status: "P",
        },
        {
          date: "2023-11-13",
          status: "P",
        },
        {
          date: "2023-11-14",
          status: "P",
        },
        {
          date: "2023-11-15",
          status: "P",
        },
        {
          date: "2023-11-16",
          status: "A",
        },
      ],
    },
    {
      studentId: "15",
      name: "Noah King",
      rollNumber: "ECE2005",
      branch: "Electrical and Computer Engineering",
      semester: "4",
      email: "noah.king@example.com",
      contactNumber: "444-555-6666",
      additionalInfo: "Member of Embedded Systems Club",
      username: "noah_student",
      password: "embedded789",
      attendance: [
        {
          date: "2023-11-07",
          status: "A",
        },
        {
          date: "2023-11-08",
          status: "P",
        },
        {
          date: "2023-11-09",
          status: "P",
        },
        {
          date: "2023-11-10",
          status: "P",
        },
        {
          date: "2023-11-11",
          status: "P",
        },
        {
          date: "2023-11-12",
          status: "P",
        },
        {
          date: "2023-11-13",
          status: "P",
        },
        {
          date: "2023-11-14",
          status: "P",
        },
        {
          date: "2023-11-15",
          status: "A",
        },
        {
          date: "2023-11-16",
          status: "P",
        },
      ],
    },
    {
      studentId: "16",
      name: "Sophia Turner",
      rollNumber: "ECE2006",
      branch: "Electrical and Computer Engineering",
      semester: "4",
      email: "sophia.turner@example.com",
      contactNumber: "777-888-9999",
      additionalInfo: "Hackathon Winner",
      username: "sophia_student",
      password: "hack567",
      attendance: [
        {
          date: "2023-11-07",
          status: "P",
        },
        {
          date: "2023-11-08",
          status: "P",
        },
        {
          date: "2023-11-09",
          status: "P",
        },
        {
          date: "2023-11-10",
          status: "A",
        },
        {
          date: "2023-11-11",
          status: "P",
        },
        {
          date: "2023-11-12",
          status: "P",
        },
        {
          date: "2023-11-13",
          status: "P",
        },
        {
          date: "2023-11-14",
          status: "P",
        },
        {
          date: "2023-11-15",
          status: "P",
        },
        {
          date: "2023-11-16",
          status: "P",
        },
      ],
    },
    {
      studentId: "17",
      name: "Mason Brown",
      rollNumber: "ECE2007",
      branch: "Electrical and Computer Engineering",
      semester: "4",
      email: "mason.brown@example.com",
      contactNumber: "111-222-3333",
      additionalInfo: "Networking Club Member",
      username: "mason_student",
      password: "networking123",
      attendance: [
        {
          date: "2023-11-07",
          status: "A",
        },
        {
          date: "2023-11-08",
          status: "P",
        },
        {
          date: "2023-11-09",
          status: "P",
        },
        {
          date: "2023-11-10",
          status: "P",
        },
        {
          date: "2023-11-11",
          status: "P",
        },
        {
          date: "2023-11-12",
          status: "P",
        },
        {
          date: "2023-11-13",
          status: "P",
        },
        {
          date: "2023-11-14",
          status: "P",
        },
        {
          date: "2023-11-15",
          status: "P",
        },
        {
          date: "2023-11-16",
          status: "P",
        },
      ],
    },
    {
      studentId: "18",
      name: "Amelia Clark",
      rollNumber: "ECE2008",
      branch: "Electrical and Computer Engineering",
      semester: "4",
      email: "amelia.clark@example.com",
      contactNumber: "444-555-6666",
      additionalInfo: "Amateur Radio Operator",
      username: "amelia_student",
      password: "radio789",
      attendance: [
        {
          date: "2023-11-07",
          status: "A",
        },
        {
          date: "2023-11-08",
          status: "P",
        },
        {
          date: "2023-11-09",
          status: "P",
        },
        {
          date: "2023-11-10",
          status: "P",
        },
        {
          date: "2023-11-11",
          status: "A",
        },
        {
          date: "2023-11-12",
          status: "P",
        },
        {
          date: "2023-11-13",
          status: "P",
        },
        {
          date: "2023-11-14",
          status: "P",
        },
        {
          date: "2023-11-15",
          status: "P",
        },
        {
          date: "2023-11-16",
          status: "P",
        },
      ],
    },
    {
      studentId: "19",
      name: "Logan White",
      rollNumber: "ECE2009",
      branch: "Electrical and Computer Engineering",
      semester: "4",
      email: "logan.white@example.com",
      contactNumber: "777-888-9999",
      additionalInfo: "Drone Enthusiast",
      username: "logan_student",
      password: "drone123",
      attendance: [
        {
          date: "2023-11-07",
          status: "P",
        },
        {
          date: "2023-11-08",
          status: "P",
        },
        {
          date: "2023-11-09",
          status: "P",
        },
        {
          date: "2023-11-10",
          status: "A",
        },
        {
          date: "2023-11-11",
          status: "A",
        },
        {
          date: "2023-11-12",
          status: "P",
        },
        {
          date: "2023-11-13",
          status: "P",
        },
        {
          date: "2023-11-14",
          status: "P",
        },
        {
          date: "2023-11-15",
          status: "A",
        },
        {
          date: "2023-11-16",
          status: "A",
        },
      ],
    },
    {
      studentId: "20",
      name: "Aria Evans",
      rollNumber: "ECE2010",
      branch: "Electrical and Computer Engineering",
      semester: "4",
      email: "aria.evans@example.com",
      contactNumber: "111-222-3333",
      additionalInfo: "Cybersecurity Club Captain",
      username: "aria_student",
      password: "secure123",
      attendance: [
        {
          date: "2023-11-07",
          status: "P",
        },
        {
          date: "2023-11-08",
          status: "P",
        },
        {
          date: "2023-11-09",
          status: "P",
        },
        {
          date: "2023-11-10",
          status: "P",
        },
        {
          date: "2023-11-11",
          status: "P",
        },
        {
          date: "2023-11-12",
          status: "P",
        },
        {
          date: "2023-11-13",
          status: "P",
        },
        {
          date: "2023-11-14",
          status: "P",
        },
        {
          date: "2023-11-15",
          status: "P",
        },
        {
          date: "2023-11-16",
          status: "P",
        },
      ],
    },
  ];
  const teachersData = [
    {
      username: "john_doe",
      passwordHash: "hashed_password_here",
      name: "John Doe",
      subject: "C++",
      classes: [
        {
          branch: "CSE",
          classCode: "CSE101",
          students: [
            {
              studentId: "1",
              name: "John",
              rollNumber: "CSE1001",
              branch: "Computer Science and Engineering",
              semester: "4",
              email: "john.doe@example.com",
              contactNumber: "123-456-7890",
              additionalInfo: "None",
              username: "john_student",
              password: "password123",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "A",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "2",
              name: "Jane Smith",
              rollNumber: "CSE1002",
              branch: "Computer Science and Engineering",
              semester: "4",
              email: "jane.smith@example.com",
              contactNumber: "987-654-3210",
              additionalInfo: "Allergies: None",
              username: "jane_student",
              password: "securepass",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "A",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "3",
              name: "Alex Brown",
              rollNumber: "CSE1003",
              branch: "Computer Science and Engineering",
              semester: "4",
              email: "alex.brown@example.com",
              contactNumber: "555-555-5555",
              additionalInfo: "Sports Enthusiast",
              username: "alex_student",
              password: "pass1234",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "A",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "A",
                },
                {
                  date: "2023-11-12",
                  status: "A",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "A",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "4",
              name: "Emily Davis",
              rollNumber: "CSE1004",
              branch: "Computer Science and Engineering",
              semester: "4",
              email: "emily.davis@example.com",
              contactNumber: "333-333-3333",
              additionalInfo: "Programming Club Member",
              username: "emily_student",
              password: "mysecretpass",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "A",
                },
                {
                  date: "2023-11-12",
                  status: "A",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "5",
              name: "Chris Wilson",
              rollNumber: "CSE1005",
              branch: "Computer Science and Engineering",
              semester: "4",
              email: "chris.wilson@example.com",
              contactNumber: "777-777-7777",
              additionalInfo: "Musician",
              username: "chris_student",
              password: "mypassword",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "A",
                },
                {
                  date: "2023-11-12",
                  status: "A",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "6",
              name: "Sophie Lee",
              rollNumber: "CSE1006",
              branch: "Computer Science and Engineering",
              semester: "4",
              email: "sophie.lee@example.com",
              contactNumber: "999-999-9999",
              additionalInfo: "Art Club President",
              username: "sophie_student",
              password: "art123",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "A",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "A",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "7",
              name: "Mike Miller",
              rollNumber: "CSE1007",
              branch: "Computer Science and Engineering",
              semester: "4",
              email: "mike.miller@example.com",
              contactNumber: "666-666-6666",
              additionalInfo: "Robotics Club Member",
              username: "mike_student",
              password: "pass456",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "A",
                },
              ],
            },
            {
              studentId: "8",
              name: "Olivia White",
              rollNumber: "CSE1008",
              branch: "Computer Science and Engineering",
              semester: "4",
              email: "olivia.white@example.com",
              contactNumber: "444-444-4444",
              additionalInfo: "Gardening Enthusiast",
              username: "olivia_student",
              password: "flower789",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "A",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "A",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "A",
                },
                {
                  date: "2023-11-15",
                  status: "A",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "9",
              name: "Daniel Harris",
              rollNumber: "CSE1009",
              branch: "Computer Science and Engineering",
              semester: "4",
              email: "daniel.harris@example.com",
              contactNumber: "888-888-8888",
              additionalInfo: "Chess Club Captain",
              username: "daniel_student",
              password: "checkmate123",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "A",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "10",
              name: "Ava Robinson",
              rollNumber: "CSE1010",
              branch: "Computer Science and Engineering",
              semester: "4",
              email: "ava.robinson@example.com",
              contactNumber: "222-222-2222",
              additionalInfo: "Science Fair Winner",
              username: "ava_student",
              password: "science456",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "A",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "11",
              name: "Ethan Taylor",
              rollNumber: "ECE2001",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "ethan.taylor@example.com",
              contactNumber: "111-222-3333",
              additionalInfo: "None",
              username: "ethan_student",
              password: "ecepass123",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "A",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "12",
              name: "Emma Harris",
              rollNumber: "ECE2002",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "emma.harris@example.com",
              contactNumber: "444-555-6666",
              additionalInfo: "Research Intern",
              username: "emma_student",
              password: "researcher567",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "A",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "A",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "13",
              name: "Liam Turner",
              rollNumber: "ECE2003",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "liam.turner@example.com",
              contactNumber: "777-888-9999",
              additionalInfo: "Robotics Club President",
              username: "liam_student",
              password: "robo123",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "14",
              name: "Olivia Moore",
              rollNumber: "ECE2004",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "olivia.moore@example.com",
              contactNumber: "111-222-3333",
              additionalInfo: "AI Enthusiast",
              username: "olivia_student",
              password: "ai456",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "A",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "A",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "A",
                },
              ],
            },
            {
              studentId: "15",
              name: "Noah King",
              rollNumber: "ECE2005",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "noah.king@example.com",
              contactNumber: "444-555-6666",
              additionalInfo: "Member of Embedded Systems Club",
              username: "noah_student",
              password: "embedded789",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "A",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "A",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "16",
              name: "Sophia Turner",
              rollNumber: "ECE2006",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "sophia.turner@example.com",
              contactNumber: "777-888-9999",
              additionalInfo: "Hackathon Winner",
              username: "sophia_student",
              password: "hack567",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "A",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "17",
              name: "Mason Brown",
              rollNumber: "ECE2007",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "mason.brown@example.com",
              contactNumber: "111-222-3333",
              additionalInfo: "Networking Club Member",
              username: "mason_student",
              password: "networking123",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "A",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "18",
              name: "Amelia Clark",
              rollNumber: "ECE2008",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "amelia.clark@example.com",
              contactNumber: "444-555-6666",
              additionalInfo: "Amateur Radio Operator",
              username: "amelia_student",
              password: "radio789",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "A",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "A",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "19",
              name: "Logan White",
              rollNumber: "ECE2009",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "logan.white@example.com",
              contactNumber: "777-888-9999",
              additionalInfo: "Drone Enthusiast",
              username: "logan_student",
              password: "drone123",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "A",
                },
                {
                  date: "2023-11-11",
                  status: "A",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "A",
                },
                {
                  date: "2023-11-16",
                  status: "A",
                },
              ],
            },
            {
              studentId: "20",
              name: "Aria Evans",
              rollNumber: "ECE2010",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "aria.evans@example.com",
              contactNumber: "111-222-3333",
              additionalInfo: "Cybersecurity Club Captain",
              username: "aria_student",
              password: "secure123",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
          ],
        },
        {
          branch: "ECE",
          classCode: "ECE1",
          students: [
            {
              studentId: "11",
              name: "Ethan Taylor",
              rollNumber: "ECE2001",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "ethan.taylor@example.com",
              contactNumber: "111-222-3333",
              additionalInfo: "None",
              username: "ethan_student",
              password: "ecepass123",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "A",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "12",
              name: "Emma Harris",
              rollNumber: "ECE2002",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "emma.harris@example.com",
              contactNumber: "444-555-6666",
              additionalInfo: "Research Intern",
              username: "emma_student",
              password: "researcher567",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "A",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "A",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "13",
              name: "Liam Turner",
              rollNumber: "ECE2003",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "liam.turner@example.com",
              contactNumber: "777-888-9999",
              additionalInfo: "Robotics Club President",
              username: "liam_student",
              password: "robo123",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "14",
              name: "Olivia Moore",
              rollNumber: "ECE2004",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "olivia.moore@example.com",
              contactNumber: "111-222-3333",
              additionalInfo: "AI Enthusiast",
              username: "olivia_student",
              password: "ai456",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "A",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "A",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "A",
                },
              ],
            },
            {
              studentId: "15",
              name: "Noah King",
              rollNumber: "ECE2005",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "noah.king@example.com",
              contactNumber: "444-555-6666",
              additionalInfo: "Member of Embedded Systems Club",
              username: "noah_student",
              password: "embedded789",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "A",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "A",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "16",
              name: "Sophia Turner",
              rollNumber: "ECE2006",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "sophia.turner@example.com",
              contactNumber: "777-888-9999",
              additionalInfo: "Hackathon Winner",
              username: "sophia_student",
              password: "hack567",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "A",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "17",
              name: "Mason Brown",
              rollNumber: "ECE2007",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "mason.brown@example.com",
              contactNumber: "111-222-3333",
              additionalInfo: "Networking Club Member",
              username: "mason_student",
              password: "networking123",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "A",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "18",
              name: "Amelia Clark",
              rollNumber: "ECE2008",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "amelia.clark@example.com",
              contactNumber: "444-555-6666",
              additionalInfo: "Amateur Radio Operator",
              username: "amelia_student",
              password: "radio789",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "A",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "A",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "19",
              name: "Logan White",
              rollNumber: "ECE2009",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "logan.white@example.com",
              contactNumber: "777-888-9999",
              additionalInfo: "Drone Enthusiast",
              username: "logan_student",
              password: "drone123",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "A",
                },
                {
                  date: "2023-11-11",
                  status: "A",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "A",
                },
                {
                  date: "2023-11-16",
                  status: "A",
                },
              ],
            },
            {
              studentId: "20",
              name: "Aria Evans",
              rollNumber: "ECE2010",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "aria.evans@example.com",
              contactNumber: "111-222-3333",
              additionalInfo: "Cybersecurity Club Captain",
              username: "aria_student",
              password: "secure123",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
          ],
        },
        // ... other classes for John Doe
      ],
    },
    {
      username: "jane_smith",
      passwordHash: "hashed_password_here",
      name: "Jane Smith",
      subject: "Java",
      classes: [
        {
          branch: "CSE",
          classCode: "CSE102",
          students: [
            {
              studentId: "1",
              name: "John",
              rollNumber: "CSE1001",
              branch: "Computer Science and Engineering",
              semester: "4",
              email: "john.doe@example.com",
              contactNumber: "123-456-7890",
              additionalInfo: "None",
              username: "john_student",
              password: "password123",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "A",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "2",
              name: "Jane Smith",
              rollNumber: "CSE1002",
              branch: "Computer Science and Engineering",
              semester: "4",
              email: "jane.smith@example.com",
              contactNumber: "987-654-3210",
              additionalInfo: "Allergies: None",
              username: "jane_student",
              password: "securepass",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "A",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "3",
              name: "Alex Brown",
              rollNumber: "CSE1003",
              branch: "Computer Science and Engineering",
              semester: "4",
              email: "alex.brown@example.com",
              contactNumber: "555-555-5555",
              additionalInfo: "Sports Enthusiast",
              username: "alex_student",
              password: "pass1234",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "A",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "A",
                },
                {
                  date: "2023-11-12",
                  status: "A",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "A",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "4",
              name: "Emily Davis",
              rollNumber: "CSE1004",
              branch: "Computer Science and Engineering",
              semester: "4",
              email: "emily.davis@example.com",
              contactNumber: "333-333-3333",
              additionalInfo: "Programming Club Member",
              username: "emily_student",
              password: "mysecretpass",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "A",
                },
                {
                  date: "2023-11-12",
                  status: "A",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "5",
              name: "Chris Wilson",
              rollNumber: "CSE1005",
              branch: "Computer Science and Engineering",
              semester: "4",
              email: "chris.wilson@example.com",
              contactNumber: "777-777-7777",
              additionalInfo: "Musician",
              username: "chris_student",
              password: "mypassword",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "A",
                },
                {
                  date: "2023-11-12",
                  status: "A",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "6",
              name: "Sophie Lee",
              rollNumber: "CSE1006",
              branch: "Computer Science and Engineering",
              semester: "4",
              email: "sophie.lee@example.com",
              contactNumber: "999-999-9999",
              additionalInfo: "Art Club President",
              username: "sophie_student",
              password: "art123",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "A",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "A",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "7",
              name: "Mike Miller",
              rollNumber: "CSE1007",
              branch: "Computer Science and Engineering",
              semester: "4",
              email: "mike.miller@example.com",
              contactNumber: "666-666-6666",
              additionalInfo: "Robotics Club Member",
              username: "mike_student",
              password: "pass456",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "A",
                },
              ],
            },
            {
              studentId: "8",
              name: "Olivia White",
              rollNumber: "CSE1008",
              branch: "Computer Science and Engineering",
              semester: "4",
              email: "olivia.white@example.com",
              contactNumber: "444-444-4444",
              additionalInfo: "Gardening Enthusiast",
              username: "olivia_student",
              password: "flower789",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "A",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "A",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "A",
                },
                {
                  date: "2023-11-15",
                  status: "A",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "9",
              name: "Daniel Harris",
              rollNumber: "CSE1009",
              branch: "Computer Science and Engineering",
              semester: "4",
              email: "daniel.harris@example.com",
              contactNumber: "888-888-8888",
              additionalInfo: "Chess Club Captain",
              username: "daniel_student",
              password: "checkmate123",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "A",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "10",
              name: "Ava Robinson",
              rollNumber: "CSE1010",
              branch: "Computer Science and Engineering",
              semester: "4",
              email: "ava.robinson@example.com",
              contactNumber: "222-222-2222",
              additionalInfo: "Science Fair Winner",
              username: "ava_student",
              password: "science456",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "A",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
          ],
        },
        {
          branch: "ECE",
          classCode: "ECE1",
          students: [
            {
              studentId: "11",
              name: "Ethan Taylor",
              rollNumber: "ECE2001",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "ethan.taylor@example.com",
              contactNumber: "111-222-3333",
              additionalInfo: "None",
              username: "ethan_student",
              password: "ecepass123",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "A",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "12",
              name: "Emma Harris",
              rollNumber: "ECE2002",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "emma.harris@example.com",
              contactNumber: "444-555-6666",
              additionalInfo: "Research Intern",
              username: "emma_student",
              password: "researcher567",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "A",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "A",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "13",
              name: "Liam Turner",
              rollNumber: "ECE2003",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "liam.turner@example.com",
              contactNumber: "777-888-9999",
              additionalInfo: "Robotics Club President",
              username: "liam_student",
              password: "robo123",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "14",
              name: "Olivia Moore",
              rollNumber: "ECE2004",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "olivia.moore@example.com",
              contactNumber: "111-222-3333",
              additionalInfo: "AI Enthusiast",
              username: "olivia_student",
              password: "ai456",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "A",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "A",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "A",
                },
              ],
            },
            {
              studentId: "15",
              name: "Noah King",
              rollNumber: "ECE2005",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "noah.king@example.com",
              contactNumber: "444-555-6666",
              additionalInfo: "Member of Embedded Systems Club",
              username: "noah_student",
              password: "embedded789",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "A",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "A",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "16",
              name: "Sophia Turner",
              rollNumber: "ECE2006",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "sophia.turner@example.com",
              contactNumber: "777-888-9999",
              additionalInfo: "Hackathon Winner",
              username: "sophia_student",
              password: "hack567",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "A",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "17",
              name: "Mason Brown",
              rollNumber: "ECE2007",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "mason.brown@example.com",
              contactNumber: "111-222-3333",
              additionalInfo: "Networking Club Member",
              username: "mason_student",
              password: "networking123",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "A",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "18",
              name: "Amelia Clark",
              rollNumber: "ECE2008",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "amelia.clark@example.com",
              contactNumber: "444-555-6666",
              additionalInfo: "Amateur Radio Operator",
              username: "amelia_student",
              password: "radio789",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "A",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "A",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "19",
              name: "Logan White",
              rollNumber: "ECE2009",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "logan.white@example.com",
              contactNumber: "777-888-9999",
              additionalInfo: "Drone Enthusiast",
              username: "logan_student",
              password: "drone123",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "A",
                },
                {
                  date: "2023-11-11",
                  status: "A",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "A",
                },
                {
                  date: "2023-11-16",
                  status: "A",
                },
              ],
            },
            {
              studentId: "20",
              name: "Aria Evans",
              rollNumber: "ECE2010",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "aria.evans@example.com",
              contactNumber: "111-222-3333",
              additionalInfo: "Cybersecurity Club Captain",
              username: "aria_student",
              password: "secure123",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
          ],
        },
        // ... other classes for Jane Smith
      ],
    },
    {
      username: "suri108",
      passwordHash: "hashed_password_here",
      name: "Suri",
      subject: "Data Structures",
      classes: [
        {
          branch: "CSE",
          classCode: "CSE102",
          students: [
            {
              studentId: "1",
              name: "John",
              rollNumber: "CSE1001",
              branch: "Computer Science and Engineering",
              semester: "4",
              email: "john.doe@example.com",
              contactNumber: "123-456-7890",
              additionalInfo: "None",
              username: "john_student",
              password: "password123",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "A",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "2",
              name: "Jane Smith",
              rollNumber: "CSE1002",
              branch: "Computer Science and Engineering",
              semester: "4",
              email: "jane.smith@example.com",
              contactNumber: "987-654-3210",
              additionalInfo: "Allergies: None",
              username: "jane_student",
              password: "securepass",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "A",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "3",
              name: "Alex Brown",
              rollNumber: "CSE1003",
              branch: "Computer Science and Engineering",
              semester: "4",
              email: "alex.brown@example.com",
              contactNumber: "555-555-5555",
              additionalInfo: "Sports Enthusiast",
              username: "alex_student",
              password: "pass1234",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "A",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "A",
                },
                {
                  date: "2023-11-12",
                  status: "A",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "A",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "4",
              name: "Emily Davis",
              rollNumber: "CSE1004",
              branch: "Computer Science and Engineering",
              semester: "4",
              email: "emily.davis@example.com",
              contactNumber: "333-333-3333",
              additionalInfo: "Programming Club Member",
              username: "emily_student",
              password: "mysecretpass",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "A",
                },
                {
                  date: "2023-11-12",
                  status: "A",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "5",
              name: "Chris Wilson",
              rollNumber: "CSE1005",
              branch: "Computer Science and Engineering",
              semester: "4",
              email: "chris.wilson@example.com",
              contactNumber: "777-777-7777",
              additionalInfo: "Musician",
              username: "chris_student",
              password: "mypassword",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "A",
                },
                {
                  date: "2023-11-12",
                  status: "A",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "6",
              name: "Sophie Lee",
              rollNumber: "CSE1006",
              branch: "Computer Science and Engineering",
              semester: "4",
              email: "sophie.lee@example.com",
              contactNumber: "999-999-9999",
              additionalInfo: "Art Club President",
              username: "sophie_student",
              password: "art123",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "A",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "A",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "7",
              name: "Mike Miller",
              rollNumber: "CSE1007",
              branch: "Computer Science and Engineering",
              semester: "4",
              email: "mike.miller@example.com",
              contactNumber: "666-666-6666",
              additionalInfo: "Robotics Club Member",
              username: "mike_student",
              password: "pass456",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "A",
                },
              ],
            },
            {
              studentId: "8",
              name: "Olivia White",
              rollNumber: "CSE1008",
              branch: "Computer Science and Engineering",
              semester: "4",
              email: "olivia.white@example.com",
              contactNumber: "444-444-4444",
              additionalInfo: "Gardening Enthusiast",
              username: "olivia_student",
              password: "flower789",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "A",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "A",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "A",
                },
                {
                  date: "2023-11-15",
                  status: "A",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "9",
              name: "Daniel Harris",
              rollNumber: "CSE1009",
              branch: "Computer Science and Engineering",
              semester: "4",
              email: "daniel.harris@example.com",
              contactNumber: "888-888-8888",
              additionalInfo: "Chess Club Captain",
              username: "daniel_student",
              password: "checkmate123",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "A",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "10",
              name: "Ava Robinson",
              rollNumber: "CSE1010",
              branch: "Computer Science and Engineering",
              semester: "4",
              email: "ava.robinson@example.com",
              contactNumber: "222-222-2222",
              additionalInfo: "Science Fair Winner",
              username: "ava_student",
              password: "science456",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "A",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
          ],
        },
        {
          branch: "ECE",
          classCode: "ECE1",
          students: [
            {
              studentId: "11",
              name: "Ethan Taylor",
              rollNumber: "ECE2001",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "ethan.taylor@example.com",
              contactNumber: "111-222-3333",
              additionalInfo: "None",
              username: "ethan_student",
              password: "ecepass123",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "A",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "12",
              name: "Emma Harris",
              rollNumber: "ECE2002",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "emma.harris@example.com",
              contactNumber: "444-555-6666",
              additionalInfo: "Research Intern",
              username: "emma_student",
              password: "researcher567",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "A",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "A",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "13",
              name: "Liam Turner",
              rollNumber: "ECE2003",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "liam.turner@example.com",
              contactNumber: "777-888-9999",
              additionalInfo: "Robotics Club President",
              username: "liam_student",
              password: "robo123",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "14",
              name: "Olivia Moore",
              rollNumber: "ECE2004",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "olivia.moore@example.com",
              contactNumber: "111-222-3333",
              additionalInfo: "AI Enthusiast",
              username: "olivia_student",
              password: "ai456",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "A",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "A",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "A",
                },
              ],
            },
            {
              studentId: "15",
              name: "Noah King",
              rollNumber: "ECE2005",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "noah.king@example.com",
              contactNumber: "444-555-6666",
              additionalInfo: "Member of Embedded Systems Club",
              username: "noah_student",
              password: "embedded789",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "A",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "A",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "16",
              name: "Sophia Turner",
              rollNumber: "ECE2006",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "sophia.turner@example.com",
              contactNumber: "777-888-9999",
              additionalInfo: "Hackathon Winner",
              username: "sophia_student",
              password: "hack567",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "A",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "17",
              name: "Mason Brown",
              rollNumber: "ECE2007",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "mason.brown@example.com",
              contactNumber: "111-222-3333",
              additionalInfo: "Networking Club Member",
              username: "mason_student",
              password: "networking123",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "A",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "18",
              name: "Amelia Clark",
              rollNumber: "ECE2008",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "amelia.clark@example.com",
              contactNumber: "444-555-6666",
              additionalInfo: "Amateur Radio Operator",
              username: "amelia_student",
              password: "radio789",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "A",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "A",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "19",
              name: "Logan White",
              rollNumber: "ECE2009",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "logan.white@example.com",
              contactNumber: "777-888-9999",
              additionalInfo: "Drone Enthusiast",
              username: "logan_student",
              password: "drone123",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "A",
                },
                {
                  date: "2023-11-11",
                  status: "A",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "A",
                },
                {
                  date: "2023-11-16",
                  status: "A",
                },
              ],
            },
            {
              studentId: "20",
              name: "Aria Evans",
              rollNumber: "ECE2010",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "aria.evans@example.com",
              contactNumber: "111-222-3333",
              additionalInfo: "Cybersecurity Club Captain",
              username: "aria_student",
              password: "secure123",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
          ],
        },
        // ... other classes for Jane Smith
      ],
    },
    {
      username: "rani108",
      passwordHash: "hashed_password_here",
      name: "Rani",
      subject: "Data Structures",
      classes: [
        {
          branch: "CSE",
          classCode: "CSE102",
          students: [
            {
              studentId: "1",
              name: "John",
              rollNumber: "CSE1001",
              branch: "Computer Science and Engineering",
              semester: "4",
              email: "john.doe@example.com",
              contactNumber: "123-456-7890",
              additionalInfo: "None",
              username: "john_student",
              password: "password123",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "A",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "2",
              name: "Jane Smith",
              rollNumber: "CSE1002",
              branch: "Computer Science and Engineering",
              semester: "4",
              email: "jane.smith@example.com",
              contactNumber: "987-654-3210",
              additionalInfo: "Allergies: None",
              username: "jane_student",
              password: "securepass",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "A",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "3",
              name: "Alex Brown",
              rollNumber: "CSE1003",
              branch: "Computer Science and Engineering",
              semester: "4",
              email: "alex.brown@example.com",
              contactNumber: "555-555-5555",
              additionalInfo: "Sports Enthusiast",
              username: "alex_student",
              password: "pass1234",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "A",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "A",
                },
                {
                  date: "2023-11-12",
                  status: "A",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "A",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "4",
              name: "Emily Davis",
              rollNumber: "CSE1004",
              branch: "Computer Science and Engineering",
              semester: "4",
              email: "emily.davis@example.com",
              contactNumber: "333-333-3333",
              additionalInfo: "Programming Club Member",
              username: "emily_student",
              password: "mysecretpass",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "A",
                },
                {
                  date: "2023-11-12",
                  status: "A",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "5",
              name: "Chris Wilson",
              rollNumber: "CSE1005",
              branch: "Computer Science and Engineering",
              semester: "4",
              email: "chris.wilson@example.com",
              contactNumber: "777-777-7777",
              additionalInfo: "Musician",
              username: "chris_student",
              password: "mypassword",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "A",
                },
                {
                  date: "2023-11-12",
                  status: "A",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "6",
              name: "Sophie Lee",
              rollNumber: "CSE1006",
              branch: "Computer Science and Engineering",
              semester: "4",
              email: "sophie.lee@example.com",
              contactNumber: "999-999-9999",
              additionalInfo: "Art Club President",
              username: "sophie_student",
              password: "art123",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "A",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "A",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "7",
              name: "Mike Miller",
              rollNumber: "CSE1007",
              branch: "Computer Science and Engineering",
              semester: "4",
              email: "mike.miller@example.com",
              contactNumber: "666-666-6666",
              additionalInfo: "Robotics Club Member",
              username: "mike_student",
              password: "pass456",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "A",
                },
              ],
            },
            {
              studentId: "8",
              name: "Olivia White",
              rollNumber: "CSE1008",
              branch: "Computer Science and Engineering",
              semester: "4",
              email: "olivia.white@example.com",
              contactNumber: "444-444-4444",
              additionalInfo: "Gardening Enthusiast",
              username: "olivia_student",
              password: "flower789",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "A",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "A",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "A",
                },
                {
                  date: "2023-11-15",
                  status: "A",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "9",
              name: "Daniel Harris",
              rollNumber: "CSE1009",
              branch: "Computer Science and Engineering",
              semester: "4",
              email: "daniel.harris@example.com",
              contactNumber: "888-888-8888",
              additionalInfo: "Chess Club Captain",
              username: "daniel_student",
              password: "checkmate123",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "A",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "10",
              name: "Ava Robinson",
              rollNumber: "CSE1010",
              branch: "Computer Science and Engineering",
              semester: "4",
              email: "ava.robinson@example.com",
              contactNumber: "222-222-2222",
              additionalInfo: "Science Fair Winner",
              username: "ava_student",
              password: "science456",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "A",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
          ],
        },
        {
          branch: "ECE",
          classCode: "ECE1",
          students: [
            {
              studentId: "11",
              name: "Ethan Taylor",
              rollNumber: "ECE2001",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "ethan.taylor@example.com",
              contactNumber: "111-222-3333",
              additionalInfo: "None",
              username: "ethan_student",
              password: "ecepass123",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "A",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "12",
              name: "Emma Harris",
              rollNumber: "ECE2002",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "emma.harris@example.com",
              contactNumber: "444-555-6666",
              additionalInfo: "Research Intern",
              username: "emma_student",
              password: "researcher567",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "A",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "A",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "13",
              name: "Liam Turner",
              rollNumber: "ECE2003",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "liam.turner@example.com",
              contactNumber: "777-888-9999",
              additionalInfo: "Robotics Club President",
              username: "liam_student",
              password: "robo123",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "14",
              name: "Olivia Moore",
              rollNumber: "ECE2004",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "olivia.moore@example.com",
              contactNumber: "111-222-3333",
              additionalInfo: "AI Enthusiast",
              username: "olivia_student",
              password: "ai456",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "A",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "A",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "A",
                },
              ],
            },
            {
              studentId: "15",
              name: "Noah King",
              rollNumber: "ECE2005",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "noah.king@example.com",
              contactNumber: "444-555-6666",
              additionalInfo: "Member of Embedded Systems Club",
              username: "noah_student",
              password: "embedded789",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "A",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "A",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "16",
              name: "Sophia Turner",
              rollNumber: "ECE2006",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "sophia.turner@example.com",
              contactNumber: "777-888-9999",
              additionalInfo: "Hackathon Winner",
              username: "sophia_student",
              password: "hack567",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "A",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "17",
              name: "Mason Brown",
              rollNumber: "ECE2007",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "mason.brown@example.com",
              contactNumber: "111-222-3333",
              additionalInfo: "Networking Club Member",
              username: "mason_student",
              password: "networking123",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "A",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "18",
              name: "Amelia Clark",
              rollNumber: "ECE2008",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "amelia.clark@example.com",
              contactNumber: "444-555-6666",
              additionalInfo: "Amateur Radio Operator",
              username: "amelia_student",
              password: "radio789",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "A",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "A",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
            {
              studentId: "19",
              name: "Logan White",
              rollNumber: "ECE2009",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "logan.white@example.com",
              contactNumber: "777-888-9999",
              additionalInfo: "Drone Enthusiast",
              username: "logan_student",
              password: "drone123",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "A",
                },
                {
                  date: "2023-11-11",
                  status: "A",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "A",
                },
                {
                  date: "2023-11-16",
                  status: "A",
                },
              ],
            },
            {
              studentId: "20",
              name: "Aria Evans",
              rollNumber: "ECE2010",
              branch: "Electrical and Computer Engineering",
              semester: "4",
              email: "aria.evans@example.com",
              contactNumber: "111-222-3333",
              additionalInfo: "Cybersecurity Club Captain",
              username: "aria_student",
              password: "secure123",
              attendance: [
                {
                  date: "2023-11-07",
                  status: "P",
                },
                {
                  date: "2023-11-08",
                  status: "P",
                },
                {
                  date: "2023-11-09",
                  status: "P",
                },
                {
                  date: "2023-11-10",
                  status: "P",
                },
                {
                  date: "2023-11-11",
                  status: "P",
                },
                {
                  date: "2023-11-12",
                  status: "P",
                },
                {
                  date: "2023-11-13",
                  status: "P",
                },
                {
                  date: "2023-11-14",
                  status: "P",
                },
                {
                  date: "2023-11-15",
                  status: "P",
                },
                {
                  date: "2023-11-16",
                  status: "P",
                },
              ],
            },
          ],
        },
        // ... other classes for Jane Smith
      ],
    },
    // ... other teachers
  ];

  return (
    <div>
      <h1>Your React App</h1>
      <AddDataToFirestore studentsData={studentsData} />
    </div>
  );
};

export default AddData;
