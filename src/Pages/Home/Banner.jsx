import { Link } from "react-router-dom";
import IntroImage from "../../assets/Images/Image1.png";

const Banner = () => {
    return (
        <div>
            <div className="hero lg:bg-orange-400 md:mx-auto rounded-3xl mt-14">
                <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                    <img src={IntroImage} className="max-w-5xl bg-orange-400 -mb-4" />
                    <div className="lg:text-white lg:ml-12 lg:text-pretty text-black">
                        <h1 className="text-5xl">Delever Food To Your Door Stepl</h1>
                        <p className="py-4">Authentic Food Quick Service First Delevery</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;