package com.interview.Kontinentalist.Service.Post;

import com.interview.Kontinentalist.DTO.PostDTO;
import com.interview.Kontinentalist.Model.Pagination;
import com.interview.Kontinentalist.Repository.PostRepository;
import com.interview.Kontinentalist.Model.PostModel;
import com.interview.Kontinentalist.Service.Pagination.PaginationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class PostImpl implements PostService{

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private PaginationService paginationService;

    @Override
    public Map<String, Object> getAllPosts(int pageNumber) {

        int totalPostsCount = postRepository.countAllPosts();
        List<PostModel> posts = postRepository.getAllPosts(pageNumber);

        Pagination pagination = paginationService.pagination(totalPostsCount, pageNumber, 10);

        return Map.of("post", posts, "pagination", pagination);
    }

    @Override
    public PostModel getPostByID(int id) {

        return postRepository.getPostByID(id);
    }

    @Override
    public void addPost(PostDTO postDTO) {

        postRepository.addPost(postDTO);
    }

    @Override
    public void updatePost(int id, PostDTO postDTO) {

        postRepository.updatePost(id, postDTO);
    }

    @Override
    public void deletePost(int id) {
        postRepository.deletePost(id);
    }
}
