const handleLogin = () => {
  const authUrl = "http://localhost/login";
  window.location.replace(authUrl);
};

const Error = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "300px",
        height: "200px",
        backgroundColor: "white",
        border: "1px solid black rounded",
        borderRadius: "10%",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          position: "relative",
          margin: "20px",
          padding: "10px",
          textAlign: "center",
        }}
      >
        <h1>Error</h1>
        <p>Invalid Credentials, please log in again</p>
        <button
          style={{
            color: "white",
            backgroundColor: "rgba(5, 184, 255, 0.5)",
            fontSize: "20px",
            border: "none",
            padding: "10px 20px",
            cursor: "pointer",
            borderRadius: "10%",
          }}
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};
export default Error;
