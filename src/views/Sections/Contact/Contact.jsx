import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Row, Col, Form, Button, Accordion, Alert } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";

import axios from "axios";

const Contact = ({ className, frontmatter }) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [guestBook, setGuestBook] = useState([]);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    if (name.length > 0 && message.length > 0) setAlert(false);
  }, [name, message]);

  const updateGuestBook = async () => {
    if (name.length === 0 || message.length === 0) {
      setAlert(true);
    } else {
      const newItem = {
        "id": id,
        "name": name,
        "message": message,
        "file": file,
      };
      setGuestBook([...guestBook, newItem]);
      const res = await axios.post("/messages", guestBook);
      console.log(res);
      console.log(res.data);

      //   const sendMessage = {
      //     method: 'POST',
      //     headers: {
      //         "Accept": 'application/json',
      //         'Content-Type': 'application/json',
      //     },
      //     body: {guestBook}
      // };
      // try {
      //     const fetchResponse = await fetch(`http://${location}:8000/messages`);
      //     const data = await fetchResponse.json();
      //     return data;
      // } catch (e) {
      //     return e;
      // }
    }

    setId(id + 1);
    setName("");
    setMessage("");
    setFile(null);
  };

  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader } = frontmatter;

  return (
    <div>
      <PageSection className={className} id={anchor}>
        <Row>
          <SectionHeader header={rootHeader} subheader={rootSubHeader} />
        </Row>
        <Row className="charities">
          <Col lg={8} className="mx-auto text-center">
            {alert && <Alert variant="danger">Xin điền đầy đủ thông tin trước khi gửi đi ạ</Alert>}
            <Form>
              <Form.Group className="mb-3" controlId="ControlInput1">
                <Form.Label>Họ Tên/ Danh xưng</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Anh A Tèo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="ControlTextarea1">
                <Form.Label>Lời nhắn đến Huân và Vy 💌</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Chúc mừng 2 bé iu"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="ControlFile">
                <Form.Label>Đính kèm Hình/ Video (nếu có)</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                  }}
                />
              </Form.Group>
              <Button variant="primary" onClick={updateGuestBook}>
                Gửi đi
              </Button>
            </Form>
          </Col>
        </Row>
        {guestBook.length > 0 && (
          <Row className="charities mt-5">
            <Accordion>
              {guestBook.map((m, idx) => (
                <Accordion.Item eventKey={idx} key={m.id}>
                  <Accordion.Header>{m.name}</Accordion.Header>
                  <Accordion.Body>{m.message}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Row>
        )}
      </PageSection>
    </div>
  );
};

Contact.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Contact.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Contact;
