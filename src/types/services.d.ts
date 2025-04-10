interface ServiceFeature {
  id: string;
  text: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  features: ServiceFeature[];
  benefits: string[];
}
export { Service, ServiceFeature };
