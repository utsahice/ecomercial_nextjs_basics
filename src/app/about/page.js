import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="bg-gray-50 text-gray-800 min-h-screen py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">Us</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn more about who we are, what we do, and the values that drive us forward.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative w-full h-80 md:h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
              alt="Team collaboration"
              fill
              className="object-cover"
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              At <span className="font-semibold">MyWebsite</span>, we’re dedicated to
              delivering exceptional digital experiences that inspire and empower.
              Our team of creative thinkers, designers, and developers works tirelessly
              to bring innovative ideas to life through modern web technologies.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What We Believe In
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Commitment to quality and innovation</li>
              <li>Transparent communication with clients</li>
              <li>Building technology that makes a difference</li>
              <li>Continuous learning and growth</li>
            </ul>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Meet Our Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                name: "ABC",
                role: "Lead Developer",
                img: "https://randomuser.me/api/portraits/men/75.jpg",
              },
              {
                name: "Utsahi",
                role: "Lead Developer",
                img: "https://randomuser.me/api/portraits/women/65.jpg",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition"
              >
                <Image
                  src={member.img}
                  alt={member.name}
                  width={100}
                  height={100}
                  className="rounded-full mx-auto mb-4 border-4 border-blue-500"
                />
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
