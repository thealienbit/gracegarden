import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-sage-900 text-sage-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-serif font-bold mb-4">Grace Garden</h3>
            <p className="text-sage-200 leading-relaxed mb-6 max-w-md">
              Where care meets calm. Experience premium eldercare in the serene
              hills of Wayanad, Kerala. Every day filled with dignity, comfort,
              and the warmth of home.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-sage-400 mr-3 flex-shrink-0" />
                <a
                  href="tel:9100773861"
                  className="text-sage-200 hover:text-white transition-colors"
                >
                  +91 9100773861
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-sage-400 mr-3 flex-shrink-0" />
                <a
                  href="mailto:gracegarden1983@gmail.com"
                  className="text-sage-200 hover:text-white transition-colors"
                >
                  gracegarden1983@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 text-sage-400 mr-3 flex-shrink-0 mt-1" />
                <span className="text-sage-200">
                  Chendakuni, Meenangadi
                  <br />
                  Wayanad, Kerala, 673591
                </span>
              </div>
              <div className="flex items-start">
                <Instagram className="h-4 w-4 text-sage-400 mr-3 flex-shrink-0 mt-1" />
                <span className="text-sage-200">
                  <a href="https://www.instagram.com/gracegarden_care?utm_source=qr&igsh=OW1icHRscjU4ZTR4">
                    ig@gracegarden_care
                  </a>
                </span>
              </div>
              <div className="flex items-start">
                <Youtube className="h-4 w-4 text-sage-400 mr-3 flex-shrink-0 mt-1" />
                <span className="text-sage-200">
                  <a href="https://www.youtube.com/@GraceGardenCare">
                    yt@GraceGardenCare
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sage-200">
              <li>24/7 Medical Care</li>
              <li>Personal Assistance</li>
              <li>Home Cooked Meals</li>
              <li>Sophisticated Living</li>
              <li>Secured Living</li>
              <li>Cultural Activities</li>
              <li>Physiotherapy</li>
              <li>Garden Therapy</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sage-800 mt-12 pt-8 text-center">
          <p className="text-sage-300">
            © 2024 Grace Garden Eldercare. All rights reserved. | Made with{" "}
            <Heart className="h-4 w-4 text-red-400 inline mx-1" /> for our
            elders.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
