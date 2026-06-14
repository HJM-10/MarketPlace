import { useRouter } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const REPAIR_GIGS = [
  {
    title: "Mobile Phone Screen Replacement",
    client: "Walk-In Customers",
    budget: "PKR 800 – 2,000",
    duration: "Same Day",
    skills: ["Hardware", "Soldering", "iOS/Android"],
    level: "Beginner",
    location: "Sialkot City Centre",
  },
  {
    title: "Laptop Hardware Repair & Upgrade",
    client: "SKT University Students",
    budget: "PKR 1,500 – 4,000",
    duration: "1–2 days",
    skills: ["Laptop Repair", "RAM/SSD Upgrade"],
    level: "Intermediate",
    location: "University Campus Area",
  },
  {
    title: "CCTV Installation & Setup",
    client: "Anwar Brothers Factory",
    budget: "PKR 5,000",
    duration: "1 day",
    skills: ["Networking", "CCTV", "Wiring"],
    level: "Intermediate",
    location: "Industrial Estate",
  },
  {
    title: "Network & WiFi Setup",
    client: "Small Offices & Shops",
    budget: "PKR 1,200 – 2,500",
    duration: "Half Day",
    skills: ["Networking", "Router Config"],
    level: "Beginner",
    location: "Sialkot City",
  },
  {
    title: "PC Assembling & OS Installation",
    client: "General Public",
    budget: "PKR 1,000 – 3,000",
    duration: "Same Day",
    skills: ["PC Build", "Windows", "Linux"],
    level: "Beginner",
    location: "Flexible / On-site",
  },
];

const LEVEL_COLOR: Record<string, string> = {
  Beginner: "#4CAF50",
  Intermediate: "#FFC107",
  Advanced: "#FF5722",
};

export default function Repair() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <View style={{ flex: 1, marginLeft: 12 }}>
          <Text style={styles.headerTitle}>🔧 Repair Gigs</Text>
          <Text style={styles.headerSub}>
            {REPAIR_GIGS.length} opportunities in Sialkot
          </Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.body}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.infoBanner}>
          <Text style={styles.infoText}>
            🛠️ Put your technical skills to use! Fix phones, set up networks,
            and assemble PCs for local businesses and residents.
          </Text>
        </View>

        {REPAIR_GIGS.map((gig, i) => (
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

            <View style={styles.locationRow}>
              <Text style={styles.locationText}>📍 {gig.location}</Text>
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
                <Text style={styles.budgetLabel}>Earning</Text>
                <Text style={styles.budgetVal}>{gig.budget}</Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Text style={styles.budgetLabel}>Time</Text>
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

  locationRow: { marginTop: 6 },
  locationText: { color: "#a0bfb5", fontSize: 12 },

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
    fontSize: 15,
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
