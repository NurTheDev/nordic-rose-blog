import React, {useContext, useState} from "react";
import {Link, useNavigate} from "react-router";
import axios from "axios";
import {AuthContext} from "../context/authContext.js";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [_, setUser] = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        // Implement login logic here
        e.preventDefault();
        axios.post("http://localhost:3000/user/login", {email, password}).then(() => {
            localStorage.setItem("isAuthenticated", true)
            setUser({isAuthenticated: true})
        }).then(() => {
            navigate("/")
        }).catch((error) => {
            console.error(error);
        });
    };

    return (
        <div className={"flex items-center justify-center min-h-screen"}>
            <div className="max-w-md mx-auto my-12 p-8 border border-black bg-white shadow-md w-full">
                <h2 className="text-3xl font-serif font-bold mb-6 text-center">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-lg font-semibold mb-1" htmlFor="login-email">Email</label>
                        <input
                            id="login-email"
                            type="email"
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 border border-black rounded focus:outline-none text-lg"
                        />
                    </div>
                    <div>
                        <label className="block text-lg font-semibold mb-1" htmlFor="login-password">Password</label>
                        <input
                            id="login-password"
                            type="password"
                            required
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 border border-black rounded focus:outline-none text-lg"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-black text-white text-lg font-semibold px-4 py-3 rounded hover:bg-gray-700 transition duration-100 cursor-pointer"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-4 text-center">
                    Don&apos;t have an account?{" "}
                    <Link to="/register" className="text-blue-500 hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}
