// import axios from "axios";
// import { response } from "express";

// const Name = document.getElementById("name") as HTMLInputElement;
// const Email = document.getElementById("email") as HTMLInputElement;
// const Phone = document.getElementById("phone") as HTMLInputElement;
// const Address = document.getElementById("address") as HTMLInputElement;
// const About = document.getElementById("about") as HTMLTextAreaElement;
// const form = document.getElementById("cvForm") as HTMLFormElement;
// const Experience = document.getElementById("experience") as HTMLTextAreaElement;
// const Education = document.getElementById("education") as HTMLTextAreaElement;

// async function postData(): Promise<void> {
//   const Data = {
//     Name: Name.value,
//     Email: Email.value,
//     Phone: Phone.value,
//     Address: Address.value,
//     About: About.value,
//     Experience: Experience.value,
//     Education: Education.value,
//   };

//   try {
//     const response = await axios.post(
//       "http://localhost:3000/api/v1/cv/generatecv",
//       Data
//     );
//     console.log("POST request successful!");
//     console.log(response.data);
//   } catch (error) {
//     console.error("Error making POST request:", error);
//   }
// }
// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   console.log("gtg");
//   postData();
// });
