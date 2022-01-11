import { RatingStars as Component } from "../../components";
import { TemplateStyled } from "../../utils/index";

export default {
  title: "Components/RatingStars",
  component: Component,
  decorators: [TemplateStyled],
}

const Template = args => <Component {...args} />

export const Five = Template.bind({});