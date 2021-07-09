import { HTag, Button } from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <HTag tag={'h1'}>Hello</HTag>
      <HTag tag={'h2'}>Hello</HTag>
      <HTag tag={'h3'}>Hello</HTag>
      <Button appearance="primary" arrow='down'>Press</Button>
      <Button appearance="ghost" arrow="right">Press</Button>
    </>
  );
}
