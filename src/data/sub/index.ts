export type { SubServiceContent, SubServiceSection } from "./types";
import { startupSubServices } from "./startup";
import { regulatorySubServices } from "./regulatory";
import { taxationSubServices } from "./taxation";

export const allSubServices = [
  ...startupSubServices,
  ...regulatorySubServices,
  ...taxationSubServices,
];

export function findSubService(parentSlug: string, subSlug: string) {
  return allSubServices.find(
    (s) => s.parentSlug === parentSlug && s.slug === subSlug
  ) ?? null;
}

export function getSubServicesByParent(parentSlug: string) {
  return allSubServices.filter((s) => s.parentSlug === parentSlug);
}
