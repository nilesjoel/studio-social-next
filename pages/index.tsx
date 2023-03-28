import { getSession, signIn, signOut } from "next-auth/react";
import Head from 'next/head';
import Link from "next/link";
import React from "react";

import { useSession } from "next-auth/react"

import { getProfileData } from "./api/profile";
const IndexPage = ({
  session2, profileData
}) => {

  const { data: session } = useSession()
  // console.log({session})
  const signInButtonNode = () => {
    // console.log({session})
    if (session) {
      return false;
    }

    return (
      <div>
        
        <Link href="/api/auth/signin">
          <button
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            Sign In
          </button>
        </Link>
      </div>
    );
  };

  const signOutButtonNode = () => {
    if (!session) {
      return false;
    }

    return (
      <div>
        <Link href="/api/auth/signout">
          <button
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Sign Out
          </button>
        </Link>
      </div>
    );
  };

  if (!session) {
    return (
      <div className="hero">
        <div className="navbar">
          {signOutButtonNode()}
          {signInButtonNode()}
        </div>
        <div className="text">
          You aren't authorized to view this page
        </div>
      </div>
    )
  }

  return (
    <div className="hero">
      <Head>
        <title>Index Page</title>
      </Head>

      <div className="navbar">
        {signOutButtonNode()}
        {signInButtonNode()}
      </div>
      <div className="text">
      <iframe src="/api/profile" />
      <h1>{JSON.stringify(profileData, null, 5)}</h1>
      </div>
    </div>
  );
};


  // This gets called on every request
export async function getServerSideProps(context) {
  // DEfine the Request
  const { req } = context;
  // Get the Profile Data
  const data = await getProfileData(req);
  // Return the Profile Data to the Page
  return { props: { profileData: data } }
}


export default IndexPage;