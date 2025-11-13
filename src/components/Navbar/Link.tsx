import { NavTitle } from "../../utils/enum";

type Props = {
  link: string | NavTitle;
  title: string | NavTitle;
};

const Link = ({ link, title }: Props) => {
  return (
    <a 
      href={`#${link}`}
      className="text-amber-800 hover:text-amber-900 hover:font-bold active:font-bold"
    >
      {title}
    </a>
  )
};

export default Link;
