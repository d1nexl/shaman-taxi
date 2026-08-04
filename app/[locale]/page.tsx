import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ExtraServices } from "@/components/ExtraServices";
import { Pricing } from "@/components/Pricing";
import { WhyUs } from "@/components/WhyUs";
import { Process } from "@/components/Process";
import { Coverage } from "@/components/Coverage";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { QuoteForm } from "@/components/QuoteForm";
import { Footer } from "@/components/Footer";

export default function Home({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "cs";
  const dict = getDictionary(locale);
  const serviceOptions = [
    ...dict.services.items.map((s) => s.name),
    ...dict.extraServices.items.map((s) => s.name),
  ];

  return (
    <>
      <span id="top" />
      <Nav dict={dict.nav} locale={locale} tagline={dict.brand.tagline} />
      <main id="main">
        <Hero dict={dict.hero} />
        <Services dict={dict.services} />
        <ExtraServices dict={dict.extraServices} />
        <Pricing dict={dict.pricing} />
        <WhyUs dict={dict.why} />
        <Process dict={dict.process} />
        <Coverage dict={dict.coverage} />
        <About dict={dict.about} />
        <Gallery dict={dict.gallery} />
        <QuoteForm dict={dict.quote} contact={dict.contact} serviceOptions={serviceOptions} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
