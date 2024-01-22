export default function Section({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="w-full">
      <div className="grid grid-cols-12 gap-9 mx-9 items-center">
        {children}
      </div>
    </section>
  )
}
