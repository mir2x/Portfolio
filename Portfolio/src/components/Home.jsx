import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faTwitter,
  faYoutube,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 m-4">
        <ul className="space-y-4">
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FontAwesomeIcon icon={faBook} size="2x" />
            </a>
          </li>
        </ul>
      </div>
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">HEY, I'M RAM MAHESHWARI</h1>
        <p className="text-lg text-gray-700 mb-8">
          A Result-Oriented Web Developer building and managing Websites and Web
          Applications that leads to the success of the overall product
        </p>
        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg">
          PROJECTS
        </button>
      </div>
    </div>
  );
}
