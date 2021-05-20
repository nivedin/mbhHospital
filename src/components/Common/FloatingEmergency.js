import { ReactComponent as EmergencyIcon } from "./assets/emergency.svg";
function FloatingEmergency() {
  return (
    <div className="emergencyFloating">
      <a href="tel:04952701084">
        <EmergencyIcon />
      </a>
    </div>
  );
}

export default FloatingEmergency;
