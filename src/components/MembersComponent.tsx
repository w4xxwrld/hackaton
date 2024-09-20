import React, { useState, useEffect } from 'react';
import { Avatar, List, Space } from 'antd';
import { Link } from 'react-router-dom'; // For routing
import '../firebase';
import { collection, getDocs, DocumentData, getFirestore } from 'firebase/firestore';

interface MembersComponentProps {
    listSize?: number; 
}

const MembersComponent: React.FC<MembersComponentProps> = ({ listSize = 4 }) => {
    const [storedValues, setStoredValues] = useState<DocumentData[]>([]);
    const db = getFirestore();

    useEffect(() => {
        const fetchDataFromFirestore = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'members'));
                const temporaryArr: DocumentData[] = [];
                querySnapshot.forEach((doc) => {
                    temporaryArr.push({ id: doc.id, ...doc.data() }); // Include document id
                });
                setStoredValues(temporaryArr);
            } catch (error) {
                console.error('Error fetching documents: ', error);
            }
        };

        fetchDataFromFirestore();
    }, [db]);

    return (
        <>
            <Space
                direction="vertical"
                style={{
                    marginBottom: '20px',
                }}
                size="middle"
            >
                <span>Hackathon Top Members</span>
            </Space>
            <List
                dataSource={storedValues.slice(0, listSize)} 
                renderItem={(item, index) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${item.id}`} />}
                            title={
                                <Link to={`/member/${item.id}`}>
                                    {item.Name || `Member ${index + 1}`}
                                </Link>
                            }
                            description={`Team: ${item.Team}`}
                        />
                    </List.Item>
                )}
            />
        </>
    );
};

export default MembersComponent;