import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "About dashboard page"
};

export default function DashboardLayout({
  children,
  analytics,
  notification,
  statistics,
  login
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  statistics: React.ReactNode;
  login: React.ReactNode;
  notification: React.ReactNode;
}) {
  const isLoggedIn = true;
  return isLoggedIn ? (
    <div className="h-screen max-h-screen flex flex-col">
      {children}

      <main className="flex flex-1 p-12 gap-4">
        {/* Left column: Analytics + Statistics stacked vertically */}
        <div className="flex flex-col space-y-4 h-full">
          <section className="flex-1">{analytics}</section>
          <section className="flex-1">{statistics}</section>
        </div>

        {/* Right column: Notification fills remaining space */}
        <section className="flex-1">{notification}</section>
      </main>
    </div>
  ) : (
    <section>{login}</section>
  );
}
