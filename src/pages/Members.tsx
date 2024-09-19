import React from 'react';
import HeaderLayout from '../layouts/Header';
import { Layout } from 'antd';
import MembersComponent from '../components/MembersComponent';
import FooterLayout from '../layouts/Footer';

const { Content } = Layout;

const Members: React.FC = () => {
    return (
        <Layout className="min-h-screen">
            <HeaderLayout />
            <Content className="pt-16 px-6 mt-4">
                <div className="bg-white p-6 rounded shadow-md">
                    <MembersComponent/>
                </div>
            </Content>
        <FooterLayout/>
        </Layout>
    );
};

export default Members;