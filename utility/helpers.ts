export function getDayOrdinal(date: string) {
  const dayNumber = new Date(removeTimezone(date)).getUTCDate();
  if (dayNumber > 3 && dayNumber < 21) return "th";
  switch (dayNumber % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

export function removeTimezone(date: string): string {
  return new Date(date).toISOString().slice(0, -1);
}

export function getShortMonth(date: string): string {
  return new Date(removeTimezone(date)).toLocaleString("default", {
    month: "short",
  });
}
