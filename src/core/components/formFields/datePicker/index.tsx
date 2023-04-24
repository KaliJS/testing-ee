import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import PickerComponent from './pickerComponent';
import DatePickerWrapper from './pickerWrapper';

export type DateType = Date | null | undefined;
export type AllDateType = DateType | [Date | null, Date | null];

interface CustomDatePickerProps {
  label?: string;
  value?: DateType;
  disabled?: boolean;
  readOnly?: boolean;
  minDate?: DateType;
  maxDate?: DateType;
  startDate?: DateType;
  endDate?: DateType;
  handleChange?: (date: any) => void;
  selectsRange?: boolean;
  isClearable?: boolean;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  label = '',
  value = null,
  disabled = false,
  readOnly = false,
  minDate = null,
  maxDate = null,
  startDate = null,
  endDate = null,
  handleChange,
  selectsRange = false,
  isClearable = true,
}) => {
  const [startDateValue, setStartDateValue] = useState<DateType>(selectsRange ? startDate : value);
  const [endDateValue, setEndDateValue] = useState<DateType>(endDate);

  const handleOnChangeRange = (date: any) => {
    if (selectsRange) {
      const [start, end] = date;
      setStartDateValue(start);
      setEndDateValue(end);
    } else {
      setStartDateValue(date);
    }
    handleChange?.(date);
  };

  return (
    <DatePickerWrapper>
      <DatePicker
        selectsRange={selectsRange}
        isClearable={isClearable}
        monthsShown={selectsRange ? 2 : 1}
        disabled={disabled}
        readOnly={readOnly}
        showYearDropdown
        showMonthDropdown
        selected={startDateValue}
        minDate={minDate}
        maxDate={maxDate}
        startDate={startDateValue}
        endDate={endDateValue}
        dateFormat="MMMM d, yyyy"
        shouldCloseOnSelect={selectsRange ? false : true}
        id="month-year-dropdown"
        placeholderText="MM-DD-YYYY"
        popperPlacement={'bottom-start'}
        onChange={(date: AllDateType) => {
          handleOnChangeRange(date);
        }}
        customInput={
          <PickerComponent
            label={label}
            readOnly={readOnly}
            selectsRange={selectsRange}
            start={startDateValue as Date | number}
            end={endDateValue as Date | number}
          />
        }
      />
    </DatePickerWrapper>
  );
};

export default CustomDatePicker;
