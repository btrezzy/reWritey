import { Link } from "react-router-dom" 
import aboutImage1 from "../assets/aboutImage1.jpg"
import aboutImage2 from "../assets/aboutsImage2.jpg"
import aboutImage3 from "../assets/aboutImage.3.jpg"
import aboutMain from "../assets/aboutMain.jpg"
import BlogHeader from "../pages/BlogHeader"


export default function AboutUs() {
  return (

    <div>
        <BlogHeader />
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Welcome to Our Blogging Community
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Discover a world of engaging stories, insightful perspectives, and a community of passionate writers
                  and readers.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  to="/blogs"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  
                >
                  Explore the Blog
                </Link>
              </div>
            </div>
            <img
              src={aboutMain}
              width="550"
              height="550"
              alt="About Us"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="flex flex-col items-center space-y-4">
            <img
              src={aboutImage2}
              width="120"
              height="120"
              alt="John Doe"
              className="h-30 w-30 rounded-full object-cover"
            />
            <div className="text-center">
              <h3 className="text-lg font-semibold">John Doe</h3>
              <p className="text-muted-foreground">Editor-in-Chief</p>
              <p className="text-muted-foreground">
                John is the driving force behind our blog, curating engaging content and fostering a vibrant community.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <img
              src={aboutImage3}
              width="120"
              height="120"
              alt="Jane Smith"
              className="h-30 w-30 rounded-full object-cover"
            />
            <div className="text-center">
              <h3 className="text-lg font-semibold">Jane Smith</h3>
              <p className="text-muted-foreground">Senior Writer</p>
              <p className="text-muted-foreground">
                Jane's captivating storytelling and unique perspectives have earned her a loyal following.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <img
              src={aboutImage1}
              width="120"
              height="120"
              alt="Michael Johnson"
              className="h-30 w-30 rounded-full object-cover"
            />
            <div className="text-center">
              <h3 className="text-lg font-semibold">Michael Johnson</h3>
              <p className="text-muted-foreground">Community Manager</p>
              <p className="text-muted-foreground">
                Michael is the heart of our community, fostering connections and ensuring everyone feels welcome.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}