# 🚀 3D Smart City

## 🌍 Overview

The **3D AI-Powered Smart City Dashboard** is an advanced full-stack web application that visualizes real-time environmental and urban data in an interactive 3D environment. This project combines **modern frontend technologies**, **scalable backend architecture**, and **machine learning-based predictions** to simulate a digital twin of a smart city.

The system integrates real-time APIs for weather and air quality, processes the data through a FastAPI backend, and streams updates via WebSockets to a dynamic React-based 3D visualization powered by Three.js.

This project is designed to demonstrate **industry-level skills** in:

* Full-stack development
* Real-time systems
* Data visualization
* Machine learning integration
* Interactive 3D web applications

---

## 🎯 Key Features

### 🌆 3D Smart City Visualization

* Interactive 3D city built using React Three Fiber (Three.js)
* Dynamic building layout with realistic spacing and lighting
* Smooth camera controls with orbit interaction

### 🚗 Real-Time Traffic Simulation

* Vehicles move dynamically across the city grid
* Traffic density visualized using color-coded overlays
* Traffic intensity derived from real-world data proxies

### 🌫️ Air Pollution Visualization

* Pollution levels displayed using dynamic fog effects
* Color-coded AQI levels:

  * 🟢 Low (Good)
  * 🟠 Medium (Moderate)
  * 🔴 High (Severe)

### 📊 Live Dashboard Analytics

* Real-time temperature, AQI, and wind speed display
* Time-series AQI graph using Recharts
* Clean and responsive sidebar UI

### 🤖 AI-Based AQI Prediction

* Machine learning model predicts future AQI values
* Uses Linear Regression for time-series forecasting
* Displays predicted AQI trends in a chart

### 🔌 Real-Time Data Streaming

* WebSocket-based live updates
* Backend fetches data every few seconds
* Seamless frontend updates without refresh

### 🔐 Basic Authentication (Frontend)

* Simple login system for UI access control
* Token-based session handling

### 🗺️ Map Integration

* Embedded map view for geographic context
* Positioned alongside 3D visualization

---

## 🏗️ Architecture

The system follows a modular full-stack architecture:

```
Frontend (React + Three.js)
        ↓
WebSocket Connection
        ↓
Backend (FastAPI)
        ↓
External APIs (Weather + AQI)
        ↓
ML Prediction Engine
```

### 🔧 Backend Responsibilities

* Fetch real-time data from APIs
* Process and structure data
* Maintain AQI history
* Generate predictions
* Stream updates via WebSockets

### 🎨 Frontend Responsibilities

* Render 3D city environment
* Visualize real-time data
* Display analytics dashboard
* Handle user interaction

---

## 🛠️ Tech Stack

### 🔹 Frontend

* React.js (Vite)
* Three.js / React Three Fiber
* Drei (3D helpers)
* Recharts (data visualization)
* CSS / Inline styling

### 🔹 Backend

* FastAPI (Python)
* WebSockets (real-time communication)
* Requests (API integration)

### 🔹 Machine Learning

* NumPy
* Scikit-learn (Linear Regression)

### 🔹 APIs

* OpenWeather API (Weather + Air Pollution)

---

## 📁 Project Structure

### 🔙 Backend

```
smart-city-backend/
│
├── app/
│   ├── main.py
│   ├── api/
│   ├── services/
│   │     ├── fetch_service.py
│   │     ├── predict_service.py
│   ├── websocket/
│         ├── manager.py
│
├── .env
├── requirements.txt
```

### 🎨 Frontend

```
smart-city-frontend/
│
├── src/
│   ├── components/
│   │     ├── City.jsx
│   │     ├── Dashboard.jsx
│   │     ├── Building.jsx
│   │     ├── Vehicle.jsx
│   │     ├── MapView.jsx
│   │     ├── Login.jsx
│   │
│   ├── hooks/
│   │     ├── useWebSocket.js
│   │
│   ├── App.jsx
│   ├── main.jsx
```

---

## ⚙️ Installation & Setup

### 🔹 Clone Repository

```bash
git clone https://github.com/your-username/smart-city-dashboard.git
cd smart-city-dashboard
```

---

## 🖥️ Backend Setup

```bash
cd smart-city-backend

python -m venv venv
venv\Scripts\activate   # Windows

pip install -r requirements.txt
```

### 🔑 Create `.env`

```
OPENWEATHER_API_KEY=your_api_key_here
```

### ▶️ Run Backend

```bash
uvicorn app.main:app --reload
```

---

## 🌐 Frontend Setup

```bash
cd smart-city-frontend

npm install
npm run dev
```

---

## 🔗 API Endpoints

### REST APIs

* `/weather?lat=&lon=`
* `/pollution?lat=&lon=`

### WebSocket

```
ws://127.0.0.1:8000/ws?lat=17.3850&lon=78.4867
```

---

## 🤖 AI Prediction Logic

The prediction system uses a **Linear Regression model** to forecast AQI values.

### Steps:

1. Collect AQI history (last N values)
2. Train regression model
3. Predict next 5 values
4. Send predictions to frontend

This provides:

* Trend awareness
* Future pollution estimation
* Decision-making insights

---

## 📊 Visualization Features

* 📈 AQI Trend Graph
* 🔮 AQI Prediction Chart
* 🌡️ Temperature Indicator
* 🌬️ Wind Speed Monitoring
* 🌫️ Pollution Fog Rendering
* 🚗 Moving Traffic Simulation

---

## 🚀 Future Enhancements

* 🌍 Mapbox integration with real maps
* 🧠 Advanced ML models (LSTM, Prophet)
* 🗄️ PostgreSQL database integration
* 🔐 JWT Authentication (Backend)
* ☁️ Cloud deployment (AWS / Render / Vercel)
* 📱 Mobile responsiveness
* 📡 IoT sensor data integration

---

## 💡 Use Cases

* Smart city monitoring systems
* Environmental data analysis
* Urban planning tools
* Educational simulations
* Data visualization platforms

---

## 🧠 Learning Outcomes

This project demonstrates:

* Real-time system design
* WebSocket communication
* 3D rendering in web apps
* API integration
* Machine learning basics
* Full-stack architecture

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch
3. Make changes
4. Submit a pull request

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Sarla Bharath Chandra**

* GitHub: https://github.com/sarlabharath552
* LinkedIn: https://www.linkedin.com/in/sarla-bharath-chandra-4903492b6/

---

## ⭐ Support

If you found this project helpful:

* ⭐ Star the repository
* 🔗 Share with others
* 💬 Provide feedback

---

## 🚀 Final Note

This project represents a step toward building **next-generation intelligent systems** by combining real-time data, 3D visualization, and AI-driven insights.

It showcases not just coding ability, but **system thinking, design, and innovation** — the core qualities of a modern software engineer.
