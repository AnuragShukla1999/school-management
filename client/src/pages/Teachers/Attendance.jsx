
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import { AttendanceContainer, Content, AttendanceContent, AttendanceHeader, AttendanceList, AttendanceItem, StudentName, 
  CheckboxLabel, Divider, SubmitButton } from '../../styles/AttendanceStyles'; 


const CheckAttendanceSection = () => {
    const [students, setStudents] = useState([]);
    const [attendanceData, setAttendanceData] = useState([]);

    useEffect(() => {
        fetchStudents();
    }, []);


    const fetchStudents = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/v1/students/getall');
            setStudents(response.data.students);
            initializeAttendanceData(response.data.students);
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };


    const initializeAttendanceData = (students) => {
        const initialAttendanceData = students.map((student) => ({
            id: student.id,
            name: student.name,
            status: 'Present',
        }));

        setAttendanceData(initialAttendanceData);
    };


    const handleStatusChange = (id, status) => {
        const updateData = attendanceData.map((student) => {
            if (student.id === id) {
                return { ...student, status };
            }

            return student;
        });

        setAttendanceData(updateData);
    };



    const handleSubmit = async () => {
        try {
            // Send attendance data to the database
            const formattedData = attendanceData.map(({ id, name, status }) => ({ studentId: id, name, status }));
            const response = await axios.post('http://localhost:4000/api/v1/attendance', { attendanceData: formattedData });
            console.log('Attendance data submitted:', response.data);
        } catch (error) {
            console.error('Error submitting attendance data:', error);
        }
    };

    return (
        <></>
    )
};

export default CheckAttendanceSection;