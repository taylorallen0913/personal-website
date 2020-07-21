interface Props {
  text: string;
}

const TerminalHeader = ({ text }: Props): JSX.Element => {
  return <span className="terminal-header-text">$ {text}</span>;
};

export default TerminalHeader;
