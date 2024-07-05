import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import landingImag2 from "../assets/landingImage2.jpg";
import { Blog } from "../hooks/index";

interface BlogStructureProps {
  blog: Blog;
}

export function getRandomDateIn2024() {
  const day = Math.floor(Math.random() * 31) + 1;
  const month = Math.floor(Math.random() * 12);
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return `${day} ${monthNames[month]} 2024`;
}

function truncateContent(content: string): string {
  const description = content ;
  return description.length > 100 ? description.slice(0, 100) + "..." : description;
}

export default function BlogStructure({ blog }: BlogStructureProps) {
  const truncatedContent = truncateContent(blog.content); 

  return (
    <Card className="group overflow-hidden rounded-lg shadow-sm transition-all hover:shadow-md mb-9">
      <Link to="#">
        <img
          src={landingImag2}
          width={400}
          height={225}
          alt="Blog Post"
          className="aspect-video w-full object-cover transition-all group-hover:scale-105 h-[155px]"
        />
      </Link>
      <CardContent className="p-4">
        <div className="mb-2 text-xs font-medium text-muted-foreground">{getRandomDateIn2024()}</div>
        <h3 className="mb-2 text-lg font-semibold transition-colors group-hover:text-primary">
          <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
        </h3>
        <p className="text-muted-foreground">{truncatedContent}</p>
        <div className="mt-4 flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <Avatar className="h-6 w-6 overflow-hidden rounded-full">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>{blog.author.name ? blog.author.name[0] : "N"}</AvatarFallback>
          </Avatar>
          <span>{blog.author.name || "Nirajkumar Patel"}</span>
        </div>
      </CardContent>
    </Card>
  );
}
