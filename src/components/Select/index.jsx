import React, { useState } from 'react';

import ArrowIcon from '../ArrowIcon';

import {
  dropdownContainer, 
  arrow,
  dropdownHeader, 
  dropdownList,
  dropdownItem,
} from './styles.module.css';

const defaultOptions = ["Zendesk", "Intercom", "Gorglas"];

const Select = ({ formState, onChangeFormValue, options = defaultOptions, field }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);
  const onOptionSelect = (option) => {
    setIsOpen(false);
    setSelectedOption(option);
    // mimics real event
    const artificialEvent = { target: { value: option}};    
    onChangeFormValue(artificialEvent, field )
  }

  return (
    <div className={dropdownContainer}>
      <div className={dropdownHeader} onClick={toggling}>
        {selectedOption ?? "Select an option"}
        <span className={arrow} onClick={toggling}>
          <ArrowIcon down={!isOpen}/>
        </span>
      </div>
      { isOpen && 
      <div className={dropdownList}>
        {options.map(option => (
         <div
          key={`key-${option}`} 
          onClick={() => onOptionSelect(option)} 
          className={dropdownItem}>
            {option}
          </div>
        ))}
      </div>      
      }
    </div>
  );
}

export default Select;