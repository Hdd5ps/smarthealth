# Smart Health Monitoring System

#### Video Demo: [URL HERE]

#### Description:
The Smart Health Monitoring System is a web application designed to monitor patients' health metrics in real-time using Azure Cognitive Services and IoT devices. The system collects data from wearable devices, uses Azure Anomaly Detector to identify unusual health patterns, and provides real-time alerts to healthcare providers.

## Features
- **Real-time Data Collection**: Collects health metrics such as heart rate, blood pressure, and temperature from wearable devices.
- **Anomaly Detection**: Uses Azure Anomaly Detector to identify unusual health patterns.
- **Alerts and Notifications**: Provides real-time alerts to healthcare providers for immediate action.
- **Patient Dashboard**: Displays an overview of all monitored patients with detailed health metrics.
- **Patient Detail Page**: Shows detailed health history and current status for individual patients.
- **Settings and Configuration**: Allows management of devices, users, and system settings.

## Technologies Used
- **Front-End**: Next.js, React, Tailwind CSS
- **Back-End**: Node.js, Express, Vercel Serverless Functions
- **Azure Services**: Azure Cognitive Services, Azure IoT Hub
- **Other**: Chart.js for data visualization

## Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd smart-health-monitoring-system
Install Dependencies:

npm install
Set Up Environment Variables: Create a .env.local file in the root directory and add your Azure and other API keys:

AZURE_ANOMALY_DETECTOR_KEY=your-azure-anomaly-detector-key
AZURE_IOT_HUB_CONNECTION_STRING=your-azure-iot-hub-connection-string
Run the Development Server:

npm run dev
Open http://localhost:3000 to view it in the browser.

Usage
Dashboard: View real-time health metrics and alerts.
Patient Detail: Click on a patient in the dashboard to view detailed health information.
Settings: Manage devices and user settings from the settings page.
Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

License
This project is licensed under the MIT License.

Acknowledgements
CS50x for providing the course framework.
Azure Cognitive Services for anomaly detection.
Figma for design inspiration.