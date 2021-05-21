import { ReactComponent as EmergencyIcon } from "./assets/emergency.svg";
function FloatingEmergency() {
  return (
    <div className="emergencyFloating">
      <a href="tel:9526903838">
        <EmergencyIcon />
      </a>
    </div>
  );
}

export default FloatingEmergency;
