interface Props {
  isOpen: boolean;
  size: number;
}

const ExpandingIndicator = ({ isOpen, size }: Props) => {
  return <span>{size ? (isOpen ? "-" : "+") : ""}</span>;
};

export default ExpandingIndicator;
