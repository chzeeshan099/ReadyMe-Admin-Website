import { FaCoins } from "react-icons/fa";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { LuWallet } from "react-icons/lu";
import { TbCoins } from "react-icons/tb";

export const LastTransactionsData = [
  { address: 'Ox815b...786', amount: '$22,000' },
  { address: 'Ox815b...652', amount: '$22,111' },
  { address: 'Ox815b...654', amount: '$22,999' },
  { address: 'Ox815b...654', amount: '$22,999' },

];

export const historyDataByRange = {
  '1D': [
    { name: '12 AM', uv: 10 },
    { name: '4 AM', uv: 9 },
    { name: '8 AM', uv: 15 },
    { name: '12 PM', uv: 18 },
    { name: '4 PM', uv: 19 },
    { name: '8 PM', uv: 14 },
    { name: '11 PM', uv: 9 },
  ],
  '1M': [
    { name: 'Week 1', uv: 100 },
    { name: 'Week 2', uv: 120 },
    { name: 'Week 3', uv: 90 },
    { name: 'Week 4', uv: 110 },
  ],
  '1Y': [
    { name: 'Jan', uv: 40 },
    { name: 'Feb', uv: 30 },
    { name: 'Mar', uv: 20 },
    { name: 'Apr', uv: 27 },
    { name: 'May', uv: 18 },
    { name: 'Jun', uv: 23 },
    { name: 'Jul', uv: 34 },
    { name: 'Aug', uv: 38 },
    { name: 'Sep', uv: 29 },
    { name: 'Oct', uv: 22 },
    { name: 'Nov', uv: 25 },
    { name: 'Dec', uv: 31 },
  ]
};
export const BuyBarkData = {
  totalCoin: '$12,3456775777575',
  TotalCoinsSold: '$6,774746656574774',
  coinRemaining: '3.22M',
  muttPrice: ' 0.0248 BNB',
  nextBatch: '0.0262 BNB',

}

export const position = [
  {
    rank: 1,
    name: '0x123...abc',
    transactions: '$3,601,201.49',
    medal: '/money-mutt/medal1.svg',
  },
  {
    rank: 2,
    name: '0x456...def',
    transactions: '$3,601,201.49',
    medal: '/money-mutt/medal3.svg',
  },
  {
    rank: 3,
    name: '0x789...ghi',
    transactions: '$3,601,201.49',
    medal: '/money-mutt/medal2.svg',
  },
  {
    rank: 4,
    name: '0x789...ghi',
    transactions: '$3,601,201.49',
    medal: '',
  },
  {
    rank: 5,
    name: '0x789...ghi',
    transactions: '$3,601,201.49',
    medal: '',
  },
];

export const Earn = {
  totalReward: '0',
  keyGenerate: '0x2410981990491dCEC86d0E0BB2E9fddB1601821'
};

export const WalletOverviewData = [
  {
    title: "Total balance",
    balance: "0.00",
    icon: LuWallet,
    currency: "$MUTT"
  },
  {
    title: "Staked balance",
    balance: "10.50",
    icon: HiOutlineCurrencyDollar,
  },
  {
    title: "Available rewards",
    balance: "3.25",
    icon: TbCoins,
    currency: "$MUTT"
  },
];

export const ReferralData = [
  { referrals: 5, reward: '5 BNB' },
  { referrals: 10, reward: '10 BNB' },
  { referrals: 25, reward: '25 BNB' },
  { referrals: 50, reward: '50 BNB' },
  { referrals: 100, reward: '100 BNB' },
];
export const ReferralStreak = [
  { tital: '3-Day Streak', bonus: '+2% Bonus' },
  { tital: '7-Day Streak', bonus: '+5% Bonus' },
];
export const Topreffer = [
  {
    rank: 1,
    name: '0x123...abc',
    transactions: '$3,601,201.49',
    medal: '/money-mutt/medal1.svg',
  },
  {
    rank: 2,
    name: '0x456...def',
    transactions: '$3,601,201.49',
    medal: '/money-mutt/medal3.svg',
  },
  {
    rank: 3,
    name: '0x789...ghi',
    transactions: '$3,601,201.49',
    medal: '/money-mutt/medal2.svg',
  },
];

