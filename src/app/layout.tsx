import "./globals.css";

export const metadata = {
  title: "Owambe Prom",
  description: "Official Owambe Prom Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}