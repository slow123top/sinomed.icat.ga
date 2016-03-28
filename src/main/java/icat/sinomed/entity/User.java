package icat.sinomed.entity;

import java.util.UUID;

import cong.common.dao.annotation.Id;
import cong.common.dao.annotation.NotInDB;
import jodd.util.BCrypt;
import jodd.util.StringUtil;
import lombok.EqualsAndHashCode;
import lombok.ToString;

/**
 * Created by liucong on  16-3-25-025.
 */
@ToString
@EqualsAndHashCode
public class User {
    @Id
    String uuid;
    String username;
    @NotInDB
    String password;
    String passwordHash;
    String displayName;
    String role;

    public User() {
        this.uuid = UUID.randomUUID().toString();
        this.role = "";
    }

    public String getUuid() {
        return uuid;
    }

    public User setUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }

    public String getUsername() {
        return username;
    }

    public User setUsername(String username) {
        this.username = username;
        return this;
    }

    public String getPassword() {
        return password;
    }

    public User setPassword(String password) {
        this.password = password;
        return this;
    }

    public User setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
        return this;
    }

    public String getDisplayName() {
        return displayName;
    }

    public User setDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }

    public String getRole() {
        return role;
    }

    public User setRole(String role) {
        this.role = role;
        return this;
    }

    public String getPasswordHash() {
        ensurePasswordHash();
        return passwordHash;
    }

    public void ensurePasswordHash() {
        if (StringUtil.isBlank(passwordHash) && StringUtil.isNotBlank(password)) {
            passwordHash = BCrypt.hashpw(password, BCrypt.gensalt());
        }
    }

    public boolean isValidNewUser() {
        return StringUtil.isNotBlank(uuid) && StringUtil.isNotBlank(username) && StringUtil.isNotBlank(password);
    }

}
