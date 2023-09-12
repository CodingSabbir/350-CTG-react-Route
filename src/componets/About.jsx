
const About = () => {
    return (
    <div>
        <section className=" px-5 md:px-20 mt-10 pb-5">
        <div className="grid md:grid-cols-2">
        <div>
            <p className="text-[30px] font-Plus">Okay, Let's see <br/> <span className="text-[#FE0000] underline"> tik.mo in numbers</span></p>
            <p className="text-[#445069] text-md my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis totam magni ab explicabo voluptas vero iure? Facere eius dolores sequi.</p>
            <div>
            <p className="text-[50px] font-Poppins">40.3K <span className="ml-20">15K</span></p>
            <p className="text-[#445069] font-Nunito">Dawnload <span className="ml-36">Active users</span></p>
            </div>
            <div className="mt-5">
            <p className="text-[50px] font-Poppins">300K+ <span className="ml-10">20K+</span></p>
            <p className="text-[#445069] font-Nunito">Using group <span className="ml-28">Subcribers</span></p>
            </div>
        </div>

        <div>
            <div>
            <img className="rounded-md md:h-[300px] md:mt-10 md:ml-5" src="https://png.pngtree.com/thumb_back/fh260/background/20190223/ourmid/pngtree-modern-technology-intelligent-ai-era-background-design-backgroundintelligent-ai-technologypsd-image_75384.jpg" alt=""/>
            </div>
        </div>
        </div>
        </section>
    </div>
    );
};

export default About;