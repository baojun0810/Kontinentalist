import React from 'react'
import { SubmitRow } from '../styled'
import { ColorButton, NoColorButton } from '../../shared/styled'

type PropsType = {
    handleReset: () => void,
    readMode: boolean,
    setReadMode: React.Dispatch<React.SetStateAction<boolean>>
}

const EditSubmit = (props: PropsType) => {
  return (
    props.readMode ?
    <SubmitRow>
        <ColorButton className='margin-right-5' type='button' onClick={() => {
            //to prevent double fire
            setTimeout(() => {
                props.setReadMode(false);
            }, 50)
        }}>
            Edit
        </ColorButton>
    </SubmitRow> :
    <SubmitRow>
        <ColorButton className='margin-right-5'>
            Update
        </ColorButton>
        <NoColorButton type='button' className='margin-right-5' onClick={() => props.handleReset()}>
            Reset
        </NoColorButton>
        <NoColorButton type='button' onClick={() => props.setReadMode(true)}>
            Cancel
        </NoColorButton>
    </SubmitRow>
  )
}

export default EditSubmit