import Image from 'next/image';

const AlertNotificationCard = ({ alertType, message, time, icon }) => (
  <div className="bg-red-100 p-4 rounded-lg shadow-md flex items-center">
    <Image src={icon} alt="Alert Icon" width={50} height={50} />
    <div className="ml-4">
      <h2 className="text-lg font-semibold text-red-600">{alertType}</h2>
      <p className="text-gray-600">{message}</p>
      <p className="text-gray-400 text-sm mt-1">{time}</p>
    </div>
  </div>
);

export default AlertNotificationCard;