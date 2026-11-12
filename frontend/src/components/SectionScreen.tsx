import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  title: string;
  subtitle: string;
  emoji: string;
  features: string[];
};

export default function SectionScreen({
  title,
  subtitle,
  emoji,
  features,
}: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.emoji}>{emoji}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>

        <View style={styles.card}>
          {features.map((feature, index) => (
            <View key={index} style={styles.featureRow}>
              <Text style={styles.bullet}>✦</Text>
              <Text style={styles.feature}>{feature}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.note}>
          More features coming soon.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8F9F5",
  },
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 55,
  },
  emoji: {
    fontSize: 38,
    marginBottom: 18,
  },
  title: {
    fontSize: 29,
    fontWeight: "800",
    color: "#20382B",
  },
  subtitle: {
    color: "#7A877D",
    fontSize: 14,
    lineHeight: 21,
    marginTop: 9,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 20,
    marginTop: 28,
  },
  featureRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  bullet: {
    color: "#52765A",
    marginRight: 12,
    fontSize: 15,
  },
  feature: {
    color: "#35483A",
    fontSize: 14,
  },
  note: {
    color: "#98A39A",
    fontSize: 12,
    marginTop: 20,
  },
});