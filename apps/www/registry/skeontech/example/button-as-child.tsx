import Link from "next/link"

import { Button } from "@/registry/skeontech/ui/button"

export default function ButtonAsChild() {
  return (
    <Button asChild>
      <Link href="/login">Login</Link>
    </Button>
  )
}
