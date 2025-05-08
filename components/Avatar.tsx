import { div } from "framer-motion/client"

const avatarSrc = "/avatar/my-avatar.png"

export const Avatar = () => {
  return (
    <div className="flex items-center justify-start w-full h-full">
      <img
        src={avatarSrc}
        alt="Me"
        width={80}
        height={80}
        style={{ objectFit: "cover" }}
      />
    </div>
  )
}
