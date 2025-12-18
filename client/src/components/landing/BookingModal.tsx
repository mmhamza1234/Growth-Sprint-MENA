import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name is required"),
  employees: z.string().min(1, "Please select employee count"),
  bottleneck: z.string().min(10, "Please describe your bottleneck"),
});

export function BookingModal({ children }: { children: React.ReactNode }) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      employees: "",
      bottleneck: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Request Sent",
      description: "We'll be in touch shortly to schedule your assessment.",
    });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-card border-white/10 text-foreground">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Book Sprint Assessment</DialogTitle>
          <p className="text-muted-foreground">
            30-minute discovery call. No sales pitch, just fit assessment.
          </p>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} className="bg-white/5 border-white/10" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Work Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john@company.com" {...field} className="bg-white/5 border-white/10" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company</FormLabel>
                    <FormControl>
                      <Input placeholder="Acme Inc" {...field} className="bg-white/5 border-white/10" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="employees"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Team Size</FormLabel>
                    <FormControl>
                      <select 
                        {...field} 
                        className="w-full h-10 px-3 rounded-md border border-white/10 bg-white/5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="" disabled>Select...</option>
                        <option value="1-15">1-15 (Too small)</option>
                        <option value="15-70">15-70 (Perfect fit)</option>
                        <option value="70+">70+ (Enterprise)</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="bottleneck"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What's your biggest operational bottleneck?</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="e.g. Roles are unclear, strategy isn't being executed..." 
                      {...field} 
                      className="bg-white/5 border-white/10 min-h-[100px]" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-primary text-primary-foreground font-bold hover:bg-primary/90">
              Request Assessment
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
