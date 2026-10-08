# FastShip-r 🚚

> High-throughput asynchronous delivery management & logistics platform built with FastAPI, Celery distributed task queues, Redis, and React.

## 📌 Overview
**FastShip-r** is a full-stack, distributed logistics and order delivery system designed to handle concurrent dispatch requests, real-time status updates, and asynchronous background worker processing. It bridges modern fast API routing with decoupled task execution for production-grade reliability.

## 🛠️ Architecture & Tech Stack
- **Backend:** [FastAPI](https://fastapi.tiangolo.com/) (Python asynchronous RESTful APIs)
- **Task Queue & Workers:** [Celery](https://docs.celeryq.dev/) for distributed background job processing
- **Message Broker & Cache:** [Redis](https://redis.io/)
- **Database:** [PostgreSQL](https://www.postgresql.org/) (Relational order tracking & transactional integrity)
- **Frontend:** [React](https://react.dev/) client dashboard
- **Containerization:** Docker & Docker Compose support

## 🚀 Key Features
- **Async API Endpoints:** Low-latency route creation, shipment tracking, and order assignment.
- **Decoupled Background Tasks:** Heavy dispatch computations and status transitions delegated via Celery workers to avoid blocking the main server thread.
- **Persistent Data Store:** Relational PostgreSQL schemas for tracking deliveries, couriers, and state histories.
- **Interactive UI:** Real-time visibility into active delivery tasks and fulfillment stages.

## ⚙️ Quick Start

### 1. Prerequisites
- Python 3.10+
- Node.js & npm
- PostgreSQL & Redis (or Docker)

### 2. Backend Setup
```bash
cd backend
python -m venv venv
# On Windows:
.\venv\Scripts\activate
# On Linux/macOS:
source venv/bin/activate

pip install -r requirements.txt
```
Configure your environment:
```bash
cp .env.example .env # Update with database credentials & Redis URL
```

Run FastAPI server:
```bash
uvicorn app.main:app --reload --port 8000
```

Start Celery Worker:
```bash
celery -A app.worker worker --loglevel=info
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev # or npm start
```

## 📄 License
MIT License
