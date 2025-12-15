export default function Attendance() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Attendance</h1>

      <div className="bg-white p-6 rounded shadow max-w-md">
        <p className="mb-4">Mark Today’s Attendance</p>

        <button className="bg-green-600 text-white px-6 py-2 rounded mr-4">
          Present
        </button>

        <button className="bg-red-600 text-white px-6 py-2 rounded">
          Absent
        </button>
      </div>
    </div>
  );
}
