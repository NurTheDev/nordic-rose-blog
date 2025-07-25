import React, {lazy, Suspense} from 'react';
import {Route, Routes} from "react-router";
import Loader from "./component/Loader.jsx";
import UploadBlog from "./MainLayout/blogComponent/UploadBlog.jsx";
import {AuthContext} from "./context/authContext.js";

const App = () => {
    const Index = lazy(() => import('./MainLayout/Index'));
    const Blog = lazy(() => import('./MainLayout/Blogs.jsx'));
    const SingleBlog = lazy(() => import('./MainLayout/SingleBlog.jsx'));
    const LoginForm = lazy(() => import('./AuthLayout/LoginForm.jsx'));
    const RegisterForm = lazy(() => import('./AuthLayout/RegisterForm.jsx'));
    const UploadBlog = lazy(() => import('./MainLayout/blogComponent/UploadBlog.jsx'));
    const [user, setUser] = React.useState(()=>{
        const userInfo = localStorage.getItem("userInfo");
        return userInfo ? JSON.parse(userInfo) : {isAuthenticated: false};
    });
    return (
        <AuthContext.Provider value={[user, setUser]}>
            <div>
                <Suspense fallback={<Loader/>}>
                    <Routes>
                        {!user.isAuthenticated ? (<>
                            <Route path="/login" element={<LoginForm/>}/>
                            <Route path="/register" element={<RegisterForm/>}/>
                        </>) : (<><Route element={<Index/>}>
                            <Route index element={<Blog/>}/>
                            <Route path="/blog" element={<h1>Blog</h1>}/>
                            <Route path="/about" element={<h1>About</h1>}/>
                            <Route path="links/:id" element={<SingleBlog/>}/>
                            <Route path="/projects" element={<UploadBlog/>}/>
                        </Route></>)}
                        <Route path="*" element={<h1>404</h1>}/>
                    </Routes>
                </Suspense>
            </div>
        </AuthContext.Provider>
    );
};

export default App;
