export function getBadge(count) {
  if (count >= 15) return "🏆 Master";
  if (count >= 5) return "🥈 Intermediate";
  if (count >= 1) return "🥉 Beginner";
  return "🔰 Start your journey";
}
