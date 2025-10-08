import { Button } from "@/components/ui/button";
import { Phone, Calendar, FileText } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="home"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/d8b016c1-9dc0-40b7-bab9-10a6d58e9cfe.png"
          alt="Happy elderly couple in nature"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sage-900/70 via-sage-800/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Grace Garden
          </h1>
          <p className="text-2xl md:text-3xl text-warmBeige-100 mb-4 font-light">
            Where Care Meets Calm
          </p>
          <p className="text-lg md:text-xl text-warmBeige-200 mb-12 leading-relaxed max-w-2xl">
            Experience premium eldercare in the serene hills of Wayanad, Kerala.
            Where every day is filled with dignity, comfort, and the warmth of
            home.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
            <a href="#contactus">
              <Button
                size="lg"
                className="bg-sage-600 w-60 hover:bg-sage-700 text-white px-8 py-4 text-lg font-medium rounded-full hover-lift"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book a Visit
              </Button>
            </a>
            <a href="tel:+919100773861">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white w-60 text-sage-900 hover:bg-white hover:text-sage-900 px-8 py-4 text-lg font-medium rounded-full hover-lift"
              >
                <Phone className="mr-2 h-5 w-5" />
                Request a Call
              </Button>
            </a>
            <a
              href="
            https://drive.google.com/file/d/1E_7gSo1QlgR4--tQ7WkwRsE9z6eJ_N7I/view"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 w-60 border-warmBeige-200 text-sage-900 hover:bg-warmBeige-200 hover:text-sage-900 px-8 py-4 text-lg font-medium rounded-full hover-lift"
              >
                <FileText className="mr-2 h-5 w-5" />
                Get Brochure
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
