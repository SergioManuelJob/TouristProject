package com.example.backend.entity.models;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
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
    private AppUser appUserId;
    @ManyToOne
    private Place placeId;

    public Review(long id, String description, Date time, boolean like, AppUser appUserId, Place placeId) {
        super();
        this.id = id;
        this.description = description;
        this.time = time;
        this.liked = like;
        this.appUserId = appUserId;
        this.placeId = placeId;
    }

    public Review() {
        super();
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

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public boolean isLike() {
        return liked;
    }

    public void setLike(boolean like) {
        this.liked = like;
    }

    public AppUser getUserId() {
        return appUserId;
    }

    public void setUserId(AppUser appUserId) {
        this.appUserId = appUserId;
    }

    public Place getPlaceId() {
        return placeId;
    }

    public void setPlaceId(Place placeId) {
        this.placeId = placeId;
    }
}
