package shgbackend.shg;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
class Customer {

    private @Id @GeneratedValue Long id;
    private String name;
    private String password;

    public Customer() {}

    public Customer(String name, String password) {

        this.name = name;
        this.password = password;
    }

    public Long getId() {
        return this.id;
    }

    public String getName() {
        return this.name;
    }

    public String getPassword() {
        return this.password;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public boolean equals(Object o) {

        if (this == o)
            return true;
        if (!(o instanceof Customer))
            return false;
        Customer customer = (Customer) o;
        return Objects.equals(this.id, customer.id) && Objects.equals(this.name, customer.name)
                && Objects.equals(this.password, customer.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id, this.name, this.password);
    }

    @Override
    public String toString() {
        return "Employee{" + "id=" + this.id + ", name='" + this.name + '\'' + ", role='" + this.password + '\'' + '}';
    }
}