import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<h1>Home page</h1>} />
            <Route path="/posts" element={<h1>Post List page</h1>} />
            <Route path="/posts/:id" element={<h1>Post Detail page</h1>} />
            <Route path="/posts/new" element={<h1>Post Detail page</h1>} />
            <Route path="/posts/edit/:id" element={<h1>Post Edit page</h1>} />
            <Route path="/profile" element={<h1>Profile page</h1>} />
            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
    );
}