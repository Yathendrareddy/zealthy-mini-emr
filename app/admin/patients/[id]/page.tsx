export default function PatientDetailsPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Patient Details
      </h1>

      <div className="grid gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">
            Appointments
          </h2>

          <p>Dr. Smith - Monthly</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">
            Prescriptions
          </h2>

          <p>Metformin 500mg</p>
        </div>
      </div>
    </main>
  )
}