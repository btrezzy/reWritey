import { Link } from "react-router-dom"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import BlogHeader from "./BlogHeader"

export default function Signin() {
  return (
    <div className="flex flex-col min-h-screen">
        
     <BlogHeader />

      <main className="flex-1 container mx-auto py-8 px-6 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-background shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
          <form className="space-y-4">
            
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter a password" />
            </div>
          
          <div className="flex items-center justify-between">
              <div>
                <Checkbox id="remember" />
                <Label className="mx-1.5" htmlFor="remember">Remember me</Label>
              </div>
              <Link to="#" className="text-primary hover:underline" >
                Forgot password?
              </Link>
            </div>
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>
        </div>
        <div className="bg-muted rounded-lg p-8 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4">Why Join Our Blog?</h2>
          <ul className="space-y-4 text-muted-foreground">
            <li>
              <CheckIcon className="h-6 w-6 text-primary mr-2" />
              Stay up-to-date with the latest trends and insights
            </li>
            <li>
              <CheckIcon className="h-6 w-6 text-primary mr-2" />
              Connect with a community of like-minded individuals
            </li>
            <li>
              <CheckIcon className="h-6 w-6 text-primary mr-2" />
              Exclusive access to premium content and events
            </li>
          </ul>
        </div>
      </main>
      
    </div>
  )
}

function CheckIcon(props :any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}