export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Enthusiast
            </h3>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              reiciendis voluptates ipsa, suscipit delectus officiis nihil quia!
              Cum unde nihil temporibus optio ratione et maxime.
            </p>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum architecto tempora iure voluptates iste quae quo
              repellendus facilis, quia perspiciatis qui libero debitis
              reprehenderit magnam.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center"></div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};
