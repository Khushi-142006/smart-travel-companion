import SectionScreen from "../../components/SectionScreen";

export default function SafetyScreen() {
  return (
    <SectionScreen
      emoji="🛡️"
      title="Travel Safety"
      subtitle="Your safety matters throughout the journey."
      features={[
        "Emergency SOS",
        "Trusted emergency contacts",
        "Safety check-ins",
        "Location sharing",
      ]}
    />
  );
}