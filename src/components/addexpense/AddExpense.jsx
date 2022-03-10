import {Card, Form, Button, FloatingLabel} from "react-bootstrap";
import React, {useState} from "react";
const AddExpense = ()=>{
    const [items, setItems] = useState({
        date:'',
        type:'',
        description:'',
        amount:''
    })

    const handleChange = (e)=>{
        setItems({
            ...items,
            [e.target.name]:e.target.value
        })
    }

    console.log(items)
    return(
        <>
            <Card>
                <Card.Header>
                    Pridėkite išlaidas į išlaidų sąrašą
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Pasirinkite datą:</Form.Label>
                            <Form.Control type="date" name="date" value={items.date} onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <FloatingLabel label="Pasirinkite išlaidų tipą">
                                <Form.Select value={items.type} name="type" onChange={handleChange}>
                                    <option>Pramogos</option>
                                    <option>Nuoma</option>
                                    <option>Kreditai</option>
                                    <option>Kuras</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control
                            as="textarea"
                            placeholder="Aprašykite išlaidas"
                            style={{height:'100px'}}
                            name="description"
                            value={items.description}
                            onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Išlaidų suma</Form.Label>
                            <Form.Control type="text" name="amount" value={items.amount} onChange={handleChange}/>
                        </Form.Group>
                        <Button>Saugoti</Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}

export default AddExpense