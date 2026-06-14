import { useRouter } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CATEGORIES = [
  { label: "Web", icon: "🌐", route: "/WEB" },
  { label: "Mobile", icon: "📱", route: "/Moblie" },
  { label: "Design", icon: "🎨", route: "/Design" },
  { label: "Repair", icon: "🔧", route: "/Repair" },
];

const FEATURED_GIGS = [
  {
    title: "React Native Developer Needed",
    location: "Sialkot Industrial Estate",
    price: "PKR 5,000",
    per: "Task",
    tag: "Mobile",
    emoji: "📱",
  },
  {
    title: "Logo Design for Sports Brand",
    location: "Sialkot Export City",
    price: "PKR 2,500",
    per: "Project",
    tag: "Design",
    emoji: "🎨",
  },
  {
    title: "E-Commerce Website Setup",
    location: "Cantt. Area, Sialkot",
    price: "PKR 8,000",
    per: "Project",
    tag: "Web",
    emoji: "🌐",
  },
];

export default function App() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Welcome back 👋</Text>
          <Text style={styles.userName}>Huzaifa Jayyad</Text>
          <Text style={styles.studentId}>SKT Uni · ID: 2301820051</Text>
        </View>
        <View style={styles.avatarWrap}>
          <Text style={styles.avatarText}>HJ</Text>
          <View style={styles.onlineDot} />
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollBody}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Banner */}
        <View style={styles.heroBanner}>
          <Text style={styles.heroEmoji}>💼</Text>
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={styles.heroTitle}>Earn While You Learn</Text>
            <Text style={styles.heroSub}>
              Sialkots #1 student freelance marketplace
            </Text>
          </View>
        </View>

        {/* Categories */}
        <Text style={styles.sectionTitle}>Browse Categories</Text>
        <View style={styles.gridContainer}>
          {CATEGORIES.map((cat) => (
            <TouchableOpacity
              key={cat.label}
              style={styles.gridItem}
              activeOpacity={0.75}
              onPress={() => router.push(cat.route as any)}
            >
              <Text style={styles.gridEmoji}>{cat.icon}</Text>
              <Text style={styles.gridText}>{cat.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Featured Gigs */}
        <Text style={styles.sectionTitle}>Featured Gigs</Text>
        {FEATURED_GIGS.map((gig, i) => (
          <View key={i} style={styles.card}>
            <View style={styles.cardRow}>
              <View style={styles.cardEmojiBadge}>
                <Text style={{ fontSize: 24 }}>{gig.emoji}</Text>
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>{gig.title}</Text>
                <Text style={styles.cardLocation}>📍 {gig.location}</Text>
              </View>
              <View style={styles.tagBadge}>
                <Text style={styles.tagText}>{gig.tag}</Text>
              </View>
            </View>
            <View style={styles.cardFooter}>
              <Text style={styles.cardPrice}>
                {gig.price} <Text style={styles.cardPricePer}>/ {gig.per}</Text>
              </Text>
              <TouchableOpacity style={styles.applyBtn}>
                <Text style={styles.applyText}>Apply →</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        {/* Stats Row */}
        <Text style={styles.sectionTitle}>Platform Stats</Text>
        <View style={styles.statsRow}>
          {[
            { val: "120+", label: "Active Gigs" },
            { val: "340+", label: "Students" },
            { val: "PKR 2M+", label: "Paid Out" },
          ].map((s) => (
            <View key={s.label} style={styles.statBox}>
              <Text style={styles.statVal}>{s.val}</Text>
              <Text style={styles.statLabel}>{s.label}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#02241b" },

  /* Header */
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#0B3B2E",
    borderBottomWidth: 1,
    borderBottomColor: "#14503e",
  },
  greeting: { color: "#4CAF50", fontSize: 12, fontWeight: "600" },
  userName: { color: "#fff", fontSize: 20, fontWeight: "800", marginTop: 2 },
  studentId: { color: "#a0bfb5", fontSize: 12, marginTop: 2 },
  avatarWrap: { position: "relative" },
  avatarText: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#14B8A6",
    color: "#0B3B2E",
    fontWeight: "900",
    fontSize: 16,
    textAlign: "center",
    textAlignVertical: "center",
    lineHeight: 46,
  },
  onlineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#4CAF50",
    borderWidth: 2,
    borderColor: "#0B3B2E",
    position: "absolute",
    bottom: 0,
    right: 0,
  },

  /* Scroll body */
  scrollBody: { padding: 20, paddingBottom: 40 },

  /* Hero */
  heroBanner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0f4a38",
    borderRadius: 16,
    padding: 18,
    marginBottom: 24,
    borderLeftWidth: 4,
    borderLeftColor: "#14B8A6",
  },
  heroEmoji: { fontSize: 36 },
  heroTitle: { color: "#fff", fontSize: 17, fontWeight: "800" },
  heroSub: { color: "#a0bfb5", fontSize: 12, marginTop: 4 },

  /* Section title */
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 14,
    marginTop: 4,
  },

  /* Grid */
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  gridItem: {
    width: "48%",
    backgroundColor: "#103C33",
    height: 90,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#1e5e4a",
  },
  gridEmoji: { fontSize: 28, marginBottom: 6 },
  gridText: { color: "#14B8A6", fontWeight: "700", fontSize: 14 },

  /* Cards */
  card: {
    backgroundColor: "#103C33",
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#1e5e4a",
  },
  cardRow: { flexDirection: "row", alignItems: "center" },
  cardEmojiBadge: {
    width: 52,
    height: 52,
    backgroundColor: "#0B3B2E",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  cardInfo: { marginLeft: 12, flex: 1 },
  cardTitle: { color: "#fff", fontWeight: "700", fontSize: 14 },
  cardLocation: { color: "#a0bfb5", fontSize: 12, marginTop: 4 },
  tagBadge: {
    backgroundColor: "#0a2e24",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: "#14B8A6",
  },
  tagText: { color: "#14B8A6", fontSize: 11, fontWeight: "700" },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 14,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#1e5e4a",
  },
  cardPrice: { color: "#4CAF50", fontWeight: "800", fontSize: 16 },
  cardPricePer: { color: "#a0bfb5", fontWeight: "400", fontSize: 12 },
  applyBtn: {
    backgroundColor: "#14B8A6",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
  },
  applyText: { color: "#0B3B2E", fontWeight: "800", fontSize: 13 },

  /* Stats */
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  },
  statBox: {
    flex: 1,
    backgroundColor: "#103C33",
    borderRadius: 14,
    padding: 14,
    alignItems: "center",
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: "#1e5e4a",
  },
  statVal: { color: "#14B8A6", fontSize: 18, fontWeight: "900" },
  statLabel: {
    color: "#a0bfb5",
    fontSize: 11,
    marginTop: 4,
    textAlign: "center",
  },
});
