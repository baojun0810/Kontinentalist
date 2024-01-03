import React, { useEffect, useRef, useState } from 'react'
import { ManagePostSection, ManagePostTitle, PageButton, PaginationWrapper } from './styled'
import ManagePostTable from './components/managePostTable'
import axios from 'axios'
import { EntirePostType, initialPostValue } from './initialValue'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Pagination from './components/pagination'
import EditModal from './components/editModal'
import { ColorButton } from '../shared/styled'
import AddModal from './components/addModal'
import DeleteModal from './components/deleteModal'

const PostManage = () => {

    const [post, setPost] = useState<EntirePostType>(initialPostValue);
    const [page, setPage] = useState(0);
    const [addModal, setAddModal] = useState(false)
    const [editModal, setEditModal] = useState({
        modal: false,
        id: 0
    });
    const [deleteModal, setDeleteModal] = useState(false)
    const deleteID = useRef(0);
    const updateDetect = useRef(false);

    useEffect(() => {

        const fetchData = async () => {
            
            await fetchPost();
        }

        fetchData();
    }, [page, updateDetect.current])

    const fetchPost = async () => {
        
        await axios.get(
            "http://localhost:8888/api/posts",
            {
                params: {pageNumber: page}
            }
        ).then(res => {
            setPost(res.data)
        }).catch(e => console.log(e));
    }

    const handleDelete = () => {

        axios.delete(
            `http://localhost:8888/api/posts/${deleteID.current}`,
        ).then(() => {
            updateDetect.current = !updateDetect.current;
            alert("Delete Successfully");
            handleDeleteConfirmCancel();
        })
    }

    const handleDeleteConfirmCancel = () => {
        deleteID.current = 0;
        setDeleteModal(false);
    }

  return (
    <ManagePostSection>
        <ManagePostTitle>Manage Post</ManagePostTitle>
        <ColorButton className='add-button' onClick={() => setAddModal(true)}>Add Post</ColorButton>
        <ManagePostTable post = {post.post} setEditModal = {setEditModal} deleteID={deleteID} setDeleteModal={setDeleteModal}/>
        <Pagination pagination={post.pagination} page={page} setPage={setPage}></Pagination>
        {addModal && <AddModal setAddModal = {setAddModal} updateDetect = {updateDetect}/>}
        {editModal.modal && <EditModal id={editModal.id} setEditModal = {setEditModal} updateDetect = {updateDetect}/>}
        {deleteModal && <DeleteModal cancelAction={handleDeleteConfirmCancel} confirmAction={handleDelete} message='Are you sure you want to delete this post?'/>}
    </ManagePostSection>
  )
}

export default PostManage