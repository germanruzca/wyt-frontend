import { Stars as Component } from "../../components";

export default {
  title: "Components/Stars",
  component: Component
}

const Template = args => <Component {...args} />

export const Five = Template.bind({})
Five.args = {
  value: 5,
}

export const Three = Template.bind({})
Three.args = {
  value: 3,
}