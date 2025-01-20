import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HealthMetricCard from '@/components/HealthMetricCard';
import PatientOverviewCard from '@/components/PatientOverviewCard';

const PatientDetail = ({ patient }) => {
  const router = useRouter();
  const { id } = router.query;

  if (!patient) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="p-4 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-4">{patient.name}</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600">Age: {patient.age}</p>
          <p className={`text-sm mt-2 ${patient.status === 'Critical' ? 'text-red-600' : 'text-green-600'}`}>
            Status: {patient.status}
          </p>
          <p className="text-gray-400 mt-2">Last Checkup: {patient.lastCheckup}</p>
        </div>
        <h2 className="text-xl font-bold mt-8 mb-4">Health Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <HealthMetricCard title="Heart Rate" value={patient.heartRate} unit="bpm" icon="/icons/heart-rate-icon.png" />
          <HealthMetricCard title="Blood Pressure" value={patient.bloodPressure} unit="mmHg" icon="/icons/blood-pressure-icon.png" />
          <HealthMetricCard title="Temperature" value={patient.temperature} unit="°F" icon="/icons/temperature-icon.png" />
          <HealthMetricCard title="Respiratory Rate" value={patient.respiratoryRate} unit="breaths/min" icon="/icons/respiratory-rate-icon.png" />
          {/* Add more health metric cards here */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;

  // Fetch patient data from your API or database
  const res = await fetch(`https://your-api-endpoint/patients/${id}`);
  const patient = await res.json();

  return {
    props: {
      patient,
    },
  };
}

export default PatientDetail;