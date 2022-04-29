import { HR_Type } from "../Types"

const Assignees = [
    {
        id: 0,
        name: "DR Ali Al Zaart",
        email: "drali@bau.com",
        phone_num: "99 999 999",
        profile_pic: "https://www.bau.edu.lb/BAUUpload/Staff/Images/Science/dr-ali-elzaart.jpg",
        hr_type: HR_Type.Doctor,
        home_num: "11 111 111",
        office: "Main blg. 5th floor.",
        home_address: "Beirut",
        cv: "http://www.africau.edu/images/default/sample.pdf",
        nationality: "Lebanese",
        SSN: 123456789,
        birth: new Date(),
        marital_status: "Married"
    },
    {
        id: 1,
        name: "Moe Janna",
        email: "moe12@bau.com",
        phone_num: "95 356 123",
        profile_pic: "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg",
        hr_type: HR_Type.Student,
        home_num: "88 765 999",
        office: "Main blg. 2nd floor.",
        home_address: "Bchamoun 3rd route",
        cv: "https://www.entnet.org/wp-content/uploads/2021/04/Instructions-for-Adding-Your-Logo-2.pdf",
        nationality: "Lebanese",
        SSN: 123456789,
        birth: new Date(),
        marital_status: "Single"
    }
]

export default Assignees