export const BurnTracketDataList = [
  {
    title: "Burn Dashboard",
    description:
      "Monitor real-time and historical token burns. Track deflation progress and SMUTT supply reduction over time.",
    stats: {
      liveBurned: {
        label: "Live Burned",
        value: "129,023 $MUTT",
        info: "Real-time burns from recent transactions."
      },
      burnedThisWeek: {
        label: "Burned This Week",
        value: "34,234 $MUTT",
        info: "Total $MUTT burned over past 7 days."
      },
      burnedThisMonth: {
        label: "Burned This Month",
        value: "75,345 $MUTT",
      },
      allTimeBurned: {
        label: "All Time Burned",
        value: "245,345 $MUTT",
      },
      deflationImpact: {
        label: "Deflation Impact (%)",
        value: "25%",
        info: "% of total supply permanently removed."
      },
    },
  },

];
export const roadMapCards: Record<
  string,
  { title: string; status: string; description: string }[]
> = {
  'Year 1': [
    {
      title: 'Token Launch',
      status: 'Completed',
      description:
        'Purchase IIDAG with your NEW custom bonus code. To ritach your ultimate reward bonus you must complete 3 purchase Purchase IIDAG with your NEW custom bonus code. To ritach your ultimate reward bonus you must complete 3 purchase',
    },
    {
      title: 'NFT Marketplace Launch',
      status: 'In Progress',
      description:
        'Purchase IIDAG with your NEW custom bonus code. To ritach your ultimate reward bonus you must complete 3 purchase Purchase IIDAG with your NEW custom bonus code. To ritach your ultimate reward bonus you must complete 3 purchase.',
    },
  ],
  'Year 2': [
    {
      title: 'Platform Upgrade',
      status: 'In Progress',
      description: 'We are upgrading our core platform with new UI and scalability improvements.',
    },
  ],
  'Year 3': [
    {
      title: 'Partnerships Expansion',
      status: 'Planned',
      description: 'Partnering with DeFi projects to expand our ecosystem.',
    },
  ],
  'Year 4': [
    {
      title: 'Partnerships Expansion',
      status: 'Planned',
      description: 'Partnering with DeFi projects to expand our ecosystem.',
    },
  ],
  'Year 5': [

  ],
};
export const alphabarkData = [
  {
    id: 1,
    title: "Feature",
    date: "March 24, 2025",
    description: "Optimizations Testing, and Enhancements for a Seamless Launch",
  },
  {
    id: 2,
    title: "Feature",
    date: "March 24, 2025",
    description: "Optimizations Testing, and Enhancements for a Seamless Launch",
  },
  {
    id: 3,
    title: "Feature",
    date: "March 24, 2025",
    description: "Optimizations Testing, and Enhancements for a Seamless Launch",
  },
  {
    id: 4,
    title: "Feature",
    date: "March 24, 2025",
    description: "Optimizations Testing, and Enhancements for a Seamless Launch",
  },
  {
    id: 5,
    title: "Feature",
    date: "March 24, 2025",
    description: "Optimizations Testing, and Enhancements for a Seamless Launch",
  },
  {
    id: 6,
    title: "Feature",
    date: "March 24, 2025",
    description: "Optimizations Testing, and Enhancements for a Seamless Launch",
  },
  {
    id: 7,
    title: "Feature",
    date: "March 24, 2025",
    description: "Optimizations Testing, and Enhancements for a Seamless Launch",
  },
  {
    id: 8,
    title: "Feature",
    date: "March 24, 2025",
    description: "Optimizations Testing, and Enhancements for a Seamless Launch",
  },
  {
    id: 9,
    title: "Feature",
    date: "March 24, 2025",
    description: "Optimizations Testing, and Enhancements for a Seamless Launch",
  }
];

export type AlphaBarkItem = {
  id: number;
  title: string;
  date: string;
  description: string;
};

