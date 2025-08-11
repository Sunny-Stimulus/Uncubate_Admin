import React, { useState } from 'react';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import { FaArrowLeft, FaImage, FaEdit } from 'react-icons/fa';

const AddCityForm = () => {
    const [imagePreview, setImagePreview] = useState(null);

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

    return (
        <Container className="mt-2">
            <div className="d-flex align-items-center mb-3">
                <FaArrowLeft className="me-2" style={{cursor:'pointer'}}/>
                <h5 className="mb-0">City Master</h5>
            </div>
            <div className="bg-white p-4 shadow-sm border rounded">
                {/* Back and Title */}

                {/* Section Heading */}
                <h6 className="mb-3 border-bottom pb-2">Add New City Master</h6>

                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="cityName">
                        <Form.Label column sm={2}>
                            City name
                        </Form.Label>
                        <Col sm={6}>
                            <Form.Control type="text" placeholder="City name" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="stateName">
                        <Form.Label column sm={2}>
                            State
                        </Form.Label>
                        <Col sm={6}>
                            <Form.Control type="text" placeholder="State name" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="shortDesc">
                        <Form.Label column sm={2}>
                            Short Description
                        </Form.Label>
                        <Col sm={6}>
                            <Form.Control as="textarea" placeholder="Short description" rows={2} />
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

export default AddCityForm;



// import React from 'react';
// import { Button, Container, Form, Row, Col } from 'react-bootstrap';
// import { FaArrowLeft, FaImage, FaEdit } from 'react-icons/fa';

// const AddCityForm = () => {
//     return (
//         <Container className="mt-4">
//             <div className="bg-white p-4 shadow-sm border rounded">
//                 {/* Back and Title */}
//                 <div className="d-flex align-items-center mb-3">
//                     <FaArrowLeft className="me-2" />
//                     <h5 className="mb-0">City Master</h5>
//                 </div>

//                 {/* Section Heading */}
//                 <h6 className="mb-3 border-bottom pb-2">Add New City Master</h6>

//                 <Form>
//                     <Form.Group as={Row} className="mb-3" controlId="cityName">
//                         <Form.Label column sm={2}>
//                             City name
//                         </Form.Label>
//                         <Col sm={6}>
//                             <Form.Control type="text" placeholder="City name" />
//                         </Col>
//                     </Form.Group>

//                     <Form.Group as={Row} className="mb-3" controlId="stateName">
//                         <Form.Label column sm={2}>
//                             State
//                         </Form.Label>
//                         <Col sm={6}>
//                             <Form.Control type="text" placeholder="State name" />
//                         </Col>
//                     </Form.Group>

//                     <Form.Group as={Row} className="mb-3" controlId="shortDesc">
//                         <Form.Label column sm={2}>
//                             Short Description
//                         </Form.Label>
//                         <Col sm={6}>
//                             <Form.Control as="textarea" placeholder="Short description" rows={2} />
//                         </Col>
//                     </Form.Group>

//                     <Form.Group as={Row} className="mb-3" controlId="desc">
//                         <Form.Label column sm={2}>
//                             Description
//                         </Form.Label>
//                         <Col sm={6}>
//                             <Form.Control as="textarea" placeholder="4000 Characters description" rows={3} />
//                         </Col>
//                     </Form.Group>

//                     {/* Upload Image */}
//                     <Form.Group as={Row} className="mb-4" controlId="uploadImage">
//                         <Form.Label column sm={2}>
//                             Upload Image
//                         </Form.Label>
//                         <Col sm={6}>
//                             <div
//                                 className="d-flex flex-column align-items-center justify-content-center border rounded bg-light"
//                                 style={{ width: '150px', height: '120px', position: 'relative' }}
//                             >
//                                 <FaImage size={40} className="text-muted" />
//                                 {/* <Button
//                                     variant="primary"
//                                     size="sm"
//                                     className="position-absolute bottom-0 start-50 translate-middle-x mb-1"
//                                 >
//                                     <FaEdit className="me-1" /> Add
//                                 </Button> */}
//                             </div>
//                         </Col>
//                     </Form.Group>

//                     {/* Buttons */}
//                     <Form.Group as={Row}>
//                         <Col sm={{ span: 6, offset: 2 }}>
//                             <Button variant="primary" className="me-2">
//                                 Cancel
//                             </Button>
//                             <Button variant="success">Submit</Button>
//                         </Col>
//                     </Form.Group>
//                 </Form>
//             </div>
//         </Container>
//     );
// };

// export default AddCityForm;
