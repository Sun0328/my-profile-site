import { Trash2 } from 'lucide-react';

interface Column {
  header: string;
  accessor: string;
  width: string;
  render?: (value: any, item: any) => React.ReactNode;
}

interface AdminTableProps {
  columns: Column[];
  data: any[];
  onDelete: (id: string) => void;
  title: string;
  onAdd: () => void;
  addButtonText: string;
}

export function AdminTable({ columns, data, onDelete, title, onAdd, addButtonText }: AdminTableProps) {
  return (
    <div className="w-full mb-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl">{title}</h2>
        <button
          onClick={onAdd}
          className="flex items-center px-4 py-2 bg-[#4F46E5] text-white rounded cursor-pointer hover:bg-[#4F46E5]/80 transition-colors"
        >
          {addButtonText}
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
          <thead className="bg-gray-700">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.accessor}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                  style={{ width: column.width }}
                >
                  {column.header}
                </th>
              ))}
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider w-[80px]">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-700">
                {columns.map((column) => (
                  <td
                    key={column.accessor}
                    className="px-6 py-4 whitespace-nowrap"
                    style={{ maxWidth: column.width }}
                    title={item[column.accessor]}
                  >
                    {column.render
                      ? column.render(item[column.accessor], item)
                      : item[column.accessor]}
                  </td>
                ))}
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => onDelete(item.id)}
                    className="text-red-400 cursor-pointer hover:text-red-300 transition-colors"
                    title={`Delete ${title.toLowerCase().slice(0, -1)}`}
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 