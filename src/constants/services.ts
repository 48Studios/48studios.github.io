import { Code, Cpu, Layers, Printer } from 'lucide-react';
import { Service } from '@app/types/services';

const SERVICES: Service[] = [
  {
    id: 'software',
    title: 'Software Development',
    description: 'Custom applications and websites that elevate your digital presence',
    icon: Code,
    features: [
      { id: 'software-1', text: 'Full-stack web application development' },
      { id: 'software-2', text: 'Mobile app development (iOS & Android)' },
      { id: 'software-3', text: 'Cloud integration & deployment' },
      { id: 'software-4', text: 'API development & integration' },
      { id: 'software-5', text: 'Responsive UI/UX design' },
    ],
    benefits: [
      'Scalable solutions that grow with your business',
      'User-centered design for maximum engagement',
      'Fast, reliable performance across all devices',
      'Ongoing support and maintenance',
    ],
  },
  {
    id: 'iot',
    title: 'IoT Development',
    description: 'Connected hardware solutions for the modern world',
    icon: Cpu,
    features: [
      { id: 'iot-1', text: 'Custom IoT device programming' },
      { id: 'iot-2', text: 'Sensor integration & networking' },
      { id: 'iot-3', text: 'Real-time data processing' },
      { id: 'iot-4', text: 'Edge computing solutions' },
      { id: 'iot-5', text: 'Remote monitoring systems' },
    ],
    benefits: [
      'Improved operational efficiency',
      'Real-time insights and analytics',
      'Automated processes and workflows',
      'Enhanced security and reliability',
    ],
  },
  {
    id: 'printing',
    title: '3D Printing',
    description: 'Rapid prototyping and production of physical components',
    icon: Printer,
    features: [
      { id: 'printing-1', text: 'Rapid prototyping' },
      { id: 'printing-2', text: 'Small batch manufacturing' },
      { id: 'printing-3', text: 'Custom part design & printing' },
      { id: 'printing-4', text: 'Multi-material printing' },
      { id: 'printing-5', text: 'Post-processing & finishing' },
    ],
    benefits: [
      'Reduced time-to-market for new products',
      'Cost-effective prototyping and testing',
      'Custom solutions for unique challenges',
      'Iterative design improvements',
    ],
  },
  {
    id: 'design',
    title: '3D Design',
    description: 'Creative modeling and visualization for products and environments',
    icon: Layers,
    features: [
      { id: 'design-1', text: 'Product visualization & rendering' },
      { id: 'design-2', text: '3D modeling & CAD design' },
      { id: 'design-3', text: 'Animation & virtual presentations' },
      { id: 'design-4', text: 'AR/VR experience development' },
      { id: 'design-5', text: 'Photorealistic rendering' },
    ],
    benefits: [
      'Enhanced product visualization before manufacturing',
      'Immersive customer experiences',
      'Technical accuracy and precision',
      'Marketing-ready visuals and presentations',
    ],
  },
];
export default SERVICES;
