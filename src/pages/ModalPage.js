import Button from "../components/Button";
import Modal from "../components/Modal";
import { useState } from "react";

function ModalPage () {
    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        setShowModal(true)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const actionBar = <div><Button primary onClick={handleClose}>I Accept</Button></div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>Here is an important agreement for you to accept</p>
    </Modal>

    return (
        <div className="relative">
            <Button primary onClick={handleClick}>Open Modal</Button>
            {showModal && modal}
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nam beatae expedita explicabo commodi reprehenderit, illo minus consequuntur dolorem provident in omnis deserunt esse aut ipsam quasi sapiente molestias neque!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nam beatae expedita explicabo commodi reprehenderit, illo minus consequuntur dolorem provident in omnis deserunt esse aut ipsam quasi sapiente molestias neque!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nam beatae expedita explicabo commodi reprehenderit, illo minus consequuntur dolorem provident in omnis deserunt esse aut ipsam quasi sapiente molestias neque!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nam beatae expedita explicabo commodi reprehenderit, illo minus consequuntur dolorem provident in omnis deserunt esse aut ipsam quasi sapiente molestias neque!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nam beatae expedita explicabo commodi reprehenderit, illo minus consequuntur dolorem provident in omnis deserunt esse aut ipsam quasi sapiente molestias neque!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nam beatae expedita explicabo commodi reprehenderit, illo minus consequuntur dolorem provident in omnis deserunt esse aut ipsam quasi sapiente molestias neque!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nam beatae expedita explicabo commodi reprehenderit, illo minus consequuntur dolorem provident in omnis deserunt esse aut ipsam quasi sapiente molestias neque!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nam beatae expedita explicabo commodi reprehenderit, illo minus consequuntur dolorem provident in omnis deserunt esse aut ipsam quasi sapiente molestias neque!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nam beatae expedita explicabo commodi reprehenderit, illo minus consequuntur dolorem provident in omnis deserunt esse aut ipsam quasi sapiente molestias neque!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nam beatae expedita explicabo commodi reprehenderit, illo minus consequuntur dolorem provident in omnis deserunt esse aut ipsam quasi sapiente molestias neque!
            </p>
        </div>
    )
}

export default ModalPage