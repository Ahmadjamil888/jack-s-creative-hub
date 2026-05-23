interface Props {
  label?: string;
  href?: string;
}

export function LiveProjectButton({ label = "Live Project", href = "#" }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition-colors hover:bg-[#D7E2EA]/10"
    >
      {label}
    </a>
  );
}