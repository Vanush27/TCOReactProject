import {Navigate} from "react-router";
import NotFound from "../../pages/404";
import About from "../../pages/About";
import Home from "../../pages/Home";
import Project from "../../pages/Project"
import Header from "../Project/Header";
import Footer from "../Project/Footer";
import FormPage from "../../pages/Form";
import SingleTask from "../../pages/SingleTask";

export const routes = [
    {
        path: "/",
        element:
            <>
                <Header/>
                <Home/>
                <Footer/>
            </>

    },
    {
        path: "/about-me",
        element:
            <>
                <Header/>
                <About/>
                <Footer/>
            </>

    },
    {
        path: "/project",
        element:
            <>
                <Header/>
                <Project/>
                <Footer/>
            </>
    },
    {
        path: "/form",
        element:
            <>
                <Header/>
                <FormPage/>
                <Footer/>
            </>
    },
    {
        path: "/not-found",
        element: <NotFound/>
    },
    {
        path: "/task/:task_id",
        element:
            <>
                <Header/>
                <SingleTask/>
                <Footer/>
            </>

    },
    {
        path: "*",
        element: <Navigate to="/not-found"/>
    }
]