// 
import "./globals.css";
import Nav from "./components/Nav";

export const metadata = {
  title: "My Fan Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <footer style={{ marginTop: "3rem", textAlign: "center", color: "#888" }}>
          #Absolute cinema ✨
        </footer>
      </body>
    </html>
  );
}