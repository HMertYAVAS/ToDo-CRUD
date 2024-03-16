import React from 'react'
import { HiOutlineUser, HiOutlineLockClosed } from 'react-icons/hi'; // Assuming you're using React Icons for the user and lock icons

export default function SignIn() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-8">Sign In</h1>
            <form className="flex flex-col items-center mt-8 space-y-4">
                <div className="flex items-center border border-gray-400 rounded-md px-3 py-2">
                    <HiOutlineUser className="mr-2" />
                    <input type="text" placeholder="Username" className="w-full focus:outline-none" />
                </div>
                <div className="flex items-center border border-gray-400 rounded-md px-3 py-2">
                    <HiOutlineLockClosed className="mr-2" />
                    <input type="password" placeholder="Password" className="w-full focus:outline-none" />
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Sign In
                </button>
            </form>
        </div>
    );

}
