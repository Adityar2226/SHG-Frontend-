package shgbackend.shg;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
public class LoginController {

    private CustomerRepository repo;

    @Autowired
    public  LoginController(CustomerRepository repo){
        this.repo = repo;
    }

    @PostMapping("/login")
    //This implementation is wrong
    //Check database if a customer with
    //given username and password exist
    //it is exists return
    // "authenticated"
    Customer login(@RequestBody Credentials data) {
        Customer customer = new Customer(data.getUsername(), data.getPassword());
        return repo.save(customer);
    }

    //Implement a endpoint "/register" which take username and password
    //and stores it in the database

    @GetMapping("/login/{id}")
    Customer login(@PathVariable Long id) {
        return repo.findById(id).map(c -> {
            return new Customer(c.getName(), c.getPassword());
        }).orElse(new Customer("", ""));
    }
}
