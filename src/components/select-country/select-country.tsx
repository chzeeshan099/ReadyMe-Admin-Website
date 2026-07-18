import React, { useState } from 'react';
import Select, { components } from 'react-select';
import Image from 'next/image';
import Flag from 'react-world-flags';

interface CountryOption {
  value: string;
  label: string;
}

const countryOptions: CountryOption[] = [
  { value: 'US', label: 'USA' },
  { value: 'GB', label: 'UK' },
  { value: 'CA', label: 'Canada' },
  { value: 'AU', label: 'Australia' },
];

interface SelectCountryProps {
  onChange?: (value: string) => void;
  value?: string;
  className?: string;
}

const SingleValue = ({ children, ...props }: any) => {
  return (
    <components.SingleValue {...props}>
      <div className="flex w-full items-center gap-2">
        <Flag
          code={props.data.value}
          style={{
            width: 24,
            height: 24,
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
        <span className="text-gray-900">
          {props.data.label.slice(0, 3).toUpperCase()}
        </span>
      </div>
    </components.SingleValue>
  );
};

const Option = ({ children, ...props }: any) => {
  return (
    <components.Option {...props}>
      <div className="flex items-center gap-2">
        <Flag
          code={props.data.value}
          style={{
            width: 24,
            height: 24,
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
        <span className="text-gray-900">{children}</span>
      </div>
    </components.Option>
  );
};

const SelectCountry: React.FC<SelectCountryProps> = ({
  onChange,
  value,
  className,
}) => {
  const [selectedCountry, setSelectedCountry] = useState<CountryOption | null>(
    value
      ? countryOptions.find((option) => option.value === value) || null
      : countryOptions[0]
  );

  const handleChange = (option: CountryOption | null) => {
    setSelectedCountry(option);
    onChange?.(option?.value || '');
  };

  const customStyles = {
    control: (base: any, state: any) => ({
      ...base,
      minHeight: '40px',
      width: '100px',
      color: 'white',
      position: 'relative',
      backgroundColor:'#E3E4E7',
      borderRadius: '0.75rem',
      boxShadow: 'none',
      paddingLeft: '0px',
      paddingRight: '0px',
      padding: '0px',
      gap: '0',
      display: 'flex',
      alignItems: 'center',
      border: 'none',
      justifyContent: 'flex-end',
    }),
    menu: (base: any) => ({
      ...base,
      backgroundColor: '#FFFFFF',
      border: '1px solid #D1D5DB',
      borderRadius: '0.5rem',
      marginTop: '4px',
      width: '140px',
    }),
    option: (base: any, state: any) => ({
      ...base,
      backgroundColor: state.isSelected
        ? '#F3F4F6'
        : state.isFocused
          ? '#F3F4F6'
          : 'transparent',
      color: '#111827',
      '&:hover': {
        backgroundColor: '#F3F4F6',
      },
      cursor: 'pointer',
      padding: '8px 12px',
    }),
    singleValue: (base: any) => ({
      ...base,
      color: '#111827',
      display: 'flex',
      alignItems: 'left',
    }),
    input: (base: any) => ({
      ...base,
      padding: '0',
    }),
    placeholder: (base: any) => ({
      ...base,
      color: '#6B7280',
    }),
    valueContainer: (base: any) => ({
      ...base,
      padding: 0,
    }),
    dropdownIndicator: (base: any) => ({
      ...base,
      position: 'absolute',
      right: '0px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#111827',
      '&:hover': {
        color:'#111827',
      },
    }),
  };

  return (
    <div
      className={`!flex !w-[100px] cursor-pointer !justify-end ${className || ''}`}
    >
      <Select<CountryOption>
        options={countryOptions}
        value={selectedCountry}
        onChange={handleChange}
        className="w-full cursor-pointer"
        classNamePrefix="react-select"
        styles={customStyles}
        components={{ SingleValue, Option, IndicatorSeparator: () => null }}
        isSearchable={false}
      />
    </div>
  );
};

export default SelectCountry;
