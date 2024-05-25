import Gallery from "@/components/gallery/gallery";

const Page = async () => {
  const res = await fetch(
    "https://mahmoud--helal-default-rtdb.europe-west1.firebasedatabase.app/projects.json",
    { cache: "no-store" },
  );
  const projects: Project[] = await res.json();
  return (
    <div className="grid gap-16 sm:gap-20 pt-10 sm:pt-20 pb-24">
      <h1
        className="text-4xl sm:text-[56px] font-bold sm:text-center tracking-[1px]"
        style={{
          WebkitTextStrokeWidth: "3.4px",
        }}
      >
        MY <span className="text-primary-portfolio">PORTFOLIO</span>
      </h1>
      <Gallery projects={projects} />
    </div>
  );
};

export default Page;
