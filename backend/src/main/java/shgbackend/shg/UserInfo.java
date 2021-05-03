package shgbackend.shg;

public class UserInfo {
    private final String FirstName;
    private final String LastName ;
    private final String City;

    public UserInfo(String FirstName, String LastName, String City) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.City = City;
    }

    public String getFirstName() {
        return FirstName;
    }

    public String getLastName() {
        return LastName;
    }

    public String getCity() {
        return City;
    }





}
