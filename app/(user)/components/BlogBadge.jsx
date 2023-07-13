import { Separator } from "@/components/ui/separator";

export const BlogBadge = ({ icon, text, separator }) => {
  return (
    <div className="flex gap-2 items-center">
      {icon}
      <h1 className="text-xs">{text}</h1>

      {separator && <Separator orientation="vertical" className="h-2" />}
    </div>
  );
};
