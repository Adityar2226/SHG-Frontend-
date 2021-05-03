package shgbackend.shg;

public class RegisterInfo {
    private final String username;
    private final String password;

    public RegisterInfo(String username, String password){

        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }
}


