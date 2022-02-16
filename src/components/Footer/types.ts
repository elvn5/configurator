type TButtons = {
  title?: string,
  onClick?: ()=>void,
  className?: string;
}

type TFooterProps = {
  buttons?: TButtons[];
}

export type {
  TFooterProps
};
