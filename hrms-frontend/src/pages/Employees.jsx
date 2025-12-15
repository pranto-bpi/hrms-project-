export default function Employees() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Employees</h1>

      <table className="w-full bg-white shadow rounded">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Role</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="p-3">Rahim</td>
            <td className="p-3">rahim@mail.com</td>
            <td className="p-3">Developer</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
