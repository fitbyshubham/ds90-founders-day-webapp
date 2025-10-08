"use client";

import React from "react";

interface Section {
  title: string;
  content: string[];
}

const termsSections: Section[] = [
  {
    title: "Last updated on 12 March 2024",
    content: [
      "Lorem ipsum dolor sit amet consectetur. Varius in sed odio euismod eget et. Eget consectetur ligula enim praesent tristique eu nunc. Augue feugiat nulla quis venenatis.",
      "Additional content to make it longer and scrollable for demonstration purposes.",
      "Even more content to ensure the card exceeds the height on mobile screens and triggers scrolling.",
    ],
  },
  {
    title: "Eligibility",
    content: [
      "Lorem ipsum dolor sit amet consectetur. Varius in sed odio euismod eget et. Eget consectetur.",
      "a. You are 18 years of age or older.",
      "b. You are capable of entering into a legally binding agreement.",
      "c. You are not barred or otherwise legally prohibited from accessing or using the CASHLY App and CASHLY services.",
      "Lorem ipsum dolor sit amet consectetur. Lacus tempor viverra a risus egestas sit dignissim nunc in viverra. Fringilla faucibus eget nisl at lacus nunc amet non. Eu neque tellus amet sollicitudin nec pharetra id. Sapien pellentesque risus id eget nisl in. Eu scelerisque odio nec augue interdum sit. Etiam morbi dolor at gravida. Dictum tristique varius varius adipiscing elementum. Gravida massa ac velit elit. Viverra dui gravida scelerisque massa massa pellentesque.",
    ],
  },
];

export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-5 overflow-y-scroll">
      <div className="w-full max-w-md mx-auto space-y-6">
        <div className="bg-white rounded-2xl shadow-md p-5 overflow-y-auto" style={{ maxHeight: "60vh" }}>
          <h1 className="text-xl font-bold mb-4">Terms and Conditions</h1>
          <div className="space-y-4 text-gray-700 text-sm">
            {termsSections.map((section, index) => (
              <div key={index}>
                <h2 className="font-semibold text-gray-900 mb-1">{section.title}</h2>
                <ul className="list-disc list-inside space-y-1">
                  {section.content.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-5 overflow-y-auto mb-30" style={{ maxHeight: "60vh" }}>
          <h1 className="text-xl font-bold mb-4">Privacy Policy</h1>
          <div className="space-y-4 text-gray-700 text-sm">
            <p className="mb-2">Last updated on 06 March 2023</p>
            <p>Lorem ipsum dolor sit amet consectetur. Nec vestibulum tincidunt ac pulvinar. Additional content to make scrolling work on mobile.</p>
            <p>This Privacy Policy explains how we collect, use process and disclose information...</p>
            <h2 className="font-semibold mt-2">1. Information we collect</h2>
            <p className="ml-2">The following information is collected by or on behalf of CASHLY.</p>
            <h3 className="font-semibold ml-2 mt-1">1.1 Information you provide us</h3>
            <p className="ml-4">
              Details you submit directly through our app or services, including account info, payment info, and communication preferences.
            </p>
            <p>More content to ensure the card exceeds the max height and enables scrolling on mobile.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
