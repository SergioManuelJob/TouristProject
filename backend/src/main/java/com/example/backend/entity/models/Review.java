package com.example.backend.entity.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Review implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String description;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private Date time;
    private boolean liked;
    @ManyToOne
    private User appUserId;
    @ManyToOne
    private Place placeId;

    public Review(long id, String description, boolean like) {
        super();
        this.id = id;
        this.description = description;
        this.liked = like;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isLike() {
        return liked;
    }

    public void setLike(boolean like) {
        this.liked = like;
    }

    public User getUserId() {
        return appUserId;
    }

    public void setUserId(User appUserId) {
        this.appUserId = appUserId;
    }

    public Place getPlaceId() {
        return placeId;
    }

    public void setPlaceId(Place placeId) {
        this.placeId = placeId;
    }
}
