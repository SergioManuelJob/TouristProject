package entity.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    private boolean like;
    @ManyToOne
    private User userId;
    @ManyToOne
    private Place placeId;

    public Review(long id, String description, Date time, boolean like, User userId, Place placeId) {
        this.id = id;
        this.description = description;
        this.time = time;
        this.like = like;
        this.userId = userId;
        this.placeId = placeId;
    }

    public Review() {
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
        return like;
    }

    public void setLike(boolean like) {
        this.like = like;
    }

    public User getUserId() {
        return userId;
    }

    public void setUserId(User userId) {
        this.userId = userId;
    }

    public Place getPlaceId() {
        return placeId;
    }

    public void setPlaceId(Place placeId) {
        this.placeId = placeId;
    }
}
