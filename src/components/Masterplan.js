import React from "react";
import MasterplanTitle from "./MasterplanTitle";
import Financiamiento from "./Financiamiento";
import TerrainList from "./TerrainList";

export default function Masterplan() {
  return (
    <div className="flex flex-wrap overflow-hidden" id="masterplan">
      <MasterplanTitle />
      <TerrainList />
      <Financiamiento />
    </div>
  );
}
