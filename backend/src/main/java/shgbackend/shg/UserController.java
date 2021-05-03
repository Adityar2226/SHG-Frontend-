package shgbackend.shg;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;



@RestController
public class UserController {
    private CustomerInfoRepository repository;


    @Autowired
    public  UserController(CustomerInfoRepository repository){
        this.repository = repository;
    }

    // getting the data
    @GetMapping("/User/{id}")
    CustomerInfo User(@PathVariable Long id) {
        return repository.findById(id)
        .orElseThrow(() -> new CustomerNotFoundException(id));
    }


    //creating new data //working
    @PostMapping("/User")
    CustomerInfo User(@RequestBody  UserInfo data) {
        CustomerInfo customerinfo = new CustomerInfo(data.getFirstName(),data.getLastName(),data.getCity());
        return repository.save(customerinfo);
    }


       //updating the existing data
     @PutMapping("/User/{id}")
CustomerInfo User(@RequestBody UserInfo data , @PathVariable Long id){
        final CustomerInfo result= repository.findById(id).get();
       result.setFirstName(data.getFirstName());
       result.setLastName(data.getLastName());
       result.setCity(data.getCity());
       return repository.save(result);
    }

    //deleting existing data
@DeleteMapping("/User/{id}")
 void  delete(@PathVariable Long id ){

       if (!(repository.existsById(id))){
           throw new CustomerNotFoundException(id);
       }
    repository.deleteById(id);


}
}
