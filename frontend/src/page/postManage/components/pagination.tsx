import React from 'react'
import { PaginationType } from '../initialValue';
import { PageButton, PaginationWrapper } from '../styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

type PropsType = {
    pagination: PaginationType,
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>
}

const Pagination = (props: PropsType) => {

    const actualPage = props.page + 1;
    
    const PaginationButton = () => {
        const button = [];

        for(let i = props.pagination.start_page; i <= props.pagination.end_page; i++)
            button.push(<PageButton key = {i} className = {actualPage === i ? "active" : ""} value={i} onClick = {() => props.setPage(i - 1)}>{i}</PageButton>);

        return button;
    }

    return(
        <PaginationWrapper>
            <PageButton disabled = {actualPage === 1} className = {actualPage === 1 ? "prev-btn disable-btn": "prev-btn"} onClick={() => props.setPage(props.page - 1)}><FontAwesomeIcon icon = {faChevronLeft}/></PageButton>
                {PaginationButton()}
            <PageButton disabled = {actualPage === props.pagination.end_page || props.pagination.total_pages === 0} className = {actualPage === props.pagination.end_page || props.pagination.total_pages === 0 ? "next-btn disable-btn": "next-btn"} onClick={() => props.setPage(props.page + 1)}><FontAwesomeIcon icon = {faChevronRight}/></PageButton>
        </PaginationWrapper>
    );
}

export default Pagination;