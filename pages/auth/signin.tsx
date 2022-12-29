import Head from "next/head";
import { signIn, getProviders } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Image from "next/image";

function SignIn({ providers }: any) {
  const { data: session } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session]);

  return (
    <>
      <Head>
        <title>Sign In</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center space-y-20 pt-48">
        <Image src="/logo.jpeg" width={150} height={150} objectFit="contain" />
        <div>
          {Object.values(providers).map((provider: any) => (
            <div key={provider.name}>
              <button
                className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#1d9bf0] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                  Sign in with {provider.name}
                </span>
              </button>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default SignIn;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
