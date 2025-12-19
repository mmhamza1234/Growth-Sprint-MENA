import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sprintAssessmentSchema } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export function BookingModal({ children }: { children: React.ReactNode }) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(sprintAssessmentSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      employees: "",
      bottleneck: "",
    },
  });

  async function onSubmit(values: typeof sprintAssessmentSchema._type) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/sprint-assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Submission failed");
      }

      toast({
        title: "Request Sent",
        description: "We'll be in touch shortly to schedule your assessment.",
      });

      form.reset();
      setIsOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
                      <Input placeholder="John Doe" {...field} className="bg-white/5 border-white/10" disabled={isSubmitting} />
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
                      <Input placeholder="john@company.com" {...field} className="bg-white/5 border-white/10" disabled={isSubmitting} />
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
                      <Input placeholder="Acme Inc" {...field} className="bg-white/5 border-white/10" disabled={isSubmitting} />
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
                        disabled={isSubmitting}
                        className="w-full h-10 px-3 rounded-md border border-white/10 bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 appearance-none cursor-pointer"
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
                      disabled={isSubmitting}
                      className="bg-white/5 border-white/10 min-h-[100px] disabled:opacity-50" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={isSubmitting} className="w-full bg-primary text-primary-foreground font-bold hover:bg-primary/90">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Request Assessment"
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
