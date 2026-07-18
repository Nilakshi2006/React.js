import React from 'react'
import Card from './components/Card'
const App = () => {
  return (
    <div className="parent">
     <Card user="Nilakshi" description="B.Tech(CSE) student having strong foundaton in web development" img="https://media.istockphoto.com/id/2212360504/photo/holographic-ui-ux-display-icons-of-ux-ui-designer-creative-planning-data-visualization-web.jpg?s=1024x1024&w=is&k=20&c=skd_SMOtTMujQh9SX6oawwdSDeuPhmkxXmVqxUWLPrA="/>
     <Card user="Navdeep"  description="Btech(AI/ML) student havind strong foundaion in AI" img="https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    
    </div>
  )
}

export default App
