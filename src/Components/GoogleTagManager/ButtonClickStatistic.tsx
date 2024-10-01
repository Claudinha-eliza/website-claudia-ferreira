import { GoogleTagManager  } from '@next/third-parties/google'

export function ButtonClickTracking({ gtmId }: { gtmId: string }) {
  return (
    <GoogleTagManager gtmId={gtmId} />
  );
}
