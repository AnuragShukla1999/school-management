// Students.js
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import {
  StudentsContainer,
  Content,
  StudentsContent,
  StudentsHeader,
  StudentList,
  StudentItem,
  AddStudentForm,
  AddStudentInput,
  AddStudentButton,
} from '../../styles/StudentsStyles'; 

const Students = () => {
    
    const [newStudent, setNewStudent] = useState({ name: '', registrationNumber: '', grade: '' });

    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/v1/students/getall');
            setStudents(response.data.students);
        } catch (error) {
            console.log('Error fetching students:', error);
        }
    };


    const handleAddStudent = async (e) => {
        e.preventDefault();

        if (newStudent.name.trim() !== '' && newStudent.registrationNumber.trim() !== '' & newStudent.grade.trim() !== '') {
            
        }
    }

  return (
    <div>Students</div>
  )
}

export default Students