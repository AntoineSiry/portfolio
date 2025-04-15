import { cn } from "../utils/style";
import { Label } from "./label/label";
import { Text } from "./text/text";
import { Heading } from "./heading/heading";


export const Projectcard = ({ title, role, tasks, techs, type, link}) => {
  return (
    <div>
      <div className="flex justify-between flex-col sm:flex-row">
        <div className="flex flex-wrap items-center gap-2">
          <Text size="lg" className="uppercase">{title}</Text>
          <Label type={type} link={link} />
        </div>
      </div>
      <Text className="mb-1">{role}</Text>
      {tasks.map(line => <Text key={line} color="gray" size="sm" className="ml-1">● {line}</Text>)}
      <Text size="sm" color="gray" className="mt-1">
        <span className="text-white">Technologies :</span> {techs.join(" • ")}
      </Text>
    </div>
  );
};

export const Aboutme = () => {
  return(
    <section className="flex justify-between gap-16">
      <div className="space-y-5">
        <Heading type="h1" size="3xl" color="text-primary">SIRY Antoine</Heading>

        <Text size="base" color="gray">
          {/*Ecrire une description*/}
          Après avoir étudié pendant 3 ans le developpement orienté objet a Paris, je souhaite me réorienter
          dans le developpement web.
        </Text>
      </div>

      <div className="relative h-32 w-32 shrink-0 rounded-full hidden sm:block">
      <img
        className="rounded-full border-2 object-cover"
        src="/pictures/me.webp"
        width={100}
        height={100}
      />
      </div>
    </section>
  );
}
