"use client";

import { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import userdetails from "@/db/userdetails-db";
import { useRouter } from "next/navigation";

export default function Auth() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Check if already logged in
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userdetails"));
    if (user && user.name) {
      router.push("/"); // redirect if logged in
    }
  }, [router]);

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === userdetails.username && password === userdetails.password) {
      // Save user in localStorage
      localStorage.setItem("userdetails", JSON.stringify(userdetails));

      // Dispatch event so Header can update immediately
      window.dispatchEvent(new Event("userUpdated"));

      // Redirect to home
      router.push("/");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <MainLayout>
      <div className="flex justify-center items-center min-h-[80vh]">
        <form
          onSubmit={handleLogin}
          className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-4">Login</h2>

          {error && <p className="text-red-500 mb-3">{error}</p>}

          <label className="block mb-2 text-sm font-semibold">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border p-2 rounded mb-4"
          />

          <label className="block mb-2 text-sm font-semibold">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-2 rounded mb-4"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </MainLayout>
  );
}
