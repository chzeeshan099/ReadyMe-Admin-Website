'use client';

import React, { useState } from 'react';
import { Controller, Control, FieldErrors, UseFormClearErrors, UseFormSetError, FieldValues, FieldPath } from 'react-hook-form';
import PhoneInput, { CountryData } from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import {
  parsePhoneNumberFromString,
  validatePhoneNumberLength,
  CountryCode,
} from 'libphonenumber-js/max';
import { Text } from 'rizzui';

type WorldPhoneNumberProps<T extends FieldValues> = {
  name: FieldPath<T>;
  control: Control<T>;
  errors: FieldErrors<T>;
  clearErrors: UseFormClearErrors<T>;
  setError: UseFormSetError<T>;
  label?: string;
  placeholder?: string;
  defaultCountry?: string;
  onCountryChange?: (data: {
    countryCode: string;
    countryName: string;
  }) => void;
};

const PhoneNumber = <T extends FieldValues>({
  name,
  control,
  errors,
  clearErrors,
  setError,
  label = 'Mobile Number',
  placeholder = 'Enter Your Mobile Number',
  defaultCountry = 'us',
  onCountryChange,
}: WorldPhoneNumberProps<T>) => {
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
  const [isFocused, setIsFocused] = useState(false);

  const fieldError = errors[name as FieldPath<T>];
  const errorMessage =
    fieldError && typeof fieldError === 'object' && 'message' in fieldError
      ? String(fieldError.message || '')
      : '';

  return (
    <div className="relative">
      <p className="pl-1 mb-1">{label}</p>

      <Controller
  name={name}
  control={control}
  render={({ field: { onChange, value, onBlur } }) => (
    <PhoneInput
      country={selectedCountry}
      value={typeof value === 'string' ? value.replace('+', '') : ''}
      onChange={(phone: string, country: CountryData) => {
        const nextCountryCode = country.countryCode || defaultCountry;
        const nextCountryName = country.name || 'selected country';
        const dialCode = country.dialCode ? `+${country.dialCode}` : '';

        setSelectedCountry(nextCountryCode);
           onCountryChange?.({
                countryCode: dialCode,
                countryName: nextCountryName,
              });

        onChange(phone ? `+${phone}` : '');
      }}
      onFocus={() => setIsFocused(true)}
      onBlur={(e) => {
        setIsFocused(false);
        onBlur();
      }}
      enableSearch
      countryCodeEditable={false}
      placeholder={placeholder}
      containerStyle={{ width: '100%' }}
      containerClass="w-full"
      inputClass="outline-none"
      inputStyle={{
        width: '100%',
        height: '48px',
        backgroundColor: 'transparent',
        color: '#111827',
        fontSize: '14px',
        border: isFocused ? '2px solid #ec4899' : '1px solid #d1d5db',
        borderRadius: '0.5rem',
        paddingLeft: '48px',
        paddingRight: '12px',
        boxShadow: isFocused
          ? '0 0 0 1px rgba(236,72,153,0.45)'
          : '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      }}
      buttonStyle={{
        border: '1px solid #d1d5db',
        borderRight: 'none',
        borderRadius: '0.5rem 0 0 0.5rem',
        backgroundColor: 'transparent',
      }}
    />
  )}
/>

      {errorMessage && (
        <Text className="absolute -bottom-5 text-xs text-red-500">
          {errorMessage}
        </Text>
      )}
    </div>
  );
};

export default PhoneNumber;