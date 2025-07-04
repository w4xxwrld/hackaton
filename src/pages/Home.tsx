import React from 'react';
import HeaderLayout from '../layouts/Header';
import NewsComponent from '../components/NewsComponent';
import TeamsComponent from '../components/TeamsComponent';
import { Layout } from 'antd';
import FooterLayout from '../layouts/Footer';
import MembersComponent from '../components/MembersComponent';

const { Content } = Layout;

const Home: React.FC = () => {
  return (
    <Layout className="min-h-screen">
      <HeaderLayout />
      <Content className="pt-16 px-6 mt-4 flex">
        <div className="w-4/5 pr-4">
          <div className="bg-white p-6 rounded shadow-md">
            <NewsComponent listSize={10}/>
          </div>
          <div className="bg-white p-6 rounded shadow-md mt-12">
            <TeamsComponent listSize={5} />
          </div>
        </div>

        <div className="w-1/5 pl-4">
          <div className="bg-white p-6 rounded shadow-md">
            <MembersComponent listSize={15} />
          </div>
        </div>
      </Content>
      <FooterLayout/>
    </Layout>
  );
};

export default Home;