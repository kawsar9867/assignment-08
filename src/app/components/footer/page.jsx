import Link from 'next/link';
import React from 'react';
const FooterPage = () => {
  return (
   <footer className="bg-[#f8f9fa] text-slate-700 pt-12 pb-6 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Brand & Newsletter */}
          <div className="space-y-4">
            <img src="/weblogo.png" alt="logo" />
            <p className="text-sm leading-relaxed">
              SkillSphere: Your platform to discover world-class courses taught by experts. Empowering learners globally.
            </p>
            <div className="space-y-2">
              <p className="text-sm font-semibold">Subscribe to Newsletter</p>
              
            </div>
            <p className="text-xs text-slate-500">
              Affiliations: AWS Partner, Google Education
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-sm mb-4 uppercase tracking-wider">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <p className="font-semibold">Support Email:</p>
                <a href="mailto:help@skillsphere.com" className="text-blue-600 hover:underline">help@skillsphere.com</a>
              </li>
              <li>
                <p className="font-semibold">General Inquiries:</p>
                <a href="mailto:info@skillsphere.com" className="text-blue-600 hover:underline">info@skillsphere.com</a>
              </li>
              <li>
                <p className="font-semibold">Corporate:</p>
                <a href="mailto:corporate@skillsphere.com" className="text-blue-600 hover:underline">corporate@skillsphere.com</a>
              </li>
            </ul>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="font-bold text-sm mb-4 uppercase tracking-wider">Explore Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-blue-600 no-underline">About Us</Link></li>
              <li><Link href="#" className="hover:text-blue-600 no-underline">Our Instructors</Link></li>
              <li><Link href="#" className="hover:text-blue-600 no-underline">Careers</Link></li>
              <li><Link href="#" className="hover:text-blue-600 no-underline">Press Kit</Link></li>
              <li><Link href="#" className="hover:text-blue-600 no-underline">FAQs</Link></li>
            </ul>
          </div>

          {/* Connect & Social */}
          <div>
            <h3 className="font-bold text-sm mb-4 uppercase tracking-wider">Connect & Social</h3>
            <p className="text-sm mb-4">Find us on social media:</p>
            <div className="flex gap-2 mb-6">
              
              <a href="#" className="w-8 h-8 border border-slate-400 rounded flex items-center justify-center font-bold hover:bg-slate-200">fb</a>
              <a href="#" className="w-8 h-8 border border-slate-400 rounded flex items-center justify-center font-bold hover:bg-slate-200">x</a>
              <a href="#" className="w-8 h-8 border border-slate-400 rounded flex items-center justify-center font-bold hover:bg-slate-200">in</a>
              <a href="#" className="w-8 h-8 border border-slate-400 rounded flex items-center justify-center font-bold hover:bg-slate-200">gh</a>
            </div>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-blue-600 no-underline">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:text-blue-600 no-underline">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-blue-600 no-underline">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-slate-300 text-center">
          <p className="text-[11px] text-slate-600">
            © 2026 SkillSphere. Developed with care by Kawsar Ahamed. All rights reserved. Based in Dhaka, Bangladesh.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;