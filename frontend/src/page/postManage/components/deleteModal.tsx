import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ColorButton, NoColorButton } from "../../shared/styled";
import { ModalContainer, ModalDescriptionMessage, ModalIcon, ModalTwoButton, ModalWrapper } from "../styled";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

type PropsType = {
    cancelAction: () => void,
    confirmAction: () => void,
    message: string
}

const DeleteModal = (props: PropsType) => {

    return (
        <ModalWrapper>
            <ModalContainer>
                <ModalIcon><FontAwesomeIcon icon={faCircleExclamation}/></ModalIcon>
                <ModalDescriptionMessage>{props.message}</ModalDescriptionMessage>
                <ModalTwoButton>
                    <ColorButton type="button" className = "confirmbtn" onClick={() => props.confirmAction()}>Confirm</ColorButton>
                    <NoColorButton type="button" className = "cancelbtn" onClick={() => props.cancelAction()}>Cancel</NoColorButton>
                </ModalTwoButton>
            </ModalContainer>
        </ModalWrapper>
    )
}

export default DeleteModal;