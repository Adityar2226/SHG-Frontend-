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
//creating new data
   @PostMapping("/login")
   Customer login(@RequestBody Credentials data) {
        Customer customer = new Customer(data.getUsername(), data.getPassword());
        return repo.save(customer);
    }

   //getting data here
    @GetMapping("/login/{id}")
    Customer login(@PathVariable Long id) {
        return repo.findById(id).get();
    }
}
