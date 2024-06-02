import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import { ExamContainer, SidebarContainer, Content, ExamHeader, ExamForm, FormLabel, FormInput, AddButton }
  from '../../styles/ExamStyles';

const CheckExamSection = () => {

  const [examData, setExamData] = useState([]);
  const [name, setName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [className, setClassName] = useState('');
  const [marks, setMarks] = useState('');

  useEffect(() => {
    fetchExams();
  }, []);


  const fetchExams = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/exam');
      setExamData(response.data);
    } catch (error) {
      console.log('Error fetching exams:', error);
    }
  };


  const handleAddExam = async (e) => {
    e.preventDefault();

    const newExam = { name, registrationNumber, className, marks: parseInt(marks) };

    try {
      const response = await axios.post('http://localhost:4000/api/v1/exam', newExam);

      setExamData([...examData, response.data]);
      setName('');
      setRegistrationNumber('');
      setClassName('');
      setClassName('');
      setMarks('');
    } catch (error) {
      console.log('Error adding exam:', error);
    }
  };


  const calculateTotalMarks = () => {
    let total = 0;
    for (let i = 0; i < examData.length; i++) {
      total += examData[i].marks;
    }

    return total;
  }

  return (
    <ExamContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>

      <Content>
        <ExamHeader>Exam Details</ExamHeader>

        <ExamForm>
          <FormLabel>Name:</FormLabel>

          <FormInput
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />


          <FormLabel>Registration Number:</FormLabel>
          <FormInput
            type="text"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
            required
          />



          <FormLabel>Class:</FormLabel>
          <FormLabel
              type="text"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              required
          />



          <FormLabel>Marks:</FormLabel>
          <FormInput
              type="Number"
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
              required
          />

          <AddButton type="submit">Add Exam</AddButton>
        </ExamForm>



        <h2>Total Marks: {calculateTotalMarks()}</h2>
        <h3>Exam Details:</h3>

        <ul>
            {examData.map((exam, index) => (
              <li key={index}>
                Name: {exam.name}, Registration Number: {exam.registrationNumber}, Class: {exam.className}, Marks: {exam.marks}
              </li>
            ))}
        </ul>
      </Content>
    </ExamContainer>
  );
};

export default CheckExamSection