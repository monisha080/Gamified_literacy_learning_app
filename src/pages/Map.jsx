// src/pages/Map.jsx
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import indiaStates from "../data/india_states.json";
import { useState } from "react";
import { Landmark } from "lucide-react"; // icon

export default function MapPage() {
  const [selectedState, setSelectedState] = useState(null);

  const onEachState = (feature, layer) => {
    layer.on({
      click: () => {
        setSelectedState(feature.properties);
      },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 px-6 py-10">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent mb-10">
        Interactive India Map – State Specific Laws
      </h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Map */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <MapContainer
            style={{ height: "500px", width: "100%" }}
            center={[22.9734, 78.6569]}
            zoom={4}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <GeoJSON
              data={indiaStates}
              onEachFeature={onEachState}
              style={() => ({
                fillColor: "#6366f1",
                weight: 1,
                color: "white",
                fillOpacity: 0.4,
              })}
            />
          </MapContainer>
        </div>

        {/* Right Panel */}
        <div className="relative bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 flex flex-col justify-center items-center border border-indigo-100">
          {!selectedState ? (
            <div className="text-center space-y-4">
              <Landmark size={60} className="text-indigo-500 mx-auto" />
              <h2 className="text-2xl font-bold text-indigo-700">
                State Law
              </h2>
              <p className="text-gray-600">
                Click on a state to view its law.
              </p>
            </div>
          ) : (
            <div className="w-full space-y-6 text-center">
              <img
                src={`https://flagcdn.com/160x120/in.png`} // placeholder Indian flag
                alt="flag"
                className="mx-auto w-32 h-20 rounded-md shadow-md"
              />
              <h2 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
                {selectedState.name}
              </h2>

              <div className="bg-gradient-to-r from-indigo-50 to-pink-50 p-6 rounded-xl border border-indigo-100 shadow-md">
                <h3 className="text-lg font-bold text-indigo-700 mb-2">
                  State Law / Act
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedState.law}
                </p>
              </div>

              <p className="text-xs text-gray-400">
                Click another state to view its laws.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
