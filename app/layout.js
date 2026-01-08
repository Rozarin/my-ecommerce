import "./globals.css";
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const metadata = {
  title: "Hardware Fanatics",
  description: "Footware Fanatics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
