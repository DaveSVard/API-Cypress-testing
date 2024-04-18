"use client"
import { getSingleUserAPI } from "@/lib/features/users/usersAPI"
import { selectUser } from "@/lib/features/users/usersSlice"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { useParams } from "next/navigation"
import { useEffect } from "react"
import "./../../styles/users.scss"

export const SeeSingleUser = () => {
    const {id} = useParams()

    const dispatch = useAppDispatch()
    const user = useAppSelector(selectUser)


    useEffect(() => {
        dispatch(getSingleUserAPI(+id))
    }, [id])
    
    return(
        <div className="show">
            <div className="container">
                <div className="show__wrapper">
                    <div className="show__info">
                        <p>{user.first_name} {user.last_name}</p>
                        <p><span>Age: </span>{user.age}</p>
                        <p><span>Email: </span>{user.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}