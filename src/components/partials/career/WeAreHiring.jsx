import useIntersectionObserver from "../../../hooks/useIntersectionObserver";

// We're Hiring Section
const WeAreHiringSection = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section ref={ref} className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            We're Hiring!
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
          <p className="text-gray-600 text-lg leading-relaxed">
  Join <span className="font-bold text-orange-500">The BIM Partner</span>'s team of digital 
  construction innovators. We're looking for passionate and skilled professionals 
  to help shape the future of the built environment through Building Information 
  Modeling. Whether you're a BIM modeler, coordinator, project manager, or a 
  fresh talent eager to learn, The BIM Partner offers exciting opportunities to 
  work on world-class projects in architecture, engineering, and construction.
</p>

<p className="text-gray-600 text-lg leading-relaxed">
  Our workplace fosters innovation, collaboration, and continuous growth. At 
  <span className="font-bold  text-orange-500"> The BIM Partner</span>, you’ll work on 3D modeling, clash 
  detection, 4D scheduling, quantity take-offs, and digital twin integration—making 
  a real impact on how projects are designed, delivered, and maintained.
</p>

          </div>

          {/* Right Image */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
              alt="Professional Team"
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default WeAreHiringSection