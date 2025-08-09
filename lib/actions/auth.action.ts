'use serveer';

import { auth, db } from "@/firebase/admin";
import { cookies } from "next/headers";

export async function signUp(params:SignUpParams) {
    const {uid, email, password} = params;

    try{
        const userRecord = await db.collection('users').doc(uid).get();

        if (userRecord.exists){
            return {
                success:false,
                message: 'User already exists'
            }
        }

        await db.collection('users').doc(uid).set({
            name, email
        })

    } catch (e: any){
        console.error('Error during creating a user',e);

        if(e.code=== 'auth/email-already-exists'){
            return {
                success: false,
                message: 'Email already exists. Please use a different email.'
            }
        }
        return {
            success: false,
            message: 'Falied to create user'
        }
    }

}

