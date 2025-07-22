import React, {lazy, Suspense} from 'react';
import {Route, Routes} from "react-router";
import Loader from "./component/Loader.jsx";

const App = () => {
    const Index = lazy(() => import('./MainLayout/Index'));
    const Blog = lazy(() => import('./MainLayout/Blogs.jsx'));
    const SingleBlog = lazy(() => import('./MainLayout/SingleBlog.jsx'));
    const LoginForm = lazy(() => import('./AuthLayout/LoginForm.jsx'));
    const RegisterForm = lazy(() => import('./AuthLayout/RegisterForm.jsx'));
    const NewBlogEditor = lazy(() => import('./MainLayout/blogComponent/NewBlogEditor.jsx'));
    return (
        <div>
            <Suspense fallback={<Loader/>}>
                <Routes>
                    <Route path="/login" element={<LoginForm/>}/>
                    <Route path="/register" element={<RegisterForm/>}/>
                    <Route element={<Index/>}>
                        <Route index element={<Blog/>}/>
                        <Route path="/blog" element={<h1>Blog</h1>}/>
                        <Route path="/about" element={<h1>About</h1>}/>
                        <Route path="/links" element={<SingleBlog/>}/>
                        <Route path="/projects" element={<NewBlogEditor/>}/>

                    </Route>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
