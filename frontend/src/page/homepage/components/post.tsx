import React, { useEffect, useRef, useState } from 'react'
import { LoadMoreButton, LoadingSection, LoadingSpinner, PostContentContainer, PostContentWrapper, PostSection, PostTitle } from '../style'
import axios from 'axios';
import { Fade } from "react-awesome-reveal";

type PostType = {
    id: number,
    title: string,
    hero_image: {
        url: string
    }
    dek: string
}

const Post = () => {

    const [post, setPost] = useState<PostType[]>([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const load = useRef(true);
    const [lastPage, setLastPage] = useState(0);

    useEffect(() => {

        const fetchData = async () => {

            await fetchPost();
        }

        if(load.current)
            fetchData();
    }, [page]);

    const fetchPost = async () => {

        setIsLoading(true);

        await axios.get(
            `https://cryptodire.kontinentalist.com/api/v1/stories?page=${page}`
        ).then((res) => {
    
            if(page === 1) {
                setLastPage(res.data.last_page);
                setPost(res.data.data);
            }
            else
                setPost([...post, ...res.data.data]);

                
        }).catch(e => console.log(e)).finally(() => {
            load.current = false;
            setIsLoading(false);
        });
    }

    const loadMoreButtonSection = () => {

        if(post.length <= 0)
            return null;
        else if((page + 1) <= lastPage)
            return <LoadMoreButton disabled={isLoading} onClick={() => {load.current = true; setPage(page + 1)}}>Load More</LoadMoreButton>;
        else 
            return <h1>--THE END--</h1>;
    }

  return (
    <PostSection>
        <PostTitle>STORY POST</PostTitle>
        <PostContentWrapper>
            {post.map((postList, index) => (
                <Fade triggerOnce direction={index % 2 === 0 ? "right" : "left"} key={postList.id}>
                    <PostContentContainer>
                        <h2>{postList.title}</h2>
                        <h3 dangerouslySetInnerHTML={{ __html: postList.dek}}/>
                        <img src = {postList.hero_image.url}/>
                    </PostContentContainer>
                </Fade>
            ))}
            <LoadingSection>
                <LoadingSpinner className={isLoading ? "show" : ""}/>
                {loadMoreButtonSection()}
            </LoadingSection>
        </PostContentWrapper>
        
    </PostSection>
  )
}

export default Post