
import { useRouter } from "expo-router";
import { VideoView, useVideoPlayer } from "expo-video";
import { useEffect, useRef } from "react";
import {
  Animated,
  PanResponder,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

export default function WelcomeScreen() {
  const router = useRouter();
  const { width, height } = useWindowDimensions();

  // Select video based on screen size
  const videoSource =
    Platform.OS === "web" && width >= 768
      ? require("../../assets/videos/mountain-desktop.mp4")
      : require("../../assets/videos/mountain-welcome.mp4");

  // Video player configuration
  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.muted = true;
  });

  // Start video when ready
  useEffect(() => {
    const subscription = player.addListener(
      "statusChange",
      ({ status }) => {
        if (status === "readyToPlay") {
          player.play();
        }
      }
    );

    if (player.status === "readyToPlay") {
      player.play();
    }

    return () => subscription.remove();
  }, [player]);

  // Animated swipe arrow
  const arrowPosition = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(arrowPosition, {
          toValue: 10,
          duration: 650,
          useNativeDriver: true,
        }),
        Animated.timing(arrowPosition, {
          toValue: 0,
          duration: 650,
          useNativeDriver: true,
        }),
      ])
    );

    animation.start();

    return () => animation.stop();
  }, [arrowPosition]);

  // Navigate to login
  const openLogin = () => {
    router.replace("/login");
  };

  // Detect swipe-up gesture
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gesture) =>
        gesture.dy < -12 &&
        Math.abs(gesture.dy) > Math.abs(gesture.dx),

      onPanResponderRelease: (_, gesture) => {
        if (gesture.dy < -65) {
          openLogin();
        }
      },
    })
  ).current;

  return (
    <View
      style={[styles.container, { width, height }]}
      {...panResponder.panHandlers}
    >
      <StatusBar hidden />

      {/* Full-screen background video */}
      <VideoView
        player={player}
        style={styles.backgroundVideo}
        contentFit="cover"
        nativeControls={false}
        allowsPictureInPicture={false}
      />

      {/* Dark overlay and welcome content */}
      <View style={styles.overlay} pointerEvents="box-none">
        <View style={styles.topContent}>
          <Text style={styles.brand}>WANDER</Text>

          <Text style={styles.brandSub}>
            YOUR JOURNEY, YOUR WAY
          </Text>
        </View>

        <View style={styles.bottomContent}>
          <Text style={styles.heading}>
            The world is{"\n"}waiting for you.
          </Text>

          <Text style={styles.description}>
            Discover places. Find your way.{"\n"}
            Make every journey unforgettable.
          </Text>

          <Pressable
            style={styles.swipeContainer}
            onPress={openLogin}
          >
            <Animated.View
              style={{
                transform: [{ translateY: arrowPosition }],
              }}
            >
              <Text style={styles.arrow}>↑</Text>
            </Animated.View>

            <Text style={styles.swipeText}>
              {Platform.OS === "web"
                ? "CLICK OR SWIPE UP TO EXPLORE"
                : "SWIPE UP TO EXPLORE"}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#14251C",
    overflow: "hidden",
  },

  backgroundVideo: {
    ...StyleSheet.absoluteFill,
    width: "100%",
    height: "100%",
  },

  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(0, 0, 0, 0.30)",
    justifyContent: "space-between",
    paddingHorizontal: 28,
    paddingTop: Platform.OS === "web" ? 65 : 45,
    paddingBottom: Platform.OS === "web" ? 35 : 25,
  },

  topContent: {
    alignItems: "center",
  },

  brand: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "800",
    letterSpacing: 7,
  },

  brandSub: {
    color: "#E5EDE6",
    fontSize: 9,
    letterSpacing: 3,
    marginTop: 8,
  },

  bottomContent: {
    alignItems: "center",
    paddingHorizontal: 10,
  },

  heading: {
    color: "#FFFFFF",
    fontSize: 37,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 45,
  },

  description: {
    color: "#F0F2EE",
    fontSize: 14,
    lineHeight: 23,
    textAlign: "center",
    marginTop: 15,
  },

  swipeContainer: {
    alignItems: "center",
    marginTop: 35,
    padding: 12,
  },

  arrow: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "300",
  },

  swipeText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "600",
    letterSpacing: 2,
    marginTop: 8,
    textAlign: "center",
  },
});
