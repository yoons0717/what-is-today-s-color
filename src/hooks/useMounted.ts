import {useEffect, useState} from "react";

export function useMounted(){
  const [mounted, setMounted] = useState<boolean>();
  useEffect(()=> setMounted(true),[]);
  return mounted
}