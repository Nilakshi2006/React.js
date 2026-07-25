import React from "react";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
const App = () => {
 const users = [
  {
    img: "https://plus.unsplash.com/premium_photo-1674055047782-76ccc87a1110?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro:
      "The mentorship and practical projects helped me gain confidence and improve my technical skills for my career.",
    tag: "Satisfied",
  },
  {
    img: "https://images.unsplash.com/photo-1544985052-b51c2e3a73ad?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro:
      "Excellent learning experience! The sessions were industry-focused, and I was able to apply the concepts at work immediately.",
    tag: "Satisfied",
  },
  {
    img: "https://images.unsplash.com/photo-1655333879254-1fb721db743c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro:
      "The structured guidance and expert support made it easy to upskill while managing my full-time job.",
    tag: "Satisfied",
  },
  ];
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
