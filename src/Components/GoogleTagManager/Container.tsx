import { GoogleTagManager  } from '@next/third-parties/google'

export function Container({ gtmId }: { gtmId: string }) {
  return (
    <GoogleTagManager gtmId={gtmId} />
  );
}
