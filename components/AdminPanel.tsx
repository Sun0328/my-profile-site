import BuildIcon from '@mui/icons-material/Build';
import Link from 'next/link';

export default function AdminPanel() {
  return (
    <div>
        <Link href="/admin">
            <BuildIcon fontSize="inherit"/>
        </Link>
    </div>
  )
}
