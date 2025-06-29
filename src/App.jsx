import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  useEffect(() => {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const adminExists = existingUsers.some(
      (user) => user.email === "admin@gmail.com"
    );

    if (!adminExists) {
      const adminUser = {
        fullName: "Admin",
        email: "admin@gmail.com",
        phone: "+628123456789",
        password: "admin123",
        role: "admin",
      };

      const updatedUsers = [...existingUsers, adminUser];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      console.log("Admin user berhasil disisipkan.");
    }
  }, []);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
