import { getServerSession } from "next-auth/next"
import authOptions from "./api/auth/[...nextauth]"

import type { GetServerSidePropsContext } from "next"

export default function ServerSidePage(props) {
  // As this page uses Server Side Rendering, the `session` will be already
  // populated on render without needing to go through a loading stage.
  // This means that the page will not flicker as it changes between loading
  // and rendering.
  const { userData } = props;


  const userBadge = () => {
    if (!userData?.user) {
      return false;
    }

    const { user } = props?.userData;
    console.log("SERVER", { user })
    return <><strong>User // </strong>{user.name} / {user.email}</>
  }
  return (
    <>

      <h1>Server Side Rendering</h1>
      <p>
        This page uses the <strong>getServerSession()</strong> method in{" "}
        <strong>getServerSideProps()</strong>.
      </p>
      <p>
{userBadge()}
      </p>
    </>
  )
}

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context: GetServerSidePropsContext) {

  const session = await getServerSession(context.req, context.res, authOptions);
  console.log({ session })
  return {
    props: {
      userData: session
    },
  }
}
