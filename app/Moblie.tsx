import { useRouter } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MOBILE_GIGS = [
  {
    title: "React Native Delivery App",
    client: "FoodRush Sialkot",
    budget: "PKR 18,000",
    duration: "4 weeks",
    skills: ["React Native", "Expo", "Firebase"],
    level: "Advanced",
    platform: "iOS & Android",
  },
  {
    title: "Flutter POS App for Shop",
    client: "Al-Hamd Electronics",
    budget: "PKR 10,000",
    duration: "2 weeks",
    skills: ["Flutter", "Dart", "SQLite"],
    level: "Intermediate",
    platform: "Android",
  },
  {
    title: "Attendance Tracker App",
    client: "SKT College of Tech",
    budget: "PKR 7,500",
    duration: "10 days",
    skills: ["React Native", "AsyncStorage"],
    level: "Beginner",
    platform: "Android",
  },
  {
    title: "Inventory Management App",
    client: "Sardar Exports",
    budget: "PKR 14,000",
    duration: "3 weeks",
    skills: ["Flutter", "REST API"],
    level: "Intermediate",
    platform: "iOS & Android",
  },
];

const LEVEL_COLOR: Record<string, string> = {
  Beginner: "#4CAF50",
  Intermediate: "#FFC107",
  Advanced: "#FF5722",
};

export default function Moblie() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <View style={{ flex: 1, marginLeft: 12 }}>
          <Text style={styles.headerTitle}>📱 Mobile Gigs</Text>
          <Text style={styles.headerSub}>
            {MOBILE_GIGS.length} opportunities in Sialkot
          </Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.body}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.infoBanner}>
          <Text style={styles.infoText}>
            📲 Local businesses are going digital. Build iOS & Android apps for
            Sialkots thriving trade industry and grow your portfolio!
          </Text>
        </View>

        {MOBILE_GIGS.map((gig, i) => (
          <View key={i} style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>{gig.title}</Text>
              <View
                style={[
                  styles.levelBadge,
                  { borderColor: LEVEL_COLOR[gig.level] },
                ]}
              >
                <Text
                  style={[styles.levelText, { color: LEVEL_COLOR[gig.level] }]}
                >
                  {gig.level}
                </Text>
              </View>
            </View>

            <Text style={styles.clientText}>👤 {gig.client}</Text>

            <View style={styles.platformRow}>
              <Text style={styles.platformEmoji}>📲</Text>
              <Text style={styles.platformText}>{gig.platform}</Text>
            </View>

            <View style={styles.skillsRow}>
              {gig.skills.map((s) => (
                <View key={s} style={styles.skillChip}>
                  <Text style={styles.skillText}>{s}</Text>
                </View>
              ))}
            </View>

            <View style={styles.cardFooter}>
              <View>
                <Text style={styles.budgetLabel}>Budget</Text>
                <Text style={styles.budgetVal}>{gig.budget}</Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Text style={styles.budgetLabel}>Timeline</Text>
                <Text style={styles.durationVal}>⏱ {gig.duration}</Text>
              </View>
              <TouchableOpacity style={styles.applyBtn}>
                <Text style={styles.applyText}>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#02241b" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#0B3B2E",
    borderBottomWidth: 1,
    borderBottomColor: "#14503e",
  },
  backBtn: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: "#14503e",
    justifyContent: "center",
    alignItems: "center",
  },
  backArrow: { color: "#14B8A6", fontSize: 18, fontWeight: "700" },
  headerTitle: { color: "#fff", fontSize: 18, fontWeight: "800" },
  headerSub: { color: "#a0bfb5", fontSize: 12, marginTop: 2 },

  body: { padding: 16, paddingBottom: 40 },

  infoBanner: {
    backgroundColor: "#0f4a38",
    borderRadius: 14,
    padding: 14,
    marginBottom: 18,
    borderLeftWidth: 3,
    borderLeftColor: "#14B8A6",
  },
  infoText: { color: "#a0bfb5", fontSize: 13, lineHeight: 20 },

  card: {
    backgroundColor: "#103C33",
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#1e5e4a",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  cardTitle: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
    flex: 1,
    marginRight: 10,
  },
  levelBadge: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  levelText: { fontSize: 11, fontWeight: "700" },

  clientText: { color: "#a0bfb5", fontSize: 12, marginTop: 8 },

  platformRow: { flexDirection: "row", alignItems: "center", marginTop: 8 },
  platformEmoji: { fontSize: 13, marginRight: 4 },
  platformText: {
    color: "#14B8A6",
    fontSize: 12,
    fontWeight: "600",
    backgroundColor: "#0a2e24",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#1e5e4a",
  },

  skillsRow: { flexDirection: "row", flexWrap: "wrap", marginTop: 10, gap: 6 },
  skillChip: {
    backgroundColor: "#0a2e24",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: "#1e5e4a",
  },
  skillText: { color: "#14B8A6", fontSize: 11, fontWeight: "600" },

  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 14,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#1e5e4a",
  },
  budgetLabel: { color: "#a0bfb5", fontSize: 11 },
  budgetVal: {
    color: "#4CAF50",
    fontWeight: "800",
    fontSize: 16,
    marginTop: 2,
  },
  durationVal: { color: "#fff", fontWeight: "600", fontSize: 13, marginTop: 2 },
  applyBtn: {
    backgroundColor: "#14B8A6",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
  },
  applyText: { color: "#0B3B2E", fontWeight: "800", fontSize: 13 },
});
