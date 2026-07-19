import React from 'react'
import Card from '../src/components/Card'
const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://th.bing.com/th/id/OIP.Kg2FF2wpIK_HLyo8Q56ycAHaFj?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Google",
    datePosted: "2 days ago",
    jobTitle: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$58/hr",
    location: "Bengaluru, India",
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.M3DpBvUfn4YP5TYXFx-iNwHaGB?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Microsoft",
    datePosted: "5 days ago",
    jobTitle: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://tse4.mm.bing.net/th/id/OIP.WL6qt0cTYZ6yJ4ZZMOIhQAHaEm?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Apple",
    datePosted: "1 day ago",
    jobTitle: "iOS Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$72/hr",
    location: "Cupertino, California",
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.3LnIV1MEYIIESkTBW3rCgAHaFU?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Amazon",
    datePosted: "3 days ago",
    jobTitle: "Backend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$52/hr",
    location: "Seattle, Washington",
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.N6q1UQrBEZ2PVWg-HcjjyQHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Meta",
    datePosted: "6 days ago",
    jobTitle: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$78/hr",
    location: "Menlo Park, California",
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.rePCYv0Kgsqp5hdsUrrKxAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Netflix",
    datePosted: "4 days ago",
    jobTitle: "Cloud Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Los Gatos, California",
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/024/039/095/original/nvidia-logo-transparent-free-png.png",
    companyName: "NVIDIA",
    datePosted: "7 days ago",
    jobTitle: "AI Research Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$85/hr",
    location: "Santa Clara, California",
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.s2qnKGj8R9kTsbv6IANlEgHaIe?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Adobe",
    datePosted: "2 days ago",
    jobTitle: "UI/UX Frontend Developer",
    tag1: "Hybrid",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Noida, India",
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.qklIwFtHObNTDUPP4MubXAHaFL?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Salesforce",
    datePosted: "8 days ago",
    jobTitle: "Full Stack Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "San Francisco, California",
  },
  {
    brandLogo: "https://tse4.mm.bing.net/th/id/OIP.lLos5sneIJP5H5uTzqmCNQHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Oracle",
    datePosted: "10 days ago",
    jobTitle: "Java Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Austin, Texas",
  },
];
  return (
    <div className="parent">
     { jobOpenings.map(function(elem,idx){
      return <div key={idx}><Card company={elem.companyName} post={elem.jobTitle} tag1={elem.tag1} tag2={elem.tag2} date={elem.datePosted} pay={elem.pay} loc={elem.location} logo={elem.brandLogo}/></div>
     })}
    </div>
  )
}

export default App
