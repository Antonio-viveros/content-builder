export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        background: "#0b0f1a",
        color: "white",
        fontFamily: "Arial"
      }}>
        {children}
      </body>
    </html>
  );
}
