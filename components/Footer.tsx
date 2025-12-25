import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-primary py-48 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-24 mb-40">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="block mb-12">
               <div className="relative h-24 w-64">
                 <Image 
                   src="/images/assets/logo-full-white.png" 
                   alt="Topgun Security" 
                   fill
                   className="object-contain object-left"
                 />
               </div>
            </Link>
            <p className="text-white/30 text-[10px] font-black tracking-[0.4em] uppercase max-w-sm leading-relaxed">
              INSTITUTIONELLER PARTNER FÜR KÖLN & NRW. PROFESSIONELLER SCHUTZ SEIT 2013.
            </p>
          </div>

          <div>
            <span className="text-[10px] font-black tracking-[0.6em] uppercase text-accent mb-12 block">Directory</span>
            <ul className="space-y-6 text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">
              <li><Link href="#services" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/branchen" className="hover:text-white transition-colors">Sektoren</Link></li>
              <li><Link href="/partner" className="hover:text-white transition-colors">Partner</Link></li>
              <li><Link href="/imprint" className="hover:text-white transition-colors">Infrastruktur</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          <div>
             <span className="text-[10px] font-black tracking-[0.6em] uppercase text-accent mb-12 block">Compliance</span>
             <div className="flex flex-col gap-6">
               <div className="flex items-center gap-6 mb-4">
                  <Image src="/certificates/iso9001.png" alt="ISO 9001" width={40} height={40} className="h-10 w-auto hover:scale-110 transition-transform" />
                  <Image src="/certificates/din77200.png" alt="DIN 77200" width={40} height={40} className="h-10 w-auto hover:scale-110 transition-transform" />
               </div>
               <div className="flex items-center gap-4 py-3 border-b border-white/5">
                 <div className="w-1.5 h-1.5 bg-accent" />
                 <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">DIN 77200 STANDARDS</span>
               </div>
               <div className="flex items-center gap-4 py-3 border-b border-white/5">
                 <div className="w-1.5 h-1.5 bg-white/20" />
                 <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">ISO 9001 CERTIFIED</span>
               </div>
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-12 pt-16 border-t border-white/5 text-[9px] font-black tracking-[0.6em] uppercase text-white/10">
          <span>© {new Date().getFullYear()} TOPGUN SECURITY GMBH. LEVERKUSEN | KÖLN.</span>
          <div className="flex gap-16">
             <Link href="/imprint" className="hover:text-white transition-colors">Impressum</Link>
             <Link href="/privacy" className="hover:text-white transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
