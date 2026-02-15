import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://topgun-security.de";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/unternehmen`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/leistungen`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/leistungen/objektschutz`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/leistungen/werkschutz`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/leistungen/revierdienst`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/leistungen/empfangsdienst`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/leistungen/detektei`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/leistungen/veranstaltungsschutz`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/leistungen/asyl-notunterkunft`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/leistungen/jugendschutz`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/branchen`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/branchen/immobilien`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/branchen/logistik`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/unternehmen/qualifikation`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/unternehmen/karriere`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/imprint`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/agb`,
      lastModified: new Date(),
    },
  ];
}
