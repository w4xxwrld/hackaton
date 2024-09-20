import React from 'react';
import HeaderLayout from '../layouts/Header';
import TeamsComponent from '../components/TeamsComponent';
import { Layout } from 'antd';
import FooterLayout from '../layouts/Footer';

const { Content } = Layout;

const Teams: React.FC = () => {
    return (
        <Layout className="min-h-screen">
            <HeaderLayout />
            <Content className="pt-16 px-6 mt-4">
                <div className="bg-white p-6 rounded shadow-md">
                    <TeamsComponent listSize={1000}/>
                </div>
            </Content>
        <FooterLayout/>
        </Layout>
    );
};

export default Teams;