import React from 'react'
import './Nosrelais.css';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import relais1 from '../../img/picturesRelais/1.jpg';
import relais2 from '../../img/picturesRelais/2.jpg';
import relais3 from '../../img/picturesRelais/3.jpg'


const { Meta } = Card;
export default function Nosrelais() {
    return (
        
        <div className="contenair">
        <Card className="carteRelais"
            style={{ width: 300 }}
            cover={
            <img
                alt="example"
                src={relais1}
            />
            }
            actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
            ]}
        >
            <Meta style={{paddingBottom: "60px"}}
            avatar={<Avatar src={relais1} />}
            title="Mimoun ka"
            description="Atelier cv - atelier lettre de motivation- entretien blanc. Bonnes pratiques. 
            "
            />
        </Card>
        <Card className="carteRelais"
            style={{ width: 300 }}
            cover={
            <img
                alt="example"
                src={relais2}
            />
            }
            actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
            ]}
        >
            <Meta
            avatar={<Avatar src={relais2} />}
            title="Hamou Be"
            description="Évaluation et gestion de réseaux de distribution- Management d'une force de vente- Démarches administratives pour enregistrement d'un produit à commercialiser en Asie. 
            "
            />
        </Card>
        <Card className="carteRelais"
            style={{ width: 300 }}
            cover={
            <img
                alt="example"
                src={relais3}
            />
            }
            actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
            ]}
        >
            <Meta style={{paddingBottom: "60px"}}
            avatar={<Avatar src={relais3} />}
            title="Sid-Ahmed Be"
            description="Conseil pour acheter un bien immobilier sans Riba
            - Achat immobilier collectif via une SCI.
            "
            />
        </Card>
        
                </div>
    )
}
