
import { useMemo, useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const categories = ["All", "Nature", "History", "Waterfalls", "Temples"];

const places = [
  {
    id: "1",
    name: "Belagavi Fort",
    category: "History",
    emoji: "🏰",
    description: "Explore Belagavi's historic fort.",
    tag: "Historical",
  },
  {
    id: "2",
    name: "Gokak Falls",
    category: "Waterfalls",
    emoji: "🌊",
    description: "Discover a scenic waterfall.",
    tag: "Nature escape",
  },
  {
    id: "3",
    name: "Kittur Fort",
    category: "History",
    emoji: "🏛️",
    description: "Discover the history of Kittur.",
    tag: "Heritage",
  },
  {
    id: "4",
    name: "Jamboti Hills",
    category: "Nature",
    emoji: "🌿",
    description: "Explore green landscapes and nature.",
    tag: "Nature",
  },
  {
    id: "5",
    name: "Saundatti Yellamma Temple",
    category: "Temples",
    emoji: "🛕",
    description: "Visit an important regional temple.",
    tag: "Culture",
  },
];

export default function ExploreScreen() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredPlaces = useMemo(() => {
    return places.filter((place) => {
      const matchesCategory =
        selectedCategory === "All" ||
        place.category === selectedCategory;

      const matchesSearch =
        place.name.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, search]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <Text style={styles.eyebrow}>DISCOVER YOUR SURROUNDINGS</Text>
          <Text style={styles.title}>Explore places.</Text>
          <Text style={styles.subtitle}>
            Find experiences worth stepping out for.
          </Text>

          <View style={styles.searchBox}>
            <Text style={styles.searchIcon}>⌕</Text>
            <TextInput
              value={search}
              onChangeText={setSearch}
              placeholder="Search places..."
              placeholderTextColor="#98A39A"
              style={styles.searchInput}
            />
            {search.length > 0 && (
              <Pressable onPress={() => setSearch("")}>
                <Text style={styles.clearText}>Clear</Text>
              </Pressable>
            )}
          </View>

          <Text style={styles.sectionTitle}>Explore by interest</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryList}
          >
            {categories.map((category) => {
              const active = selectedCategory === category;

              return (
                <Pressable
                  key={category}
                  onPress={() => setSelectedCategory(category)}
                  style={[
                    styles.categoryChip,
                    active && styles.activeChip,
                  ]}
                >
                  <Text
                    style={[
                      styles.categoryText,
                      active && styles.activeCategoryText,
                    ]}
                  >
                    {category}
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>

          <View style={styles.resultsHeader}>
            <View>
              <Text style={styles.sectionTitle}>Places to explore</Text>
              <Text style={styles.resultSubtitle}>
                Belagavi and nearby destinations
              </Text>
            </View>
            <Text style={styles.resultCount}>
              {filteredPlaces.length} places
            </Text>
          </View>

          {filteredPlaces.length > 0 ? (
            filteredPlaces.map((place) => (
              <Pressable
                key={place.id}
                style={({ pressed }) => [
                  styles.placeCard,
                  pressed && styles.pressedCard,
                ]}
              >
                <View style={styles.placeArtwork}>
                  <Text style={styles.placeEmoji}>{place.emoji}</Text>
                </View>

                <View style={styles.placeContent}>
                  <Text style={styles.placeName}>{place.name}</Text>
                  <Text style={styles.placeDescription}>
                    {place.description}
                  </Text>
                  <View style={styles.tag}>
                    <Text style={styles.tagText}>{place.tag}</Text>
                  </View>
                </View>

                <Text style={styles.arrow}>›</Text>
              </Pressable>
            ))
          ) : (
            <View style={styles.emptyState}>
              <Text style={styles.emptyEmoji}>🔎</Text>
              <Text style={styles.emptyTitle}>No places found</Text>
              <Text style={styles.emptyText}>
                Try another search or category.
              </Text>
            </View>
          )}

          <Text style={styles.disclaimer}>
            Sample destinations · Live distance, opening hours and crowd
            information will be connected later.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8F9F5",
  },
  container: {
    padding: 22,
    paddingTop: 18,
    paddingBottom: 35,
  },
  eyebrow: {
    color: "#7D927F",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1.5,
  },
  title: {
    color: "#20382B",
    fontSize: 30,
    fontWeight: "800",
    marginTop: 9,
  },
  subtitle: {
    color: "#7A877D",
    fontSize: 13,
    marginTop: 7,
  },
  searchBox: {
    height: 54,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    marginTop: 25,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E9EDE7",
  },
  searchIcon: {
    fontSize: 25,
    color: "#52765A",
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: "#263B2E",
    fontSize: 14,
  },
  clearText: {
    color: "#52765A",
    fontSize: 12,
    fontWeight: "700",
  },
  sectionTitle: {
    color: "#263B2E",
    fontSize: 17,
    fontWeight: "800",
    marginTop: 28,
  },
  categoryList: {
    gap: 9,
    paddingTop: 15,
    paddingBottom: 5,
  },
  categoryChip: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E6EBE4",
    paddingHorizontal: 17,
    paddingVertical: 11,
    borderRadius: 22,
  },
  activeChip: {
    backgroundColor: "#234B36",
    borderColor: "#234B36",
  },
  categoryText: {
    color: "#627066",
    fontSize: 12,
    fontWeight: "600",
  },
  activeCategoryText: {
    color: "#FFFFFF",
  },
  resultsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  resultSubtitle: {
    color: "#8A958B",
    fontSize: 11,
    marginTop: 5,
  },
  resultCount: {
    color: "#52765A",
    fontSize: 11,
    fontWeight: "700",
  },
  placeCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 12,
    marginBottom: 13,
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
  },
  pressedCard: {
    opacity: 0.75,
  },
  placeArtwork: {
    width: 76,
    height: 82,
    borderRadius: 14,
    backgroundColor: "#E9EFE4",
    alignItems: "center",
    justifyContent: "center",
  },
  placeEmoji: {
    fontSize: 32,
  },
  placeContent: {
    flex: 1,
  },
  placeName: {
    color: "#263B2E",
    fontSize: 13,
    fontWeight: "800",
  },
  placeDescription: {
    color: "#849087",
    fontSize: 10,
    marginTop: 6,
    lineHeight: 15,
  },
  tag: {
    alignSelf: "flex-start",
    backgroundColor: "#EFF4EB",
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 7,
    marginTop: 8,
  },
  tagText: {
    color: "#52765A",
    fontSize: 9,
    fontWeight: "700",
  },
  arrow: {
    color: "#52765A",
    fontSize: 25,
    paddingHorizontal: 5,
  },
  emptyState: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 30,
    alignItems: "center",
    marginTop: 10,
  },
  emptyEmoji: {
    fontSize: 30,
  },
  emptyTitle: {
    color: "#263B2E",
    fontSize: 16,
    fontWeight: "700",
    marginTop: 12,
  },
  emptyText: {
    color: "#849087",
    fontSize: 12,
    marginTop: 6,
  },
  disclaimer: {
    color: "#9AA39A",
    fontSize: 10,
    lineHeight: 16,
    textAlign: "center",
    marginTop: 15,
  },
});