export const communityCardsData = [
  {
    tag: 'Trending',
    user: '@moneyMutt',
    address: '0x819...652',
    image: '/money-mutt/monkey-card.svg',
    description: 'Purchase IIDAG with your NEW custom bonus code. To ritach your ultimate reward bonus you must complete 3 purchase',
    views: 125,
    tagColor: 'text-yellow-500',
  },
  {
    tag: 'Newest',
    user: '@moneyMutt',
    address: '0x819...652',
    image: '/money-mutt/monkey-card.svg',
    description: 'Purchase IIDAG with your NEW custom bonus code. To ritach your ultimate reward bonus you must complete 3 purchase',

    views: 125,
    tagColor: 'text-yellow-500',
  },
  {
    tag: 'Most Voted',
    user: '@moneyMutt',
    address: '0x819...652',
    image: '/money-mutt/monkey-card.svg',
    description: 'Purchase IIDAG with your NEW custom bonus code. To ritach your ultimate reward bonus you must complete 3 purchase',

    views: 125,
    tagColor: 'text-yellow-primary',
  },
];
export type CommunityCardsItem = {
  tag: string;
  user: string;
  address: string;
  description: string;
  image: string;
  views: number;
  tagColor: string;
};

export const topContributorData = [
  {
    walletAddress: "Ox815b1C3A74D9A1a263DdA9629FdA362A116465",
    totalposts: 154,
    totalpoints: 354
  },
  {
    walletAddress: "Ox815b2C3A74D9A1a263DdA9629FdA362A116466",
    totalposts: 142,
    totalpoints: 312
  },
  {
    walletAddress: "Ox815b3C3A74D9A1a263DdA9629FdA362A116467",
    totalposts: 121,
    totalpoints: 278
  },
  {
    walletAddress: "Ox815b4C3A74D9A1a263DdA9629FdA362A116468",
    totalposts: 118,
    totalpoints: 265
  },
  {
    walletAddress: "Ox815b5C3A74D9A1a263DdA9629FdA362A116469",
    totalposts: 103,
    totalpoints: 231
  },
  {
    walletAddress: "Ox815b6C3A74D9A1a263DdA9629FdA362A116470",
    totalposts: 98,
    totalpoints: 217
  },
  {
    walletAddress: "Ox815b7C3A74D9A1a263DdA9629FdA362A116471",
    totalposts: 91,
    totalpoints: 203
  },
  {
    walletAddress: "Ox815b8C3A74D9A1a263DdA9629FdA362A116472",
    totalposts: 87,
    totalpoints: 196
  },
  {
    walletAddress: "Ox815b9C3A74D9A1a263DdA9629FdA362A116473",
    totalposts: 82,
    totalpoints: 187
  },
  {
    walletAddress: "Ox815b0C3A74D9A1a263DdA9629FdA362A116474",
    totalposts: 76,
    totalpoints: 175
  },
  {
    walletAddress: "Ox815baC3A74D9A1a263DdA9629FdA362A116475",
    totalposts: 71,
    totalpoints: 162
  },
  {
    walletAddress: "Ox815bbC3A74D9A1a263DdA9629FdA362A116476",
    totalposts: 65,
    totalpoints: 154
  },
  {
    walletAddress: "Ox815bcC3A74D9A1a263DdA9629FdA362A116477",
    totalposts: 59,
    totalpoints: 143
  },
  {
    walletAddress: "Ox815bdC3A74D9A1a263DdA9629FdA362A116478",
    totalposts: 52,
    totalpoints: 132
  },
  {
    walletAddress: "Ox815beC3A74D9A1a263DdA9629FdA362A116479",
    totalposts: 48,
    totalpoints: 121
  }
];

export type TopContributorItem = {
  walletAddress: string;
  totalposts: number;
  totalpoints: number;
};

