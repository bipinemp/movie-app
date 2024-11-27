export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);

  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "2-digit",
  };

  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

  return formattedDate;
}
