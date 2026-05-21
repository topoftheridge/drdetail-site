import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About DR Detail | Auto Detailing in Conshohocken, PA",
  description: "DR Detail provides professional auto detailing services across Montgomery County, Pennsylvania, helping drivers restore, protect, and maintain their vehicles.",
};

export default function AboutPage() {
  return (
    <>
      <div className="relative overflow-hidden">
        <Image src="/aboutcard1.jpg" alt="" fill className="object-cover object-[70%_70%] sm:object-[center_70%]" priority />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative">
          <Hero
            title="DR Detail"
            subtitle="Auto Detailing in Conshohocken, PA"
            showCTA={false}
          />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-4 justify-center pb-12 -mt-20">
            <Link href="/get-quote" className="inline-flex items-center justify-center bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary-dark transition text-lg">
              GET A FREE QUOTE
            </Link>
            <a href="tel:+16109419000" className="inline-flex items-center justify-center bg-white/10 backdrop-blur text-white font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition border border-white/20 text-lg">
              Call (610) 941-9000
            </a>
          </div>
        </div>
      </div>

      {/* About Content */}
      <section className="py-16 lg:py-24 bg-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Auto Detailing in Conshohocken, PA | <span className="text-primary">DR Detail</span>
              </h2>
              <p className="text-accent font-medium mb-8 text-lg">
                DR Detail provides professional auto detailing services across Montgomery County, Pennsylvania, helping drivers restore, protect, and maintain their vehicles inside and out.
              </p>
              <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                <p>
                  Based in Conshohocken, we proudly serve surrounding areas including Plymouth Meeting, Norristown, Blue Bell, Ambler, and nearby communities. Our detailing services go far beyond a basic car wash. We specialize in auto detailing, paint correction, ceramic coating, car washing, and window tinting — removing dirt, stains, and buildup while restoring your vehicle&apos;s appearance and protecting it for the long term.
                </p>
                <p>
                  From deep interior cleaning and stain removal to paint correction and ceramic coating, every service is completed with precision and high-quality products. Whether your vehicle needs a full detail or a targeted treatment, we deliver results that stand out.
                </p>
              </div>
            </div>

            {/* IMAGE SPOT 1 */}
            <div className="rounded-xl overflow-hidden border border-white/10 bg-dark-lighter aspect-[4/3] flex items-center justify-center">
              {/* <Image src="/about-1.jpg" alt="DR Detail work" width={600} height={450} className="object-cover w-full h-full" /> */}
              <span className="text-gray-600 text-sm">[Image Placeholder — about-1.jpg]</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-16">
            {/* IMAGE SPOT 2 */}
            <div className="rounded-xl overflow-hidden border border-white/10 bg-dark-lighter aspect-[4/3] flex items-center justify-center order-2 lg:order-1">
              {/* <Image src="/about-2.jpg" alt="DR Detail team at work" width={600} height={450} className="object-cover w-full h-full" /> */}
              <span className="text-gray-600 text-sm">[Image Placeholder — about-2.jpg]</span>
            </div>

            <div className="order-1 lg:order-2">
              <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                <p>
                  At DR Detail, we focus on convenience, quality, and consistent results — making it easy for Montgomery County drivers to keep their vehicles looking their best.
                </p>
                <p>
                  We treat every vehicle like it&apos;s our own. From daily drivers to weekend cars, our process is built around care, attention, and real results you can see and feel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Gallery */}
      <section className="py-16 lg:py-24 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-4">
            Our <span className="text-primary">Work</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            A look at some of the vehicles we&apos;ve brought back to life.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="rounded-lg overflow-hidden border border-white/10 bg-dark-lighter aspect-square flex items-center justify-center">
                {/* <Image src={`/gallery-${i}.jpg`} alt={`DR Detail work ${i}`} width={400} height={400} className="object-cover w-full h-full" /> */}
                <span className="text-gray-600 text-xs">[gallery-{i}.jpg]</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-dark">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to See the <span className="text-primary">Difference</span>?
          </h2>
          <p className="text-gray-400 mb-6">Get in touch today for a free quote.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+16109419000" className="inline-flex items-center justify-center bg-primary text-white font-bold px-8 py-4 rounded-lg hover:bg-primary-dark transition text-lg">
              Call (610) 941-9000
            </a>
            <Link href="/get-quote" className="inline-flex items-center justify-center bg-white/10 text-white font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition border border-white/20 text-lg">
              GET A FREE QUOTE
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
