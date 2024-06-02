import React from 'react';
import Sidebar from './Sidebar';
import { TeacherDashboardContainer, Content, Section, SectionTitle, CardContainer, Card, CardTitle, CardContent } 
from '../../styles/DashboardStyles';


const TeacherDashboard = () => {
    return (
        <TeacherDashboardContainer>
            <Sidebar/>

            <Content>
                <Section>
                    <SectionTitle>Overview</SectionTitle>

                    <CardContainer>
                        <Card>
                            <CardTitle>Total Students</CardTitle>
                            <CardContent>500</CardContent>
                        </Card>

                        <Card>
                            <CardTitle>Total Teachers</CardTitle>
                            <CardContent>50</CardContent>
                        </Card>

                        <Card>
                            <CardTitle>Total Classes</CardTitle>
                            <CardContent>50</CardContent>
                        </Card>
                    </CardContainer>
                </Section>

                <Section>
                    <SectionTitle>Recent Activity</SectionTitle>
                </Section>


                <SectionTitle>Upcoming Events</SectionTitle>
            </Content>
        </TeacherDashboardContainer>
    );
};


export default TeacherDashboard;