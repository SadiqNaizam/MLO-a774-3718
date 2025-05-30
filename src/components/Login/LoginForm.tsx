import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { cn } from '@/lib/utils';

const loginFormSchema = z.object({
  username: z.string().min(1, { message: "Username is required." }),
  password: z.string().min(1, { message: "Password is required." }),
});

type LoginFormValues = z.infer<typeof loginFormSchema>;

interface LoginFormProps {
  className?: string;
  onLoginSubmit?: (data: LoginFormValues) => Promise<void> | void;
}

const LoginForm: React.FC<LoginFormProps> = ({ className, onLoginSubmit }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    try {
      if (onLoginSubmit) {
        await onLoginSubmit(data);
      }
      // console.log("Login successful:", data);
      // Optionally reset form: form.reset();
    } catch (error) {
      // console.error("Login failed:", error);
      // Handle login error (e.g., show a toast message)
      // For example, using react-hook-form's setError:
      // form.setError("root.serverError", { type: "manual", message: "Invalid credentials" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("flex flex-col gap-4", className)}
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-card-foreground">Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="Username"
                  {...field}
                  className="border-border rounded-md p-2 text-card-foreground placeholder:text-muted-foreground focus-visible:ring-ring"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-card-foreground">Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Password"
                  {...field}
                  className="border-border rounded-md p-2 text-card-foreground placeholder:text-muted-foreground focus-visible:ring-ring"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {/* Display server-side errors or general form errors */}
        {form.formState.errors.root?.serverError && (
          <p className="text-sm font-medium text-destructive">
            {(form.formState.errors.root.serverError as { message: string }).message}
          </p>
        )}

        <Button
          type="submit"
          className="bg-actionButton text-primary-foreground rounded-md py-2 w-full hover:bg-actionButton/90 focus-visible:ring-ring"
          disabled={isLoading}
        >
          {isLoading ? 'Logging in...' : 'Log in'}
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          or,{' '}
          <a
            href="#" // Replace with actual sign-up path or handler
            onClick={(e) => { e.preventDefault(); console.log('Sign up clicked'); /* TODO: Implement navigation or modal */}}
            className="font-medium underline text-muted-foreground hover:text-primary focus:outline-none focus:ring-1 focus:ring-primary rounded-sm"
          >
            sign up
          </a>
        </p>
      </form>
    </Form>
  );
};

export default LoginForm;
