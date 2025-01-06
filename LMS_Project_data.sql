-- User Table
USE lms_project;
INSERT INTO `User` (`User_Name`, `Role`, `Passward`) VALUES
('admin01', 'Admin', 'admin123'),
('admin02','Admin','admin124'),
('student01', 'Student', 'student123'),
('student02', 'Student', 'student234'),
('tutor01', 'Tutor', 'tutor123'),
('tutor02', 'Tutor', 'tutor234');

-- Faculty Table
INSERT INTO `Faculty` (`Faculty_ID`, `Faculty_Name`, `Building`) VALUES
('F01', 'Engineering', 'Building A'),
('F02', 'Business', 'Building B'),
('F03', 'Science', 'Building C'),
('F04', 'Arts', 'Building D'),
('F05', 'Law', 'Building E');

-- Courses Table
INSERT INTO `Courses` (`Course_ID`, `Course_Name`, `Faculty_ID`, `Required_Credit`, `Description`) VALUES
('C01', 'Computer Science', 'F01', 120, 'Learn CS basics'),
('C02', 'Mechanical Engineering', 'F01', 140, 'Mechanics'),
('C03', 'Business Administration', 'F02', 100, 'Learn Business'),
('C04', 'Physics', 'F03', 110, 'Explore Physics'),
('C05', 'Fine Arts', 'F04', 90, 'Creative studies');

-- Tutor Table
INSERT INTO `Tutor` (`Tutor_ID`, `Tutor_Type`, `User_Name`, `First_Name`, `Last_Name`, `Address`, `Phone_Number`, `Email`, `Birth_Date`, `NIC`, `Course_ID`) VALUES
('T01', 'Lecturer', 'tutor01', 'John', 'Doe', '123 Tutor Lane', '1234567890', 'john.doe@example.com', '1980-01-01', '987654321V', 'C01'),
('T02', 'Instructor', 'tutor02', 'Jane', 'Smith', '456 Tutor Avenue', '0987654321', 'jane.smith@example.com', '1985-02-01', '123456789V', 'C02'),
('T03', 'Lecturer', 'tutor01', 'Jim', 'Beam', '789 Tutor Street', '1112223334', 'jim.beam@example.com', '1978-03-01', '456789123V', 'C03'),
('T04', 'Instructor', 'tutor02', 'Emma', 'Stone', '321 Tutor Road', '2223334445', 'emma.stone@example.com', '1990-04-01', '789123456V', 'C04'),
('T05', 'Lecturer', 'tutor01', 'Liam', 'Neeson', '654 Tutor Blvd', '3334445556', 'liam.neeson@example.com', '1975-05-01', '654987321V', 'C05');

-- Student Table
INSERT INTO `Student` (`Student_ID`, `User_Name`, `First_Name`, `Last_Name`, `Address`, `Phone_Number`, `Email`, `Birth_Date`, `NIC`, `Course_ID`) VALUES
('S01', 'student01', 'Alice', 'Brown', '12 Student Way', '1239874560', 'alice.brown@example.com', '2000-06-01', '987321654V', 'C01'),
('S02', 'student02', 'Bob', 'Green', '34 Student Lane', '3216549870', 'bob.green@example.com', '1999-07-01', '654321987V', 'C02'),
('S03', 'student01', 'Charlie', 'Black', '56 Student Street', '9876543210', 'charlie.black@example.com', '2001-08-01', '321654987V', 'C03'),
('S04', 'student02', 'David', 'White', '78 Student Avenue', '5678901234', 'david.white@example.com', '2002-09-01', '123987654V', 'C04'),
('S05', 'student01', 'Eve', 'Gray', '90 Student Road', '8901234567', 'eve.gray@example.com', '2003-10-01', '789654321V', 'C05');

