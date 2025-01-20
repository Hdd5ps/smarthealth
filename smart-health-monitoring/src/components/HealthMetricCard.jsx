import Image from 'next/image';

const HealthMetricCard = ({ title, value, unit, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
    <Image src={icon} alt={title} width={50} height={50} />
    <div className="ml-4">
      <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      <p className="text-gray-600">{value} {unit}</p>
    </div>
  </div>
);

export default HealthMetricCard;