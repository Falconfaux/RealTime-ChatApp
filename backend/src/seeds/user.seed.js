import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
    // Female Users
    {
        email: "rahul@gmail.com",
        fullName: "Rahul Nair",
        password: "rahul123",
        profilePic: "https://i.postimg.cc/SxD0yGsm/Screenshot-2024-11-29-12-05-21-51-1c337646f29875672b5a61192b9010f9.jpg",
    },
    {
        email: "udhbhav@gmail.com",
        fullName: "Udhbhav Nayak",
        password: "udhbhav123",
        profilePic: "https://i.postimg.cc/zvnM4C6Z/Screenshot-2024-11-29-12-05-01-39-1c337646f29875672b5a61192b9010f9.jpg",
    },
    {
        email: "chirag@gmail.com",
        fullName: "Chirag Mehra",
        password: "chirag123",
        profilePic: "https://i.postimg.cc/CxMt6f4X/Screenshot-2024-11-29-12-03-34-88-6012fa4d4ddec268fc5c7112cbb265e7.jpg",
    },
    {
        email: "Tautik@gmail.com",
        fullName: "Tautik Agrahari",
        password: "tautik123",
        profilePic: "https://i.postimg.cc/7Ykj0RJx/Screenshot-2024-11-29-12-04-08-55-1c337646f29875672b5a61192b9010f9.jpg",
    },

    {
        email: "Yash@gmail.com",
        fullName: "Yash Rana",
        password: "yash123",
        profilePic: "https://i.postimg.cc/rp3PmZL2/Screenshot-2024-11-29-12-20-25-64-1c337646f29875672b5a61192b9010f9.jpg"
    },
    {
        email: "Aakash@gmail.com",
        fullName: "Aakash Sharma",
        password: "aakash123",
        profilePic: "https://i.postimg.cc/cLsyyzdD/Screenshot-2024-11-29-12-06-04-01-1c337646f29875672b5a61192b9010f9.jpg"
    },
    {
        email: "vikram.nair@example.com",
        fullName: "Vikram Nair",
        password: "vikram789",
        profilePic: "https://randomuser.me/api/portraits/men/86.jpg"
    },
    {
        email: "tanvi.singh@example.com",
        fullName: "Tanvi Singh",
        password: "tanvi123",
        profilePic: "https://randomuser.me/api/portraits/women/86.jpg"
    },
    {
        email: "rohit.agrawal@example.com",
        fullName: "Rohit Agrawal",
        password: "rohit456",
        profilePic: "https://randomuser.me/api/portraits/men/87.jpg"
    },
    {
        email: "megha.bansal@example.com",
        fullName: "Megha Bansal",
        password: "megha789",
        profilePic: "https://randomuser.me/api/portraits/women/87.jpg"
    },
    {
        email: "amit.desai@example.com",
        fullName: "Amit Desai",
        password: "amit123",
        profilePic: "https://randomuser.me/api/portraits/men/88.jpg"
    },
    {
        email: "sakshi.pandey@example.com",
        fullName: "Sakshi Pandey",
        password: "sakshi456",
        profilePic: "https://randomuser.me/api/portraits/women/88.jpg"
    },
    {
        email: "manish.chowdhury@example.com",
        fullName: "Manish Chowdhury",
        password: "manish789",
        profilePic: "https://randomuser.me/api/portraits/men/89.jpg"
    },
    {
        email: "anushka.shetty@example.com",
        fullName: "Anushka Shetty",
        password: "anushka123",
        profilePic: "https://randomuser.me/api/portraits/women/89.jpg"
    },
    {
        email: "rajat.goyal@example.com",
        fullName: "Rajat Goyal",
        password: "rajat456",
        profilePic: "https://randomuser.me/api/portraits/men/90.jpg"
    },
    {
        email: "kriti.dubey@example.com",
        fullName: "Kriti Dubey",
        password: "kriti789",
        profilePic: "https://randomuser.me/api/portraits/women/90.jpg"
    },
    {
        email: "dhruv.khanna@example.com",
        fullName: "Dhruv Khanna",
        password: "dhruv123",
        profilePic: "https://randomuser.me/api/portraits/men/91.jpg"
    },
    {
        email: "esha.jain@example.com",
        fullName: "Esha Jain",
        password: "esha456",
        profilePic: "https://randomuser.me/api/portraits/women/91.jpg"
    },
    {
        email: "yash.mehta@example.com",
        fullName: "Yash Mehta",
        password: "yash789",
        profilePic: "https://randomuser.me/api/portraits/men/92.jpg"
    },
    {
        email: "shruti.rana@example.com",
        fullName: "Shruti Rana",
        password: "shruti123",
        profilePic: "https://randomuser.me/api/portraits/women/92.jpg"
    },
    {
        email: "karan.sen@example.com",
        fullName: "Karan Sen",
        password: "karan456",
        profilePic: "https://randomuser.me/api/portraits/men/93.jpg"
    },
    {
        email: "pallavi.malik@example.com",
        fullName: "Pallavi Malik",
        password: "pallavi789",
        profilePic: "https://randomuser.me/api/portraits/women/93.jpg"
    },
    {
        email: "rahul.tiwari@example.com",
        fullName: "Rahul Tiwari",
        password: "rahul123",
        profilePic: "https://randomuser.me/api/portraits/men/94.jpg"
    },
    {
        email: "neha.bhatt@example.com",
        fullName: "Neha Bhatt",
        password: "neha456",
        profilePic: "https://randomuser.me/api/portraits/women/94.jpg"
    },
  

];
const seedDatabase = async () => {
    try {
      await connectDB();
  
      await User.insertMany(seedUsers);
      console.log("Database seeded successfully");
    } catch (error) {
      console.error("Error seeding database:", error);
    }
  };
// Call the function
seedDatabase();