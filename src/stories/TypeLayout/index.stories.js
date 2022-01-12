import { TypeLayout as Component } from "../../components";
import { TemplateStyled } from "../../utils/index"

export default {
  title: "Components/TypeLayout",
  component: Component,
  decorators: [TemplateStyled],
}

const Template = args => <Component {...args} />

export const Primary = Template.bind({})
Primary.args = {
  type: {
    id: 2,
    name: "Books",
    description: "This is the books section",
    Posts: [
      {
        title: "Just awesome!",
      body: "This is the best movie i've seen",
      rate: 5,
      mediaTitle: "Spider-Man: No Way Home",
      typeId: 1,
        User: {
          firstName: "Alex",
          lastName: "Malon",
          pictureId: "https://media.istockphoto.com/illustrations/blank-man-profile-head-icon-placeholder-illustration-id1298261537?k=20&m=1298261537&s=612x612&w=0&h=8plXnK6Ur3LGqG9s-Xt2ZZfKk6bI0IbzDZrNH9tr9Ok=",
          username: "alexmalon",
        }
      },
      {
        title: "Just awesome!",
        body: "This is the best movie i've seen",
        rate: 5,
        mediaTitle: "Spider-Man: No Way Home",
        typeId: 1,
        User: {
          firstName: "Alex",
          lastName: "Malon",
          pictureId: "https://media.istockphoto.com/illustrations/blank-man-profile-head-icon-placeholder-illustration-id1298261537?k=20&m=1298261537&s=612x612&w=0&h=8plXnK6Ur3LGqG9s-Xt2ZZfKk6bI0IbzDZrNH9tr9Ok=",
          username: "alexmalon",
        }
      }
    ]
  }
}