export default function BusquedaPage() {
  return (
    <main className="min-h-screen bg-surface-default px-[var(--space-inline)] py-[var(--space-section)]">
      <div className="mx-auto max-w-[1280px]">
        <p className="font-poppins text-[13px] font-medium tracking-[0.22px] text-[#657ba2]">
          Búsqueda asistida
        </p>
        <h1 className="mt-3 max-w-[18ch] font-fraunces text-[clamp(2.5rem,2.02rem+2.5vw,4rem)] font-normal leading-[1.05] text-text-primary">
          Una capa de navegación inteligente.
        </h1>
        <p className="mt-6 max-w-[42rem] font-poppins text-[clamp(0.9375rem,0.9rem+0.18vw,1rem)] leading-[1.7] text-[#4e5862]">
          Esta ruta quedó como base para la búsqueda asistida. Ahora evita el 404 que rompía el prefetch del header.
        </p>
      </div>
    </main>
  );
}
