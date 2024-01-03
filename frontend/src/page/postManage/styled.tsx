import styled from "styled-components"

export const ManagePostSection = styled.div`
    margin: 0 auto;
    width: 75%;
    padding-bottom: 80px;

    & .add-button {
        margin-bottom: 20px;
    }

    @media (max-width: 1200px) {
        width: 90%;
    }
`

export const ManagePostTitle = styled.h1`
    text-align: center; 
    padding-bottom: 40px;
    font-size: 35px;
`

export const TableContainer = styled.div`
    overflow: auto;
    border-radius: 10px;
`

export const Table = styled.table`
    width:100%;
    max-height: 100%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    min-width: 600px;
`;

export const TableHead = styled.thead`

`;

export const TableBody = styled.tbody`

`;

export const TableRow = styled.tr`
    padding: 0 10px;
`;

export const TableHeader = styled.th`
    padding:15px 0;
    color:grey;
    font-size: 15px;
    font-weight: bold;
`;

export const TableData = styled.td`
    text-align: center;
    padding:25px 20px;
    color:black;
    font-size: 15px;
    vertical-align: middle;
    
    & > h4 {
        line-height: 22px;
    }

    &.bold {
        font-weight: 700;
    }

    &.action-column{
        width:190px;
    }
`;

export const EditButton = styled.button`
    padding:5px 20px;
    cursor:pointer;
    color:white;
    outline:none;
    transition: all 0.3s ease-in-out;
    border-radius: 3px;

    &.edit-btn{
        border:1px solid #1c84ee;
        background:#1c84ee;
        margin-right:10px;
    }

    &.del-btn{
        border:1px solid #ef6767;
        background:#ef6767;
    }

    &.edit-btn:hover{
        background:#0e64c7;
        border-color: #0e64c7;
    }

    &.del-btn:hover{
        background:#a3363d;
        border-color: #a3363d;
    }
`;

export const PaginationWrapper = styled.div`
    display: flex;
    justify-content: end;
    padding:30px 0 0 0;
`;

export const PageButton = styled.button`
    background:none;
    color:black;
    cursor:pointer;
    transition: all 0.3s ease-in-out;
    font-size:15px;
    padding:5px 10px;
    border:1px solid rgba(0,0,0, 0);
    border-radius: 8px;

    &.active{
        color: white;
        background:#FF1A50;
        border: 1px solid #eeb23d;
    }

    &.prev-btn, &.next-btn{
        font-size:13px;  
    }

    &.disable-btn{
        color:grey;
        cursor:not-allowed;
    }
`;

export const ModalWrapper = styled.div`
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

export const ModalContainer = styled.div`
    background: white;
    border-radius: 10px;
    max-width: 600px;
    width: 100%;
    padding: 30px;
    position: relative;

    & > svg {
        position: absolute;
        right: 30px;
        top: 30px;
        font-size: 25px;
        cursor: pointer;
    }
`

export const PostForm = styled.form`
    & > h2 {
        padding-bottom: 50px;
    }
`

export const InputRow = styled.div`
    display: flex;
`;

export const InputSection = styled.div`
    padding-bottom: 20px;
    flex: 1;
`;

export const InputTitle = styled.p`
    font-size:16px;
    padding-bottom:10px;
    font-weight:500;
`;

export const Input = styled.input`
    width:100%;
    padding:12px 10px;
    outline:none;
    border:2px solid #d2d2d2;
    color:black;
    font-size:15px;
    border-radius: 8px;

    &:focus{
        border-color:#FF1A50;
    }
`;

export const TextArea = styled.textarea`
    width:100%;
    padding:12px 10px;
    outline:none;
    border:2px solid #d2d2d2;
    color:black;
    font-size:15px;
    resize: none;
    border-radius: 8px;
    line-height: 20px;

    &:focus{
        border-color:#FF1A50;
    }
`;

export const ErrorMessage = styled.p`
    color:red;
    font-size:13px;
    padding-top:5px;
    display:none;

    &.ShowErrorMessage{
        display:block;
    }
`;

export const SubmitRow = styled.div`
    padding-top: 10px
`;

export const ModalIcon = styled.p`
    padding-bottom: 30px;
    text-align: center;

    & > svg {
        font-size: 80px;
        color:red;
    }
`;

export const ModalDescriptionMessage = styled.p`
    font-size:16px;
    font-weight: 600;
    letter-spacing: 0.51px;
    padding-bottom: 30px;
    text-align: center;
`;

export const ModalOneButton = styled.p`

`;

export const ModalTwoButton = styled.p`
    display:flex;
    justify-content: space-around;
    width:50%;
    margin:0 auto;
`;

