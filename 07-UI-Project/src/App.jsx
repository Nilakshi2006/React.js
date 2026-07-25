import React from "react";
import Section1 from "./components/Section1/Section1";

const App = () => {
const users = [
  {
    img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro:
      "The mentorship and practical projects helped me gain confidence and improve my technical skills for my career.",
    tag: "Career Growth",
    color: "#2563EB", // Royal Blue
  },
  {
    img: "https://images.unsplash.com/photo-1544985052-b51c2e3a73ad?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro:
      "Excellent learning experience! The sessions were industry-focused, and I was able to apply the concepts at work immediately.",
    tag: "Highly Rated",
    color: "#0F766E", // Teal
  },
  {
    img: "https://images.unsplash.com/photo-1655333879254-1fb721db743c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro:
      "The structured guidance and expert support made it easy to upskill while managing my full-time job.",
    tag: "Top Choice",
    color: "#7C3AED", // Violet
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1672691612717-954cdfaaa8c5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro:
      "The hands-on assignments and real-world examples helped me secure a better role within just a few months.",
    tag: "Success Story",
    color: "#059669", // Emerald
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1661593195372-874ca9d29713?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro:
      "I loved the personalized feedback from mentors. It made learning engaging and boosted my confidence.",
    tag: "Verified Review",
    color: "#DC2626", // Crimson Red
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1674055047782-76ccc87a1110?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro:
      "Flexible schedules and quality content made it easy to balance learning with my professional responsibilities.",
    tag: "Recommended",
    color: "#EA580C", // Burnt Orange
  },
];
  return (
    <div>
      <Section1 users={users} />
  
    </div>
  );
};

export default App;
