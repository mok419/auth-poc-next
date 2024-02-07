import { redirect } from "next/navigation";
import { getSession, login, logout } from "@/lib";
import Image from "next/image";

export default async function Page() {
  const session = await getSession();
  return (
    <section>
      <form
        action={async (formData) => {
          "use server";
          console.log(formData.has('email'))
          await login(formData);
          redirect("/");
        }}
      >
        <input name='email' type="email" placeholder="Email" />
        <br />
        <button type="submit">Login</button>
      </form>
      <form
        action={async () => {
          "use server";
          await logout();
          redirect("/");
        }}
      >
        <button type="submit">Logout</button>
      </form>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <Image
              src="/test-image.png"
              alt="Cookie explanation from online"
              className="dark:invert"
              width={600}
              height={400}
              priority
            />
    </section>
  );
}
