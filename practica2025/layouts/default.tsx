import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-5">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
       <p className="text-2xl underline">Todos los derechos reservados ©</p>
      </footer>
    </div>
  );
}
