import type { Meta, StoryObj } from '@storybook/react-vite';

import MenuMain from '../../components/menu-main';
import { mainMenuList } from '../../globals/menu';
import { ColorThemeList } from '../../models/ColorTheme';
import { LangList } from '../../models/Langs';

const meta = {
  title: 'Personal Page/MenuMain',
  component: MenuMain,
  tags: ['autodocs'],
} satisfies Meta<typeof MenuMain>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    optList: mainMenuList.slice(0, 2),
    langList: LangList,
    colorList: ColorThemeList,
    optSel: mainMenuList[0].id,
    langSel: LangList[0],
    colorSel: ColorThemeList[0],
    changeLang: (lang: string) => { console.log('Language changed to', lang); },
    changeColor: (color: string) => { console.log('Color changed to', color); },
  },
};
