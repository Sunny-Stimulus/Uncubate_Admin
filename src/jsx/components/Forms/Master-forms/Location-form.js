import React, { useState } from 'react';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import { FaArrowLeft, FaImage, FaEdit } from 'react-icons/fa';

const offerings = {
    "CoWorking Space": [
        "Open Dedicated Desk", "Flexi Desk", "Shared Cabin Desk",
        "2 Seater Private Cabin", "3 Seater Private Cabin", "4 Seater Private Cabin",
        "5 Seater Private Cabin", "6 Seater Private Cabin", "8 Seater Private Cabin",
        "10 Seater Private Cabin", "12 Seater Private Cabin"
    ],
    "Meeting Room": [
        "4 Seater Meeting Room", "2 Seater Meeting Room"
    ],
    "Conference Room": [
        "8 Seater Conference Room", "10 Seater Conference Room"
    ],
    "Event / Training Area": [
        "25 Seater Event Area", "25 Seater Training Area"
    ],
    "Virtual Office for GST": [
        "GST Address Registration"
    ],
    "Amenities": [
        "Unlimited Internet",
        "Meeting Room",
        "Conference Room",
        "Business Printer",
        "Pantry Area",
        "Rooftop Cafe",
        "Event Area",
        "Housekeeping"
    ],
};


const AddLocationForm = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const [selectedOfferings, setSelectedOfferings] = useState([]);

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setImagePreview(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleOfferingChange = (offering) => {
        setSelectedOfferings(prev =>
            prev.includes(offering)
                ? prev.filter(item => item !== offering)
                : [...prev, offering]
        );
    };

    return (
        <Container className="mt-2">
            <div className="d-flex align-items-center mb-3">
                <FaArrowLeft className="me-2" style={{cursor:'pointer'}}/>
                <h5 className="mb-0">Location</h5>
            </div>
            <div className="bg-white p-4 shadow-sm border rounded">
                <div className="d-flex align-items-center mb-3">
                    <h5 className="mb-0">Add New Location</h5>
                </div>
                <hr />
                <Row>
                    {/* Left Side Form */}
                    <Col md={6}>
                        {/* Banner Upload */}
                        <div className="mb-3">
                            <Form.Label>Banner</Form.Label>
                            <div
                                className="d-flex flex-column align-items-center justify-content-center border rounded bg-light"
                                style={{ width: '150px', height: '120px', position: 'relative', overflow: 'hidden' }}
                            >
                                {imagePreview ? (
                                    <img src={imagePreview} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                ) : (
                                    <FaImage size={40} className="text-muted" />
                                )}
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
                                <div className="position-absolute bottom-0 start-50 translate-middle-x mb-1 text-white px-2 py-1 rounded small" style={{ fontSize: '0.75rem', backgroundColor: 'blue' }}>
                                    <FaEdit className="me-1" /> Add
                                </div>
                            </div>
                        </div>

                        <Form.Group className="mb-2">
                            <Form.Label>Title</Form.Label>
                            <Form.Control placeholder="Title" />
                        </Form.Group>

                        <Form.Group className="mb-2">
                            <Form.Label>Location</Form.Label>
                            <Form.Control placeholder="Location" />
                        </Form.Group>

                        <Form.Group className="mb-2">
                            <Form.Label>City</Form.Label>
                            <Form.Select>
                                <option>Ahmedabad</option>
                                <option>Mumbai</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-2">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={2} placeholder="200 Characters" />
                        </Form.Group>

                        <Form.Label>Location Address</Form.Label>
                        <Form.Control className="mb-2" placeholder="Address 1" />
                        <Form.Control className="mb-2" placeholder="Address 2" />

                        <Row>
                            <Col><Form.Control className="mb-2" placeholder="Landmark" /></Col>
                            <Col><Form.Control className="mb-2" placeholder="Area" /></Col>
                        </Row>
                        <Row>
                            <Col><Form.Control className="mb-2" placeholder="City" /></Col>
                            <Col><Form.Control className="mb-2" placeholder="Zipcode" /></Col>
                        </Row>

                        <Form.Group className="mb-2">
                            <Form.Label>Google Map Link</Form.Label>
                            <Form.Control placeholder="200 Characters" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Directions Link</Form.Label>
                            <Form.Control placeholder="200 Characters" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Team</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Col>

                    {/* Right Side Offerings */}
                    <Col md={6}>
                        <h6 className="text-green fw-bold">OFFERINGS</h6>
                        {/* OFFERINGS Title */}
                        <div className="mb-4 mt-4">
                            <Row>
                                {/* Left Column - CoWorking Space */}
                                <Col md={6}>
                                    <h6 className="fw-bold">CoWorking Space</h6>
                                    {offerings["CoWorking Space"].map((option) => (
                                        <Form.Check
                                            key={option}
                                            type="checkbox"
                                            label={option}
                                            checked={selectedOfferings.includes(option)}
                                            onChange={() => handleOfferingChange(option)}
                                        />
                                    ))}
                                </Col>

                                {/* Right Column - Amenities with IN & PD */}
                                <Col md={6}>
                                    <h6 className="fw-bold">Amenities</h6>

                                    {/* Header for IN and PD */}
                                    <div className="d-flex mb-1" style={{ fontSize: "0.85rem", fontWeight: 600 }}>
                                        <div style={{ width: "50px" }}>IN</div>
                                        <div style={{ width: "50px" }}>PD</div>
                                    </div>

                                    {/* Amenities rows */}
                                    {offerings["Amenities"].map((option, index) => (
                                        <div key={index} className="d-flex align-items-center mb-2">
                                            <Form.Check
                                                type="checkbox"
                                                // className="me-3"
                                                checked={selectedOfferings.includes(`${option}_IN`)}
                                                onChange={() => handleOfferingChange(`${option}_IN`)}
                                                style={{ width: "50px" }}
                                            />
                                            <Form.Check
                                                type="checkbox"
                                                className="me-3"
                                                checked={selectedOfferings.includes(`${option}_PD`)}
                                                onChange={() => handleOfferingChange(`${option}_PD`)}
                                            // style={{ width: "50px" }}
                                            />
                                            <div>{option}</div>
                                        </div>
                                    ))}
                                </Col>

                                <Col md={6}>
                                    <h6 className="fw-bold mt-3">Virtual Office for GST</h6>
                                    {offerings["Virtual Office for GST"].map((option) => (
                                        <Form.Check
                                            key={option}
                                            type="checkbox"
                                            label={option}
                                            checked={selectedOfferings.includes(option)}
                                            onChange={() => handleOfferingChange(option)}
                                        />
                                    ))}
                                </Col>
                            </Row>
                        </div>

                        {Object.entries(offerings).map(([category, options]) => {
                            if (category === "CoWorking Space" || category === "Amenities" || category==="Virtual Office for GST") return null;
                            return (
                                <div key={category} className="mb-3">
                                    <h6 className="fw-bold">{category}</h6>
                                    {options.map((option) => (
                                        <Form.Check
                                            key={option}
                                            type="checkbox"
                                            label={option}
                                            checked={selectedOfferings.includes(option)}
                                            onChange={() => handleOfferingChange(option)}
                                        />
                                    ))}
                                </div>
                            );
                        })}
                    </Col>
                </Row>
                <hr />
                {/* Buttons */}
                <div className="mt-3 d-flex justify-content-center">
                    <Button
                        className="me-2"
                        style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}
                    >
                        Cancel
                    </Button>
                    <Button variant="success">Submit</Button>
                </div>
            </div>
        </Container>
    );
};

export default AddLocationForm;
