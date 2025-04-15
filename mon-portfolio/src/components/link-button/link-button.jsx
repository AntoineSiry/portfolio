export const LinkButton=(props) => {
  const {children, target, href, ...rest} = props;
  return(
    <a href={href} target={target} className="rounded border border-accent py-1 px-5 text-primary hover:border-primary">{children}</a>
  );
} 