import { ReactNebula } from "@flodlc/nebula";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

const NebulaBackground = () => {
  const customConfig = {
    starsCount: 300,
    starsColor: "#FFFFFF",
    starsRotationSpeed: 1.3,
    cometFrequence: 7,
    nebulasIntensity: 13,
    bgColor: "rgb(8,8,8)",
    sunScale: 2.5,
    planetsScale: 1.4,
    solarSystemOrbite: 100,
    solarSystemSpeedOrbit: 20,
  };

  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    customConfig.cometFrequence = 0;
    customConfig.solarSystemSpeedOrbit = 0;
    customConfig.starsRotationSpeed = 0;
  } else {
    customConfig.cometFrequence = 7;
    customConfig.solarSystemSpeedOrbit = 20;
    customConfig.starsRotationSpeed = 1.3;
  }

  return (
    <div className="nebula-background">
      <ReactNebula config={customConfig} />
    </div>
  );
};

export default NebulaBackground;
