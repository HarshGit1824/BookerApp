import { BadgeMinus, ThumbsDown, ThumbsUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
function BookSingle() {
  return (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Joy McCullough</CardTitle>
        <CardDescription>Appreciation: 0</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-lg font-semibold">The Story of my Life</p>
      </CardContent>
      <CardFooter className="flex gap-1 items-center">
        <Button variant="outline">
          <ThumbsUp />
        </Button>
        <Button variant="outline">
          <ThumbsDown />
        </Button>
        <Button variant="destructive">
          <BadgeMinus />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default BookSingle;
