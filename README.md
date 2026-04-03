# ⚡️ UniRank: The High-Contrast Vibe engine

**UniRank** is a loud, unapologetic social ranking app built with a core focus on **Neobrutalist design**. It uses name-based hashing to generate consistent "personality snapshots" that can be shared instantly across mobile platforms.

No database, no signups—just raw stats and sharp corners.

---

## 🎨 The Aesthetic
We threw the modern, "soft-rounded" UI handbook in the trash.
- **Neobrutalist Core**: 4px solid borders, zero border-radius, and aggressive drop shadows.
- **Vibrant Contrast**: A high-impact palette using `Primary Yellow (#FDC800)`, `Indigo (#432DD7)`, and `Crimson (#DC2626)`.
- **Interactive Tactility**: Buttons and cards that react with physical translation on hover/click.

## 🚀 Key Features

- **Consistent Hashing**: Every name generates the same stats every time. It's deterministic, not random.
- **Social Metrics**:
  - **Rank & Vibe**: Find out where you actually sit.
  - **Red Flags**: 🚩 We expose the "Toxic," the "Gaslighters," and the "Replies in 3 days."
  - **Attractiveness & Loyalty**: Calculated (not-so) scientifically.
- **Stateless Sharing**: We encode all card data into URL parameters (Base64 + URI encoded). This ensures that when you share a link, your friend sees *exactly* what you saw—with zero server overhead.
- **Mobile First**: Tailored for the "Viral Link" experience on iOS/Android.

## 🛠️ Tech Stack

- **Next.js 15+**: Leveraging the latest App Router patterns.
- **Tailwind CSS 4**: Utilizing the new `@theme` engine and CSS-first configuration.
- **TypeScript**: Strict typing for consistent data encoding/decoding.
- **Deployment**: Optimized for Vercel edge runtime.

## 🚦 Getting Started

1. **Clone the energy**
   ```bash
   git clone https://github.com/yourusername/unirank.git
   cd unirank
   ```

2. **Install & Run**
   ```bash
   npm install
   npm run dev
   ```

3. **Production Build**
   ```bash
   npm run build
   ```

---

Built with ⚡️ by [Sujal](https://github.com/sujal)
