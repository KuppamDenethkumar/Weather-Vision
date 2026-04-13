# 🌦️ Weather Vision Pro (React)

A modern, responsive weather application built using React that provides real-time weather updates, 5-day forecasts, dynamic UI changes, and location-based services.

---

## 🚀 Features

* 🌍 **Auto Location Detection (GPS)**
* 🔍 **Search Weather by City**
* 🌄 **Dynamic Background (Changes based on weather)**
* 🎬 **Animated Rain Effect**
* 📅 **5-Day Weather Forecast**
* 📍 **Interactive Map Integration (Leaflet)**
* 📱 **Mobile Responsive UI**
* 🧊 **Glassmorphism Design**

---

## 🛠️ Technologies Used

* ⚛️ **React.js** – Frontend framework
* 🌐 **OpenWeatherMap API** – Weather data
* 🗺️ **Leaflet.js** – Map integration
* 📡 **Axios** – API requests
* 🎨 **CSS3** – Styling and animations
* 🌄 **Unsplash Images** – Background visuals

---

## 📂 Project Structure

```
weather-pro/
│
├── public/
├── src/
│   ├── components/
│   │   ├── Search.js
│   │   ├── WeatherCard.js
│   │   ├── Forecast.js
│   │   └── MapView.js
│   │
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── package.json
└── README.md
```

---

## ⚙️ How It Works

1. On load, the app fetches your **current location weather using GPS**
2. Users can **search any city manually**
3. Weather data is fetched using **OpenWeatherMap API**
4. UI updates dynamically:

   * 🌧 Rain → Rain background + animation
   * ☀ Hot → Sunny background
   * ☁ Cloud → Cloudy background
5. Displays:

   * Current weather 🌡️
   * 5-day forecast 📅
   * Location on map 📍

---

## ▶️ How to Run Locally

```bash
npm install
npm start
```

---

## 🌐 Future Improvements

* 🌙 Dark / Light mode toggle
* 📊 Weather charts (temperature trends)
* 🌍 Multi-city comparison
* ⚛️ Backend API integration for secure key storage

---

## 💡 Key Learnings

* React component architecture
* API integration & async handling
* State-based UI rendering
* Responsive design
* Third-party library integration (Leaflet)

---

## 👨‍💻 Author

Developed by **Deneth Kumar**

---

## ⭐ If you like this project

Give it a ⭐ on GitHub!
