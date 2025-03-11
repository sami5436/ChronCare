# ChronCare

ChronCare is a full-stack health management application designed to assist individuals with Crohn's Disease by tracking symptoms, medications, and doctor visits. The platform consists of a React-based frontend, an Express.js backend, and a MongoDB database, all integrated with a robust CI/CD pipeline.

## Project Directory Structure

```
ChronCare/
│── .github/workflows/       # CI/CD workflows for GitHub Actions
│── backend/                 # Node.js (Express) backend API
│── frontend/                # React frontend (initialized using Vite)
│── infra/terraform/         # Infrastructure as Code (Terraform)
│── monitoring/              # Future monitoring setup (Grafana, Prometheus)
│── README.md                # Project documentation
```

## Technologies Used

| Technology       | Purpose                                         |
|-----------------|-------------------------------------------------|
| React + Vite    | Frontend framework for a fast, modular UI      |
| Express.js      | Backend framework for handling API requests    |
| MongoDB Atlas   | NoSQL database to store user data securely     |
| Render          | Cloud hosting for the backend API              |
| Vercel          | Deployment platform for the frontend           |
| Docker          | Containerization for backend services          |
| Terraform       | Infrastructure as Code (IaC) for provisioning MongoDB and backend hosting |
| GitHub Actions  | CI/CD automation for deployments               |
| Grafana (Planned) | Monitoring and visualization of backend performance |

## CI/CD Workflow

ChronCare uses GitHub Actions to automate deployments.

### CI/CD Pipeline Overview

1. Push to `master` triggers GitHub Actions
2. Terraform Job:
   - Configures MongoDB (Atlas) and backend (Render)
   - Ensures infrastructure is up to date
3. Backend Job:
   - Builds the backend API with Docker
   - Pushes updates to Render
4. Frontend Job:
   - Installs dependencies
   - Deploys the latest frontend version to Vercel

## Setting Up the Project Locally

### Clone the Repository

```sh
git clone https://github.com/sami5436/ChronCare.git
cd ChronCare
```

### Start the Backend

```sh
cd backend
npm install
npm start
```

### Start the Frontend

```sh
cd frontend
npm install
npm run dev
```

Frontend was initialized using:

```sh
npm create vite@latest my-react-app --template react
```

## Future Improvements

- Implement Grafana and Prometheus for real-time monitoring
- Mobile app support with React Native
- OAuth login for authentication
- Data visualization for user insights


**Live Demo:** [chron-care.vercel.app](https://chron-care.vercel.app)  
Built and maintained by [sami5436](https://github.com/sami5436/)

