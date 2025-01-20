import Image from 'next/image';

const PatientOverviewCard = ({ name, age, status, lastCheckup, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
    <Image src={icon} alt="Patient Icon" width={50} height={50} />
    <div className="ml-4">
      <h2 className="text-2xl font-bold text-foreground">{name}</h2>
      <p className="text-gray-600">Age: {age}</p>
      <p className={`text-sm mt-2 ${status === 'Critical' ? 'text-red-600' : 'text-green-600'}`}>
        Status: {status}
      </p>
      <p className="text-gray-400 mt-2">Last Checkup: {lastCheckup}</p>
    </div>
  </div>
);

export default PatientOverviewCard;