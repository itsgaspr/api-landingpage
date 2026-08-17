export default function SectionHeader({ title, description, large = false }) {
  return (
    <div className="max-w-2xl text-left">
      <h2
        className={`font-medium tracking-[-0.02em] text-white ${
          large
            ? "text-2xl sm:text-3xl lg:text-[2.625rem] lg:leading-[1.15]"
            : "text-xl sm:text-2xl lg:text-3xl"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm leading-7 text-neutral-400 sm:mt-4 sm:text-base sm:leading-7">
          {description}
        </p>
      )}
    </div>
  );
}
