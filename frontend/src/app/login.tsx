
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const router = useRouter();

  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleAuth = () => {
    setError("");
    setMessage("");

    if (isSignup && !fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    if (password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    setMessage(
      "Authentication will be connected to the backend soon."
    );
  };

  const switchAuthMode = () => {
    setIsSignup((previous) => !previous);
    setError("");
    setMessage("");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Pressable onPress={() => router.back()}>
            <Text style={styles.back}>← Back</Text>
          </Pressable>

          <View style={styles.brand}>
            <Text style={styles.logo}>WANDER</Text>
            <Text style={styles.tagline}>
              EXPLORE BEYOND THE ORDINARY
            </Text>
          </View>

          <Text style={styles.heading}>
            {isSignup
              ? "Create your account."
              : "Your next adventure starts here."}
          </Text>

          <Text style={styles.description}>
            Discover places, experiences and journeys made for you.
          </Text>

          <View style={styles.form}>
            {isSignup && (
              <>
                <Text style={styles.label}>FULL NAME</Text>

                <TextInput
                  style={styles.input}
                  placeholder="Enter your name"
                  placeholderTextColor="#A0AAA1"
                  value={fullName}
                  onChangeText={(text) => {
                    setFullName(text);
                    setError("");
                  }}
                  autoCapitalize="words"
                />
              </>
            )}

            <Text style={styles.label}>EMAIL ADDRESS</Text>

            <TextInput
              style={styles.input}
              placeholder="you@example.com"
              placeholderTextColor="#A0AAA1"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                setError("");
              }}
            />

            <Text style={styles.label}>PASSWORD</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="#A0AAA1"
              secureTextEntry
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                setError("");
              }}
            />

            <Pressable
              style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed,
              ]}
              onPress={handleAuth}
            >
              <Text style={styles.buttonText}>
                {isSignup ? "Create account →" : "Login →"}
              </Text>
            </Pressable>

            {error ? (
              <Text style={styles.error}>{error}</Text>
            ) : null}

            {message ? (
              <Text style={styles.message}>{message}</Text>
            ) : null}

            <View style={styles.switchRow}>
              <Text style={styles.switchText}>
                {isSignup
                  ? "Already have an account? "
                  : "New to Wander? "}
              </Text>

              <Pressable onPress={switchAuthMode}>
                <Text style={styles.link}>
                  {isSignup ? "Login" : "Sign up"}
                </Text>
              </Pressable>
            </View>
          </View>

          <Text style={styles.footer}>
            YOUR JOURNEY. YOUR STORIES. YOUR WORLD.
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8F9F5",
  },

  container: {
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingTop: 25,
    paddingBottom: 30,
  },

  back: {
    color: "#234B36",
    fontSize: 15,
    fontWeight: "600",
  },

  brand: {
    alignItems: "center",
    marginTop: 40,
  },

  logo: {
    color: "#234B36",
    fontSize: 27,
    fontWeight: "800",
    letterSpacing: 6,
  },

  tagline: {
    color: "#718174",
    fontSize: 9,
    letterSpacing: 2,
    marginTop: 7,
  },

  heading: {
    color: "#203B2C",
    fontSize: 34,
    fontWeight: "700",
    lineHeight: 42,
    marginTop: 65,
  },

  description: {
    color: "#78847B",
    fontSize: 14,
    lineHeight: 22,
    marginTop: 12,
  },

  form: {
    marginTop: 35,
  },

  label: {
    color: "#526456",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1.5,
    marginBottom: 10,
    marginTop: 20,
  },

  input: {
    height: 54,
    borderWidth: 1,
    borderColor: "#E0E7DE",
    borderRadius: 12,
    paddingHorizontal: 16,
    color: "#203B2C",
    fontSize: 14,
    backgroundColor: "#FFFFFF",
  },

  button: {
    height: 56,
    backgroundColor: "#234B36",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
  },

  buttonPressed: {
    opacity: 0.85,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },

  error: {
    color: "#C0392B",
    fontSize: 12,
    marginTop: 12,
    textAlign: "center",
  },

  message: {
    color: "#234B36",
    fontSize: 12,
    marginTop: 12,
    textAlign: "center",
  },

  switchRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
  },

  switchText: {
    color: "#78847B",
    fontSize: 13,
  },

  link: {
    color: "#234B36",
    fontSize: 13,
    fontWeight: "700",
  },

  footer: {
    color: "#A0AAA1",
    fontSize: 9,
    letterSpacing: 1.5,
    textAlign: "center",
    marginTop: 45,
  },
});
