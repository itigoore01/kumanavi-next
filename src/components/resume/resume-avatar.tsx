interface Props {
  avatar: string | null;
}

// TODO あとでアバター画像を表示する実装を行う
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ResumeAvatar({ avatar }: Props) {
  return <div className="h-24 w-24 border border-dotted"></div>;
}
