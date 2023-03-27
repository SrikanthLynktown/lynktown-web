import React, { useState } from "react";
import Modal from "./Modal";

export default function HomeModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <button onClick={() => setShowModal(true)}>Open Modal</button>
            <Modal
                onClose={() => setShowModal(false)}
                show={showModal}
            >
                Hello from the modal!
            </Modal>
        </div>
    )
}