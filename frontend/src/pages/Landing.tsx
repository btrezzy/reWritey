import { Link } from "react-router-dom";
import landingTopImage from "../assets/landingTopImage.png";
import landingImage2 from "../assets/landingImage2.jpg";
import landingImage3 from "../assets/landingImage3.jpg";
import landingLastImage from "../assets/landingLastImage.jpg";
import BlogHeader from "./BlogHeader";

export default function Landing() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <BlogHeader />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Elevate Your Writing with rewritey
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Discover a world of inspiration and insights with our
                    curated blog. Explore the latest trends, techniques, and
                    tips to take your writing to new heights.
                  </p>
                </div>
                <Link
                  to="/signup"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Read the Blog
                </Link>
              </div>
              <img
                src={landingTopImage}
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Featured Blog Posts
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our latest blog posts and discover valuable insights
                  to elevate your writing.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              <div className="flex flex-col rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
                <img
                  src={landingImage3}
                  width="300"
                  height="200"
                  alt="Blog Post"
                  className="aspect-[3/2] w-full rounded-t-lg object-cover"
                />
                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <h3 className="text-xl font-bold">
                      Mastering the Art of Storytelling
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Discover the secrets to crafting captivating stories that
                      engage your readers.
                    </p>
                  </div>
                  <Link
                    to="/signup"
                    className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Read More
                  </Link>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
                <img
                  src={landingImage2}
                  width="300"
                  height="200"
                  alt="Blog Post"
                  className="aspect-[3/2] w-full rounded-t-lg object-cover"
                />
                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <h3 className="text-xl font-bold">
                      Unleashing Your Creative Potential
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Unlock your inner creativity and transform your writing
                      with these powerful techniques.
                    </p>
                  </div>
                  <Link
                    to="/signup"
                    className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Read More
                  </Link>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
                <img
                  src={landingLastImage}
                  width="300"
                  height="200"
                  alt="Blog Post"
                  className="aspect-[3/2] w-full rounded-t-lg object-cover"
                />
                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <h3 className="text-xl font-bold">
                      Crafting Compelling Content
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Learn the secrets to creating content that captivates and
                      engages your audience.
                    </p>
                  </div>
                  <Link
                    to="/signup"
                    className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 rewritey. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            to="/signup"
            className="text-xs hover:underline underline-offset-4"
          >
            Terms of Service
          </Link>
          <Link
            to="/signup"
            className="text-xs hover:underline underline-offset-4"
          >
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
