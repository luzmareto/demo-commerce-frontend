// import ProductHighlightSection from '../../components/ProductHighlightSection/ProductHighlightSection';
// import WhyChooseUsSection from '../../components/WhyChooseUsSection/WhyChooseUsSection';
// import HeroSection from '../../components/HeroSection/HeroSection';

// const Home = () => {
//     return (
//         <>
//             <HeroSection
//                 title='Studio Modern'
//                 subtitle='Mulai membiasakan untuk menggunakan outfit dengan estetika modern dan original. Kami memberikan pengalaman yang memadukan fungsionalitas dengan kenyamanan, disesuaikan dengan gaya unik Anda.'
//             />

//             <ProductHighlightSection />

//             <WhyChooseUsSection />
//         </>
//     );
// };

// export default Home;

import { useEffect } from 'react';
import Swal from 'sweetalert2';

import ProductHighlightSection from '../../components/ProductHighlightSection/ProductHighlightSection';
import WhyChooseUsSection from '../../components/WhyChooseUsSection/WhyChooseUsSection';
import HeroSection from '../../components/HeroSection/HeroSection';

const Home = () => {

    useEffect(() => {
        Swal.fire({
            icon: 'warning',
            title: 'System Telah Dimatikan',
            text: 'Untuk merasakan pengalaman sempurna, silahkan hubungi: luzmaretor.sinaga@gmail.com',
            confirmButtonText: 'Mengerti',
            confirmButtonColor: '#2563eb', // Tailwind blue-600
            width: '380px',
        });
    }, []);

    return (
        <>
            <HeroSection
                title="Studio Modern"
                subtitle="Mulai membiasakan untuk menggunakan outfit dengan estetika modern dan original. Kami memberikan pengalaman yang memadukan fungsionalitas dengan kenyamanan, disesuaikan dengan gaya unik Anda."
            />

            <ProductHighlightSection />

            <WhyChooseUsSection />
        </>
    );
};

export default Home;
