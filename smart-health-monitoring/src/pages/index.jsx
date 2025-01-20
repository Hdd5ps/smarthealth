import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HealthMetricCard from '../components/HealthMetricCard';
import PatientOverviewCard from '../components/PatientOverviewCard';
import AlertNotificationCard from '../components/AlertNotificationCard';
import Footer from '../components/Footer';
import { getData } from '../utils/api';

const Dashboard = () => {
  const [metrics, setMetrics] = useState([]);
  const [patients, setPatients] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const metricsData = await getData('metrics');
        const patientsData = await getData('patients');
        const alertsData = await getData('alerts');
        setMetrics(metricsData);
        setPatients(patientsData);
        setAlerts(alertsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="p-4 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Health Monitoring Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {metrics.map((metric) => (
            <HealthMetricCard
              key={metric.id}
              title={metric.title}
              value={metric.value}
              unit={metric.unit}
              icon={metric.icon}
            />
          ))}
        </div>
        <h2 className="text-xl font-bold mt-8 mb-4">Patient Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {patients.map((patient) => (
            <PatientOverviewCard
              key={patient.id}
              name={patient.name}
              age={patient.age}
              status={patient.status}
              lastCheckup={patient.lastCheckup}
              icon={patient.icon}
            />
          ))}
        </div>
        <h2 className="text-xl font-bold mt-8 mb-4">Alerts and Notifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {alerts.map((alert) => (
            <AlertNotificationCard
              key={alert.id}
              alertType={alert.alertType}
              message={alert.message}
              time={alert.time}
              icon={alert.icon}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;