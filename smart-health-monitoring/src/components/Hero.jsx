import Image from 'next/image';

const Hero = () => (
  <div className="relative bg-gray-100 py-20">
    <div className="absolute inset-0">
      <Image
        src="/images/background.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="opacity-50"
      />
    </div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl font-bold text-gray-900">Smart Health Monitoring System</h1>
      <p className="mt-4 text-lg text-gray-600">
        Monitor patients' health metrics in real-time with advanced AI and IoT technologies.
      </p>
      <div className="mt-8">
        <a
          href="/dashboard"
          className="bg-indigo-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-indigo-700"
        >
          Get Started
        </a>
      </div>
    </div>
  </div>
);

export default Hero;