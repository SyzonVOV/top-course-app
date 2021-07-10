import { HTag, Button, PTag } from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <HTag tag={'h1'}>Hello</HTag>
      <PTag appearance="big">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</PTag>
      <PTag >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae nobis officia ut delectus tempora similique neque aperiam hic quia facilis.</PTag>
      <PTag appearance="small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde molestiae natus, dicta recusandae, accusantium temporibus cupiditate provident nesciunt quidem quos tenetur quo repellat cumque incidunt magni quibusdam odio iure eveniet. Sapiente quidem nam facere modi, accusamus, aperiam suscipit beatae provident dolorem vitae itaque earum incidunt fugiat nihil quasi, quisquam cum!</PTag>
      <Button appearance="primary" arrow='down'>Press</Button>
      <Button appearance="ghost" arrow="right">Press</Button>
    </>
  );
}
