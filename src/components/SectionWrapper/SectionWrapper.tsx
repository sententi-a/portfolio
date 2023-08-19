interface ISectionProps {
  name: string;
  children?: React.ReactNode;
}

export default function SectionWrapper({ name, children }: ISectionProps) {
  return (
    <section className="section-wrapper">
      <div id={name} className="section">
        {children}
      </div>
    </section>
  );
}
