// TeacherSection.js
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import { TeachersContainer, Content, TeachersContent, TeachersHeader, TeacherList, TeacherItem, AddTeacherForm, AddTeacherInput, 
  AddTeacherButton } from '../../styles/TeachersStyles';

const TeacherSection = () => {

    const [newTeacher, setNewTeacher] = useState({ name: "", email: "", subject: "" });
    const [teachers, setTeachers] = useState([]);


    useEffect(() => {
        fetchTeachers();
    }, []);


    const fetchTeachers = async () => {
        try {
            const response = await axios.get('http://localhost:400/api/v1/teachers/getall');
            setTeachers(response.data.teachers);
        } catch (error) {
            console.log('Error fetching teachers', error);
        }
    };
    


  return (
    <TeachersContainer>
        <Sidebar/>
        <Content>
            <TeachersHeader>Teachers</TeachersHeader>
            <TeacherList>
                {teachers.map((teacher) => (
                    <TeacherItem key={teacher.id} >{teacher.name} - {teacher.email} - {teacher.subject}</TeacherItem>
                ))}
            </TeacherList>
        </Content>
    </TeachersContainer>
  );
}

export default TeacherSection;