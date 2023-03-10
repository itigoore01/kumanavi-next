interface Props {
  avatar: string | null;
}

// TODO あとでアバター画像を表示する実装を行う
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function OgImageResumeAvatar({ avatar }: Props) {
  return <div tw="h-24 w-24 border border-dotted border-white"></div>;
}
