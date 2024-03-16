import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const { currentUser } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser) {
            navigate('/todo');
        }
    }, [currentUser, navigate]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="max-w-4xl text-center p-8 bg-white rounded-lg shadow-lg">
                <img
                    src={'https://media.istockphoto.com/id/1092571024/tr/foto%C4%9Fraf/not-takvim-ile-listelemek-i%C3%A7in.jpg?s=2048x2048&w=is&k=20&c=PwysR5qFyZZ_8t3Z2qu7F3g3cfJGWoP41ejpUm6GtLI='}
                    alt="Todo App"
                    className="w-64 h-64 mx-auto mb-6 rounded-full"
                />
                <h1 className="text-4xl font-bold mb-6">Welcome to AwesomeTodo!</h1>
                <p className="text-lg mb-4">
                    Organize your life with our simple and intuitive todo app. With AwesomeTodo, you can manage your tasks efficiently and stay on top of your priorities.
                </p>
                <p className="text-lg mb-4">
                    Whether it's planning your daily activities, setting reminders for important deadlines, or collaborating with your team, AwesomeTodo has got you covered.
                </p>
                <p className="text-lg mb-8">
                    Start boosting your productivity today! Sign up now and experience the convenience of managing your tasks with ease.
                </p>
                <div className="flex flex-row justify-evenly">
                    <a href="/sign-in" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md inline-block transition duration-300">
                        Sign In
                    </a>
                    <a href="/sign-up" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md inline-block transition duration-300">
                        Sign Up Now
                    </a>
                </div>
            </div>
        </div>
    );
}
