import React from 'react';
import { Avatar, List, Space } from 'antd';

const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];

const MembersComponent: React.FC = () => {
    return (
        <>
            <Space
                direction="vertical"
                style={{
                    marginBottom: '20px',
                }}
                size="middle"
            >
                <span>Hackaton Members</span>
            </Space>
            <List
                dataSource={data}
                renderItem={(item, index) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                    </List.Item>
                )}
            />
        </>
    );
};

export default MembersComponent;