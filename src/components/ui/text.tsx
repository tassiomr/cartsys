export const Title = ({ text }: { text: string }) => {
  return <h1 className="text-[3rem] capitalize">{text || "Titulo"}</h1>;
};
