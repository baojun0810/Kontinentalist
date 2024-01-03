package com.interview.Kontinentalist.Controller;

import com.interview.Kontinentalist.DTO.PostDTO;
import com.interview.Kontinentalist.Service.Post.PostService;
import com.interview.Kontinentalist.Model.PostModel;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class PostController {

    @Autowired
    private PostService postService;

    @GetMapping("/posts")
    public Map<String, Object> getAllPosts(@RequestParam int pageNumber) {

        return postService.getAllPosts(pageNumber);
    }

    @GetMapping("/posts/{id}")
    public PostModel getPostByID(@PathVariable int id) {

        return postService.getPostByID(id);
    }

    @PostMapping("/posts")
    public void addPost(@Valid @RequestBody PostDTO postDTO) {
        postService.addPost(postDTO);
    }

    @PatchMapping("/posts/{id}")
    @CrossOrigin(origins = "*")
    public void updatePost(@PathVariable int id, @Valid @RequestBody PostDTO postDTO) {
        postService.updatePost(id ,postDTO);
    }

    @DeleteMapping("/posts/{id}")
    public void deletePost(@PathVariable int id) {
        postService.deletePost(id);
    }
}
