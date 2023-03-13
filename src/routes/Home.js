import Content from "../components/Content";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Stage from "../components/Stage";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Review from "../components/Review";
import Verified from "../components/Verified";
import "./Home.css";
import Faq from "../components/Faq";
import FileUpload from "../components/FileUpload";


function Home(){
    return(
        <>
            <Navbar />
            <Hero
            cName="hero" 
            heroImg="https://cdn.pixabay.com/photo/2019/02/24/09/13/air-pollution-4017183_960_720.jpg"
            title1="NEPHROLOGICAL"
            title2="DISEASE DETECTION"
            text="Revolutionize your nephrological disease diagnosis with our cutting-edge AI technology. Our deep learning algorithms accurately detect multiple diseases in real-time, providing you with fast and reliable results. Experience the future of medicine with our AI-powered solution, and give your patients the care they deserve."
            buttonText="Get Started"
            url="/"
            btnClass="show"
            />
            <Content />
            <Stage />
            <FileUpload />
            <Verified />
            <Faq />
            <Review />
            <Contact />
            <Footer />
        </>
    );
}

export default Home;