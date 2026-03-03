function Footer() {
  return (
    <footer style={{
      background: "#020617",
      color: "white",
      textAlign: "center",
      padding: "30px 20px"
    }}>
      
      <h3 style={{ margin: "0", fontWeight: "600" }}>
        Nirspace Technologies
      </h3>

      <p style={{ margin: "8px 0", color: "#94A3B8" }}>
        Building Modern AI-Powered Websites & Digital Solutions
      </p>

      <p style={{ margin: "15px 0", fontSize: "14px", color: "#64748B" }}>
        Empowering businesses with innovation, creativity, and cutting-edge technology.
      </p>

      <hr style={{
        border: "0.5px solid #1E293B",
        width: "80%",
        margin: "20px auto"
      }} />

      <p style={{ fontSize: "13px", color: "#94A3B8" }}>
        © {new Date().getFullYear()} Nirspace Technologies. All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;