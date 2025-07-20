import React, {useState} from 'react';

const Subscribe = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle submission logic here
        alert(`Subscribed with: ${email}`);
        setEmail("");
    };

    return (
        <div className="max-w-xl mx-auto border border-black mt-8 p-10 pt-8 pb-12 relative bg-white">
            <div className="absolute top-0 left-0 w-full h-1 bg-black" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-3 mt-1">
                Sign up for the newsletter
            </h2>
            <p className="text-lg md:text-xl text-center mb-8">
                If you want relevant updates occasionally, sign up for the private newsletter. Your email is never shared.
            </p>
            <form
                onSubmit={handleSubmit}
                className="flex mt-2 max-w-lg mx-auto"
                autoComplete="off"
            >
                <input
                    type="email"
                    required
                    placeholder="Enter your email..."
                    className="flex-1 border border-black border-r-0 rounded-l px-4 py-3 text-lg focus:outline-none"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-black text-white text-lg font-semibold px-8 py-3 rounded-r uppercase tracking-wider hover:bg-gray-900 transition"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default Subscribe;
