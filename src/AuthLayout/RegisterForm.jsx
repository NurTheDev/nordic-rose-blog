import React, { useState } from "react";
import {Link} from "react-router";

export default function RegisterForm({ onRegister }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        // Implement registration logic here
        onRegister?.({ name, email, password });
    };

    return (
        <div className={"flex items-center justify-center min-h-screen"}>
            <div className="max-w-md w-full mx-auto my-12 p-8 border border-black bg-white">
                <h2 className="text-3xl font-serif font-bold mb-6 text-center">Register</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-lg font-semibold mb-1" htmlFor="register-name">Name</label>
                        <input
                            id="register-name"
                            type="text"
                            required
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Your name"
                            className="w-full px-4 py-3 border border-black rounded focus:outline-none text-lg"
                        />
                    </div>
                    <div>
                        <label className="block text-lg font-semibold mb-1" htmlFor="register-email">Email</label>
                        <input
                            id="register-email"
                            type="email"
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 border border-black rounded focus:outline-none text-lg"
                        />
                    </div>
                    <div>
                        <label className="block text-lg font-semibold mb-1" htmlFor="register-password">Password</label>
                        <input
                            id="register-password"
                            type="password"
                            required
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Create a password"
                            className="w-full px-4 py-3 border border-black rounded focus:outline-none text-lg"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-black text-white text-lg font-semibold px-4 py-3 rounded hover:bg-gray-700 transition duration-100 ease-in-out cursor-pointer"
                    >
                        Register
                    </button>
                </form>
                <p className="text-center mt-6">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-600 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}
