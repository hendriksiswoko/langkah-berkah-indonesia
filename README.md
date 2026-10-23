# Happy Trip — Website

Landing page for Happy Trip (PT Langkah Berkah Indonesia). Next.js App Router, TypeScript, Tailwind CSS v4.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Where to edit

| What | File |
|---|---|
| Company name, tagline, WhatsApp, email, address, Instagram, nav menu, SEO, footer text, WhatsApp message templates | `src/data/site.ts` |
| Destinations (name, description, cities, photo, order, CTA) | `src/data/destinations.ts` |
| Services (name, description, icon, order) | `src/data/services.ts` |
| Headlines, paragraphs, labels and CTAs for every section | `src/data/content.ts` |
| Colours, radius, container width, section spacing | `src/config/theme.ts` |
| Fonts | `src/config/fonts.ts` |
| All images, logo, favicon, OG image | `src/config/media.ts` (files in `public/images`) |
| Section order and show/hide | `src/config/sections.ts` (`enabled`) |
| Demo vs production content | `src/config/mode.ts` (`NEXT_PUBLIC_CONTENT_MODE=demo`) |

## Adding a destination photo

1. Put the file in `public/images/destinations/`.
2. Add an entry to `images` in `src/config/media.ts` (src, alt, width, height).
3. Set `image: images.yourKey` on the destination in `src/data/destinations.ts`. The card becomes a photo card automatically.

## WhatsApp CTAs

Every button that has `whatsapp: { ... }` opens `wa.me/<number>` with a message from `src/lib/whatsapp.ts`.
`whatsapp: { destination: "Japan" }` or `{ service: "Family Trip" }` adds that choice to the message; `{ message: "..." }` overrides it.

## Open items

- Official Happy Trip logo not supplied. Header/footer show the brand name as text until `brandAssets.logo` is set.
- Website domain unconfirmed (profile says `langkahberkahidn.com`, brief says `langkahberkahindonesia.com`). Hidden until `contact.website.show` is `true`.
- Photos exist for Japan and South Korea only. Other destinations render as text until photos are added.
- Set `NEXT_PUBLIC_SITE_URL` in production for correct Open Graph URLs.
