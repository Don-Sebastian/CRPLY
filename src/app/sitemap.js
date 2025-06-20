export default function sitemap() {
    return [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 1,
      },
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/about-us`,
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.9,
      },
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/products`,
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.9,
      },
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact-us`,
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.7,
      },
    ];
}
