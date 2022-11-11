package entity.models;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
public class User implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String username;
    private String password;
    private String email;
    private String image;
    private boolean role;
    @OneToMany(mappedBy = "userId")
    private List<Review> reviews;

    public User(long id, String username, String password, String email, String image, Boolean role, List<Review> reviews) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.image = image;
        this.role = role;
        this.reviews = reviews;
    }

    public User() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public boolean getRole() {
        return role;
    }

    public void setRole(boolean role) {
        this.role = role;
    }
}
