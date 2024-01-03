package com.interview.Kontinentalist.Service.Post;

import com.interview.Kontinentalist.DTO.PostDTO;
import com.interview.Kontinentalist.Model.PostModel;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public interface PostService {

    public Map<String, Object> getAllPosts(int pageNumber);
    public PostModel getPostByID(int id);

    public void addPost(PostDTO postDTO);

    public void updatePost(int id, PostDTO postDTO);

    public void deletePost(int id);
}
