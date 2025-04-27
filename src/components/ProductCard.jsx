import React from 'react';
import { Card, Rate, Typography } from 'antd';

const { Text, Title } = Typography;

export default function ProductCard({ product, isSelected, onSelect }) {
  const { images, title, price, discountPercentage, rating } = product;
  const imageUrl = images[0]; 

  const displayPrice = discountPercentage ? (
    <>
      <Text delete>${price.toFixed(2)}</Text>{' '}
      <Text strong>
        ${(price * (1 - discountPercentage / 100)).toFixed(2)}{' '}
        <Text type="secondary">({discountPercentage}% off)</Text>
      </Text>
    </>
  ) : (
    <Text strong>${price.toFixed(2)}</Text>
  );

  return (
    <Card
      hoverable
      className="product-card"
      onClick={onSelect}
      cover={
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 250,          
            background: '#fafafa',
          }}
        >
          <img
            alt={title}
            src={imageUrl}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain', 
            }}
          />
        </div>
      }
      style={{
        border: isSelected ? '2px solid red' : undefined,
        borderRadius: 4,
      }}
    >
      <Title level={5} ellipsis>
        {title}
      </Title>
      <div style={{ marginBottom: 8 }}>{displayPrice}</div>
      <Rate allowHalf disabled defaultValue={rating} />
    </Card>
  );
}
