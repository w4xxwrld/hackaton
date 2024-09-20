import React, { useState, useEffect } from 'react';
import { Avatar, List, Space } from 'antd';
import '../firebase';
import { collection, getDocs, DocumentData, getFirestore } from "firebase/firestore";

interface NewsComponentProps {
    listSize?: number; 
}

const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + '...';
    }
    return text;
};

const NewsComponent: React.FC<NewsComponentProps> = ({ listSize = 4 }) => {
    const [storedValues, setStoredValues] = useState<DocumentData[]>([]);
    const db = getFirestore();

    useEffect(() => {
        const fetchDataFromFirestore = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "news"));
                const temporaryArr: DocumentData[] = [];
                querySnapshot.forEach((doc) => {
                    temporaryArr.push(doc.data());
                });
                setStoredValues(temporaryArr);
            } catch (error) {
                console.error("Error fetching documents: ", error);
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
                <span>Hackaton News</span>
            </Space>
            <List
                dataSource={storedValues.slice(0, listSize)} 
                renderItem={(item, index) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={`https://picsum.photos/id/${index}/200/200`} />}
                            title={<a href="https://ant.design">{item.Name || `News ${index + 1}`}</a>}
                            description={
                                <>
                                    <div>{item.Date || "N/A"}</div>
                                    <div>{truncateText(item.MainText || "N/A", 100)}</div>
                                </>
                            }
                        />
                    </List.Item>
                )}
            />
        </>
    );
};

export default NewsComponent;