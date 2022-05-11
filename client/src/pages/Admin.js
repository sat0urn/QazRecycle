import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreateDevice from "../components/modals/CreateDevice";
import CreateBrand from "../components/modals/CreateBrand";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)

    return (
        <div>
            <Container className="d-flex flex-column">
                <Button
                    variant={"outline-dark"}
                    className="mt-4 p-2"
                    onClick={() => setTypeVisible(true)}
                >
                    Add Something
                </Button>
                <Button
                    variant={"outline-dark"}
                    className="mt-4 p-2"
                    onClick={() => setBrandVisible(true)}
                >
                    Delete Something
                </Button>
                <Button
                    variant={"outline-dark"}
                    className="mt-4 p-2 mb-4"
                    onClick={() => setDeviceVisible(true)}
                >
                    Change Something
                </Button>
                <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
                <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
                <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            </Container>
        </div>

    );
};

export default Admin;