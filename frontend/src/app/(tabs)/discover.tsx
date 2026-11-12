import SectionScreen from "../../components/SectionScreen";

export default function DiscoverScreen() {
  return (
    <SectionScreen
      emoji="✨"
      title="Discover"
      subtitle="Experience a destination like a local."
      features={[
        "Authentic local food",
        "Hidden places and micro-gems",
        "Local markets and events",
        "Travel like a local",
      ]}
    />
  );
}