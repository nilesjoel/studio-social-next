import { useSession } from "next-auth/react"
import { Container } from "../components/sharedstyles"

export default function MePage() {
  const { data } = useSession()

  return (
     <div style={{maxWidth:'100%'}}> <pre>{JSON.stringify(data, null, 2)}</pre></div>
  )
}
