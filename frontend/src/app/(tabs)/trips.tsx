import SectionScreen from "../../components/SectionScreen";

export default function TripsScreen() {
  return (
    <SectionScreen
      emoji="🎒"
      title="My Trips"
      subtitle="Keep your travel plans in one place."
      features={[
        "Upcoming journeys",
        "Saved destinations",
        "Travel itineraries",
        "Past trips",
      ]}
    />
  );
}