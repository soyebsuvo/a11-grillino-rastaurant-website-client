/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import LoginButton from "../../components/Navbar/LoginButton";
import MyTextField from "./MyTextField";
import loginImage from '../../assets/loginImage.jpg'
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

export default function Login() {
    const {login , googleLogin , githubLogin} = useContext(AuthContext);
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        login(email , password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => [
            console.log(error)
        ])
    }
    const otherLogin = (media) => {
        media()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className="py-8">
            <div className="hero min-h-screen px-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <div className="flex justify-center">
                            <img className="w-2/3" src={loginImage} alt="" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-center mb-6">Login With</h3>
                            <div className="flex justify-center gap-5 mt-3">
                                <span onClick={()=> otherLogin(googleLogin)} className="flex items-center cursor-pointer btn btn-ghost normal-case"><span className="text-xl font-bold">Google</span><FcGoogle className="text-3xl"></FcGoogle></span>
                                <span onClick={()=> otherLogin(githubLogin)} className="flex items-center cursor-pointer btn btn-ghost normal-case"><span className="text-xl font-bold">Github</span><FaGithub className="text-3xl"></FaGithub></span>
                            </div>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm">
                        <h1 className="text-5xl font-bold text-center my-4 mb-8">Login now!</h1>
                        <form onSubmit={handleLogin} className="">
                            <div className="form-control">

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
                                <LoginButton type="submit" variant="contained" className="btn bg-orange-400">Login</LoginButton>
                            </div>
                        </form>
                        <p className="text-center font-semibold my-3">Don't Have Any Account? Please <Link className="text-orange-400 font-bold" to='/register'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
