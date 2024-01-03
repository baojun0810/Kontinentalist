import React, { useEffect, useState } from 'react'
import { Table, TableHead, TableRow, TableHeader, TableBody, TableData, EditButton, TableContainer } from '../styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import axios from 'axios'
import { PostType } from '../initialValue'

type PropsType = {
    post: PostType[],
    setEditModal: React.Dispatch<React.SetStateAction<{
        modal: boolean;
        id: number;
    }>>,
    deleteID: React.MutableRefObject<number>,
    setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ManagePostTable = (props: PropsType) => {

  return (
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableHeader>#</TableHeader>
                    <TableHeader>Title</TableHeader>
                    <TableHeader>Content</TableHeader>
                    <TableHeader>Action</TableHeader>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.post.map((postList) => (
                    <TableRow key = {postList.id}>
                        <TableData className='bold'>{postList.id}</TableData>
                        <TableData><h4>{postList.title}</h4></TableData>
                        <TableData><h4>{postList.content}</h4></TableData>
                        <TableData className='action-column'>
                            <EditButton className = "edit-btn" onClick={()=> props.setEditModal({modal: true, id: postList.id})}><FontAwesomeIcon icon = {faPenToSquare}/></EditButton>
                            <EditButton className = "del-btn" onClick={()=> {props.deleteID.current = postList.id; props.setDeleteModal(true)}}><FontAwesomeIcon icon = {faTrashCan}/></EditButton>
                        </TableData>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default ManagePostTable