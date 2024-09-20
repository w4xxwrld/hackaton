import React, { useState, useEffect } from 'react';
import { Avatar, List, Space } from 'antd';
import { Link } from 'react-router-dom'; // For routing
import '../firebase';
import { collection, getDocs, DocumentData, getFirestore } from 'firebase/firestore';

interface TeamsComponentProps {
    listSize?: number;
}

const TeamsComponent: React.FC<TeamsComponentProps> = ({ listSize = 4 }) => {
    const [teams, setTeams] = useState<DocumentData[]>([]);
    const db = getFirestore();

    useEffect(() => {
        const fetchTeamsFromFirestore = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'teams'));
                const teamsArray: DocumentData[] = [];
                querySnapshot.forEach((doc) => {
                    teamsArray.push({ id: doc.id, ...doc.data() }); // Include document id
                });
                setTeams(teamsArray);
            } catch (error) {
                console.error('Error fetching documents: ', error);
            }
        };

        fetchTeamsFromFirestore();
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
                <span>Hackathon Teams</span>
            </Space>
            <List
                dataSource={teams.slice(0, listSize)} 
                renderItem={(team, index) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={`https://api.dicebear.com/9.x/shapes/svg?seed=${team.id}`} />}
                            title={
                                <Link to={`/team/${team.id}`}>
                                    {team.Name || `Team ${index + 1}`}
                                </Link>
                            }
                            description={`City: ${team.City} | Rating: ${team.Rating}`}
                        />
                    </List.Item>
                )}
            />
        </>
    );
};

export default TeamsComponent;
