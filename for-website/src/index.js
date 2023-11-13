import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const edList = [
//   {
//     "id": 1,
//     "school": "University of Maryland, College Park",
//     "gradYear": "Expected Graduation Year: Spring 2027",
//     "cred": "Credits Earned: 31",
//     "courses": "Current Coursework: Object Oriented Programming II, Linear Algebra, Calculus III, Academic Writing, Oral Communications"
//   },
//   {
//     "id": 1,
//     "school": "Aberdeen High School, Science and Mathematics Academy",
//     "gradYear": "Graduation Year: May 2023",
//     "cred": "",
//     "courses": "Relevant Coursework: AP Computer Science A, AP Calculus AB, AP Calculus BC, Cryptology, Algorithm Development, \nStatistics Using R, Microcontrollers, Robotics, Science, Research, and Technology (SRT)"
//   }
// ];
