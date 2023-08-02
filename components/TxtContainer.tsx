export default function TextContainer({
  classNames,
  children,
  variant,
}: {
  classNames?: string;
  children: React.ReactNode;
  variant: "title" | "p";
}) {
  return (
    <div className={`flex m-2 pt-2 ${classNames}`}>
      {variant == "title" ? <h1>{children}</h1> : <p>{children}</p>}
    </div>
  );
}
