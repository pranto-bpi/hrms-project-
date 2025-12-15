export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-gray-500">Total Employees</h3>
          <p className="text-3xl font-bold">25</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-gray-500">Present Today</h3>
          <p className="text-3xl font-bold text-green-600">20</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-gray-500">On Leave</h3>
          <p className="text-3xl font-bold text-red-600">5</p>
        </div>
      </div>
    </div>
  );
}
