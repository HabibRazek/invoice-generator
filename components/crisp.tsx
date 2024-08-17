"use client"

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";


const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("fdb3c6a2-de94-4d17-ab03-0fbf8b3f3fb8");
  });

  return null;
}
export default CrispChat
