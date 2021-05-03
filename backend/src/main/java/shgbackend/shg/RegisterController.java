package shgbackend.shg;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
public class RegisterController {

    private CustomerRepository repo;

    @Autowired
    public RegisterController(CustomerRepository repo) {
        this.repo = repo;
    }
// creating new data
    @PostMapping("/register")

    Customer register(@RequestBody RegisterInfo data) {
        Customer customer = new Customer(data.getUsername(), data.getPassword());
        return repo.save(customer);
    }

   //getting data by id
    @GetMapping("/register/{id}")
    Customer register(@PathVariable Long id) {
        return repo.findById(id).get();

    }

}

