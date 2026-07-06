type Props = {
  title: string;
  children: React.ReactNode;
};

export default function DashboardCard({ title, children }: Props) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-4 text-xl font-bold text-violet-400">{title}</h2>
      {children}
    </div>
  );
}
