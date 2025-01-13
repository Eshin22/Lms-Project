DROP DATABASE IF EXISTS lms_project;
CREATE DATABASE lms_project;
USE lms_project;
CREATE TABLE `User` (
  `User_Name` varchar(50),
  `Role` Enum('Admin','Student','Tutor'),
  `Passward` Varchar(50),
  PRIMARY KEY (`User_Name`)
);

CREATE TABLE `Faculty` (
  `Faculty_ID` varchar(50),
  `Faculty_Name` varchar(50),
  `Building` varchar(50),
  PRIMARY KEY (`Faculty_ID`)
);

CREATE TABLE `Courses` (
  `Course_ID` varchar(50),
  `Course_Name` varchar(50),
  `Faculty_ID` varchar(50),
  `Required_Credit` int,
  `Description` varchar(50),
  PRIMARY KEY (`Course_ID`),
  FOREIGN KEY (`Faculty_ID`) REFERENCES `Faculty`(`Faculty_ID`)
);

CREATE TABLE `Tutor` (
  `Tutor_ID` VARCHAR(50) NOT NULL,
  `Tutor_Type` ENUM('Lecturer', 'Instructor') NOT NULL,
  `User_Name` VARCHAR(50) NOT NULL,
  `First_Name` VARCHAR(50) NOT NULL,
  `Last_Name` VARCHAR(50) NOT NULL,
  `Address` VARCHAR(250),
  `Phone_Number` VARCHAR(50),
  `Email` VARCHAR(50),
  `Birth_Date` DATE,
  `NIC` VARCHAR(50),
  `Course_ID` VARCHAR(50),
  `Photo_URL` VARCHAR(15000), -- URL to the tutor's photo
  PRIMARY KEY (`Tutor_ID`),
  FOREIGN KEY (`Course_ID`) REFERENCES `Courses`(`Course_ID`),
  FOREIGN KEY (`User_Name`) REFERENCES `User`(`User_Name`)
);

CREATE TABLE `Student` (
  `Student_ID` varchar(50),
  `User_Name` varchar(50),
  `First_Name` varchar(50),
  `Last_Name` varchar(50),
  `Address` varchar(250),
  `Phone_Number` varchar(50),
  `Email` varchar(50),
  `Birth_Date` Date,
  `NIC` varchar(50),
  `Course_ID` varchar(50),
  PRIMARY KEY (`Student_ID`),
  FOREIGN KEY (`Course_ID`) REFERENCES `Courses`(`Course_ID`),
  FOREIGN KEY (`User_Name`) REFERENCES `User`(`User_Name`)
);

CREATE TABLE `Admin` (
  `Admin_ID` varchar(50),
  `User_Name` varchar(50),
  `First_Name` varchar(50),
  `Last_Name` varchar(50),
  `Address` varchar(250),
  `Phone_Number` varchar(50),
  `Email` varchar(50),
  `Birth_Date` Date,
  `NIC` varchar(50),
  PRIMARY KEY (`Admin_ID`),
  FOREIGN KEY (`User_Name`) REFERENCES `User`(`User_Name`)
);

CREATE TABLE `Module` (
  `Module_ID` varchar(50),
  `Module_Name` varchar(50),
  `Course_ID` varchar(50),
  `Credit` int,
  PRIMARY KEY (`Module_ID`),
  FOREIGN KEY (`Course_ID`) REFERENCES `Courses`(`Course_ID`)
);

CREATE TABLE `Teaches` (
  `Tutor_ID` varchar(50),
  `Module_ID` varchar(50),
  PRIMARY KEY (`Tutor_ID`, `Module_ID`),
  FOREIGN KEY (`Tutor_ID`) REFERENCES `Tutor`(`Tutor_ID`),
  FOREIGN KEY (`Module_ID`) REFERENCES `Module`(`Module_ID`)
);

CREATE TABLE `Course_Enrollment` (
  `Course_Enrollment_ID` int,
  `Student_ID` varchar(50),
  `Course_ID` varchar(50),
  `Enrollment_Date` Date,
  PRIMARY KEY (`Course_Enrollment_ID`),
  FOREIGN KEY (`Course_ID`) REFERENCES `Courses`(`Course_ID`),
  FOREIGN KEY (`Student_ID`) REFERENCES `Student`(`Student_ID`)
);

