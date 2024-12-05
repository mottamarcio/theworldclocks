Claro! Aqui está o conteúdo do **README.md** para o seu projeto:

---

# **TheWorldClocks**

TheWorldClocks is a web application that displays the current time, date, and location of the user. It also includes a table showing the local time of the 20 most popular cities around the world, along with their time zones.

---

## **Features**

- **Dynamic Time and Date**: Displays the current time and date in real-time.
- **Geolocation**: Automatically detects and displays the user's location and time zone.
- **Popular Cities Table**:
  - Shows the time in 20 major cities worldwide.
  - Displays country flags, capitals, time zones, and current times.
- **Responsive Design**: Fully responsive UI using Bootstrap for a seamless experience across devices.
- **Sort Functionality**: Clickable table headers for sorting by any column (ascending or descending).

---

## **Technologies Used**

- **React**: Frontend framework.
- **TypeScript**: For type-safe development.
- **Vite**: Fast development build tool.
- **Moment-Timezone**: For timezone calculations and formatting.
- **Bootstrap**: For styling and responsiveness.
- **Axios**: For HTTP requests.
- **Google Maps APIs**: For geolocation and time zone data.

---

## **Setup Instructions**

### Prerequisites
- **Node.js** and **Yarn** installed on your system.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/mottamarcio/theworldclocks.git
   cd theworldclocks
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Create a `.env` file in the root directory with your **Google Maps API Key**:
   ```
   VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   ```

4. Start the development server:
   ```bash
   yarn dev
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## **Deployment**

1. Build the project for production:
   ```bash
   yarn build
   ```

2. Deploy the `dist` folder to a hosting service like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).

---

## **Project Structure**

```
src/
├── components/       # React components
│   ├── Clockcard.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── WorldClockTable.tsx
├── data/             # Static data for cities
│   ├── cities.ts
├── api/              # API integrations
│   ├── fetchLocation.ts
├── styles/           # Global and component-specific styles
├── App.tsx           # Main app component
├── main.tsx          # Entry point
```

---

## **Usage**

### **User Features**
- **Current Time and Location**: Displays the current time, date, and location automatically based on the user's geolocation.
- **World Clocks Table**:
  - Displays time for 20 major cities worldwide.
  - Allows sorting by any column for easy comparison.

### **For Developers**
- The app is modular and easy to extend. You can:
  - Add more cities in `src/data/cities.ts`.
  - Customize the UI using Bootstrap or your preferred CSS framework.

---

## **Contributing**

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request on GitHub.

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Acknowledgments**

- [Google Maps APIs](https://developers.google.com/maps)
- [Moment-Timezone](https://momentjs.com/timezone/)
- [Bootstrap](https://getbootstrap.com/)
- Icons from [Emojipedia](https://emojipedia.org/)