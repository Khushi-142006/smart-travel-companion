
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  StatusBar,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85",
      }}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safeArea}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />

        {/* Light transparent layer over the background image */}
        <View style={styles.backgroundOverlay}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>

              {/* Header */}
              <View style={styles.header}>
                <View>
                  <Text style={styles.locationLabel}>
                    YOUR LOCATION
                  </Text>
                  <Text style={styles.location}>
                    📍 Belagavi, Karnataka
                  </Text>
                </View>

                <View style={styles.profile}>
                  <Text style={styles.profileText}>K</Text>
                </View>
              </View>

              {/* Greeting */}
              <View style={styles.greeting}>
                <Text style={styles.greetingTitle}>
                  Explore more.
                </Text>
                <Text style={styles.greetingSubtitle}>
                  Make every moment of your journey count.
                </Text>
              </View>

              {/* Right Now Engine - Solid Green Card */}
              <View style={styles.heroCard}>
                <View style={styles.heroTop}>
                  <View style={styles.liveDot} />
                  <Text style={styles.heroLabel}>
                    YOUR RIGHT NOW GUIDE
                  </Text>
                </View>

                <Text style={styles.heroTitle}>
                  What can you do{"\n"}right now?
                </Text>

                <Text style={styles.heroDescription}>
                  Discover places that fit your time, budget and mood.
                </Text>

                <View style={styles.filters}>
                  <View style={styles.filter}>
                    <Text style={styles.filterLabel}>
                      TIME AVAILABLE
                    </Text>
                    <Text style={styles.filterValue}>
                      ⏱  3 hours
                    </Text>
                  </View>

                  <View style={styles.filter}>
                    <Text style={styles.filterLabel}>
                      YOUR BUDGET
                    </Text>
                    <Text style={styles.filterValue}>
                      ₹ 500
                    </Text>
                  </View>
                </View>

                <Pressable style={styles.exploreButton}>
                  <Text style={styles.exploreButtonText}>
                    Find places for me  →
                  </Text>
                </Pressable>
              </View>

              {/* Quick Categories */}
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>
                  Explore your way
                </Text>
                <Text style={styles.seeAll}>See all</Text>
              </View>

              <View style={styles.categories}>
                {[
                  ["🌿", "Nature"],
                  ["🍜", "Food"],
                  ["🏛️", "History"],
                  ["💎", "Hidden gems"],
                ].map(([icon, label]) => (
                  <View style={styles.category} key={label}>
                    <Text style={styles.categoryIcon}>{icon}</Text>
                    <Text style={styles.categoryLabel}>{label}</Text>
                  </View>
                ))}
              </View>

              {/* Recommendations */}
              <View style={styles.sectionHeader}>
                <View>
                  <Text style={styles.sectionTitle}>
                    Worth exploring
                  </Text>
                  <Text style={styles.sectionSubtitle}>
                    Discover something nearby
                  </Text>
                </View>

                <Text style={styles.seeAll}>View all</Text>
              </View>

              <View style={styles.placeCard}>
                <View style={styles.placeImage}>
                  <Text style={styles.placeEmoji}>🏰</Text>
                </View>

                <View style={styles.placeInfo}>
                  <Text style={styles.placeName}>
                    Belagavi Fort
                  </Text>
                  <Text style={styles.placeDetails}>
                    Historical place · Belagavi
                  </Text>
                  <Text style={styles.placeTag}>
                    A place to explore
                  </Text>
                </View>

                <Text style={styles.arrow}>→</Text>
              </View>

              <Text style={styles.disclaimer}>
                Demo preview · Recommendations and figures are not live data yet.
              </Text>

            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  safeArea: {
    flex: 1,
    backgroundColor: "transparent",
  },

  backgroundOverlay: {
    flex: 1,
    backgroundColor: "rgba(248, 249, 245, 0.76)",
  },

  container: {
    paddingHorizontal: 22,
    paddingTop: 12,
    paddingBottom: 35,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  locationLabel: {
    color: "#849087",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1.5,
  },

  location: {
    color: "#23392D",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 5,
  },

  profile: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#E3EBDD",
    alignItems: "center",
    justifyContent: "center",
  },

  profileText: {
    color: "#315B40",
    fontSize: 17,
    fontWeight: "700",
  },

  greeting: {
    marginTop: 35,
    marginBottom: 23,
  },

  greetingTitle: {
    fontSize: 31,
    fontWeight: "800",
    color: "#20382B",
    letterSpacing: -1,
  },

  greetingSubtitle: {
    fontSize: 14,
    color: "#7A877D",
    marginTop: 7,
  },

  /* Solid green Right Now Engine */
  heroCard: {
    backgroundColor: "#234B36",
    borderRadius: 25,
    padding: 22,
  },

  heroTop: {
    flexDirection: "row",
    alignItems: "center",
  },

  liveDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#B6E5A8",
    marginRight: 8,
  },

  heroLabel: {
    color: "#C5D8C9",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1.2,
  },

  heroTitle: {
    color: "#FFFFFF",
    fontSize: 27,
    fontWeight: "800",
    lineHeight: 34,
    marginTop: 22,
  },

  heroDescription: {
    color: "#D0DED3",
    fontSize: 13,
    lineHeight: 20,
    marginTop: 9,
  },

  filters: {
    flexDirection: "row",
    marginTop: 23,
    gap: 10,
  },

  filter: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 13,
    padding: 12,
  },

  filterLabel: {
    color: "#87948A",
    fontSize: 9,
    fontWeight: "700",
  },

  filterValue: {
    color: "#244632",
    fontSize: 14,
    fontWeight: "700",
    marginTop: 7,
  },

  exploreButton: {
    backgroundColor: "#D7E9CB",
    padding: 16,
    borderRadius: 13,
    alignItems: "center",
    marginTop: 17,
  },

  exploreButtonText: {
    color: "#234B36",
    fontSize: 14,
    fontWeight: "800",
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 16,
  },

  sectionTitle: {
    color: "#243A2D",
    fontSize: 19,
    fontWeight: "800",
  },

  sectionSubtitle: {
    color: "#879087",
    fontSize: 12,
    marginTop: 5,
  },

  seeAll: {
    color: "#52765A",
    fontSize: 12,
    fontWeight: "700",
  },

  categories: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  category: {
    alignItems: "center",
    width: "23%",
  },

  categoryIcon: {
    backgroundColor: "#E9EFE4",
    width: 58,
    height: 58,
    borderRadius: 18,
    textAlign: "center",
    textAlignVertical: "center",
    overflow: "hidden",
    fontSize: 24,
  },

  categoryLabel: {
    color: "#536357",
    fontSize: 11,
    fontWeight: "600",
    marginTop: 9,
  },

  placeCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
  },

  placeImage: {
    width: 67,
    height: 67,
    borderRadius: 14,
    backgroundColor: "#E8EEE2",
    alignItems: "center",
    justifyContent: "center",
  },

  placeEmoji: {
    fontSize: 30,
  },

  placeInfo: {
    flex: 1,
  },

  placeName: {
    color: "#263B2E",
    fontSize: 14,
    fontWeight: "800",
  },

  placeDetails: {
    color: "#849087",
    fontSize: 11,
    marginTop: 5,
  },

  placeTag: {
    color: "#52765A",
    fontSize: 10,
    fontWeight: "700",
    marginTop: 7,
  },

  arrow: {
    color: "#52765A",
    fontSize: 21,
  },

  disclaimer: {
    color: "#707C71",
    fontSize: 10,
    textAlign: "center",
    marginTop: 18,
  },
});
