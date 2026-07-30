import services from "@/data/services.json";
import { SERVICE_CONTENT } from "@/data/services-content";
import type { Service as CaseStudyServiceTag } from "@/lib/case-studies.shared";

export type ServiceCard = {
  id: string;
  title: string;
  description: string;
  image: string;
  points?: string[];
};

export type ServiceFaq = { question: string; answer: string };

export type ServiceFeature = { title: string; description: string };

export type ServiceProcessStep = { step: string; title: string; description: string };

export type ServiceContent = {
  seoTitle: string;
  metaDescription: string;
  overview: string[];
  features: ServiceFeature[];
  process?: ServiceProcessStep[];
  faqs: ServiceFaq[];
  relatedServiceTag: CaseStudyServiceTag;
};

export type ServiceId = (typeof services)[number]["id"];

export function getServiceIds(): ServiceId[] {
  return (services as ServiceCard[]).map((service) => service.id as ServiceId);
}

export function getServiceCard(id: string): ServiceCard | undefined {
  return (services as ServiceCard[]).find((service) => service.id === id);
}

export function getServiceContent(id: string): ServiceContent | undefined {
  return SERVICE_CONTENT[id as ServiceId];
}

export function getAllServices(): { card: ServiceCard; content: ServiceContent }[] {
  return (services as ServiceCard[]).map((card) => ({
    card,
    content: SERVICE_CONTENT[card.id as ServiceId],
  }));
}
