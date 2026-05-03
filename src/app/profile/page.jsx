"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import Image from "next/image";

function ProfilePage() {
  const { data: session } = authClient.useSession();
  const info = session?.user;

  return (
    <div>
      <Avatar size="sm">
        <Avatar.Image
          alt="John Doe"
          src={info?.image}
          referrerPolicy="no-referrer"
        />
        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
      </Avatar>

      <p> {info?.name} </p>
      <p> {info?.email} </p>
    </div>
  );
}

export default ProfilePage;
