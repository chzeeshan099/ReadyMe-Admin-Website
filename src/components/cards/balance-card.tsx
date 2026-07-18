import React from 'react'

const BalanceCard = ({amount , title}:any) => {
  return (
   <>
          <div className="relative overflow-hidden rounded-[8px] h-[86px] mb-5 bg-gradient-to-br from-pink-400 via-pink-500 to-rose-500">
         <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,0.12)_25%,rgba(255,255,255,0.12)_35%,transparent_35%,transparent_45%,rgba(255,255,255,0.18)_45%,rgba(255,255,255,0.18)_55%,transparent_55%)]" />
         <div className="relative z-10 p-3 text-white">
         <p className="">{title}</p>
         <p className="mt-1 text-lg sm:text-2xl font-bold tracking-wide">USDT <span>{amount}</span></p>
        </div>
      </div>
   </>
  )
}

export default BalanceCard
