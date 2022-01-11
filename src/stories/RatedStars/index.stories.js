import { RatedStars as Component } from "../../components";
import { TemplateStyled } from "../../utils/index";

export default {
  title: "Components/RatedStars",
  component: Component,
  decorators: [TemplateStyled],
}

const Template = args => <Component {...args} />

export const Five = Template.bind({})
Five.args = {
  value: 5
}