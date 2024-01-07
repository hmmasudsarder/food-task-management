import "./sliderCart.css";
import SliderImg from './SliderImg';

const SliderImages = () => {
    return (
        <div className='product-container absolute'>
            <button className='pre-btn p-2 text-2xl bg-orange-400 absolate border-0'><p>&lt;</p></button>
            <button className='next-btn p-2 text-2xl bg-orange-400 relative mt-0'><p>&gt;</p></button>

            <div className="product-carousel w-full">
                <SliderImg cardno="1"/>
                <SliderImg cardno="2"/>
                <SliderImg cardno="3"/>
                <SliderImg cardno="4"/>
                <SliderImg cardno="5"/>
                <SliderImg cardno="6"/>
                <SliderImg cardno="7"/>
                <SliderImg cardno="8"/>
                <SliderImg cardno="9"/>
                <SliderImg cardno="10"/>
            </div>
        </div>
    );
};

export default SliderImages;