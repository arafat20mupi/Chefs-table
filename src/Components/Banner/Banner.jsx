
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen rounded-xl" style={{backgroundImage: 'url(https://i.ibb.co/HTjXf08/Rectangle-1.png)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-white ">
                    <div className="max-w-3xl space-y-5">
                    <h1 className=" text-4xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                    <p >Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                    <div className="mt-10">
                        <button className="btn bg-[#0BE58A] text-black">Explore Now</button>
                        <button className="btn ml-4 ">Explore Now</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;