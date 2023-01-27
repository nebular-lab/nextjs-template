import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CustomBox } from './Box';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Card',
  component: CustomBox,
} as ComponentMeta<typeof CustomBox>;

const Template: ComponentStory<typeof CustomBox> = () => <CustomBox />;

// 👇 Each story then reuses that template
export const Primary = Template.bind({});
