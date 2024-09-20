import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { Avatar, Space, Typography, Spin, List, Button, Modal, Input } from 'antd';
import { Layout } from 'antd';
import { StarOutlined } from '@ant-design/icons'; // Importing the star icon
import HeaderLayout from '../layouts/Header';
import FooterLayout from '../layouts/Footer';

const { Title, Text } = Typography;
const { Content } = Layout;

const TeamProfile: React.FC = () => {
  const { teamId } = useParams<{ teamId: string }>();
  const [teamData, setTeamData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [skills, setSkills] = useState('');
  const db = getFirestore();

  useEffect(() => {
    const fetchTeamData = async () => {
      if (teamId) {
        const docRef = doc(db, 'teams', teamId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setTeamData(docSnap.data());
        } else {
          console.log('No such document!');
        }
        setLoading(false);
      }
    };

    fetchTeamData();
  }, [teamId, db]);

  const handleApplyClick = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    // Handle form submission logic here
    console.log('Name:', name);
    console.log('Phone:', phone);
    console.log('Skills:', skills);
    setIsModalVisible(false);
    // Reset fields
    setName('');
    setPhone('');
    setSkills('');
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Spin size="large" />
      </div>
    );
  }

  if (!teamData) {
    return <div>Team data not found</div>;
  }

  const memberNames = teamData.Members ? teamData.Members.split("'").filter((name: string) => name.trim() !== "") : [];

  return (
    <Layout className="min-h-screen">
      <HeaderLayout />
      <Content className="pt-16 px-6 mt-4 flex">
        <Space direction="vertical" style={{ width: '100%', padding: '20px' }}>
          <Title level={2}>Team Profile</Title>
          <Avatar src={`https://api.dicebear.com/9.x/shapes/svg?seed=${teamId}`} size={100} />
          <Text style={{ fontSize: '24px', fontWeight: 'bold' }}><strong>Name:</strong> {teamData.Name}</Text>
          <Text style={{ fontSize: '20px' }}><strong>Rating:</strong> <StarOutlined style={{ color: 'gold' }} /> {teamData.Rating}</Text>
          <Text style={{ fontSize: '20px' }}><strong>City:</strong> {teamData.City}</Text>
          <Text><strong>Description:</strong> {teamData.Description || 'No description available'}</Text>

          <Title level={3}>Members</Title>
          <List
            itemLayout="horizontal"
            dataSource={memberNames}
            renderItem={(memberName: string, index: number) => (
              <List.Item key={index}>
                <List.Item.Meta
                  avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${Math.random()}`} />}
                  title={<Link to={`/members/${memberName}`}>{memberName}</Link>}
                />
              </List.Item>
            )}
          />

          {/* Apply to the Team Button */}
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <Button type="primary" size="large" style={{ width: '300px' }} onClick={handleApplyClick}>
              Apply to the Team
            </Button>
          </div>
        </Space>
      </Content>

      {/* Modal for Application Form */}
      <Modal
        title="Apply to the Team"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Submit"
        cancelText="Cancel"
      >
        <Space direction="vertical" style={{ width: '100%' }}>
          <Input
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Your Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input.TextArea
            placeholder="Your Skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
        </Space>
      </Modal>

      <FooterLayout />
    </Layout>
  );
};

export default TeamProfile;