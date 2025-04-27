import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Spin, Alert, Typography, Input, Select, Space } from 'antd';
import ProductCard from './components/ProductCard';

const { Title } = Typography;
const { Search } = Input;

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedIds, setSelectedIds] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState(null);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then(res => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message || 'Unknown error');
        setLoading(false);
      });
  }, []);

  const toggleSelect = id => {
    setSelectedIds(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    switch (sortOption) {
      case 'name_asc':  return a.title.localeCompare(b.title);
      case 'name_desc': return b.title.localeCompare(a.title);
      case 'price_asc': return a.price - b.price;
      case 'price_desc':return b.price - a.price;
      case 'rating_asc':return a.rating - b.rating;
      case 'rating_desc':return b.rating - a.rating;
      default:          return 0;
    }
  });

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: 50 }}>
        <Spin size="large" />
      </div>
    );
  }
  if (error) {
    return (
      <div style={{ maxWidth: 600, margin: '50px auto' }}>
        <Alert
          message="Error fetching products"
          description={error}
          type="error"
          showIcon
        />
      </div>
    );
  }

  return (
    <div style={{ padding: '20px 40px' }}>
      <Title level={2}>Product Listing</Title>

      <Space style={{ marginBottom: 16 }}>
        <Search
          placeholder="Search by title"
          allowClear
          onSearch={v => setSearchTerm(v)}
          onChange={e => setSearchTerm(e.target.value)}
          style={{ width: 240 }}
        />

        <Select
          placeholder="Sort by"
          allowClear
          onChange={v => setSortOption(v)}
          style={{ width: 180 }}
        >
          <Select.Option value="name_asc">Name ↑</Select.Option>
          <Select.Option value="name_desc">Name ↓</Select.Option>
          <Select.Option value="price_asc">Price ↑</Select.Option>
          <Select.Option value="price_desc">Price ↓</Select.Option>
          <Select.Option value="rating_asc">Rating ↑</Select.Option>
          <Select.Option value="rating_desc">Rating ↓</Select.Option>
        </Select>
      </Space>

      <Row gutter={[16, 16]}>
        {sorted.map(product => (
          <Col key={product.id} xs={24} sm={12} md={8}>
            <ProductCard
              product={product}
              isSelected={selectedIds.has(product.id)}
              onSelect={() => toggleSelect(product.id)}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default App;