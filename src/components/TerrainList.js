import React, { useState, useEffect } from "react";

export default function TerrainList() {
  const url = "http://admin.iik-luumha.com/api/terrainapi";
  const [terrain, setTerrain] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    console.log(response.status);
    const responseJSON = await response.json();
    setTerrain(responseJSON);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="w-full h-screen bg-masterplan">
      {!terrain
        ? "Cargando..."
        : terrain.map((terrain, index) => {
            return <div></div>;
          })}
    </div>
  );
}
