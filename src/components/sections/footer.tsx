import React from 'react';

const Footer = () => {
  const footerData = [
    {
      title: "Shop and Learn",
      links: ["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "AirTag", "Accessories"]
    },
    {
      title: "Entertainment",
      links: ["Apple One", "Apple TV+", "Apple Music", "Apple Arcade", "Apple Fitness+", "Apple Podcasts", "Apple Books", "App Store"]
    },
    {
      title: "Account",
      links: ["Manage Your Apple Account", "Apple Store Account", "iCloud.com"]
    },
    {
      title: "Apple Values",
      links: ["Accessibility", "Education", "Environment", "Privacy", "Supply Chain Innovation"]
    },
    {
      title: "About Apple",
      links: ["Newsroom", "Apple Leadership", "Career Opportunities", "Investors", "Ethics & Compliance", "Events", "Contact Apple"]
    }
  ];

  return (
    <footer className="bg-[#f5f5f7] text-[#1d1d1f] py-8 px-4 md:px-0">
      <div className="max-w-[1024px] mx-auto text-[12px]">
        {/* Navigation Sections */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 border-b border-[#d2d2d7] pb-8">
          {footerData.map((section, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h3 className="font-semibold text-[#1d1d1f]">{section.title}</h3>
              <ul className="flex flex-col gap-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-[#424245] hover:underline">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-4 text-[#6e6e73]">
          <p className="mb-4">
            More ways to shop: <a href="#" className="text-[#0066cc] underline">Find an Apple Store</a> or <a href="#" className="text-[#0066cc] underline">other retailer</a> near you. Or call 000800 040 1966.
          </p>
          <div className="flex flex-col md:flex-row md:justify-between border-t border-[#d2d2d7] pt-4 gap-4">
            <p>Copyright © 2026 Apple Inc. All rights reserved.</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {["Privacy Policy", "Terms of Use", "Sales Policy", "Legal", "Site Map"].map((policy) => (
                <a key={policy} href="#" className="hover:underline">{policy}</a>
              ))}
              <span className="md:ml-8 text-[#1d1d1f] font-medium">India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;