import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';

const AddOfferForm = () => {
    const [location, setLocation] = useState('');
    const [branch, setBranch] = useState('');
    const [serviceType, setServiceType] = useState('');
    const [offeringType, setOfferingType] = useState('');

    return (
        <Container className="mt-2">
            <div className="d-flex align-items-center mb-3">
                <FaArrowLeft className="me-2" style={{cursor:'pointer'}}/>
                <h5 className="mb-0">Offering Master</h5>
            </div>

            <div className="bg-white p-4 shadow-sm border rounded">
                <h6 className="mb-3 border-bottom pb-2">Add New Offering Master</h6>
                <Form>
                    <Row>
                        <Col md={6}>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={4}>Location</Form.Label>
                                <Col sm={4}>
                                    <Form.Select value={location} onChange={(e) => setLocation(e.target.value)}>
                                        <option value="">Select</option>
                                        <option value="AH">AHmedabad</option>
                                    </Form.Select>
                                </Col>
                                <Col sm={4}>
                                    <Form.Select value={branch} onChange={(e) => setBranch(e.target.value)} disabled={!location}>
                                        <option value="">Select</option>
                                        <option value="Phoenix">Phoenix</option>
                                        <option value="Working">WorkingCo</option>
                                        <option value="Venture">Venture Studio</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={4}>Service Type</Form.Label>
                                <Col sm={8}>
                                    <Form.Select
                                        value={serviceType}
                                        onChange={(e) => setServiceType(e.target.value)}
                                        disabled={!branch}
                                    >
                                        <option value="">Select</option>
                                        <option value="Coworking">CoWorking Space</option>
                                        <option value="Training">Training Room</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={4}>Offering Type</Form.Label>
                                <Col sm={8}>
                                    <Form.Select
                                        value={offeringType}
                                        onChange={(e) => setOfferingType(e.target.value)}
                                        disabled={!serviceType}
                                    >
                                        <option value="">Select</option>
                                        <option value="25">25 Seater Training Room</option>
                                        <option value="50">50 Seater</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={4}>Description</Form.Label>
                                <Col sm={8}>
                                    <Form.Control as="textarea" rows={3} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={4}>Inventory</Form.Label>
                                <Col sm={8}>
                                    <Form.Control type="number" />
                                </Col>
                            </Form.Group>
                        </Col>

                        <Col md={6} className="border-start ps-4">
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={5}>Offering Title</Form.Label>
                                <Col sm={7}>
                                    <Form.Control type="text" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={5}>Account</Form.Label>
                                <Col sm={7}>
                                    <Form.Control type="text" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={5}>Unit</Form.Label>
                                <Col sm={7}>
                                    <Form.Control type="text" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={5}><b>Unit Price</b></Form.Label>
                                <Col sm={3}>
                                    <Form.Control type="text" value="INR" disabled />
                                </Col>
                                <Col sm={4}>
                                    <Form.Control type="number" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={5}>HSN Code</Form.Label>
                                <Col sm={7}>
                                    <Form.Control type="text" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={5}>Taxable?</Form.Label>
                                <Col sm={7}>
                                    <Form.Check inline label="Taxable" name="taxable" type="radio" defaultChecked />
                                    <Form.Check inline label="Non-Taxable" name="taxable" type="radio" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Form.Label column sm={5}>Intra-State Tax Rate</Form.Label>
                                <Col sm={7}>
                                    <Form.Control placeholder="GST18 [18%]" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-4">
                                <Form.Label column sm={5}>Inter-State Tax Rate</Form.Label>
                                <Col sm={7}>
                                    <Form.Control placeholder="IGST18 [18%]" />
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>

                    {/* Buttons */}
                </Form>
            </div>
            <div className="text-center mt-4">
                <Button variant="primary" className="me-2">Cancel</Button>
                <Button variant="success">Submit</Button>
            </div>
        </Container>
    );
};

export default AddOfferForm;
