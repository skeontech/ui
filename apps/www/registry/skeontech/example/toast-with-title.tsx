"use client"

import { useToast } from "@/registry/skeontech/hooks/use-toast"
import { Button } from "@/registry/skeontech/ui/button"

export default function ToastWithTitle() {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        })
      }}
    >
      Show Toast
    </Button>
  )
}
