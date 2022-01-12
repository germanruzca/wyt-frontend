import { Recommendations as Component } from "../../components";
import { TemplateStyled } from "../../utils/index";

export default {
  title: "Components/Recommendations",
  component: Component,
  decorators: [TemplateStyled],
}

const Template = args => <Component {...args} />

export const Primary = Template.bind({})
Primary.args = {
  posts: [
    {
      mediaTitle: "Spider-Man: No Way Home",
      typeId: 1,
      rate: 5
    },
    {
      mediaTitle: "Life Is A Highway",
      typeId: 4,
      rate: 4
    }
  ]
}