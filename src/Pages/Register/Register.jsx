/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import LoginButton from "../../components/Navbar/LoginButton";
import loginImage from '../../assets/loginImage.jpg';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import MyTextField from "../Login/MyTextField";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

export default function Register() {
    const { createUser, googleLogin, githubLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const user = { name, photo, email, password };
        console.log(user)
        createUser(email, password)
            .then(() => {
                toast.success('Successfully Signed In!');
                navigate('/')
            })
            .catch(error => {
                console.log(error)
                toast.error('Something went wrong!');
            })
    }
    const otherLogin = (media) => {
        media()
            .then(() => {
                toast.success('Successfully Signed In!');
                navigate('/')
            })
            .catch(error => {
                console.log(error)
                toast.error('Something went wrong!');
            })
    }
    return (
        <div className="py-8">
            <Helmet>
                <title>Grillino | Register</title>
                <link rel="icon" type="image/svg+xml" href="../../assets/fav.jpg" />
            </Helmet>
            <div className="hero min-h-screen px-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <div className="flex justify-center">
                            <img className="w-2/3" src={loginImage} alt="" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-center mb-6">Sign In With</h3>
                            <div className="flex justify-center gap-5 mt-3">
                                <span onClick={() => otherLogin(googleLogin)} className="flex items-center cursor-pointer btn btn-ghost normal-case"><span className="text-xl font-bold">Google</span><FcGoogle className="text-3xl"></FcGoogle></span>
                                <span onClick={() => otherLogin(githubLogin)} className="flex items-center cursor-pointer btn btn-ghost normal-case"><span className="text-xl font-bold">Github</span><FaGithub className="text-3xl"></FaGithub></span>
                            </div>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm">
                        <h1 className="text-5xl font-bold text-center my-4 mb-8">Sign In now!</h1>
                        <form onSubmit={handleRegister} className="">
                            <div className="form-control">
                                <MyTextField
                                    type="text"
                                    label="Name"
                                    name="name"
                                >
                                </MyTextField>
                            </div>
                            <div className="form-control my-4">
                                <MyTextField
                                    type="text"
                                    label="Photo URL"
                                    name="photo"
                                >
                                </MyTextField>
                            </div>
                            <div className="form-control my-4">
                                <MyTextField
                                    type="email"
                                    label="email"
                                    name="email"
                                >
                                </MyTextField>
                            </div>
                            <div className="form-control my-4">
                                <MyTextField
                                    type="password"
                                    label="Password"
                                    name="password"
                                >
                                </MyTextField>
                                <label className="label">
                                    <a className="label-text-alt link link-hover text-orange-400 font-bold">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <LoginButton type="submit" variant="contained" className="btn bg-orange-400">Sign In</LoginButton>
                            </div>
                        </form>
                        <p className="text-center font-semibold my-3">Already Have Any Account? Please <Link className="text-orange-400 font-bold" to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
