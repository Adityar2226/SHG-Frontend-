package shgbackend.shg;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class CustomerInfo {
    private @Id @GeneratedValue Long id;
    private String FirstName;
    private String LastName;
    private String City;

    public CustomerInfo() {
    }

    public CustomerInfo(String FirstName, String LastName, String City) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.City = City;
    }

    public Long getId() {
        return this.id;
    }

    public String getFirstName() {
        return this.FirstName;
    }

    public String getLastName() {
        return this.LastName;
    }

    public String getCity() {
        return this.City;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setFirstName(String FirstName) {
        this.FirstName = FirstName;
    }

    public void setLastName(String LastName) {
        this.LastName = LastName;
    }

    public void setCity(String City) {
        this.City = City;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof CustomerInfo))
            return false;
        CustomerInfo customerinfo = (CustomerInfo) o;
        return Objects.equals(this.id,customerinfo.id) &&
                Objects.equals(this.FirstName,customerinfo.FirstName ) &&
                Objects.equals(this.LastName,customerinfo.LastName) &&
                Objects.equals(this.City,customerinfo.City);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id, this.FirstName, this.LastName, this.City);
    }

    @Override
    public String toString() {
        return "CustomerInfo{" +
                "id=" + this.id +
                ", FirstName='" + this.FirstName + '\'' +
                ", LastName='" + this.LastName + '\'' +
                ", City='" + this.City + '\'' +
                '}';
    }
}





