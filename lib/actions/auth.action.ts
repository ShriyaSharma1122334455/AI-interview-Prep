'use server';

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

export async function signIn(params: SignInParams) {
    const { email, idToken } = params;

    try {
        const userRecord = await auth.getUserByEmail(email)
        if (!userRecord) {
            return {
                success: false,
                message: 'User not found. Please sign up first.'
            };
        }

        await setSessionCookie(idToken);
        


    } catch (e: any){
        console.log(e);
        return {
            success: false,
            message: 'Failed to sign in'}

    }
}

export async function setSessionCookie(idToken: string){
    const One_Week = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds 
    const cookieStore = await cookies();
    const sessionCookie = await auth.createSessionCookie(idToken, {
        expiresIn: One_Week,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path : '/',
        sameSite: 'Lax',
    }as any); // 5 days
    
}
