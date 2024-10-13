import React from 'react';

const Card = ({ children }) => {
    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '20px',
            margin: '10px',
            boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
        }}>
            {children}
        </div>
    );
};

  return <div style={{display:'flex'}}>
    <Card innerContent={ "hi There"} />
    <Card innerContent={ <div style={{color: "green"}}>hello there</div>} />
  </div>
}

function Card({ innerContent }) {
  return <span style={{background: "black", borderRadius: 10, color:"white", padding:10, margin: 10 }}>
    {innerContent}
  </span>
}

export default App
