import React from 'react'

import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import expert1 from '../../img/picturesExperts/1.jpg';
import expert2 from '../../img/picturesExperts/2.jpg';


const { Meta } = Card;
export default function ListExpairs() {
    return (
        
        <div className="contenair">
        <Card className="carteRelais"
            style={{ width: 300 }}
            cover={
            <img
                alt="example"
                src={expert1}
            />
            }
            actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
            ]}
        >
            <Meta
            avatar={<Avatar src={expert1} />}
            title="Mohamed"
            description="Fiscalité des entreprises
            Gestion, développement et stratégie"
            />
        </Card>
        <Card className="carteRelais"
            style={{ width: 300 }}
            cover={
            <img
                alt="example"
                src={expert2}
            />
            }
            actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
            ]}
        >
            <Meta
            avatar={<Avatar src={expert2} />}
            title="SONIA"
            description="Avocat au Barreau de Paris
            Conseil et Contentieux 
            Docteur en droit " />
        </Card>
      
        
                </div>
    )
}
