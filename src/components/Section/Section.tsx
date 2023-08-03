interface ISectionProps {
  name: string;
  children?: React.ReactNode;
}

export default function Section({ name, children }: ISectionProps) {
  return (
    <section>
      <div id={name} style={{ width: "100vw", minHeight: "100vh" }}>
        {children}
        {name}
      </div>
    </section>
  );
}
