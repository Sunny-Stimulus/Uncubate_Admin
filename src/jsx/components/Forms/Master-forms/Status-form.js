import React, { useState } from 'react';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';

const AddStatusForm = () => {
    const [status, setStatus] = useState('');
    const [isDefault, setIsDefault] = useState('yes');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit logic here
        console.log({ status, isDefault });
    };

    return (
        <Container className="mt-3">
            {/* Back Icon and Page Title */}
            <div className="d-flex align-items-center mb-3">
                <FaArrowLeft className="me-2" style={{cursor:'pointer'}}/>
                <h5 className="mb-0">Status</h5>
            </div>
            <div className="bg-white p-4 shadow-sm border rounded">
                {/* Section Heading */}
                <h6 className="mb-3 border-bottom pb-2">Add New Status</h6>

                <Form onSubmit={handleSubmit}>
                    {/* Status Input */}
                    <Form.Group as={Row} className="mb-4" controlId="status">
                        <Form.Label column sm={2} className="fw-bold">
                            Status
                        </Form.Label>
                        <Col sm={6}>
                            <Form.Control
                                type="text"
                                placeholder="Status"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                required
                            />
                        </Col>
                    </Form.Group>

                    {/* Default Radio Buttons */}
                    <Form.Group as={Row} className="mb-4" controlId="isDefault">
                        <Form.Label column sm={2} className="fw-bold">
                            Default
                        </Form.Label>
                        <Col sm={6} className="d-flex align-items-center gap-4">
                            <Form.Check
                                type="radio"
                                label="Yes"
                                name="default"
                                id="defaultYes"
                                value="yes"
                                checked={isDefault === 'yes'}
                                onChange={(e) => setIsDefault(e.target.value)}
                            />
                            <Form.Check
                                type="radio"
                                label="No"
                                name="default"
                                id="defaultNo"
                                value="no"
                                checked={isDefault === 'no'}
                                onChange={(e) => setIsDefault(e.target.value)}
                            />
                        </Col>
                    </Form.Group>

                    <hr />

                    {/* Buttons */}
                    <Form.Group as={Row}>
                        <Col sm={{ span: 6, offset: 2 }}>
                            <Button className="me-2"
                                style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}
                            >
                                Cancel
                            </Button>
                            <Button variant="success" type="submit">
                                Submit
                            </Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        </Container>
    );
};

export default AddStatusForm;
