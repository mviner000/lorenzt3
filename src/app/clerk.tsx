"use client";

import Link from "next/link"
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { CreatePost } from "~/app/_components/create-post";

const Clerk: React.FC = () => {
    const pathname = usePathname();
  

  const { isSignedIn, user, isLoaded } = useUser();

  return (
        <>
            {!isSignedIn && (
            <div className="flex justify-center">
                <SignInButton />
            </div>
            )}
            {isSignedIn && (
            <>
                <UserButton />
                <CreatePost />
            </>
            )}
        </>
    )
};

export default Clerk;