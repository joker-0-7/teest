"use client"
import { useRouter } from "next/router"

export default function PageId({params}){
    const router = useRouter()
    console.log(router)
    // const id = params.id
    // return(
    //     <h1>{id}</h1>
    // )
}