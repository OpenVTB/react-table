import { addDecorator } from '@storybook/react';
import { FontsVTBGroup } from './../src/FontsVTBGroup';

addDecorator(story => (
  <>
    <FontsVTBGroup />
    {story()}
  </>
));

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};
