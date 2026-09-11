import { auth } from '@/auth';
import LogoIcon from '@/components/logo-icon';
import Session from '@/components/session';
import { Button } from '@repo/shadcn/button';
import { ModeSwitcher } from '@repo/shadcn/mode-switcher';
import { RichTextEditor } from '@repo/shadcn/tiptap/rich-text-editor';
import Link from 'next/link';

const Page = async () => {
  const session = await auth();
  return (
    <section className="container flex min-h-dvh flex-col">
      <nav className="flex w-full items-center justify-between py-5">
        <Link href="/">
          <LogoIcon width={30} height={30} />
        </Link>
        <ModeSwitcher />
        <Session />
      </nav>
      <div>
        {/*<MediaPlayer>*/}
        {/*  <MediaPlayerVideo>*/}
        {/*    <source*/}
        {/*      src="https://www.diceui.com/assets/cloud.mp4"*/}
        {/*      type="video/mp4"*/}
        {/*    />*/}
        {/*  </MediaPlayerVideo>*/}
        {/*  <MediaPlayerControls className="flex-col items-start gap-2.5">*/}
        {/*    <MediaPlayerControlsOverlay />*/}
        {/*    <MediaPlayerSeek />*/}
        {/*    <div className="flex w-full items-center gap-2">*/}
        {/*      <div className="flex flex-1 items-center gap-2">*/}
        {/*        <MediaPlayerPlay />*/}
        {/*        <MediaPlayerSeekBackward />*/}
        {/*        <MediaPlayerSeekForward />*/}
        {/*        <MediaPlayerVolume expandable />*/}
        {/*        <MediaPlayerTime />*/}
        {/*      </div>*/}
        {/*      <div className="flex items-center gap-2">*/}
        {/*        <MediaPlayerPlaybackSpeed />*/}
        {/*        <MediaPlayerPiP />*/}
        {/*        <MediaPlayerFullscreen />*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </MediaPlayerControls>*/}
        {/*</MediaPlayer>*/}
      </div>
      <div className="my-5">
        <RichTextEditor />
      </div>
      <div className="flex min-h-dvh w-full flex-1 flex-col items-center justify-center gap-5">
        <h2>Welcome to the Turborepo</h2>
        <p>This is a monorepo for a Next.js app and a React library.</p>
        {session?.user && (
          <div className="flex flex-col items-center justify-center gap-5">
            <p>You are logged in as {session?.user.email}</p>
            <Button asChild>
              <Link href={`/${session?.user.username}`}>Your Profile</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Page;
