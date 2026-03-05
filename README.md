# Astro Typefolio
Astro Typefolio is a personal blog/portfolio template based on Astro, suitable for quickly building lightweight and scalable content websites. The original project README has been saved in `README-cactus.md`.

## Features
- Markdown/MDX content with LaTeX math support via KaTeX (`$...$`, `$$...$$`)
- Giscus comments for blog posts with light/dark theme sync

## Giscus Comments
This template supports [Giscus](https://giscus.app/) comments on post pages.

1. Ensure your comment repository is public, Discussions are enabled, and the giscus GitHub App is installed.
2. Configure `giscusConfig` in `src/site.config.ts` (`repo`, `repoId`, `category`, `categoryId`).
3. Theme sync is automatic: site `data-theme="light|dark"` maps to giscus `light|dark`.

## Acknowledgment
Thanks to the original author for their open-source work.

This project is modified from:
- [astro-theme-cactus](https://github.com/chrismwilliams/astro-theme-cactus).

Part of the inspiration also comes from:
- [kirontoo/astro-theme-cody](https://github.com/kirontoo/astro-theme-cody)

Website philosophy:
- [Herman's blog](https://herman.bearblog.dev/)
- [Motherfucking Website](https://motherfuckingwebsite.com/)
- [Better Motherfucking Website](http://bettermotherfuckingwebsite.com/)
- [The Best Motherfucking Website](https://thebestmotherfucking.website/)

## License
This project uses the MIT License. For details, see [LICENSE](./LICENSE).
