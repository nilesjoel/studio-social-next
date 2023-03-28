
import { getToken } from "next-auth/jwt"


import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

type Data = {
  token
}

export async function getProfileData(req){


  try {

    const token = await getToken({ req })    
    // console.log({ token })
    // const { token }: Data = req.body;
    const response = await fetch(`${process.env.NEXTAUTH_API}/studio-profile/profile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(token)
    });
    const data = await response.json();
    console.log("GOT DATA", data)
    return data;

  } catch (error) {
    console.log("ERROR", error)
  }
}

export default async function handler(req, res){
  const data = await getProfileData(req)
  // console.log("GOT NEW DATA", data);
  res.send(JSON.stringify(data, null, 2));
}