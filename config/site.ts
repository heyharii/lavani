type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    instagram: string
  }
}

export const siteConfig: SiteConfig = {
  name: "Lavani",
  description:
    "Elevate your style with Lavani's affordable and trendy women's fashion. Discover our collection of high-quality, elegant pieces for every occasion.",
  url: "https://thelavani.co",
  ogImage: "https://thelavani.co/og.jpg",
  links: {
    instagram: "https://instagram.com/thelavani.co",
  },
}
