export default function truncate(string: string, number: number) {
  const shortOverview =
    string?.length > number ? string.substr(0, number - 1) + "..." : string;
  return shortOverview;
}
