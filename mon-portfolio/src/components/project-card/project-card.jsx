import { Label } from "../label";
import { Text } from "../text";

export const Projectcard = ({ title, role, tasks, techs, type, link}) => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row flex-wrap items-center gap-2">
        <Text size="lg" className="uppercase">{title}</Text>
        <Label type={type} link={link} />
      </div>
      <Text className="mb-1">{role}</Text>
      {tasks.map(line => <Text key={line} color="gray" size="sm" className="ml-1">● {line}</Text>)}
      <Text size="sm" color="gray" className="mt-1">
        <span className="text-white">Technologies :</span> {techs.join(" • ")}
      </Text>
    </div>
  );
};