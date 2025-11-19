import ProductHighlightSection from '../../components/ProductHighlightSection/ProductHighlightSection';
import WhyChooseUsSection from '../../components/WhyChooseUsSection/WhyChooseUsSection';
import HeroSection from '../../components/HeroSection/HeroSection';

const Home = () => {
    return (
        <>
            <HeroSection
                title='Studio Modern'
                subtitle='Mulai membiasakan untuk menggunakan outfit dengan estetika modern dan original. Kami memberikan pengalaman yang memadukan fungsionalitas dengan kenyamanan, disesuaikan dengan gaya unik Anda.'
            />

            <ProductHighlightSection />

            <WhyChooseUsSection />
        </>
    );
};

export default Home;
