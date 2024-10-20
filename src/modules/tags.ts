import { TagProps } from "@/components/ProjectsSection/Tag";
import { Skills } from "@/modules/skills";

export const TAGS: Record<Skills, TagProps> = {
  [Skills.NextJS]: { label: "NextJS", color: "#ffffff" },
  [Skills.TypeScript]: { label: "TypeScript", color: "#377cc8" },
  [Skills.TeamWork]: { label: "Travail d'équipe", color: "#ffc014" },
  [Skills.VueJS]: { label: "VueJS", color: "#47ba87" },
  [Skills.OpenCL]: { label: "OpenCL", color: "#43b132" },
  [Skills.CPP]: { label: "C++", color: "#6a9dd3" },
  [Skills.AdonisJS]: { label: "AdonisJS", color: "#5f4cff" },
  [Skills.Python]: { label: "Python", color: "#fed03e" },
  [Skills.PyTorch]: { label: "PyTorch", color: "#ef5233" },
  [Skills.Unity]: { label: "Unity", color: "#ffffff" },
  [Skills.CSharp]: { label: "C#", color: "#6e0885" },
  [Skills.Docker]: { label: "Docker", color: "#1d63ed" },
  [Skills.Gamemaker]: { label: "Gamemaker", color: "#ffffff" },
  [Skills.MonoGame]: { label: "MonoGame", color: "#e84208" },
} as const;
