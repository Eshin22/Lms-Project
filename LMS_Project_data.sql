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
INSERT INTO `Tutor` 
(`Tutor_ID`, `Tutor_Type`, `User_Name`, `First_Name`, `Last_Name`, `Address`, `Phone_Number`, `Email`, `Birth_Date`, `NIC`, `Course_ID`, `Photo_URL`) 
VALUES
('T01', 'Lecturer', 'tutor01', 'John', 'Doe', '123 Tutor Lane', '1234567890', 'john.doe@example.com', '1980-01-01', '987654321V', 'C01', 'data:image/jpeg;base64,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'),
('T02', 'Instructor', 'tutor02', 'Jane', 'Smith', '456 Tutor Avenue', '0987654321', 'jane.smith@example.com', '1985-02-01', '123456789V', 'C02', 'data:image/jpeg;base64,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'),
('T03', 'Lecturer', 'tutor01', 'Jim', 'Beam', '789 Tutor Street', '1112223334', 'jim.beam@example.com', '1978-03-01', '456789123V', 'C03', 'data:image/jpeg;base64,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'),
('T04', 'Instructor', 'tutor02', 'Emma', 'Stone', '321 Tutor Road', '2223334445', 'emma.stone@example.com', '1990-04-01', '789123456V', 'C04', 'https://plus.unsplash.com/premium_photo-1710846906747-7ee7199956ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNhbXBsZXxlbnwwfHwwfHx8MA%3D%3D'),
('T05', 'Lecturer', 'tutor01', 'Liam', 'Neeson', '654 Tutor Blvd', '3334445556', 'liam.neeson@example.com', '1975-05-01', '654987321V', 'C05', 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2FtcGxlfGVufDB8fDB8fHww');

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
INSERT INTO `Lecture_material` (`Content_ID`, `Title`, `Type`, `URL`, `Updated_Date`, `Visibility`, `Module_ID`, `Tutor_ID`,`Description`) VALUES
(1, 'Intro to Data Structures', 'PDF', 'http://example.com/ds_intro.pdf', '2024-03-01', 'public', 'M01', 'T01','Week 01'),
(2, 'Thermodynamics Basics', 'Video', 'http://example.com/thermo_basics.mp4', '2024-03-02', 'public', 'M02', 'T02','Week 02'),
(3, 'Accounting Principles', 'Assignment', 'http://example.com/accounting_assignment.pdf', '2024-03-03', 'private', 'M03', 'T03','Week 02'),
(4, 'Quantum Mechanics Overview', 'Quiz', 'http://example.com/quantum_quiz.html', '2024-03-04', 'public', 'M04', 'T04','Week 04'),
(5, 'Art History Lecture', 'Forum', 'http://example.com/art_forum', '2024-03-05', 'private', 'M05', 'T05','Week 01'),
(6, '2016 Past Paper', 'PDF', 'https://www.alevelapi.com/wp-content/uploads/2020/04/2016-AL-COMBINED-MATHS-PART-II-SINHALA-MEDIUM-AlevelApi-PDF.pdf', '2024-03-10', 'public', 'M02', 'T02', 'Past Paper'),
(7, '2018 Past Paper', 'PDF', 'https://drive.google.com/file/d/16U2i_JiAxnYRhV1k5Sm8-dGpZgVbbHjI/view?pli=1', '2024-03-21', 'public', 'M02', 'T01', 'Past Paper');


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
