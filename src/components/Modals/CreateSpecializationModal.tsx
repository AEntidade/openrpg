import { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import SheetModal from './SheetModal';

type CreateSpecializationModalProps = {
    onCreate(name: string): void;
    show: boolean;
    onHide(): void;
}

export default function CreateSpecializationModal(props: CreateSpecializationModalProps) {
    const [name, setName] = useState('');

    return (
        <SheetModal title='Nova Especialização'
            applyButton={{ name: 'Criar', onApply: () => props.onCreate(name) }}
            show={props.show} onHide={props.onHide} >
            <Container>
                <Row>
                    <Col>
                        <Form.Control value={name} onChange={ev => setName(ev.currentTarget.value)} />
                    </Col>
                </Row>
            </Container>
        </SheetModal>
    );
}