-- Admin Table
INSERT INTO `Admin` (`Admin_ID`, `User_Name`, `First_Name`, `Last_Name`, `Address`, `Phone_Number`, `Email`, `Birth_Date`, `NIC`) VALUES
('A01', 'admin01', 'Admin', 'One', 'Admin HQ', '9876543210', 'admin1@example.com', '1985-01-01', '123456789V'),
('A02', 'admin02', 'Admin', 'Two', 'Admin Office', '9876543220', 'admin2@example.com', '1986-02-02', '123456780V'),
('A03', 'admin01', 'Admin', 'Three', 'Admin Center', '9876543230', 'admin3@example.com', '1987-03-03', '123456781V'),
('A04', 'admin02', 'Admin', 'Four', 'Admin Tower', '9876543240', 'admin4@example.com', '1988-04-04', '123456782V'),
('A05', 'admin01', 'Admin', 'Five', 'Admin Hub', '9876543250', 'admin5@example.com', '1989-05-05', '123456783V');

-- Module Table
INSERT INTO `Module` (`Module_ID`, `Module_Name`, `Course_ID`, `Credit`) VALUES
('M01', 'Data Structures', 'C01', 3),
('M02', 'Thermodynamics', 'C02', 4),
('M03', 'Accounting Basics', 'C03', 2),
('M04', 'Quantum Mechanics', 'C04', 4),
('M05', 'Art History', 'C05', 3);

-- Teaches Table
INSERT INTO `Teaches` (`Tutor_ID`, `Module_ID`) VALUES
('T01', 'M01'),
('T02', 'M02'),
('T03', 'M03'),
('T04', 'M04'),
('T05', 'M05');

-- Course_Enrollment Table
INSERT INTO `Course_Enrollment` (`Course_Enrollment_ID`, `Student_ID`, `Course_ID`, `Enrollment_Date`) VALUES
(1, 'S01', 'C01', '2024-01-01'),
(2, 'S02', 'C02', '2024-01-02'),
(3, 'S03', 'C03', '2024-01-03'),
(4, 'S04', 'C04', '2024-01-04'),
(5, 'S05', 'C05', '2024-01-05');

-- Add data for remaining tables (`Module_Enrollment`, `Lecture_material`, `Quiz`, `Forum`, `Assignments`, `Grades`, `Submission`, `Quiz_Submission`, `Assignment_Submission`, and `Forum_Submission`) similarly.

-- Module_Enrollment Table
INSERT INTO `Module_Enrollment` (`Module_Enrollment_ID`, `Student_ID`, `Module_ID`, `Enrollment_Date`) VALUES
(1, 'S01', 'M01', '2024-02-01'),
(2, 'S02', 'M02', '2024-02-02'),
(3, 'S03', 'M03', '2024-02-03'),
(4, 'S04', 'M04', '2024-02-04'),
(5, 'S05', 'M05', '2024-02-05');

-- Lecture_material Table
INSERT INTO `Lecture_material` (`Content_ID`, `Title`, `Type`, `URL`, `Updated_Date`, `Visibility`, `Module_ID`, `Tutor_ID`) VALUES
(1, 'Intro to Data Structures', 'PDF', 'http://example.com/ds_intro.pdf', '2024-03-01', 'public', 'M01', 'T01'),
(2, 'Thermodynamics Basics', 'Video', 'http://example.com/thermo_basics.mp4', '2024-03-02', 'public', 'M02', 'T02'),
(3, 'Accounting Principles', 'Assignment', 'http://example.com/accounting_assignment.pdf', '2024-03-03', 'private', 'M03', 'T03'),
(4, 'Quantum Mechanics Overview', 'Quiz', 'http://example.com/quantum_quiz.html', '2024-03-04', 'public', 'M04', 'T04'),
(5, 'Art History Lecture', 'Forum', 'http://example.com/art_forum', '2024-03-05', 'private', 'M05', 'T05');

