import { PageID } from '../../utils/enum';

type Props = {
  link: string | PageID;
  title: string | PageID;
};

const Link = ({ link, title }: Props) => {
  return (
    <a
      href={`#${link}`}
      className="text-sky-800 hover:text-sky-900 hover:font-bold active:font-bold"
    >
      {title}
    </a>
  );
};

export default Link;
