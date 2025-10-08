
import { Heart, Shield, Utensils, Music, MapPin, Stethoscope } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Shield,
      title: "24/7 Medical Care",
      description: "Round-the-clock nursing care and regular doctor visits ensure your loved one's health and wellbeing."
    },
    {
      icon: Utensils,
      title: "Homely Food",
      description: "Nutritious, freshly prepared vegetarian/non-vegetarian meals that taste like home, catering to dietary preferences."
    },
    {
      icon: Music,
      title: "Cultural Activities",
      description: "Engaging cultural programs, music sessions, and activities that keep spirits high and minds active."
    },
    {
      icon: MapPin,
      title: "Scenic Environment",
      description: "Nestled in the beautiful hills of Wayanad, surrounded by nature's tranquility and fresh air."
    },
    {
      icon: Heart,
      title: "Personal Assistance",
      description: "Dedicated caregivers provide personalized attention and support for daily activities."
    },
    {
      icon: Stethoscope,
      title: "Health Monitoring",
      description: "Regular health check-ups, medication management, and physiotherapy as needed."
    }
  ];

  const highlights = [
    "24/7 Qualified Nurses",
    "Elevator Access",
    "Doctor Visits",
    "Scenic Hill Views",
    "Garden Therapy",
    "Emergency Care"
  ];

  return (
    <section className="py-20 gradient-bg" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-sage-900 mb-6">
            Comprehensive Care Services
          </h2>
          <p className="text-xl text-sage-700 max-w-3xl mx-auto leading-relaxed">
            We provide holistic care that nurtures the body, mind, and spirit. 
            Every service is designed with love, dignity, and respect.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover-lift bg-white/90 backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-100 rounded-full mb-6">
                  <service.icon className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-sage-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-sage-700 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlights */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl animate-fade-in">
          <h3 className="text-2xl font-serif font-semibold text-sage-900 mb-6 text-center">
            Why Choose Grace Garden?
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {highlights.map((highlight, index) => (
              <div 
                key={index} 
                className="text-center p-4 bg-sage-50 rounded-lg hover-lift"
              >
                <div className="w-3 h-3 bg-sage-500 rounded-full mx-auto mb-2"></div>
                <p className="text-sm font-medium text-sage-800">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
