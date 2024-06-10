// Performance.js
import React from 'react';
import Sidebar from './Sidebar';
import {
  PerformanceContainer,
  Content,
  PerformanceContent,
  PerformanceHeader,
  SchoolPerformance,
  IndividualPerformance,
} from '../../styles/PerformanceStyles'; 


const Performance = () => {

    const schoolPerformanceData = {
        averageScore: 85,
        totalStudents: 100,
    };


    // Sample data for individual student performance
    const individualPerformanceData = [
        { id: 1, name: 'John Doe', score: 90 },
        { id: 1, name: 'John Doe', score: 90 },
        { id: 1, name: 'John Doe', score: 90 },
    ];

  return (
    <PerformanceContainer>
        <Sidebar />

        <Content>
            <PerformanceContent>School Performance</PerformanceContent>

            <SchoolPerformance>
                <p>Average Score: {schoolPerformanceData.averageScore}</p>

                <p>Total Students: {schoolPerformanceData.totalStudents}</p>
            </SchoolPerformance>

            <PerformanceHeader>Individual Performance</PerformanceHeader>

            <IndividualPerformance>
                {individualPerformanceData.map((student) => (
                    <p key={student.id} >
                        {student.name}: {student.score}
                    </p>
                ))}
            </IndividualPerformance>
        </Content>
    </PerformanceContainer>
  );
};

export default Performance;