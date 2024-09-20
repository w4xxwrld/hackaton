import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { Avatar, Space, Typography, Spin } from 'antd';
import { Layout } from 'antd';
import HeaderLayout from '../layouts/Header';
import FooterLayout from '../layouts/Footer';

const { Title, Text } = Typography;
const { Content } = Layout;

interface MemberProfileProps { }

const MemberProfile: React.FC<MemberProfileProps> = () => {
  const { memberId } = useParams<{ memberId: string }>();
  const [memberData, setMemberData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const db = getFirestore();

  useEffect(() => {
    const fetchMemberData = async () => {
      if (memberId) {
        const docRef = doc(db, "members", memberId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setMemberData(docSnap.data());
        } else {
          console.log("No such document!");
        }
        setLoading(false);
      }
    };

    fetchMemberData();
  }, [memberId, db]);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <>
      <Layout className="min-h-screen">
        <HeaderLayout />
        <Content className="pt-16 px-6 mt-4 flex">
          <Space direction="vertical" style={{ width: '100%', padding: '20px' }}>
            <Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${memberId}`} size={100} />
            <Title level={2}>{memberData.Name}</Title>
            <Text><strong>Age:</strong> {memberData.Age}</Text>
            <Text><strong>Ranking:</strong> {memberData.Ranking}</Text>
            <Text><strong>Biography:</strong> {memberData.Biography || 'No biography available'}</Text>
            <Text><strong>Team:</strong> {memberData.Team}</Text>
          </Space>
        </Content>
        <FooterLayout/>
    </Layout >
    </>
  );
};

export default MemberProfile;