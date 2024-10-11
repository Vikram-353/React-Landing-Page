import React from 'react';

function Footer() {
  return (
    <footer className="mt-20 border-t py-12 border-neutral-700 bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">About Vikram Ranjan</h3>
          <p className="text-sm text-neutral-400 text-justify">
            B.Tech in AI & Data Science student, passionate about front-end development, machine learning, and building intelligent systems. Dedicated to creating seamless user experiences and solving complex problems through technology.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://github.com/vikram-353"
                className="text-neutral-300 hover:text-white"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/vikram-ranjan890"
                className="text-neutral-300 hover:text-white"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-neutral-300 hover:text-white"
              >
                Portfolio
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Projects</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/coal-mines-manager"
                className="text-neutral-300 hover:text-white"
              >
                Coal Mines Manager System
              </a>
            </li>
            <li>
              <a
                href="/parking-management"
                className="text-neutral-300 hover:text-white"
              >
                Smart Parking System
              </a>
            </li>
            <li>
              <a
                href="/yolo-parking-detection"
                className="text-neutral-300 hover:text-white"
              >
                YOLO Parking Detection
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Get in Touch</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="mailto:vikramranjan71122@gmail.com"
                className="text-neutral-300 hover:text-white"
              >
                Email: vikramranjan71122@gmail.com
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-neutral-300 hover:text-white"
              >
                Contact Form
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="mt-10 border-t border-neutral-700 pt-6 text-center text-sm text-neutral-500">
        <p>&copy; 2024 Vikram Ranjan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
