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
    
    <Card children={ <div style={{color: "green"} }>
      What do you want to post?
      <input type={"text"} />
    </div>} />
    <Card children={ "hi There"} />
  </div>
}

function Card({ children }) {
  return <div style={{background: "black", borderRadius: 10, color:"white", padding:10, margin: 10 }}>
    {children}
  </div>
}

export default App
