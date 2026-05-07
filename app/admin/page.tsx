const patients = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    appointments: 1,
    medications: 1,
  },
]

export default function AdminPage() {
  return (
    <main className="p-8">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">
          Mini EMR
        </h1>

        <button className="bg-black text-white px-4 py-2 rounded-lg">
          New Patient
        </button>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">Patient</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Appointments</th>
              <th className="p-4 text-left">Medications</th>
            </tr>
          </thead>

          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id} className="border-t">
                <td className="p-4">{patient.name}</td>
                <td className="p-4">{patient.email}</td>
                <td className="p-4">{patient.appointments}</td>
                <td className="p-4">{patient.medications}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}