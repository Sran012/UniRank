# ⚡️ UniRank: check your rank among your friends

**UniRank** is a social ranking app built with a core focus on **Neobrutalist design**. It uses name-based hashing to generate consistent "personality snapshots" that can be shared instantly across mobile platforms.

No database, no signups—just raw stats and sharp corners.

---

## 🚀 Key Features

- **Consistent Hashing**: Every name generates the same stats every time. It's deterministic, not random.
- **Social Metrics**:
  - **Rank & Vibe**: Find out where you actually sit.
  - **Red Flags**: 🚩 We expose the "Toxic," the "Gaslighters," and the "Replies in 3 days."
  - **Attractiveness & Loyalty**: Calculated (not-so) scientifically.
- **Stateless Sharing**: We encode all card data into URL parameters (Base64 + URI encoded). This ensures that when you share a link, your friend sees *exactly* what you saw—with zero server overhead.
- **Mobile First**: Tailored for the "Viral Link" experience on mobiles.

## 🛠️ Tech Stack

- **Next.js 15+**
- **Tailwind CSS 4**
- **TypeScript**

## 🚦 Getting Started

1. **Clone the energy**
   ```bash
   git clone https://github.com/sran012/unirank.git
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

Built with ⚡️ by [Sujal](https://github.com/sran012)
