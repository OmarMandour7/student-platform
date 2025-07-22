import React from 'react';

const BlockedPage = () => {
  const styles = {
    container: {
      backgroundColor: 'black',
      color: '#ff3333',
      fontFamily: 'Courier New, monospace',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center',
      backgroundImage: `repeating-linear-gradient(
        45deg,
        rgba(255, 0, 0, 0.05),
        rgba(255, 0, 0, 0.05) 10px,
        transparent 10px,
        transparent 20px
      )`,
    },
    title: {
      fontSize: '64px',
      margin: 0,
      animation: 'glitch 1s infinite',
    },
    text: {
      fontSize: '24px',
      marginTop: '20px',
      color: '#ffffffaa',
    },
    '@keyframes glitch': {
      '0%': { textShadow: '2px 0 red, -2px 0 blue' },
      '25%': { textShadow: '-2px -2px green, 2px 2px magenta' },
      '50%': { textShadow: '2px 2px cyan, -2px -2px yellow' },
      '75%': { textShadow: '-1px 1px red, 1px -1px blue' },
      '100%': { textShadow: '2px 0 red, -2px 0 blue' },
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🚫 طرد فوري</h1>
      <p style={styles.text}>انت مش المفروض تكون هنا</p>
      <p style={styles.text}>لو شايف إنك هنا بالخطأ، ارجع فوراً</p>
    </div>
  );
};

export default BlockedPage;
