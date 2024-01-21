"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuRadioGroupDemo() {
  const [position, setPosition] = React.useState("All")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="default">{position}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-gray-500 text-white">
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
        <DropdownMenuRadioItem value="All">All</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Easy">Easy</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Medium">Medium</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Difficult">Difficult</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
