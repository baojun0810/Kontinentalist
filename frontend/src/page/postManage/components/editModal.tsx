import React, { useEffect, useRef, useState } from 'react'
import { ErrorMessage, Input, InputRow, InputSection, InputTitle, ModalContainer, ModalWrapper, PostForm, TextArea } from '../styled'
import axios from 'axios'
import { PostType, initialEditPostValue, initialErrorMessage } from '../initialValue'
import EditSubmit from './editSubmit'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import * as yup from "yup"

type PropsType = {
    id: number,
    setEditModal: React.Dispatch<React.SetStateAction<{
        modal: boolean;
        id: number;
    }>>,
    updateDetect: React.MutableRefObject<boolean>
}

const validationSchema = yup.object().shape({
    title: yup.string().required("Title is required"),
    content: yup.string().required("Content is required")
})

const EditModal = (props: PropsType) => {

    const [editPost, setEditPost] = useState<PostType>(initialEditPostValue);
    const [editPostError, setEditPostError] = useState(initialErrorMessage)
    const [readMode, setReadMode] = useState(true);
    const resetValue = useRef<PostType>(initialEditPostValue);

    //fetch the post by id when mounting
    useEffect(() => {

        const fetchData = async () => {
            
            await fetchPostByID();
        }

        fetchData();
    }, [])

    const fetchPostByID = async () => {
        
        await axios.get(
            `http://localhost:8888/api/posts/${props.id}`
        ).then(res => {
            setEditPost(res.data);
            resetValue.current = res.data;
        }).catch(e => console.log(e));
    }

    //reset the form
    const handleReset = () => {
        setEditPost(resetValue.current);
        setEditPostError(initialErrorMessage)
    }

    //hanndle submit
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        //front end validation using yup
        validationSchema.validate(editPost, {abortEarly:false}).then(() => {
            
            //pass data to backend to patch data
            axios.patch(
                `http://localhost:8888/api/posts/${editPost.id}`,
                editPost
            ).then(() => {

                //success action
                props.updateDetect.current = !props.updateDetect.current;
                alert("Update Successfully")
                props.setEditModal({modal: false, id: 0})
            }).catch(e => {
                console.log(e)
                //validation error from backend
                const tempError = {...initialErrorMessage};
                const data = e.response.data;

                for (const k in data) {
                    (tempError as any)[k] = data[k];
                }

                setEditPostError({...tempError});
            })

        }).catch((e) => {

            //frontend validation error
            let tempError: Record<string, string> = {...initialErrorMessage};

            e.inner.forEach((error: any) => {

                tempError[error.path] = error.message;
            });

            setEditPostError({...editPostError, ...tempError});
        })
    }

  return (
    <ModalWrapper>
        <ModalContainer>
            <FontAwesomeIcon icon={faXmark} onClick={() => props.setEditModal({modal: false, id: 0})}/>
            <PostForm onSubmit={e => handleSubmit(e)}>
                <h2>View and Edit Post</h2>
                <InputRow>
                    <InputSection>
                        <InputTitle>Title</InputTitle>
                            <Input type = "text" placeholder = "Please enter the title" value = {editPost.title} onChange={(e) => setEditPost({...editPost, title: e.target.value})} disabled={readMode ? true : false}/>
                        <ErrorMessage className={editPostError.title ? "ShowErrorMessage" : ""}>{editPostError.title}</ErrorMessage>
                    </InputSection>
                </InputRow>
                <InputRow>
                    <InputSection>
                        <InputTitle>Content</InputTitle>
                            <TextArea placeholder = "Please enter the content" value = {editPost.content} onChange={(e) => setEditPost({...editPost, content: e.target.value})} disabled={readMode ? true : false} rows={8}/>
                        <ErrorMessage className={editPostError.content ? "ShowErrorMessage" : ""}>{editPostError.content}</ErrorMessage>
                    </InputSection>
                </InputRow>
                <EditSubmit handleReset={handleReset} readMode={readMode} setReadMode={setReadMode}/>
            </PostForm>
        </ModalContainer>
    </ModalWrapper>
  )
}

export default EditModal