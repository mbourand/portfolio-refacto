export type TagProps = {
  label: string;
  color: string;
};

export const Tag = ({ label, color }: TagProps) => (
  <div
    className="flex flex-row gap-2 border-2 rounded-full items-center px-2 py-1"
    style={{ borderColor: color, backgroundColor: `${color}1F` }}
  >
    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
    <span className="text-xs rounded-full">{label}</span>
  </div>
);
