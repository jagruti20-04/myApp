// Filename - App.js
import auth from "./firebase";
import "./App.css";
import { useState } from "react";

function App() {
	const [email, setemail] = useState("");
	const [password, setpassword] = useState("");
	const signup = () => {
		auth.createUserWithEmailAndPassword(email, password)
			.then((userCredential) => {
				// send verification mail.
				userCredential.user.sendEmailVerification();
				auth.signOut();
				alert("Email sent");
			})
			.catch(alert);
	};
   

	return (
		<div className="App">
			<br />
			<br />
			<input
				type="email"
				placeholder="Email"
				onChange={(e) => {
					setemail(e.target.value);
				}}
			></input>
			<br />
			<br />
			<input
				type="password"
				placeholder="password"
				onChange={(e) => {
					setpassword(e.target.value);
				}}
			></input>
			<br />
			<br />
			<button onClick={signup}>Sign-up</button>
		</div>
	);
}

export default App;

// // Filename - App.js
// // Filename - App.js
// import auth from "./firebase";
// import "./App.css";
// import { useState } from "react";
// import otpGenerator from 'otp-generator';
// const nodemailer = require('nodemailer'); // Import the nodemailer library

// function App() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const signup = () => {
//     const otp = otpGenerator.generate(6, { upperCase: false, specialChars: false });

//     auth.createUserWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         // Send OTP to the user's email
//         sendOtpByEmail(email, otp);

//         auth.signOut();
//         alert("OTP sent");
//       })
//       .catch(alert);
//   };

//   function sendOtpByEmail(email, otp) {
//     const transporter = nodemailer.createTransport({
//       service: 'Gmail',
//       auth: {
//         user: 'jagrutirajput101@gmail.com', // Replace with your email address
//         pass: '' // Replace with your email password
//       }
//     });

//     const mailOptions = {
//       from: 'your-email@gmail.com',
//       to: email,
//       subject: 'Your OTP for Signup',
//       text: `Your OTP is: ${otp}`
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.error(error);
//       } else {
//         console.log('Email sent: ' + info.response);
//       }
//     });
//   }

//   return (
//     <div className="App">
//       <br />
//       <br />
//       <input
//         type="email"
//         placeholder="Email"
//         onChange={(e) => {
//           setEmail(e.target.value);
//         }}
//       ></input>
//       <br />
//       <br />
//       <input
//         type="password"
//         placeholder="Password"
//         onChange={(e) => {
//           setPassword(e.target.value);
//         }}
//       ></input>
//       <br />
//       <br />
//       <button onClick={signup}>Sign-up</button>
//     </div>
//   );
// }

// export default App;
