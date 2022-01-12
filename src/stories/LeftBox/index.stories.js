import { LeftBox as Component } from "../../components";
import { TemplateStyled } from "../../utils/index";

export default {
  title: "Components/LeftBox",
  component: Component,
  decorators: [TemplateStyled],
}

const Template = args => <Component {...args}/>

export const Primary = Template.bind({})
Primary.args = {
  user: {
    firstName: "Alex",
    lastName: "Malon",
    pictureId: "https://media.istockphoto.com/illustrations/blank-man-profile-head-icon-placeholder-illustration-id1298261537?k=20&m=1298261537&s=612x612&w=0&h=8plXnK6Ur3LGqG9s-Xt2ZZfKk6bI0IbzDZrNH9tr9Ok=",
    username: "alexmalon",
    bio: "This is my bio",
    Posts: [
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
}