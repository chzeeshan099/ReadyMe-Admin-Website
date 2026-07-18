import React from 'react';
import Select, { components } from 'react-select';
import { Plus } from 'lucide-react';

type OptionType = { label: string; value: string };

interface CustomSelectProps {
    options: any;
    value: any;
    onChange: (selectedOption: any) => void;
    onInputChange?: (newValue: string, action: any) => void;
    isLoading: boolean;
    placeholder?: string;
    components?: any;
    menuWidth?: string;
    isAdd?: boolean;
    onAddClick?: any;
    isMultii?: any;
    customStyle?: boolean;
    isDisabled?: any;
    isSearchable?: any;
    getOptionValue?: any;
    getOptionLabel?: any;
    readOnly?: any;
}

const CustomDropdownIndicator = (props: any) => {
    const { selectProps }: any = props;
    return (
        <components.DropdownIndicator className="!p-0" {...props}>
            <div className="!P-0 !m-0 flex items-center">
                {/* Default Dropdown Indicator */}
                {components.DropdownIndicator && (
                    <components.DropdownIndicator className="!px-1" {...props} />
                )}

                <button
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        selectProps.onAddClick();
                    }}
                    className="min-h-7 border-s border-gray-600 px-1 transition"
                >
                    <Plus size={16} className="font-semibold text-gray-600" />
                </button>
            </div>
        </components.DropdownIndicator>
    );
};

const ReactSelect: React.FC<CustomSelectProps> = ({
    options,
    value,
    onChange,
    onInputChange,
    isLoading,
    placeholder = 'Select an option',
    components,
    menuWidth = '100%',
    isAdd = false,
    onAddClick,
    isMultii,
    readOnly,
}) => {
    return (
        <Select
            options={options}
            value={value}
            onChange={onChange}
            menuPosition="fixed"
            menuPortalTarget={document.body}
            onInputChange={onInputChange}
            placeholder={placeholder}
            isClearable
            isMulti={isMultii ? true : false}
            isLoading={isLoading}
            components={
                isAdd
                    ? {
                        DropdownIndicator: (props) => (
                            <CustomDropdownIndicator
                                {...props}
                                selectProps={{ ...props.selectProps, onAddClick }}
                            />
                        ),
                    }
                    : components
            }
            styles={{
                control: (base: any, state: any) => ({
                    ...base,
                    background: '#ffffff',
                    transition: 'none',
                    fontSize: '13px',
                    borderWidth: '0px',
                    borderColor: '#e8e6e6',
                    borderRadius: '0.375rem',
                    minHeight: state.selectProps.isMulti ? '40px' : '37px',
                    maxHeight: state.selectProps.isMulti ? '80px' : '37px',
                    cursor: 'pointer',
                    paddingTop: state.selectProps.isMulti ? '2px' : '3px',
                    paddingBottom: state.selectProps.isMulti ? '2px' : '0',
                    overflowY: state.selectProps.isMulti ? 'auto' : 'hidden',
                }),
                input: (base: any) => ({
                    ...base,
                    margin: '0 !important',
                    display: 'flex !important',
                    'input:focus': {
                        boxShadow: 'none',
                        border: 'none',
                        margin: 0,
                        padding: '0 !important',
                        width: '100%',
                        // minWidth: '100px !important',
                        height: '100%',
                    },
                }),
                option: (styles: any, { isSelected }: any) => ({
                    ...styles,
                    backgroundColor: 'transparent',
                    color: '#5E646E',
                    cursor: 'pointer',
                    ':hover': {
                        backgroundColor: '#f2f2f2',
                    },
                }),


                placeholder: (base: any) => ({
                    ...base,
                    color: 'darkGray',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                }),
                singleValue: (base) => ({
                    ...base,
                    width: '100%',
                    textOverflow: 'ellipsis',
                    color: '#5E646E',
                }),
                indicatorsContainer: (base) => ({
                    ...base,
                    padding: '0p',
                    height: '28px !important',
                }),
                menu: (base: any) => ({
                    ...base,
                    zIndex: 9999,
                    minWidth: menuWidth,
                }),
                menuList: (base: any) => ({
                    ...base,
                    maxHeight: '200px',
                    overflowY: 'auto',
                    backgroundColor: '#ffffff',
                    minWidth: '100%',
                    scrollbarWidth: 'thin',
                    '&::-webkit-scrollbar': {
                        width: '6px',
                        backgroundColor: 'transparent',
                    },
                    '&::-webkit-scrollbar-track': {
                        backgroundColor: 'transparent',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: 'rgba(156, 163, 175, 0.5)',
                        borderRadius: '4px',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: '#6b7280',
                    },
                }),

                menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                multiValue: (base: any) => ({
                    ...base,
                    backgroundColor: '#f3f4f6',
                    borderRadius: '4px',
                    margin: '2px',
                    padding: '0 2px',
                    maxWidth: 'calc(100% - 8px)',
                }),
                multiValueLabel: (base: any) => ({
                    ...base,
                    fontSize: '11px',
                    padding: '2px',
                    color: '#374151',
                }),
                multiValueRemove: (base: any) => ({
                    ...base,
                    color: '#6b7280',
                    padding: '0 4px',
                    ':hover': {
                        backgroundColor: '#e5e7eb',
                        color: '#ef4444',
                    },
                }),
            }}
            isDisabled={readOnly ? true : false}
        />
    );
};

export default ReactSelect;

const customSelectStyles = {
    control: (base: any) => ({
        ...base,
        borderColor: '#e5e7eb',
        boxShadow: 'none',
        '&:hover': {
            borderColor: '#e5e7eb',
        },
    }),
    menu: (base: any) => ({
        ...base,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: '0.375rem',
        overflow: 'hidden',
        zIndex: 10,
    }),
    menuList: (base: any) => ({
        ...base,
        maxHeight: '250px',
        overflowY: 'auto',
        scrollbarWidth: 'thin',
        '&::-webkit-scrollbar': {
            width: '6px',
            backgroundColor: 'transparent',
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(156, 163, 175, 0.5)',
            borderRadius: '4px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#6b7280',
        },
    }),
    input: (base: any) => ({
        ...base,
        outline: 'none',
        boxShadow: 'none',
        '--tw-ring-inset': 'initial',
        '--tw-ring-offset-width': '0px',
        '--tw-ring-offset-color': 'transparent',
        '--tw-ring-color': 'transparent',
        '--tw-ring-offset-shadow': 'none',
        '--tw-ring-shadow': 'none',
    }),
    option: (styles: any, { isDisabled, isFocused, isSelected }: any) => ({
        ...styles,
        color: '#111827',
        cursor: 'default',
        backgroundColor: isDisabled
            ? 'white'
            : isSelected
                ? '#f9fafb'
                : isFocused
                    ? '#f9fafb'
                    : 'white',
        ':active': {
            backgroundColor: isDisabled ? 'white' : '#f9fafb',
        },
        ':hover': {
            backgroundColor: isDisabled ? 'white' : '#f9fafb',
        },
    }),
};