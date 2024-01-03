package com.interview.Kontinentalist.Repository;

import com.interview.Kontinentalist.DTO.PostDTO;
import com.interview.Kontinentalist.Model.PostModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class PostRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<PostModel> getAllPosts(int pageNumber) {

        String sql = "SELECT * FROM post LIMIT 10 OFFSET ?";

        return jdbcTemplate.query(
                sql,
                new BeanPropertyRowMapper<>(PostModel.class),
                new Object[]{pageNumber * 10}
        );
    }

    public int countAllPosts() {

        String sql = "SELECT COUNT(*) FROM post";

        return jdbcTemplate.queryForObject(
                sql,
                Integer.class,
                new Object[]{}
        );
    }

    public PostModel getPostByID(int id) {

        String sql = "SELECT * FROM post WHERE id = ?";

        return jdbcTemplate.queryForObject(
                sql,
                new BeanPropertyRowMapper<>(PostModel.class),
                new Object[]{id}
        );
    }

    public void addPost(PostDTO postDTO) {

        String sql = "INSERT INTO post (title, content) VALUES (?, ?)";

        jdbcTemplate.update(
                sql,
                postDTO.getTitle(),
                postDTO.getContent()
        );
    }

    public void updatePost(int id, PostDTO postDTO) {

        String sql = "UPDATE post SET title = ?, content = ? WHERE id = ?";

        jdbcTemplate.update(
                sql,
                postDTO.getTitle(),
                postDTO.getContent(),
                id
        );
    }

    public void deletePost(int id) {

        String sql = "DELETE FROM post WHERE id = ?";

        jdbcTemplate.update(
                sql,
                id
        );
    }
}
