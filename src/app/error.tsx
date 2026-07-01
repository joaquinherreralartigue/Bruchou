"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-8">
      <p className="font-fraunces text-[2rem] font-normal text-[#071227]">
        Algo salió mal
      </p>
      <button
        onClick={reset}
        className="border border-[#233465] px-5 py-2.5 font-poppins text-[12px] font-semibold text-[#233465] hover:bg-[#233465] hover:text-white transition-colors rounded-[2px]"
      >
        Reintentar
      </button>
    </div>
  );
}
