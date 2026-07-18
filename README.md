# Money Mutt Frontend

<p align="center">
  <img src="/public/moneylogo.svg" alt="Money Mutt Logo" width="300"/>
</p>

## 📋 Overview

Money Mutt is a comprehensive web application built on Next.js that provides a complete meme token ecosystem with advanced features like staking, governance, and community tools. The platform combines the fun of meme culture with genuine crypto utility.

## ✨ Features

- **Dog House Dashboard**: Track investments, transactions, and statistics
- **My Kennel**: Personal profile and wallet management
- **Alpha Barks**: Latest updates and platform announcements
- **Dog Tags**: Token tracking and management
- **Governance**: Proposal creation and voting system
- **Mutt Army Hub**: Community content sharing and engagement
- **Dark/Light Mode**: Fully responsive UI with theme switching
- **Wallet Integration**: Connect and interact with crypto wallets

## 🚀 Technologies

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom theme variables
- **State Management**: Jotai
- **Animation**: Framer Motion
- **UI Components**: RizzUI components
- **Icons**: React Icons
- **Forms**: React Hook Form with Zod validation
- **File Upload**: React Dropzone

## 🛠️ Prerequisites

- Node.js (>= 18.15.0)
- npm or yarn

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/moneymutt-frontend.git
   cd moneymutt-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_APP_NAME=MoneyMutt
   NEXT_PUBLIC_API_BASE_URL=your_api_url_here
   NEXT_PUBLIC_GOOGLE_MAP_API_KEY=your_google_map_api_key_here
   ```

## 🏃‍♂️ Running the Application

### Development Mode

```bash
npm run dev
# or
yarn dev
```
The application will be available at `http://localhost:3000`.

### Build for Production

```bash
npm run build
# or
yarn build
```

### Start Production Server

```bash
npm run start
# or
yarn start
```

## 📁 Project Structure