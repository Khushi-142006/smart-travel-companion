import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const router = useRouter();
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <Pressable onPress={() => router.back()}>
            <Text style={styles.back}>← Back</Text>
          </Pressable>

          <View style={styles.brand}>
            <Text style={styles.logo}>WANDER</Text>
            <Text style={styles.tagline}>EXPLORE BEYOND THE ORDINARY</Text>
          </View>

          <Text style={styles.heading}>
            {isSignup ? "Create your account." : "Your next adventure starts here."}
          </Text>

          <Text style={styles.description}>
            Discover places, experiences and journeys made for you.
          </Text>

          <View style={styles.form}>
            {isSignup && (
              <>
                <Text style={styles.label}>FULL NAME</Text>
                <TextInput style={styles.input} placeholder="Enter your name" />
              </>
            )}

            <Text style={styles.label}>EMAIL ADDRESS</Text>
            <TextInput
              style={styles.input}
              placeholder="you@example.com"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />

            <Text style={styles.label}>PASSWORD</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <Pressable
              style={styles.button}
              onPress={() => router.replace("/(tabs)")}
            >
              <Text style={styles.buttonText}>
                {isSignup ? "Create account →" : "Login →"}
              </Text>
            </Pressable>

            <View style={styles.switchRow}>
              <Text style={styles.switchText}>
                {isSignup ? "Already have an account? " : "New to Wander? "}
              </Text>
              <Pressable onPress={() => setIsSignup(!isSignup)}>
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
  safeArea: { flex: 1, backgroundColor: "#F8F9F5" },
  container: { flexGrow: 1, paddingHorizontal: 28, paddingTop: 25, paddingBottom: 30 },
  back: { color: "#234B36", fontSize: 15, fontWeight: "600" },
  brand: { alignItems: "center", marginTop: 40 },
  logo: { color: "#234B36", fontSize: 27, fontWeight: "800", letterSpacing: 6 },
  tagline: { color: "#718174", fontSize: 9, letterSpacing: 2, marginTop: 7 },
  heading: { color: "#203B2C", fontSize: 34, fontWeight: "700", lineHeight: 42, marginTop: 65 },
  description: { color: "#78847B", fontSize: 14, lineHeight: 22, marginTop: 12 },
  form: { marginTop: 35 },
  label: { color: "#526456", fontSize: 10, fontWeight: "700", letterSpacing: 1.5, marginBottom: 10, marginTop: 20 },
  input: { height: 54, borderWidth: 1, borderColor: "#E0E7DE", borderRadius: 12, paddingHorizontal: 16, color: "#203B2C", fontSize: 14, backgroundColor: "#FFFFFF" },
  button: { height: 56, backgroundColor: "#234B36", borderRadius: 12, justifyContent: "center", alignItems: "center", marginTop: 32 },
  buttonText: { color: "#FFFFFF", fontSize: 15, fontWeight: "700" },
  switchRow: { flexDirection: "row", justifyContent: "center", marginTop: 25 },
  switchText: { color: "#78847B", fontSize: 13 },
  link: { color: "#234B36", fontSize: 13, fontWeight: "700" },
  footer: { color: "#A0AAA1", fontSize: 9, letterSpacing: 1.5, textAlign: "center", marginTop: 45 },
});
