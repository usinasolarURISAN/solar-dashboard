import styled from 'styled-components';
import { getThemeByPath } from '~/utils';

const defaultChartSize = 300;
const spacingSmall = getThemeByPath('spacings.large');
const textDisabled = getThemeByPath('colors.text.disabled');
const environmentDarker = getThemeByPath('colors.environment.darker');
const environmentNeutral1 = getThemeByPath('colors.environment.neutral1');
const textNeutral1 = getThemeByPath('colors.text.neutral1');

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  height: ${defaultChartSize}px;
  margin-right: ${spacingSmall}px;

  .recharts-cartesian-axis-tick {
    tspan {
      font-size: 1rem;
    }
  }

  .recharts-cartesian-axis-ticks {
    text {
      fill: ${textDisabled};
    }
  }

  .recharts-brush {
    rect {
      fill: ${environmentDarker};
      fill-opacity: 1;
    }
  }

  .recharts-brush-slide {
    fill: ${environmentNeutral1} !important;
    fill-opacity: 1 !important;
  }

  .recharts-brush-traveller {
    rect {
      fill: ${textNeutral1};
    }
  }

  .recharts-brush-texts {
    text {
      fill: ${textDisabled};
    }
  }
`;
