"use client"
import { getAllUsersAPI } from "@/lib/features/users/usersAPI";
import { selectUsers } from "@/lib/features/users/usersSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import React, { useEffect } from "react";
import Link from "next/link";
import "./../../styles/users.scss"

export const Users:React.FC = () => {
    const dispatch = useAppDispatch()
    const users = useAppSelector(selectUsers)
     
    useEffect(() => {
        dispatch(getAllUsersAPI())
    }, [])
    
    return(
        <div className="show">
            <div className="container">
                <div className="show__wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>firstName</th>
                                <th>lastName</th>
                                <th>Age</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users?.map(elm => {
                                return(
                                    <tr key={elm.id}>
                                        <td>{elm.first_name}</td>
                                        <td>{elm.last_name}</td>
                                        <td>{elm.age}</td>
                                        <td>{elm.email}</td>
                                        <td><Link href={"/seeSingleUser/" + elm.id}>See More...</Link></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}