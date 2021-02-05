package shgbackend.shg;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


class Credentials {
    private final String username;
    private final String password;

    public Credentials(String username, String password){

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


@RestController
public class LoginController {

    @PostMapping("/login")
    Credentials login(@RequestBody Credentials data) {
        return data;
    }
}
