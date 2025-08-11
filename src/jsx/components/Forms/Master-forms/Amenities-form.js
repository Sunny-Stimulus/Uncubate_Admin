import React, { useState } from 'react';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import { FaArrowLeft, FaImage, FaEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AddAmenityForm = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const [imagePreview1, setImagePreview1] = useState(null);
    const navigate = useNavigate();

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
    const handleImageChange1 = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview1(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <Container className="mt-2">
            <div className="d-flex align-items-center mb-3">
                <FaArrowLeft className="me-2" style={{ cursor: 'pointer' }} />
                <h5 className="mb-0">Amenities Master</h5>
            </div>
            <div className="bg-white p-4 shadow-sm border rounded">
                {/* Back and Title */}

                {/* Section Heading */}
                <h6 className="mb-3 border-bottom pb-2">Add New Amenity</h6>

                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="cityName">
                        <Form.Label column sm={2}>
                            Amenity name
                        </Form.Label>
                        <Col sm={6}>
                            <Form.Control type="text" placeholder="Amenity name" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="desc">
                        <Form.Label column sm={2}>
                            Description
                        </Form.Label>
                        <Col sm={6}>
                            <Form.Control as="textarea" placeholder="200 Characters description" rows={3} />
                        </Col>
                    </Form.Group>

                    {/* Upload Icon */}
                    <Form.Group as={Row} className="mb-4" controlId="uploadIcon">
                        <Form.Label column sm={2}>
                            Upload Icon
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
                                    className="position-absolute bottom-0 start-50 translate-middle-x mb-1 text-white px-2 py-1 rounded small"
                                    style={{ fontSize: '0.75rem', backgroundColor: 'blue' }}
                                >
                                    <FaEdit className="me-1" />
                                    Add
                                </div>
                            </div>
                        </Col>
                    </Form.Group>

                    {/* Upload Icon (Yellow) */}
                    <Form.Group as={Row} className="mb-4" controlId="uploadIcon">
                        <Form.Label column sm={2}>
                            Upload Icon (yellow)
                        </Form.Label>
                        <Col sm={6}>
                            <div
                                className="d-flex flex-column align-items-center justify-content-center border rounded bg-light"
                                style={{ width: '150px', height: '120px', position: 'relative', overflow: 'hidden' }}
                            >
                                {/* Image Preview or Icon */}
                                {imagePreview1 ? (
                                    <img
                                        src={imagePreview1}
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
                                    onChange={handleImageChange1}
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
                                    className="position-absolute bottom-0 start-50 translate-middle-x mb-1 text-white px-2 py-1 rounded small"
                                    style={{ fontSize: '0.75rem', backgroundColor: 'blue' }}
                                >
                                    <FaEdit className="me-1" />
                                    Add
                                </div>
                            </div>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-4" controlId="displayOnWebsite">
                        <Form.Label column sm={2}>
                            Display on website
                        </Form.Label>
                        <Col sm={6}>
                            <Form.Check type="checkbox" />
                        </Col>
                    </Form.Group>

                    {/* Buttons */}
                    <Form.Group as={Row}>
                        <Col sm={{ span: 6, offset: 2 }}>
                            <Button className="me-2">
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

export default AddAmenityForm;