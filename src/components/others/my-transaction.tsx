import React, { useState } from 'react';
import { Text } from 'rizzui';
import Pagination from '@/components/others/pagination';

const transactions = [
  {
    token: '1.689K $MUTT',
    status: 'Success',
    amount: '-$500.06',
    date: '12.05.2024 14:30',
  },
  {
    token: '2.000K $MUTT',
    status: 'Pending',
    amount: '-$700.00',
    date: '13.05.2024 10:00',
  },
  {
    token: '0.500K $MUTT',
    status: 'Failed',
    amount: '-$100.50',
    date: '14.05.2024 09:45',
  },
  {
    token: '1.689K $MUTT',
    status: 'Success',
    amount: '-$500.06',
    date: '12.05.2024 14:30',
  },
  {
    token: '2.000K $MUTT',
    status: 'Pending',
    amount: '-$700.00',
    date: '13.05.2024 10:00',
  },
  {
    token: '0.500K $MUTT',
    status: 'Failed',
    amount: '-$100.50',
    date: '14.05.2024 09:45',
  },
  {
    token: '1.689K $MUTT',
    status: 'Success',
    amount: '-$500.06',
    date: '12.05.2024 14:30',
  },
  {
    token: '2.000K $MUTT',
    status: 'Pending',
    amount: '-$700.00',
    date: '13.05.2024 10:00',
  },
  {
    token: '0.500K $MUTT',
    status: 'Failed',
    amount: '-$100.50',
    date: '14.05.2024 09:45',
  },
  {
    token: '1.689K $MUTT',
    status: 'Success',
    amount: '-$500.06',
    date: '12.05.2024 14:30',
  },
  {
    token: '2.000K $MUTT',
    status: 'Pending',
    amount: '-$700.00',
    date: '13.05.2024 10:00',
  },
  {
    token: '0.500K $MUTT',
    status: 'Failed',
    amount: '-$100.50',
    date: '14.05.2024 09:45',
  },
];
const Mytransaction = () => {
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const [active, setActive] = useState<'Buy' | 'Claim' | 'Reward' | 'Referral'>(
    'Buy'
  );
  const timePeriodOptions = ['Buy', 'Claim', 'Reward', 'Referral'];

  return (
    <div className=" ">
      <div className="mb-4 mt-4 flex items-center justify-center pe-0 xs:justify-end xs:pe-4">
        <div className="relative z-10 flex w-fit   overflow-hidden rounded-md border-dashBordBorder bg-white">
          {timePeriodOptions.map((option, index) => (
            <button
              key={option}
              onClick={() =>
                setActive(option as 'Buy' | 'Claim' | 'Reward' | 'Referral')
              }
              type="button"
              className={`px-3.5 py-1.5 text-xs font-medium 
            ${
              active === option
                ? 'bg-yellow-primary text-black-light'
                : 'bg-transparent text-black-light'
            } 
            ${index !== timePeriodOptions.length - 1 ? '' : ''}`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <Pagination
        className="pb-5 pt-4"
        variant="solid"
        total={transactions.length}
        pageSize={pageSize}
        limit={pageSize}
        data={transactions}
        current={currentPage}
        onChange={handlePageChange}
        paginationProps={{
          showItemsPerPage: false,
          showInfo: true,
          simplify: true,
          infoFormatter: (activePage, totalPages) =>
            `${activePage}/${totalPages}`,
        }}
        renderContent={(currentPageTransactions) => (
          <div className="h-600px">
            {currentPageTransactions.map((item, index) => (
              <div
                key={index}
                className="mb-4 flex items-center justify-between px-3 md:px-6"
              >
                <div>
                  <Text className="text-base font-bold text-black-light sm:text-sm md:text-base">
                    {item.token}
                  </Text>
                  <Text className="flex items-center gap-2 text-sm font-medium text-greenPrimary-100 md:text-sm">
                    Status:
                    <Text
                      className={`text-sm font-medium ${
                        item.status === 'Success'
                          ? 'text-green-500'
                          : item.status === 'Pending'
                            ? 'text-yellow-400'
                            : 'text-red-500'
                      }`}
                    >
                      {item.status}
                    </Text>
                  </Text>
                </div>
                <div>
                  <Text className="text-base font-bold text-black-light sm:text-sm md:text-base">
                    {item.amount}
                  </Text>
                  <Text className="flex items-center gap-2 text-sm font-normal text-greenPrimary-100 md:text-sm">
                    {item.date}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        )}
      />
    </div>
  );
};

export default Mytransaction;