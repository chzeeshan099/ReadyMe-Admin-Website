"use client";
import { useState } from 'react';
import { Text, Button } from 'rizzui';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface AllocationBox {
    percentage: string;
    title: string;
}

interface FaqItem {
    question: string;
    answer: string;
}

const TokenAllocation: AllocationBox[] = [
    { percentage: "20%", title: "Community Rewards" },
    { percentage: "35%", title: "Token Sales" },
    { percentage: "15%", title: "Liquidity" },
    { percentage: "10%", title: "Team & Dev" },
    { percentage: "10%", title: "Marketing" },
    { percentage: "8%", title: "Burning Events" },
    { percentage: "7%", title: "Staking/Yield" },
    { percentage: "5%", title: "to Liquidity Pool" },
    { percentage: "1%", title: "to Marketing" },
];

const FaqItems: FaqItem[] = [
    {
        question: "Why does $MUTT have such a high total supply of 1 quadrillion tokens?",
        answer: "The large supply allows for strategic deflationary measures like burns and staking rewards. The goal is to create a long-term, deflationary effect, reducing supply over time and increasing scarcity as the community grows."
    },
    {
        question: "How can I buy $MUTT tokens?",
        answer: "You can purchase $MUTT tokens on supported decentralized exchanges like Uniswap. Make sure to use the official contract address to avoid scams."
    },
    {
        question: "What is the purpose of the liquidity pool allocation?",
        answer: "The liquidity pool allocation ensures that there is sufficient liquidity for trading $MUTT tokens, reducing price volatility and providing stability for the token."
    },
    {
        question: "Is there a staking mechanism for $MUTT?",
        answer: "Yes, $MUTT offers staking options where holders can lock their tokens to earn rewards over time, incentivizing long-term holding and participation in the ecosystem."
    },
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const contentVariants = {
        hidden: { height: 0, opacity: 0 },
        visible: { height: "auto", opacity: 1 }
    };

    return (
        <motion.div
            className="relative w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="absolute inset-0 z-0 w-full">
                <Image
                    src='/money-mutt/faq-background.png'
                    alt="faq background"
                    fill
                    priority
                    className="object-cover w-full"
                />
            </div>
            <motion.div className="max-w-7xl mx-auto sm:px-0 px-4 py-16 flex flex-col lg:flex-row gap-8 relative z-0">
                <motion.div
                    variants={itemVariants}
                    className="lg:w-1/3 w-full"
                >
                    <div className="bg-white backdrop-blur-sm rounded-xl p-6 h-[600px]">
                        <Text className="text-2xl text-center font-bold py-4 text-greenPrimary-1000">
                            $MUTT Token Allocation
                        </Text>
                        <div className="flex flex-col">
                            {TokenAllocation.map((item, index) => (
                                <div key={index} className="flex gap-2 items-center p-3 border-b border-gray-100">
                                    <Text className="text-lg font-bold text-greenPrimary-1000">{item.percentage}</Text>
                                    <Text className="text-gray-250 text-md font-medium">{item.title}</Text>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    variants={itemVariants}
                    className="w-full"
                >
                    <div className="bg-yellow-primary backdrop-blur-sm rounded-xl p-8 min-h-[600px] overflow-hidden relative">
                        <Text className="text-2xl sm:text-3xl font-bold mb-4 text-greenPrimary-1000">
                            Presentations May Vary... The Result is the Same!
                        </Text>
                        <Text className="text-lg sm:text-2xl font-bold text-greenPrimary-1000 mb-8">
                            Introduction to Buying $moneymutt Coin
                        </Text>

                        <div className="mb-8 relative">
                            <AnimatePresence>
                                {FaqItems.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className="border-b border-yellow-250 p-1"
                                    >
                                        <div
                                            className="flex cursor-pointer items-center justify-between text-yellow-350 py-5 text-xl font-semibold"
                                            onClick={() => toggleItem(index)}
                                        >
                                            {item.question}
                                            <span className=" text-xl sm:text-2xl transition-transform duration-300">
                                                {openIndex === index ? (
                                                    <IoIosArrowUp className="h-6 w-6" />
                                                ) : (
                                                    <IoIosArrowDown className="h-6 w-6" />
                                                )}
                                            </span>
                                        </div>
                                        <AnimatePresence>
                                            {openIndex === index && (
                                                <motion.div
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="hidden"
                                                    variants={contentVariants}
                                                    className="mb-7 text-yellow-350"
                                                >
                                                    {item.answer}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        <div className="absolute -bottom-2 flex  gap-4 mt-16 sm:w-full  pr-16 pb-6 justify-between">
                            <Button className="bg-gray-1400 text-yellow-primary hover:bg-gray-800 rounded-full px-6">
                                Read More
                            </Button>
                            <Button variant="outline" className="rounded-full text-gray-1400 border border-gray-800">
                                Buy MoneyMutt
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default FAQ;
