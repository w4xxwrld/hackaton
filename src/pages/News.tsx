import React from 'react';
import HeaderLayout from '../layouts/Header';
import { Layout } from 'antd';
import NewsComponent from '../components/NewsComponent';
import FooterLayout from '../layouts/Footer';

const { Content } = Layout;

const News: React.FC = () => {
    return (
        <Layout className="min-h-screen">
            <HeaderLayout />
            <Content className="pt-16 px-6 mt-4">
                <div className="bg-white p-6 rounded shadow-md">
                    <NewsComponent listSize={1000}/>
                </div>
            </Content>
            <FooterLayout/>
        </Layout>
    );
};

export default News;