import { Heading } from "../heading";
import { Text } from "../text";

export const Aboutme = () => {
  return(
    <section className="flex justify-between gap-16">
      <div className="space-y-5">
        <Heading type="h1" size="3xl" color="text-primary">SIRY Antoine</Heading>

        <Text size="base" color="gray">
          Après avoir étudié pendant 3 ans le Game Programming à Paris en C++, je souhaite me réorienter
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