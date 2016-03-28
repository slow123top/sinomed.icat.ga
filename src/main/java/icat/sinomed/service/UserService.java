package icat.sinomed.service;

import icat.sinomed.dao.UserDao;
import icat.sinomed.entity.User;
import jodd.util.BCrypt;

/**
 * Created by liucong on  16-3-25-025.
 */
public class UserService {

    public static void main(String[] args) {
        final User        user        = new User();
        final UserService userService = new UserService();
        user.setPassword("z");
        user.setUsername("z");
        user.setDisplayName("Display Name(张全蛋)");
        user.setRole("member");
        userService.addUser(user);
    }

    public int addUser(User user) {
        int result = -1;
        if (user.isValidNewUser()) {
            final UserDao userDao = new UserDao();
            user.ensurePasswordHash();
            result = userDao.add(user);
        }
        return result;
    }

    public boolean existSameNameUser(User user){
        final UserDao userDao  = new UserDao();
        final User    userInDB = userDao.queryOneByField("username", user.getUsername());
        return userInDB != null;
    }

    /**
     * 根据数据库中的用户验证密码是否正确
     *
     * @param user 带有明文密码的用户
     * @return 正确返回用户，不正确返回null
     */
    public User login(User user) {
        final UserDao userDao  = new UserDao();
        final User    userInDB = userDao.queryOneByField("username", user.getUsername());
        if (userInDB != null) {
            final String  password          = user.getPassword();
            final String  passwordHash      = userInDB.getPasswordHash();
            final boolean isPasswordCorrect = BCrypt.checkpw(password, passwordHash);
            if (isPasswordCorrect) {
                return userInDB;
            }
        }
        return null;
    }

}
