export type EntirePostType = {
    post: PostType[],
    pagination: PaginationType
}

export type PostType = {
    id: number,
    title: string,
    content: string
}

export type PaginationType = {
    total_pages: number,
    start_page: number,
    end_page: number  
}

export const initialPostValue = {
    post: [],
    pagination: {
        total_pages: 0,
        start_page: 0,
        end_page: 0 
    }
}

export const initialAddPostValue = {
    title: "",
    content: ""
}

export const initialEditPostValue = {
    id: 0,
    title: "",
    content: ""
}

export const initialErrorMessage = {
    title: "",
    content: ""
}