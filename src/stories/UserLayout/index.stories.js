import { UserLayout as Component } from "../../components";
import { TemplateStyled } from "../../utils/index"

export default {
  title: "Components/UserLayout",
  component: Component,
  decorators: [TemplateStyled],
}

const Template = args => <Component {...args} />

export const Primary = Template.bind({})
Primary.args = {
  user: {
    firstName: "Alex",
    lastName: "Malon",
    username: "alex123",
    bio: "This is my bio",
    pictureId: "https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Alien-512.png",
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
          pictureId: "https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Alien-512.png",
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
          pictureId: "https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Alien-512.png",
          username: "alexmalon",
        }
      }
    ]
  }
}