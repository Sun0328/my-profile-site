import LockIcon from '@mui/icons-material/Lock';

export default function SignOutBox() {
  return (
    <div className="
        w-full md:w-[70%] h-[120px] 
        flex justify-center items-center 
        text-xl text-gray-500 
        border-1 border-gray-600 
        rounded-md p-4
        bg-gray-800/50
    "
    >
        <LockIcon className="mr-4" />
        Please sign in to leave a message
    </div>
  )
}
