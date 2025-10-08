
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const LocationSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-sage-900 mb-6">
            Visit Grace Garden
          </h2>
          <p className="text-xl text-sage-700 max-w-3xl mx-auto leading-relaxed">
            Located in the serene hills of Wayanad, Kerala, surrounded by nature's beauty 
            and tranquility. Come experience our peaceful environment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <Card className="border-0 shadow-lg bg-sage-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-semibold text-sage-900 mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-sage-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sage-900 mb-1">Address</h4>
                      <p className="text-sage-700 leading-relaxed">
                        Chendakuni, Meenangadi<br />
                        Wayanad, Kerala, 673591
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-sage-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sage-900 mb-1">Phone</h4>
                      <p className="text-sage-700">
                        <a href="tel:9100773861" className="hover:text-sage-900 transition-colors">
                          +91 9100773861
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-sage-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sage-900 mb-1">Email</h4>
                      <p className="text-sage-700">
                        <a 
                          href="mailto:gracegarden1983@gmail.com" 
                          className="hover:text-sage-900 transition-colors"
                        >
                          gracegarden1983@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-sage-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sage-900 mb-1">Visiting Hours</h4>
                      <p className="text-sage-700">
                        Daily: 9:00 AM - 6:00 PM<br />
                        {/* <span className="text-sm text-sage-600">
                          (Prior appointment recommended)
                        </span> */}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="animate-fade-in-up">
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500197.54034429154!2d75.61942433790553!3d11.638074864205304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba60b4e26c87ef5%3A0x13d0be64ec1a4a14!2sGrace%20Garden%20(Care%20Home)!5e0!3m2!1sen!2sin!4v1750110945505!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Grace Garden Location"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-6 text-center">
              <p className="text-sage-700 mb-4">
                Located in the heart of Wayanad's scenic beauty
              </p>
              <a
                href="https://maps.google.com/?q=Chendakuni,+Meenangadi,+Wayanad,+Kerala,+673591"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sage-600 hover:text-sage-900 font-medium transition-colors"
              >
                <MapPin className="h-4 w-4 mr-2" />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