CREATE TABLE `Module_Enrollment` (
  `Module_Enrollment_ID` int,
  `Student_ID` varchar(50),
  `Module_ID` varchar(50),
  `Enrollment_Date` varchar(50),
  PRIMARY KEY (`Module_Enrollment_ID`),
  FOREIGN KEY (`Student_ID`) REFERENCES `Student`(`Student_ID`),
  FOREIGN KEY (`Module_ID`) REFERENCES `Module`(`Module_ID`)
);

CREATE TABLE `Lecture_material` (
  `Content_ID` int,
  `Title` varchar(50),
  `Type` Enum('PDF','Video','Assignment','Quiz','forum'),
  `URL` varchar(255),
  `Updated_Date` Date,
  `Visibility` Enum('public','private'),
  `Module_ID` varchar(50),
  `Tutor_ID` varchar(50),
  `Description` varchar(100),
  PRIMARY KEY (`Content_ID`),
  FOREIGN KEY (`Tutor_ID`) REFERENCES `Tutor`(`Tutor_ID`),
  FOREIGN KEY (`Module_ID`) REFERENCES `Module`(`Module_ID`)
);


CREATE TABLE `Quiz` (
  `Quiz_ID` int,
  `Content_ID` int,
  `Start_Date_&_Time` Datetime,
  `End_Date_&_Time` Datetime,
  `Duraton` Time,
  `Discription` varchar(255),
  PRIMARY KEY (`Quiz_ID`),
  FOREIGN KEY (`Content_ID`) REFERENCES `Lecture_material`(`Content_ID`)
);
CREATE TABLE `Forum` (
  `Forum_ID` int,
  `Content_ID` int,
  PRIMARY KEY (`Forum_ID`),
  FOREIGN KEY (`Content_ID`) REFERENCES `Lecture_material`(`Content_ID`)
);

CREATE TABLE `Assignments` (
  `Assignment_ID` int,
  `Content_ID` int,
  `Start_Date_&_Time` Datetime,
  `End_Date_&_Time` Datetime,
  `Discription` varchar(255),
  `Feedback` varchar(255),
  PRIMARY KEY (`Assignment_ID`),
  FOREIGN KEY (`Content_ID`) REFERENCES `Lecture_material`(`Content_ID`)
);


CREATE TABLE `Grades` (
  `Module_ID` varchar(50),
  `Student_ID` varchar(50),
  `Grade` Enum('A+','A','A-','B+','B','B-','C+','C','C-','R'),
  PRIMARY KEY (`Module_ID`, `Student_ID`),
  FOREIGN KEY (`Module_ID`) REFERENCES `Module`(`Module_ID`),
  FOREIGN KEY (`Student_ID`) REFERENCES `Student`(`Student_ID`)
);


CREATE TABLE `Submission` (
  `Submission_ID` int,
  `Date_&_Time` datetime,
  `Student_ID` varchar(50),
  `Type` Enum("Quiz","Assignment","Forum"),
  `Module_ID` varchar(50),
  PRIMARY KEY (`Submission_ID`),
  FOREIGN KEY (`Student_ID`) REFERENCES `Student`(`Student_ID`),
  FOREIGN KEY (`Module_ID`) REFERENCES `Module`(`Module_ID`)
);

CREATE TABLE `Quiz_Submission` (
  `Submission_ID` int,
  `Quiz_ID` int,
  `Marks` decimal(6,2),
  `Review` varchar(255),
  `Durationn` time,
  PRIMARY KEY (`Submission_ID`),
  FOREIGN KEY (`Quiz_ID`) REFERENCES `Quiz`(`Quiz_ID`),
  FOREIGN KEY (`Submission_ID`) REFERENCES `Submission`(`Submission_ID`)
);

CREATE TABLE `Assignment_Submission` (
  `Submission_ID` int,
  `Assignment_ID` int,
  `Marks` decimal(6,2),
  `Review` varchar(255),
  `Durationn` time,
  PRIMARY KEY (`Submission_ID`),
  FOREIGN KEY (`Assignment_ID`) REFERENCES `Assignments`(`Assignment_ID`),
  FOREIGN KEY (`Submission_ID`) REFERENCES `Submission`(`Submission_ID`)
);

CREATE TABLE `Forum_Submission` (
  `Submission_ID` int,
  `Forum_ID` int,
  `Description` varchar(255),
  PRIMARY KEY (`Submission_ID`),
  FOREIGN KEY (`Forum_ID`) REFERENCES `Forum`(`Forum_ID`),
  FOREIGN KEY (`Submission_ID`) REFERENCES `Submission`(`Submission_ID`)
);

