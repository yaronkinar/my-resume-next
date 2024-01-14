import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/app/components/ui/card";

import SignInWithGoogle from "@/app/components/SignInWithGoogle";

export default function AuthRouth() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Please Log in</CardTitle>
          <CardDescription>to Access your account</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col">
            <div className="flex flex-col gap-y-2">
           
              <SignInWithGoogle />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
