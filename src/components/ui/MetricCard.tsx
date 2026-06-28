type MetricCardProps = {
  value: string;
  label: string;
};

export default function MetricCard({ value, label }: MetricCardProps) {
  return (
    <div className="glass rounded-2xl p-5">
      <p className="text-3xl font-bold text-white">{value}</p>
      <p className="mt-2 text-sm leading-6 text-gray-400">{label}</p>
    </div>
  );
}
