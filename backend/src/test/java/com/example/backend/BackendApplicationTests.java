package com.example.backend;

import com.example.backend.entity.models.Review;
import com.example.backend.entity.service.impl.ReviewService;
import com.example.backend.entity.service.impl.UserService;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
class BackendApplicationTests {

    @Autowired
    private MockMvc mvc;
    @MockBean
    private ReviewService reviewService;
    @MockBean
    private UserService userService;

    @Test
    public void testDeleteUser() throws Exception {
        long id = 1L;
        doNothing().when(userService).delete(id);

        mvc.perform(delete("/user/{id}", id))
                .andExpect(status().isOk());
    }

    @Test
    public void testPostReview() throws Exception {
        Review review = new Review();
        review.setId(1L);
        review.setDescription("This is a test review");

        doNothing().when(reviewService).post(review);

        this.mvc.perform(post("/review")).andExpect(status().isOk());
    }

    @Test
    void testGetData() throws Exception{
        this.mvc.perform(get("/place"))
                .andExpect(status().isOk());
    }



}
