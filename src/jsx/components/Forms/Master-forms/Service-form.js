import React, { useState } from 'react';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
// import { FaArrowLeft, FaImage, FaEdit, FaPlus, FaMinus } from 'react-icons/fa';
import { FaArrowLeft, FaImage, FaEdit, FaPlus, FaMinus } from 'react-icons/fa'

const AddServiceForm = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const [subServices, setSubServices] = useState([{ name: '', desc: '' }]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddRow = () => {
        setSubServices([...subServices, { name: '', desc: '' }]);
    };

    const handleRemoveRow = (index) => {
        const newRows = subServices.filter((_, i) => i !== index);
        setSubServices(newRows);
    };

    const handleSubServiceChange = (index, field, value) => {
        const updated = [...subServices];
        updated[index][field] = value;
        setSubServices(updated);
    };

    return (
        <Container className="mt-2">
            <div className="d-flex align-items-center mb-3">
                <FaArrowLeft className="me-2" style={{cursor:'pointer'}}/>
                <h5 className="mb-0">Service Master</h5>
            </div>
            <div className="bg-white p-4 shadow-sm border rounded">
                {/* Back and Title */}

                {/* Section Heading */}
                <h6 className="mb-3 border-bottom pb-2">Add New Service Master</h6>

                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="serviceName">
                        <Form.Label column sm={2}>
                            Service name
                        </Form.Label>
                        <Col sm={6}>
                            <Form.Control type="text" placeholder="Service name" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="desc">
                        <Form.Label column sm={2}>
                            Description
                        </Form.Label>
                        <Col sm={6}>
                            <Form.Control as="textarea" placeholder="4000 Characters description" rows={3} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="extrDesc">
                        <Form.Label column sm={2}>
                            Extra Description
                        </Form.Label>
                        <Col sm={6}>
                            <Form.Control as="textarea" placeholder="Extra description" rows={2} />
                        </Col>
                    </Form.Group>


                    {/* Upload Image */}
                    <Form.Group as={Row} className="mb-4" controlId="uploadImage">
                        <Form.Label column sm={2}>
                            Upload Image
                        </Form.Label>
                        <Col sm={6}>
                            <div
                                className="d-flex flex-column align-items-center justify-content-center border rounded bg-light"
                                style={{ width: '150px', height: '120px', position: 'relative', overflow: 'hidden' }}
                            >
                                {/* Image Preview or Icon */}
                                {imagePreview ? (
                                    <img
                                        src={imagePreview}
                                        alt="Preview"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                ) : (
                                    <FaImage size={40} className="text-muted" />
                                )}

                                {/* Hidden file input */}
                                <Form.Control
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    style={{
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                        opacity: 0,
                                        cursor: 'pointer',
                                    }}
                                />

                                {/* Overlay Button */}
                                <div
                                    className="position-absolute bottom-0 start-50 translate-middle-x mb-1 bg-primary text-white px-2 py-1 rounded small"
                                    style={{ fontSize: '0.75rem' }}
                                >
                                    <FaEdit className="me-1" />
                                    Add
                                </div>
                            </div>
                        </Col>
                    </Form.Group>

                    {/* --- Add Sub Services --- */}
                    <hr />
                    <h6 className="fw-bold mb-3">Add Sub Services</h6>

                    {subServices.map((service, index) => (
                        <Row key={index} className="align-items-center mb-3">
                            <Col sm={1} className="text-center">
                                {index === 0 ? (
                                    <FaPlus
                                        onClick={handleAddRow}
                                        className="text-success"
                                        size={24}
                                        style={{ cursor: 'pointer', background: '#f2f2f2', borderRadius: '50%', padding: '6px' }}
                                    />
                                ) : (
                                    <FaMinus
                                        onClick={() => handleRemoveRow(index)}
                                        className="text-danger"
                                        size={24}
                                        style={{ cursor: 'pointer', background: '#f2f2f2', borderRadius: '50%', padding: '6px' }}
                                    />
                                )}
                            </Col>
                            <Col sm={4}>
                                <Form.Control
                                    type="text"
                                    placeholder="Sub-service Name"
                                    value={service.name}
                                    onChange={(e) => handleSubServiceChange(index, 'name', e.target.value)}
                                />
                            </Col>
                            <Col sm={4}>
                                <Form.Control
                                    type="text"
                                    placeholder="Description"
                                    value={service.desc}
                                    onChange={(e) => handleSubServiceChange(index, 'desc', e.target.value)}
                                />
                            </Col>
                        </Row>
                    ))}

                    {/* Buttons */}
                    <Form.Group as={Row}>
                        <Col sm={{ span: 6, offset: 2 }}>
                            <Button variant="primary" className="me-2">
                                Cancel
                            </Button>
                            <Button variant="success">Submit</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        </Container>
    );
};

export default AddServiceForm;
