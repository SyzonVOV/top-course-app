import { useState } from 'react';
import { HTag, Button, PTag, Tag, Rating } from '../components';
import { withLayout } from '../layout';

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <HTag tag={'h1'}>Hello</HTag>
      <PTag >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae nobis officia ut delectus tempora similique neque aperiam hic quia facilis.</PTag>
      <Button appearance="primary" arrow='down'>Press</Button>
      <Button appearance="ghost" arrow="right">Press</Button>
      <Tag size='s'>Ghost</Tag>
      <Tag size='m' color='red'>Red</Tag>
      <Tag size='s' color='green'>Green</Tag>
      <Tag color='primary'>Green</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export default withLayout(Home);
