import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-8 px-4">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Contact Us
        </h1>

        {/* Contact Information Section */}
        <div className="space-y-8">
          {/* Address Section */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <img
                src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
                alt="Location Icon"
                className="w-10 h-10"
              />
            </div>
            <div>
              <p className="font-semibold text-lg">Managing Director</p>
              <p>James Thomson Building</p>
              <p>Indian Institute of Technology Roorkee</p>
              <p>Uttarakhand 247667, India</p>
            </div>
          </div>

          {/* Phone Section */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <img
                src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
                alt="Phone Icon"
                className="w-10 h-10"
              />
            </div>
            <div>
              <p className="font-semibold text-lg">Phone:</p>
              <p>(+91) 9411176136</p>
            </div>
          </div>

          {/* Email Section */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                alt="Email Icon"
                className="w-10 h-10"
              />
            </div>
            <div>
              <p className="font-semibold text-lg">Email:</p>
              <p>
                <a
                  href="mailto:md@aarti.iitr.ac.in"
                  className="text-blue-500 underline"
                >
                  md@aarti.iitr.ac.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
