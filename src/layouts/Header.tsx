import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, Layout } from 'antd';

const { Header } = Layout;

const HeaderLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();


  const getSelectedKey = () => {
    switch (location.pathname) {
      case '/home':
        return '1';
      case '/news':
        return '2';
      case '/teams':
        return '3';
      case '/members':
        return '4';
      default:
        return '';
    }
  };

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <Header className="fixed w-full z-10">
      <div className="float-left self-start mt-4 text-white text-xl">CodingAces</div>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[getSelectedKey()]}
        className="flex justify-end"
      >
        <Menu.Item key="1" onClick={() => handleNavigate('/home')}>Home</Menu.Item>
        <Menu.Item key="2" onClick={() => handleNavigate('/news')}>News</Menu.Item>
        <Menu.Item key="3" onClick={() => handleNavigate('/teams')}>Teams</Menu.Item>
        <Menu.Item key="4" onClick={() => handleNavigate('/members')}>Members</Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderLayout;