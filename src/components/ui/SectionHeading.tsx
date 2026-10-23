export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  className = "",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div className={className}>
      <p className={`eyebrow ${dark ? "text-yellow-400" : "text-navy-700"}`}>
        <span
          aria-hidden="true"
          className="mr-3 inline-block h-0.5 w-6 -translate-y-0.5 bg-yellow-500 align-middle"
        />
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-[2.75rem] ${
          dark ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-xl text-base leading-relaxed ${
            dark ? "text-white/75" : "text-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
