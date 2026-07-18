'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Text } from 'rizzui';

type ProgressBarProps = {
    coins: number;
    levelData: { level: number; requiredCoins: number };
};

const ProgressBar: React.FC<ProgressBarProps> = ({ coins, levelData }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (coins < levelData.requiredCoins) {
            setProgress((coins / levelData.requiredCoins) * 100);
        } else {
            setProgress(100);
        }
    }, [coins, levelData]);

    const formatToK = (num: number): string => {
        if (num >= 1000) {
            return (num / 1000).toFixed(2).replace(/\.?0+$/, '') + 'k';
        }
        return num.toString();
    };

    const showBone = progress < 100;

    return (
        <div>
            <Text className="text-sm pt-2 mt-4 text-center font-medium text-gray-800">
                You need <span className='text-yellow-400'>
                    {formatToK(levelData.requiredCoins - coins)} more $MUTT
                </span> coins to level up
            </Text>

            <div className="w-full flex md:flex-row  flex-col gap-4 items-center  py-4  rounded-lg">

                <div className="flex w-full  md:w-17 items-center space-x-3">
                    <Image src="/money-mutt/cat.svg" alt="Husky" width={48} height={50} />
                    <div className="text-gray-800">
                        <Text className="text-sm font-medium">Husky</Text>
                        <Text className="text-xs text-gray-800 font-bold">Current Rank</Text>
                    </div>
                </div>
                <div className='w-full md:w-4/6 flex gap-4 items-center'>
                    <div className="relative w-full h-11 p-1 bg-white border border-white rounded-md overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 rounded-md transition-all duration-500 ease-in-out "
                            style={{ width: `${progress}%` }}
                        />

                        <div
                            className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 ml-2 bg-black-light text-sm font-bold px-2 py-0.5 rounded shadow-md"
                            style={{ left: `calc(${progress === 100 ? 98 : progress}% - 10px)` }}
                        >
                            <Text className='text-white font-bold text-sm '> {levelData?.level}</Text>

                        </div>

                        <div
                            className="absolute top-1/2 transform -translate-y-1/2 ml-24 -translate-x-1/2 transition-all duration-500"
                            style={{ left: `calc(${progress}% - 12px)` }}
                        >
                            <Image src="/money-mutt/husky.svg" alt="Dog" width={32} height={32} />
                        </div>

                        {showBone && (
                            <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
                                <Image src="/money-mutt/bone.svg" alt="Bone" width={22} height={22} />
                            </div>
                        )}
                        <div
                            className="absolute top-1/2 transform -translate-y-1/2 right-2 ml-8 text-black text-sm font-bold"
                            style={{ left: `calc(${progress}% - 20px)` }}
                        >
                            {progress.toFixed(2)}%
                        </div>
                    </div>

                    {progress <= 100 && (
                        <div className="">
                            <button className="px-4 py-2 bg-white border-white hover:bg-blue-700 text-gray-800 text-sm rounded-md font-bold transition-all duration-200">
                                {levelData.level + 1}
                            </button>
                        </div>
                    )}
                </div>
                <div className="flex justify-end w-full md:w-18 items-center space-x-3">
                    <div className="text-gray-800 text-right">
                        <Text className="text-sm font-medium">Golden Retriever</Text>
                        <Text className="text-xs text-gray-800 font-bold">Next Rank</Text>
                    </div>
                    <Image src="/money-mutt/dog.svg" alt="Dog" width={48} height={50} />
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