export const dogTags = [
  { rank: 1, title: "Execute 100 successful trades with 100% profit rates.", status: "Unlocked", progress: "Unlocked", icon: "/one.svg", lightmodeColor: "#F6F9FE", color: "#141924", borderColor: "#0B152A", progressValue: 100 },
  { rank: 10, title: "Stake a total of 10,000 $MUTT tokens.", status: "Unlocked", progress: "7,000/10,000 $MUTT Staked", icon: "/ten.svg", lightmodeColor: "#FEFCF6", color: "#1E1D1A", borderColor: "#2A220B", progressValue: 70 },
  { rank: 9, title: "Stake a total of 10,000 $MUTT tokens.", status: "Unlocked", progress: "3/5 Completed", icon: "/nine.svg", color: "#141B24", lightmodeColor: "#F6F9FE", borderColor: "#0B182A", progressValue: 60 },
  { rank: 6, title: "Complete your first transaction on the platform.", status: "Locked", progress: "Locked", icon: "/six.svg", color: "#1E181A", lightmodeColor: "#FEFCF6", borderColor: "#2A0B15", progressValue: 0 },
  { rank: 5, title: "Stake a total of 5,000 $MUTT tokens.", status: "Locked", progress: "Locked", icon: "/five.svg", color: "#1E181A", lightmodeColor: "#FEFCF6", borderColor: "#2A0B15", progressValue: 0 },
  { rank: 4, title: "Stake a total of 7,500 $MUTT tokens.", status: "Unlocked", progress: "7,500/7,500 $MUTT Staked", icon: "/four.svg", lightmodeColor: "#F6F9FE", color: "#141924", borderColor: "#0B152A", progressValue: 100 },
  { rank: 7, title: "Complete your first transaction on the platform.", status: "Locked", progress: "Locked", icon: "/seven.svg", lightmodeColor: "#FEFCF6", color: "#1E1D1A", borderColor: "#2A220B", progressValue: 0 },
  { rank: 2, title: "Stake a total of 10,000 $MUTT tokens.", status: "Locked", progress: "7,000/10,000 $MUTT Staked", icon: "/two.svg", lightmodeColor: "#F6F9FE", color: "#141B24", borderColor: "#0B182A", progressValue: 70 },
  { rank: 8, title: "Complete your first transaction on the platform.", status: "Locked", progress: "Locked", icon: "/eight.svg", lightmodeColor: "#F6F9FE", color: "#141B24", borderColor: "#0B182A", progressValue: 70 },
  { rank: 3, title: "Stake a total of 18,000 $MUTT tokens.", status: "Locked", progress: "Locked", icon: "/three.svg", color: "#1E1D1A", lightmodeColor: "#FEFCF6", borderColor: "#2A0B15", progressValue: 0 },
  { rank: 1, title: "Execute 100 successful trades with 100% profit rates.", status: "Unlocked", progress: "Unlocked", icon: "/one.svg", lightmodeColor: "#F6F9FE", color: "#141924", borderColor: "#0B152A", progressValue: 100 },
  { rank: 10, title: "Stake a total of 10,000 $MUTT tokens.", status: "Unlocked", progress: "7,000/10,000 $MUTT Staked", icon: "/ten.svg", lightmodeColor: "#FEFCF6", color: "#1E1D1A", borderColor: "#2A220B", progressValue: 70 },
  { rank: 9, title: "Stake a total of 10,000 $MUTT tokens.", status: "Unlocked", progress: "3/5 Completed", icon: "/nine.svg", color: "#141B24", lightmodeColor: "#F6F9FE", borderColor: "#0B182A", progressValue: 60 },
  { rank: 6, title: "Complete your first transaction on the platform.", status: "Locked", progress: "Locked", icon: "/six.svg", color: "#1E181A", lightmodeColor: "#FEFCF6", borderColor: "#2A0B15", progressValue: 0 },
  { rank: 5, title: "Stake a total of 5,000 $MUTT tokens.", status: "Locked", progress: "Locked", icon: "/five.svg", color: "#1E181A", lightmodeColor: "#FEFCF6", borderColor: "#2A0B15", progressValue: 0 },
  { rank: 4, title: "Stake a total of 7,500 $MUTT tokens.", status: "Unlocked", progress: "7,500/7,500 $MUTT Staked", icon: "/four.svg", lightmodeColor: "#F6F9FE", color: "#141924", borderColor: "#0B152A", progressValue: 100 },
  { rank: 7, title: "Complete your first transaction on the platform.", status: "Locked", progress: "Locked", icon: "/seven.svg", lightmodeColor: "#FEFCF6", color: "#1E1D1A", borderColor: "#2A220B", progressValue: 0 },
  { rank: 2, title: "Stake a total of 10,000 $MUTT tokens.", status: "Locked", progress: "7,000/10,000 $MUTT Staked", icon: "/two.svg", lightmodeColor: "#F6F9FE", color: "#141B24", borderColor: "#0B182A", progressValue: 70 },
  { rank: 8, title: "Complete your first transaction on the platform.", status: "Locked", progress: "Locked", icon: "/eight.svg", lightmodeColor: "#F6F9FE", color: "#141B24", borderColor: "#0B182A", progressValue: 70 },
  { rank: 3, title: "Stake a total of 18,000 $MUTT tokens.", status: "Locked", progress: "Locked", icon: "/three.svg", color: "#1E1D1A", lightmodeColor: "#FEFCF6", borderColor: "#2A0B15", progressValue: 0 },
  { rank: 1, title: "Execute 100 successful trades with 100% profit rates.", status: "Unlocked", progress: "Unlocked", icon: "/one.svg", lightmodeColor: "#F6F9FE", color: "#141924", borderColor: "#0B152A", progressValue: 100 },
  { rank: 10, title: "Stake a total of 10,000 $MUTT tokens.", status: "Unlocked", progress: "7,000/10,000 $MUTT Staked", icon: "/ten.svg", lightmodeColor: "#FEFCF6", color: "#1E1D1A", borderColor: "#2A220B", progressValue: 70 },
  { rank: 9, title: "Stake a total of 10,000 $MUTT tokens.", status: "Unlocked", progress: "3/5 Completed", icon: "/nine.svg", color: "#141B24", lightmodeColor: "#F6F9FE", borderColor: "#0B182A", progressValue: 60 },
  { rank: 6, title: "Complete your first transaction on the platform.", status: "Locked", progress: "Locked", icon: "/six.svg", color: "#1E181A", lightmodeColor: "#FEFCF6", borderColor: "#2A0B15", progressValue: 0 },
  { rank: 5, title: "Stake a total of 5,000 $MUTT tokens.", status: "Locked", progress: "Locked", icon: "/five.svg", color: "#1E181A", lightmodeColor: "#FEFCF6", borderColor: "#2A0B15", progressValue: 0 },
  { rank: 4, title: "Stake a total of 7,500 $MUTT tokens.", status: "Unlocked", progress: "7,500/7,500 $MUTT Staked", icon: "/four.svg", lightmodeColor: "#F6F9FE", color: "#141924", borderColor: "#0B152A", progressValue: 100 },
  { rank: 7, title: "Complete your first transaction on the platform.", status: "Locked", progress: "Locked", icon: "/seven.svg", lightmodeColor: "#FEFCF6", color: "#1E1D1A", borderColor: "#2A220B", progressValue: 0 },
  { rank: 2, title: "Stake a total of 10,000 $MUTT tokens.", status: "Locked", progress: "7,000/10,000 $MUTT Staked", icon: "/two.svg", lightmodeColor: "#F6F9FE", color: "#141B24", borderColor: "#0B182A", progressValue: 70 },
  { rank: 8, title: "Complete your first transaction on the platform.", status: "Locked", progress: "Locked", icon: "/eight.svg", lightmodeColor: "#F6F9FE", color: "#141B24", borderColor: "#0B182A", progressValue: 70 },
  { rank: 3, title: "Stake a total of 18,000 $MUTT tokens.", status: "Locked", progress: "Locked", icon: "/three.svg", color: "#1E1D1A", lightmodeColor: "#FEFCF6", borderColor: "#2A0B15", progressValue: 0 },
];