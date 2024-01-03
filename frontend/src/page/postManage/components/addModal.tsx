import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { ModalWrapper, ModalContainer, PostForm, InputRow, InputSection, InputTitle, Input, ErrorMessage, TextArea, SubmitRow } from '../styled'
import EditSubmit from './editSubmit'
import { initialAddPostValue, initialErrorMessage } from '../initialValue'
import { ColorButton, NoColorButton } from '../../shared/styled'
import * as yup from "yup"
import axios from 'axios'

type PropsType = {
    setAddModal: React.Dispatch<React.SetStateAction<boolean>>,
    updateDetect: React.MutableRefObject<boolean>
}

const validationSchema = yup.object().shape({
    title: yup.string().required("Title is required"),
    content: yup.string().required("Content is required")
})

const AddModal = (props: PropsType) => {

    const [addpost, setAddPost] = useState(initialAddPostValue);
    const [addPostError, setAddPostError] = useState(initialErrorMessage)

    const handleReset = () => {
        setAddPost(initialAddPostValue);
        setAddPostError(initialErrorMessage);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        //front end validation using yup
        validationSchema.validate(addpost, {abortEarly:false}).then(() => {
            
            //pass data to backend to patch data
            axios.post(
                `http://localhost:8888/api/posts`,
                addpost
            ).then(() => {

                //success action
                props.updateDetect.current = !props.updateDetect.current;
                alert("Add Successfully")
                props.setAddModal(false)
            }).catch(e => {
                console.log(e)
                //validation error from backend
                const tempError = {...initialErrorMessage};
                const data = e.response.data;

                for (const k in data) {
                    (tempError as any)[k] = data[k];
                }

                setAddPostError({...tempError});
            })

        }).catch((e) => {

            //frontend validation error
            let tempError: Record<string, string> = {...initialErrorMessage};

            e.inner.forEach((error: any) => {

                tempError[error.path] = error.message;
            });

            setAddPostError({...addPostError, ...tempError});
        })
    }

  return (
    <ModalWrapper>
        <ModalContainer>
            <FontAwesomeIcon icon={faXmark} onClick={() => props.setAddModal(false)}/>
            <PostForm onSubmit={e => handleSubmit(e)}>
                <h2>Add Post</h2>
                <InputRow>
                    <InputSection>
                        <InputTitle>Title</InputTitle>
                            <Input type = "text" placeholder = "Please enter the title" value = {addpost.title} onChange={(e) => setAddPost({...addpost, title: e.target.value})}/>
                        <ErrorMessage className={addPostError.title ? "ShowErrorMessage" : ""}>{addPostError.title}</ErrorMessage>
                    </InputSection>
                </InputRow>
                <InputRow>
                    <InputSection>
                        <InputTitle>Content</InputTitle>
                            <TextArea placeholder = "Please enter the content" value = {addpost.content} onChange={(e) => setAddPost({...addpost, content: e.target.value})} rows={8}/>
                        <ErrorMessage className={addPostError.content ? "ShowErrorMessage" : ""}>{addPostError.content}</ErrorMessage>
                    </InputSection>
                </InputRow>
                <SubmitRow>
                    <ColorButton className='margin-right-5'>
                        Add
                    </ColorButton>
                    <NoColorButton type = "button" onClick={() => handleReset()}>
                        Reset
                    </NoColorButton>
                </SubmitRow>
            </PostForm>
        </ModalContainer>
    </ModalWrapper>
  )
}

export default AddModal