"use client";
import React from "react";

import Image from "next/image";
import {
  FaLaptopCode,
  FaDatabase,
  FaUserGraduate,
  FaChalkboardTeacher,
} from "react-icons/fa";

export default function AboutUs() {
  return (
    <section className="bg-gradient-to-b from-slate-950 via-gray-900 to-slate-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            About <span className="text-cyan-400">SkillBridge</span>
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-8">
            SkillBridge is a modern online learning institute dedicated to
            providing high-quality education in computer programming, full stack
            development, backend technologies, databases, and BCA subjects.
          </p>
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left Side Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 rounded-3xl"></div>

            <Image
              src="/aboutUs.png"
              alt="About SkillBridge"
              width={600}
              height={500}
              className="relative rounded-3xl shadow-2xl border border-cyan-500/20"
            />
          </div>

          {/* Right Side Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              28+ Years of Excellence in Computer Education
            </h2>

            <p className="text-gray-300 leading-8 mb-6">
              With more than 28 years of experience in the computer education
              field, we have trained thousands of students and helped them build
              successful careers in technology and software development.
            </p>

            <p className="text-gray-300 leading-8 mb-8">
              Our expert faculty team has 10 to 12 years of professional
              experience in their respective fields, ensuring practical,
              industry-oriented, and modern learning for every student.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-cyan-500/10 transition">
                <FaLaptopCode className="text-4xl text-cyan-400 mb-4" />

                <h3 className="text-xl font-semibold mb-2">
                  Programming Courses
                </h3>

                <p className="text-gray-300 text-sm leading-6">
                  Learn C, C++, Java, Python, JavaScript and modern web
                  technologies.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-cyan-500/10 transition">
                <FaDatabase className="text-4xl text-cyan-400 mb-4" />

                <h3 className="text-xl font-semibold mb-2">
                  Database Training
                </h3>

                <p className="text-gray-300 text-sm leading-6">
                  Master MySQL, MongoDB and advanced database management
                  concepts.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-cyan-500/10 transition">
                <FaUserGraduate className="text-4xl text-cyan-400 mb-4" />

                <h3 className="text-xl font-semibold mb-2">
                  BCA Subject Support
                </h3>

                <p className="text-gray-300 text-sm leading-6">
                  Complete guidance for BCA students with practical and theory
                  learning.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-cyan-500/10 transition">
                <FaChalkboardTeacher className="text-4xl text-cyan-400 mb-4" />

                <h3 className="text-xl font-semibold mb-2">
                  Expert Faculty
                </h3>

                <p className="text-gray-300 text-sm leading-6">
                  Learn from experienced teachers with real industry knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <h2 className="text-4xl font-bold text-cyan-400 mb-2">28+</h2>
            <p className="text-gray-300">Years Experience</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <h2 className="text-4xl font-bold text-cyan-400 mb-2">5000+</h2>
            <p className="text-gray-300">Students Trained</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <h2 className="text-4xl font-bold text-cyan-400 mb-2">12+</h2>
            <p className="text-gray-300">Expert Teachers</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <h2 className="text-4xl font-bold text-cyan-400 mb-2">100%</h2>
            <p className="text-gray-300">Practical Learning</p>
          </div>
        </div>
      </div>
    </section>
  );
}