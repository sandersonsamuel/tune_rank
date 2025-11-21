import Link from "next/link"
import { Input } from "./ui/input"
import { SearchInput } from "./search-input"

export const NavBar = () => {

  return (
    <div className="px-5 py-3 flex justify-between items-center">
      <Link href={"/"} className="text-2xl font-semibold w-full">Tune Rank</Link>

      <div className="flex gap-5 w-full items-center justify-end">
        <Link className="hover:underline" href={"/login"}>Entrar</Link>
        <Link className="hover:underline" href={"/register"}>Criar Conta</Link>
        <SearchInput />
      </div>
    </div>
  )
}