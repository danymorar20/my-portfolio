import { IconType } from "react-icons";

interface Props {
  name: string;
  Icon: IconType;
}

export default function SkillItem({ name, Icon }: Props) {
  return (
    <div className="mx-4 flex flex-col items-center">
      <Icon className="text-4xl mb-2" />
      <div>{name}</div>
    </div>
  );
}
