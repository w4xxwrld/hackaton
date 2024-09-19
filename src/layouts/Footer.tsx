import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterLayout: React.FC = () => {
    return (
        <Footer className="text-center mt-4">
            CodingAces ©2024 Created with Ant Design and Tailwind CSS <br /> Made by Misha And Shakh
        </Footer>
    );
};

export default FooterLayout;