export default function DashboardPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Patient Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">
            Upcoming Appointments
          </h2>

          <p>Dr. Smith - May 10</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">
            Medication Refills
          </h2>

          <p>Metformin - Refill due May 12</p>
        </div>
      </div>
    </main>
  )
}