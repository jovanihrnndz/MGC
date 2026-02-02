import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  email: z.string().email("Please enter a valid email address."),
  projectType: z.string().min(1, "Please select a project type."),
  budgetRange: z.string().optional(),
  projectDescription: z.string().min(10, "Please tell us a bit about your project."),
  referralSource: z.string().optional(),
  honey: z.string().max(0).optional()
});

export type LeadFormValues = z.infer<typeof leadSchema>;
