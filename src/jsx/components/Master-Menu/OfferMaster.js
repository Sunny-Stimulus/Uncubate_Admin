import React from 'react';
import { Table, Button, Form, Row, Col, InputGroup, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const OfferMaster = () => {
    const navigate = useNavigate();

    const handleAddNew = () => {
        navigate('/admin/offer/add');
    };

    return (
        <Container className="mt-4">
            <div className="card">
                <div className="card-body">
                    {/* Title & Add Button */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5 className="card-title mb-0">Offer</h5>
                        <Button className="border" onClick={handleAddNew} style={{ backgroundColor: '#fff', color: '#333' }}>
                            ADD NEW
                        </Button>
                    </div>
                    <hr />

                    {/* Show Entries & Search */}
                    <Row className="mb-3">
                        <Col md={6}>
                            <div className="d-flex align-items-center">
                                <Form.Label className="me-2 mb-0">Show</Form.Label>
                                <Form.Select size="sm" style={{ width: '100px' }}>
                                    <option>10</option>
                                    <option>25</option>
                                    <option>50</option>
                                    <option>100</option>
                                </Form.Select>
                                <span className="ms-2">entries</span>
                            </div>
                        </Col>
                        <Col md={6} className="text-end">
                            <InputGroup size="sm" className="justify-content-end" style={{ maxWidth: '250px', float: 'right' }}>
                                <InputGroup.Text>Search:</InputGroup.Text>
                                <Form.Control type="text" />
                            </InputGroup>
                        </Col>
                    </Row>

                    {/* Table */}
                    <Table bordered hover size="sm" className="mb-3">
                        <thead>
                            <tr>
                                <th>Created Date</th>
                                <th>title</th>
                                <th className="text-end">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>04 Aug 2021 06:15 pm</td>
                                <td>CoWorking Space - Open Dedicated Desk</td>
                                <td className="text-end">
                                    <Button variant="warning" size="sm" className="me-2">
                                        <i className="fas fa-edit"></i>
                                    </Button>
                                    <Button variant="danger" size="sm">
                                        <i className="fas fa-trash"></i>
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>

                    {/* Footer */}
                    <div className="pagination-section d-flex justify-content-between align-items-center">
                        <div className="showing-entries">
                            Showing 1 to 1 of 1 entries
                        </div>

                        <div className="pagination-controls" style={{ display: 'flex', gap: '10px' }}>
                            <span className="pagination-btn disabled" style={{ backgroundColor: 'gray', color: '#000', borderRadius: '4px' }}>Previous</span>
                            <span className="pagination-btn disabled" style={{ backgroundColor: 'gray', color: '#000', borderRadius: '4px' }}>Next</span>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default OfferMaster;
