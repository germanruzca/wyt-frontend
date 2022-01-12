import { UserLayout, LeftBox, RigthBox } from "../../../components"
import { MainLayout } from "../../../components/Layouts"

const User = () => {
  return (
    <>
      <MainLayout>
        <LeftBox/>
        <UserLayout/>
        <RigthBox/>
      </MainLayout>
    </>
  );
};

export { User };
export default User;