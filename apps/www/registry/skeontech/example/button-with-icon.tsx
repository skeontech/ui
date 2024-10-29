import { EnvelopeOpenIcon } from "@radix-ui/react-icons"

import { Button } from "@/registry/skeontech/ui/button"

export default function ButtonWithIcon() {
  return (
    <Button>
      <EnvelopeOpenIcon /> Login with Email
    </Button>
  )
}
