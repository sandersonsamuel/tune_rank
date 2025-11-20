import Link from "next/link"
import { Input } from "./ui/input"

export const NavBar = () => {

  return (
    <div className="px-5 py-3 flex justify-between items-center">
      <Link href={"/"} className="text-2xl font-semibold w-full">Tune Rank</Link>

      <div className="flex gap-5 w-full items-center justify-end">
        <Link className="hover:underline" href={"/login"}>Login</Link>
        <Link className="hover:underline" href={"/register"}>Register</Link>
        <Input placeholder="Search" className="w-full max-w-[300px]" />
      </div>
    </div>
  )
}