-- Quiz Table
INSERT INTO `Quiz` (`Quiz_ID`, `Content_ID`, `Start_Date_&_Time`, `End_Date_&_Time`, `Duraton`, `Discription`) VALUES
(1, 4, '2024-03-10 10:00:00', '2024-03-10 11:00:00', '01:00:00', 'Basic Quantum Mechanics Quiz'),
(2, 4, '2024-03-11 12:00:00', '2024-03-11 13:00:00', '01:00:00', 'Advanced Quantum Mechanics Quiz'),
(3, 4, '2024-03-12 14:00:00', '2024-03-12 15:00:00', '01:00:00', 'Quantum Physics Challenge'),
(4, 4, '2024-03-13 16:00:00', '2024-03-13 17:00:00', '01:00:00', 'Quantum Concepts'),
(5, 4, '2024-03-14 18:00:00', '2024-03-14 19:00:00', '01:00:00', 'Quantum Exam');

-- Forum Table
INSERT INTO `Forum` (`Forum_ID`, `Content_ID`) VALUES
(1, 5),
(2, 5),
(3, 5),
(4, 5),
(5, 5);

-- Assignments Table
INSERT INTO `Assignments` (`Assignment_ID`, `Content_ID`, `Start_Date_&_Time`, `End_Date_&_Time`, `Discription`, `Feedback`) VALUES
(1, 3, '2024-03-15 10:00:00', '2024-03-20 23:59:59', 'Accounting Assignment 1', 'Well done!'),
(2, 3, '2024-03-21 10:00:00', '2024-03-25 23:59:59', 'Accounting Assignment 2', 'Good job.'),
(3, 3, '2024-03-26 10:00:00', '2024-03-30 23:59:59', 'Accounting Assignment 3', 'Keep improving.'),
(4, 3, '2024-03-31 10:00:00', '2024-04-05 23:59:59', 'Accounting Assignment 4', 'Excellent work!'),
(5, 3, '2024-04-06 10:00:00', '2024-04-10 23:59:59', 'Accounting Assignment 5', 'Great effort.');

-- Grades Table
INSERT INTO `Grades` (`Module_ID`, `Student_ID`, `Grade`) VALUES
('M01', 'S01', 'A'),
('M02', 'S02', 'B+'),
('M03', 'S03', 'A-'),
('M04', 'S04', 'B'),
('M05', 'S05', 'C+');

-- Submission Table
INSERT INTO `Submission` (`Submission_ID`, `Date_&_Time`, `Student_ID`, `Type`, `Module_ID`) VALUES
(1, '2024-04-01 10:00:00', 'S01', 'Quiz', 'M01'),
(2, '2024-04-02 11:00:00', 'S02', 'Assignment', 'M02'),
(3, '2024-04-03 12:00:00', 'S03', 'Forum', 'M03'),
(4, '2024-04-04 13:00:00', 'S04', 'Quiz', 'M04'),
(5, '2024-04-05 14:00:00', 'S05', 'Assignment', 'M05');

-- Quiz_Submission Table
INSERT INTO `Quiz_Submission` (`Submission_ID`, `Quiz_ID`, `Marks`, `Review`, `Durationn`) VALUES
(1, 1, 95.00, 'Excellent work.', '00:55:00'),
(2, 2, 85.00, 'Good job.', '00:50:00'),
(3, 3, 75.00, 'Needs improvement.', '00:45:00'),
(4, 4, 65.00, 'Satisfactory.', '00:40:00'),
(5, 5, 55.00, 'Below expectations.', '00:35:00');

-- Assignment_Submission Table
INSERT INTO `Assignment_Submission` (`Submission_ID`, `Assignment_ID`, `Marks`, `Review`, `Durationn`) VALUES
(2, 1, 88.00, 'Good effort.', '03:00:00'),
(5, 2, 92.50, 'Well done.', '02:45:00'),
(1, 3, 78.00, 'Keep practicing.', '02:30:00'),
(4, 4, 85.00, 'Nice work.', '03:15:00'),
(3, 5, 90.00, 'Excellent.', '03:00:00');

-- Forum_Submission Table
INSERT INTO `Forum_Submission` (`Submission_ID`, `Forum_ID`, `Description`) VALUES
(3, 1, 'Discussed key points in the lecture.'),
(1, 2, 'Asked questions on assignments.'),
(5, 3, 'Shared additional resources.'),
(2, 4, 'Clarified doubts about the topic.'),
(4, 5, 'Provided feedback on peers.');
