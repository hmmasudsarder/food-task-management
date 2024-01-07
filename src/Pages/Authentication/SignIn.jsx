import { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import login from "../../assets/Images/login.jpeg";
import { AuthContext } from '../../Provider/AuthProvider';
import Navbar from '../../Components/Navbar';

const SignIn = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [pError, setError] = useState("");
    const { userLogin, googleLogin } = useContext(AuthContext);


    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        setError("");
        if (!/[A-Z]/.test(password)) {
            setError("Your Password Should have at least one Uppercase characters");
            return;
        } else if (!/[#$?@&!*^-]/.test(password)) {
            setError("Your Password Should have at least one special characters");
            return;
        }

        userLogin(email, password)
            .then((res) => {
                Swal("success", "Your Login SuccessFully", "success");
                navigate(location?.state ? location.state : "/");
                console.log(res?.user)
            })
            .catch((error) => setError(error.message));
    };



    const handleWithGool = () => {
        googleLogin()
            .then((res) => {
                navigate(location?.state ? location.state : "/");
                console.log(res?.user)
            })
            .catch((error) => {
                setError(error.message);
                Swal("error", "your Login not ", "error");
            });
    };


    return (
        <div>
            <Navbar />
            <div className="hero min-h-screen bg-base-200" style={{backgroundImage: 'url(https://i.ibb.co/jM2HMYV/login.jpg)'}}>
                <div className="hero-content flex-col lg:flex-row">
                    <div className=" lg:text-left">
                        {/* <h1 className="text-5xl font-bold text-orange-400">Login now!</h1>
                        <img className=' h-auto' src={login} alt="" /> */}
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ml-96">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="email"
                                        className="input input-bordered"
                                        required
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="password"
                                        className="input input-bordered"
                                        required
                                    />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">
                                            Forgot password?
                                        </a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-warning text-black font-bold text-3xl">Login</button>
                                </div>
                            </form>
                            <a href="">
                                You Are Now?{" "}
                                <Link to="/register" className="text-orange-600 font-bold">
                                    Register
                                </Link>{" "}
                            </a>
                            <button
                                onClick={handleWithGool}
                                className="btn btn-outline btn-warning text-black font-bold text-xl"
                            >
                                Google
                            </button>
                            {pError && <p className="text-red-700 font-bold">{pError}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;