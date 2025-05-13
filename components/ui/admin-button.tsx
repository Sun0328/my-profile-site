import { Plus } from 'lucide-react';
import { ReactNode } from 'react';

interface AdminButtonProps {
  onClick: () => void;
  children: ReactNode;
  icon?: ReactNode;
}

export function AdminButton({ onClick, children, icon = <Plus className="h-5 w-5 mr-2" /> }: AdminButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center px-4 py-2 bg-[#4F46E5] text-white rounded cursor-pointer hover:bg-[#4F46E5]/80 transition-colors"
    >
      {icon}
      {children}
    </button>
  );
} 