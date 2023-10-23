import React, { FC, useState } from 'react';
import {
  DefaultItemWrapper,
  FirstItemWrapper,
  ItemText,
  LastItemWrapper,
  Wrapper,
} from './styles';

type RenderOptionsProps = {
  option: string;
  onSelectOption: (option: string) => void;
  selectedOption: string;
};

const isFirst = (index: number) => index === 0;
const isLast = (array: string[], index: number) => array.length - 1 === index;

const renderFirstItem = ({
  option,
  onSelectOption,
  selectedOption,
}: RenderOptionsProps) => {
  return (
    <FirstItemWrapper
      isActive={selectedOption === option}
      onClick={() => onSelectOption(option)}
      key={option}
    >
      <ItemText>{option}</ItemText>
    </FirstItemWrapper>
  );
};

const renderDefaultItem = ({
  option,
  onSelectOption,
  selectedOption,
}: RenderOptionsProps) => {
  return (
    <DefaultItemWrapper
      isActive={selectedOption === option}
      onClick={() => onSelectOption(option)}
      key={option}
    >
      <ItemText>{option}</ItemText>
    </DefaultItemWrapper>
  );
};

const renderLastItem = ({
  option,
  onSelectOption,
  selectedOption,
}: RenderOptionsProps) => {
  return (
    <LastItemWrapper
      isActive={selectedOption === option}
      onClick={() => onSelectOption(option)}
      key={option}
    >
      <ItemText>{option}</ItemText>
    </LastItemWrapper>
  );
};

const Selector: FC<SelectorProps> = ({
  onSelectOption = () => ({}),
  options = ['1D', '1S', '1M'],
}) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const onSelectOptionNative = (option: string) => {
    setSelectedOption(option);
    if (onSelectOption) onSelectOption(option);
  };

  return (
    <Wrapper>
      {options.map((option, index) => {
        if (isFirst(index))
          return renderFirstItem({
            option,
            onSelectOption: onSelectOptionNative,
            selectedOption,
          });

        if (isLast(options, index))
          return renderLastItem({
            option,
            onSelectOption: onSelectOptionNative,
            selectedOption,
          });

        return renderDefaultItem({
          option,
          onSelectOption: onSelectOptionNative,
          selectedOption,
        });
      })}
    </Wrapper>
  );
};

export default Selector;
