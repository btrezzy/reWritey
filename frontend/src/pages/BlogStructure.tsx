import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import landingImag2 from "../assets/landingImage2.jpg"

// type blog = {
//     title :string,
//     description :string
// }
 
 export default function BlogStructure() {
   return  (
            <Card className="group overflow-hidden rounded-lg shadow-sm transition-all hover:shadow-md ">
            <Link to="#" >
              <img
                src={landingImag2}
                width={400}
                height={225}
                alt="Blog Post"
                className="aspect-video w-full object-cover transition-all group-hover:scale-105 h-[155px]"
              />
            </Link>
            <CardContent className="p-4">
              <div className="mb-2 text-xs font-medium text-muted-foreground">May 1, 2023</div>
              <h3 className="mb-2 text-lg font-semibold transition-colors group-hover:text-primary">
                <Link to="#" >
                The Art of Minimalist Design
                </Link>
              </h3>
              <p className="text-muted-foreground">
                Discover the principles of minimalist design and how to apply them to your projects.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Avatar className="h-6 w-6 overflow-hidden rounded-full">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span>John Doe</span>
              </div>
            </CardContent>
          </Card>
   );
 }
 