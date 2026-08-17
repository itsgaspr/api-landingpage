export default function SectionHeader({ title, description, large = false }) {
  return (
    <div className="text-left">
      <h2
        className={`font-medium tracking-tight text-white ${
          large ? "text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-tight" : "text-2xl sm:text-3xl"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-neutral-400 sm:text-lg">{description}</p>
      )}
    </div>
  );
}
