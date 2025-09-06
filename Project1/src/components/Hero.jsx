function HeroSection() {
    return (
        <div className="hero-sec">
            <div>
                <h1 className="title1">YOUR FEET DESERVE THE BEST</h1>
                <p className="para1">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="btn-box">
                    <a className="btn-red" href="#">Shop Now</a>
                    <a className="btn-gray" href="#">Category</a>
                </div>
                <small>Also Available On</small>
                <div className="btn-box">
                    <a href="#"><img src="/images/flipkart.png" alt="flipkart logo" /></a>
                    <a href="#"><img src="/images/amazon.png" alt="amazon logo" /></a>
                </div>
            </div>
            <div>
                <img src="/images/shoe.png" alt="Shoes Images" />
            </div>
        </div>
    )
}

export default HeroSection;