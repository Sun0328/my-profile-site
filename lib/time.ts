export function formatRelativeTime(dateString: string) {
    const now = new Date()
    const past = new Date(dateString)
    const diffMs = now.getTime() - past.getTime()
    const diffMin = Math.floor(diffMs / 1000 / 60)
  
    if (diffMin < 1) {
      const diffSec = Math.floor(diffMs / 1000)
      return `1 min ago`
    }
    if (diffMin < 60) {
      return `${diffMin} mins ago`
    }
    const diffH = Math.floor(diffMin / 60)
    if (diffH < 24) {
      return `${diffH}h ago`
    }
    const diffD = Math.floor(diffH / 24)
    return `${diffD}d ago`
}