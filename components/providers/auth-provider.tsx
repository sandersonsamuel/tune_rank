"use client"

import { auth } from "@/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

    const router = useRouter();

    onAuthStateChanged(auth, (user) => {
        if (!user) {
            router.push("/login");
        }
    });

    return children


};