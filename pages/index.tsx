import { useRouter } from 'next/router';

import { Page } from '../components/Page/Page';
import { Editor } from '../components/Editor/Editor';

interface PixelAppParams {
  promptId?: string;
  callback?: string;
  target?: string;
}

export default function Home() {
  const router = useRouter();

  const config: PixelAppParams = {
    promptId: router.query.promptId,
    callback: router.query.callback,
    target: router.query.target,
  };

  return (
    <Page>
      <Editor />
    </Page>
  );
}
