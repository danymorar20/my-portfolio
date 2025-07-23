import { FeaturedSite } from "@/domain/models/featured-site";
import { featuredSites } from "@/infrastructure/data/featuredSites";

export async function getFeaturedSites(): Promise<FeaturedSite[]> {
  return featuredSites;
}