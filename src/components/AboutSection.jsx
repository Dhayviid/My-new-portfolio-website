import { Briefcase, Code, User } from "lucide-react";
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
              <span className="text-primary font-semibold">Hi</span> there I’m
              David, a front-end developer and tech enthusiast. I turn caffeine
              and code into pixel-perfect, responsive experiences. I have a
              love-hate relationship with CSS (mostly love).
            </p>
            <p className="text-muted-foreground">
              I craft fast, accessible websites using HTML, CSS, JavaScript, and
              React. I geek out over performance tweaks and user-centric design.
              When I’m not fixing 2 AM bugs, I’m sharing nerdy insights and
              leveling up .
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="https://www.canva.com/design/DAGkEvAifQs/e6sww_S5f1VntPnJZn2yKQ/view?utm_content=DAGkEvAifQs&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf47ebbf4ab"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                target="_blank"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building fast, responsive websites with Tailwindcss,
                    JavaScript, and React.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Crafting user-centered interfaces that feel intuitive and
                    engaging
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Digital Marketing</h4>
                  <p className="text-muted-foreground">
                    Amplifying your brand with SEO, social media, and targeted
                    campaigns
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
