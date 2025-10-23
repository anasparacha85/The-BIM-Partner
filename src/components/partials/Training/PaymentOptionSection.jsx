import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import { CreditCard } from "lucide-react";

// Payment Options Section
const PaymentOptionsSection = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const paymentLogos = [
    { src: "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png", alt: "Visa" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png", alt: "MasterCard" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png", alt: "Stripe" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg", alt: "PayPal" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg", alt: "Apple Pay" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png", alt: "Google Pay" },
  ];

  return (
    <section ref={ref} className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col gap-8 items-center">
            {/* Heading */}
            <div className="text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Learn Now Pay Later</h3>
              <p className="text-orange-400 flex gap-2 justify-center text-lg mb-6">
                <CreditCard/> Split your tuition into 4 payments.
              </p>
              <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
                We offer flexible payment options to make quality education accessible to everyone.
              </p>
            </div>

            {/* Swiper for Payment Logos */}
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={3}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop={true}
            
              breakpoints={{
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
              }}
              className="w-full"
            >
              {paymentLogos.map((logo, index) => (
                <SwiperSlide key={index} className="flex justify-center items-center">
                  <div className=" rounded-lg shadow-md p-4 flex gap-0 justify-center items-center h-20 w-full">
                    <img src={logo.src} alt={logo.alt} className="h-full object-contain" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentOptionsSection;
