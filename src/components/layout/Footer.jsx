import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <h3 className="text-white text-2xl font-bold mb-4">GrowingUpp</h3>
            <p className="mb-4 max-w-md">
              Building scalable digital solutions for startups & enterprises. 
              We transform ideas into powerful applications.
            </p>
            <div className="flex gap-4">
              <FaFacebook className="text-xl hover:text-white cursor-pointer" />
              <FaTwitter className="text-xl hover:text-white cursor-pointer" />
              <FaLinkedin className="text-xl hover:text-white cursor-pointer" />
              <FaInstagram className="text-xl hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/projects" className="hover:text-white">Projects</a></li>
              <li><a href="/careers" className="hover:text-white">Careers</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <p>Email: hello@growingupp.com</p>
              <p>Phone: +91-12345679</p>
              <p>Address: Sector 62, Noida</p>
              <p>Uttar Pradesh, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p>&copy; 2025 GrowingUpp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
