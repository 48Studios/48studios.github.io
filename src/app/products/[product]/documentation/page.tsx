'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Github, FileCode, Book, Download } from 'lucide-react';
import { Button } from '@app/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@app/components/ui/table';
import Navbar from '@app/components/Navbar';
import Footer from '@app/components/Footer';
import { motion } from 'framer-motion';
import Hero from '@app/components/Hero';

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  price: number;
  available: boolean;
  features?: string[];
  longDescription?: string;
  specs?: Record<string, string>;
  githubLink?: string;
  buildGuideLink?: string;
  purchaseLink?: string;
}

const products: Record<string, Product> = {
  'smart-sensor': {
    id: 'smart-sensor',
    name: 'Smart Environmental Sensor',
    description:
      'Monitor temperature, humidity, air quality, and more with this compact IoT sensor hub.',
    longDescription:
      'Our Smart Environmental Sensor is a versatile IoT device that provides accurate monitoring of various environmental parameters. With seamless connectivity options and an open-source firmware, this device can be integrated with other smart home systems or used as a standalone monitor. The compact design allows for discrete placement in any room, while the long-lasting battery ensures continuous operation for months before needing a recharge.',
    image:
      'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
    category: 'iot',
    price: 89.99,
    available: true,
    features: [
      'Temperature monitoring',
      'Humidity sensing',
      'Air quality analysis',
      'WiFi connectivity',
      'Open source firmware',
    ],
    specs: {
      Dimensions: '70mm x 50mm x 20mm',
      Power: 'USB-C or 3.7V LiPo battery',
      Connectivity: 'WiFi 2.4GHz, Bluetooth 5.0',
      Sensors: 'BME680, SHT31, BH1750',
      Microcontroller: 'ESP32-WROOM-32',
      'Battery Life': 'Up to 6 months on standby',
    },
    githubLink: 'https://github.com/48studios/smart-sensor',
    buildGuideLink: '/guides/smart-sensor-build',
    purchaseLink: '/shop/smart-sensor',
  },
  'plant-monitor': {
    id: 'plant-monitor',
    name: 'Connected Plant Monitor',
    description:
      'Keep your plants thriving with automated soil moisture, light, and nutrient monitoring.',
    longDescription:
      'The Connected Plant Monitor is designed to take the guesswork out of plant care. By continuously monitoring soil moisture, light levels, and estimating nutrient levels, it provides actionable insights to keep your plants healthy. The waterproof probe can be inserted directly into the soil, while the wireless display unit shows real-time data and can send alerts to your phone when attention is needed. Perfect for both novice gardeners and plant enthusiasts.',
    image:
      'https://images.unsplash.com/photo-1558383409-ab7ef8db3e01?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
    category: 'iot',
    price: 49.99,
    available: true,
    features: [
      'Soil moisture detection',
      'Light level monitoring',
      'Nutrient tracking',
      'Plant health alerts',
      'Companion app',
    ],
    specs: {
      Dimensions: '60mm x 40mm x 15mm',
      Power: 'CR2032 battery',
      Connectivity: 'Bluetooth 4.2',
      Sensors: 'Capacitive soil moisture, LDR, Temperature',
      Microcontroller: 'ESP32-C3',
      'Battery Life': 'Up to 1 year',
    },
    githubLink: 'https://github.com/48studios/plant-monitor',
    buildGuideLink: '/guides/plant-monitor-build',
    purchaseLink: '/shop/plant-monitor',
  },
  'motion-sensor': {
    id: 'motion-sensor',
    name: 'Wireless Motion Detector',
    description:
      'Secure your space with this precision motion sensor that connects to your smart home.',
    longDescription:
      'Our Wireless Motion Detector provides reliable motion detection for security or automation purposes. Using a high-quality PIR sensor with adjustable sensitivity, it can detect motion up to 7 meters away with a 110° field of view. The energy-efficient design allows for years of operation on a single battery, and it integrates seamlessly with most smart home platforms including HomeKit, SmartThings, and Home Assistant.',
    image:
      'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
    category: 'iot',
    price: 39.99,
    available: true,
    features: [
      'PIR motion sensing',
      'Wireless connectivity',
      'Low power consumption',
      'Smart home integration',
      'Customizable alerts',
    ],
    specs: {
      Dimensions: '80mm x 80mm x 25mm',
      Power: '2x AAA batteries',
      Connectivity: 'Zigbee 3.0',
      Sensors: 'HC-SR501 PIR',
      Range: 'Up to 7m / 110°',
      'Battery Life': '2+ years',
    },
    githubLink: 'https://github.com/48studios/motion-sensor',
    buildGuideLink: '/guides/motion-sensor-build',
    purchaseLink: '/shop/motion-sensor',
  },
  'smart-switch': {
    id: 'smart-switch',
    name: 'Programmable Smart Switch',
    description:
      'Control any device remotely with this customizable switch and power monitoring system.',
    longDescription:
      'The Programmable Smart Switch allows for intelligent control of any electrical device while monitoring power consumption in real-time. With support for scenes and automation, it can be programmed to respond to various triggers like time, other device states, or environmental conditions. The built-in power metering provides insights into energy usage patterns, helping to identify energy-hungry devices and optimize consumption.',
    image:
      'https://images.unsplash.com/photo-1621609764095-b32bbe35cf3a?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
    category: 'iot',
    price: 29.99,
    available: false,
    features: [
      'Remote control',
      'Power monitoring',
      'Scheduling',
      'Voice assistant compatible',
      'Energy usage reports',
    ],
    specs: {
      Dimensions: '86mm x 86mm x 32mm',
      Power: 'AC 100-240V',
      Connectivity: 'WiFi 2.4GHz',
      'Max Load': '10A, 2200W',
      'Energy Monitoring': 'Yes',
      Certifications: 'CE, RoHS',
    },
    githubLink: 'https://github.com/48studios/smart-switch',
    buildGuideLink: '/guides/smart-switch-build',
    purchaseLink: '/shop/smart-switch',
  },
  'environment-tracker': {
    id: 'environment-tracker',
    name: 'Environmental Data Logger',
    description:
      'Long-term monitoring solution for scientific and agricultural applications with extended battery life.',
    image:
      'https://images.unsplash.com/photo-1580983218765-f663bec07b37?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
    category: 'iot',
    price: 119.99,
    available: true,
    features: [
      'Extended battery life',
      'Data logging',
      'SD card storage',
      'Weather resistant',
      'Multiple sensor inputs',
    ],
    specs: {
      Dimensions: '120mm x 80mm x 30mm',
      Power: '18650 Li-ion battery or solar panel',
      Connectivity: 'LoRaWAN, WiFi (optional)',
      Sensors: 'Configurable, up to 5 external sensors',
      Storage: 'microSD up to 32GB',
      'Battery Life': 'Up to 2 years or indefinite with solar',
    },
    githubLink: 'https://github.com/48studios/environment-tracker',
    buildGuideLink: '/guides/environment-tracker-build',
    purchaseLink: '/shop/environment-tracker',
  },
  'water-quality': {
    id: 'water-quality',
    name: 'Water Quality Monitor',
    description: 'Track pH, TDS, temperature and more for aquariums, pools, or hydroponics setups.',
    image:
      'https://images.unsplash.com/photo-1576400883215-7083980b6193?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
    category: 'iot',
    price: 69.99,
    available: true,
    features: [
      'pH monitoring',
      'TDS measurement',
      'Temperature tracking',
      'Wireless alerts',
      'Historical data analysis',
    ],
    specs: {
      Dimensions: '90mm x 60mm x 25mm',
      Power: 'USB-C or 3.7V LiPo battery',
      Connectivity: 'WiFi 2.4GHz, Bluetooth 5.0',
      Sensors: 'pH probe, TDS probe, DS18B20',
      'Probe Cable Length': '1m (extensible)',
      'Battery Life': '2 weeks on battery',
    },
    githubLink: 'https://github.com/48studios/water-quality',
    buildGuideLink: '/guides/water-quality-build',
    purchaseLink: '/shop/water-quality',
  },
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BillOfMaterials = ({ product }: { product: Product }) => (
  <div className="space-y-6">
    <h3 className="text-xl font-medium">Bill of Materials</h3>

    <div className="space-y-6">
      <div>
        <h4 className="mb-4 text-lg font-medium">Electronics</h4>
        <div className="overflow-hidden rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Component</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead className="text-right">Price (USD)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">ESP32 Development Board</TableCell>
                <TableCell>1</TableCell>
                <TableCell className="text-right">$8.95</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">BME680 Environmental Sensor</TableCell>
                <TableCell>1</TableCell>
                <TableCell className="text-right">$12.50</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">SHT31 Temperature & Humidity</TableCell>
                <TableCell>1</TableCell>
                <TableCell className="text-right">$6.75</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">BH1750 Light Sensor</TableCell>
                <TableCell>1</TableCell>
                <TableCell className="text-right">$3.25</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">3.7V LiPo Battery 1200mAh</TableCell>
                <TableCell>1</TableCell>
                <TableCell className="text-right">$7.50</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <div>
        <h4 className="mb-4 text-lg font-medium">Hardware & Enclosure</h4>
        <div className="overflow-hidden rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Component</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead className="text-right">Price (USD)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">3D Printed Enclosure</TableCell>
                <TableCell>1 set</TableCell>
                <TableCell className="text-right">$4.50</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">M2 Screws</TableCell>
                <TableCell>10 pcs</TableCell>
                <TableCell className="text-right">$2.25</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">M2 Brass Inserts</TableCell>
                <TableCell>10 pcs</TableCell>
                <TableCell className="text-right">$3.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Micro USB Cable</TableCell>
                <TableCell>1</TableCell>
                <TableCell className="text-right">$1.50</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Perfboard 4x6cm</TableCell>
                <TableCell>1</TableCell>
                <TableCell className="text-right">$1.75</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <Button variant="outline" className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Download Full BOM
        </Button>
      </div>
    </div>
  </div>
);

const Documentation = () => {
  const { product: productId } = useParams<{ product: string }>();
  const product = productId ? products[productId] : null;
  const [activeTab, setActiveTab] = useState<'guide' | 'materials' | 'community'>('guide');

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex flex-1 items-center justify-center">
          <div className="px-4 text-center">
            <h1 className="mb-4 text-3xl font-bold">Documentation Not Found</h1>
            <p className="mb-6">
              The product documentation you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link href="/products">
              <Button className="bg-coral text-white hover:bg-coral-dark">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}

        <section className="bg-muted py-16 md:py-20">
          <div className="container mx-auto mt-6">
            <Link
              href={`/products/${product.id}`}
              className="mr-4 flex items-center text-sm text-muted-foreground hover:text-primary"
            >
              <ArrowLeft className="mr-1 h-4 w-4" /> Back to {product.name}
            </Link>
          </div>
          <Hero
            title={`${product.name} Documentation`}
            subtitle="Complete resources for building, customizing and getting the most out of your
                device."
            alignment="left"
          />
        </section>

        {/* Documentation Navigation */}
        <section className="mb-16 py-10">
          <div className="container mx-auto max-w-4xl px-4">
            {/* Custom Navigation */}
            <div className="flex flex-col gap-8 md:flex-row">
              {/* Navigation Sidebar */}
              <div className="w-full shrink-0 md:w-64">
                <div className="sticky top-24">
                  <div className="overflow-hidden rounded-xl border border-border/50 shadow-sm">
                    <div className="border-b border-border/50 bg-card p-4">
                      <h3 className="text-lg font-medium">Documentation</h3>
                    </div>
                    <div className="bg-card/70">
                      <button
                        onClick={() => setActiveTab('guide')}
                        className={`flex w-full items-center px-4 py-3 text-left text-sm ${
                          activeTab === 'guide'
                            ? 'border-l-2 border-coral bg-muted font-medium text-coral'
                            : 'text-muted-foreground transition-colors hover:bg-muted/50'
                        }`}
                      >
                        <FileCode
                          className={`mr-3 h-4 w-4 ${activeTab === 'guide' ? 'text-coral' : ''}`}
                        />
                        Build Guide
                      </button>
                      <button
                        onClick={() => setActiveTab('materials')}
                        className={`flex w-full items-center px-4 py-3 text-left text-sm ${
                          activeTab === 'materials'
                            ? 'border-l-2 border-coral bg-muted font-medium text-coral'
                            : 'text-muted-foreground transition-colors hover:bg-muted/50'
                        }`}
                      >
                        <Download
                          className={`mr-3 h-4 w-4 ${activeTab === 'materials' ? 'text-coral' : ''}`}
                        />
                        Bill of Materials
                      </button>
                      <button
                        onClick={() => setActiveTab('community')}
                        className={`flex w-full items-center px-4 py-3 text-left text-sm ${
                          activeTab === 'community'
                            ? 'border-l-2 border-coral bg-muted font-medium text-coral'
                            : 'text-muted-foreground transition-colors hover:bg-muted/50'
                        }`}
                      >
                        <Github
                          className={`mr-3 h-4 w-4 ${activeTab === 'community' ? 'text-coral' : ''}`}
                        />
                        Community Resources
                      </button>
                    </div>
                  </div>

                  <div className="mt-6 rounded-xl border border-border/50 bg-card/70 p-4">
                    <h4 className="mb-3 text-sm font-medium">Resources</h4>
                    <div className="space-y-3">
                      <a
                        href={product.githubLink || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-muted-foreground transition-colors hover:text-coral"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub Repository
                      </a>
                      <a
                        href="#"
                        className="flex items-center text-sm text-muted-foreground transition-colors hover:text-coral"
                      >
                        <FileCode className="mr-2 h-4 w-4" />
                        API Documentation
                      </a>
                      <a
                        href="#"
                        className="flex items-center text-sm text-muted-foreground transition-colors hover:text-coral"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download Files
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1">
                <div className="rounded-xl border border-border/50 bg-card/70 p-6 shadow-sm md:p-8">
                  {activeTab === 'guide' && (
                    <div className="space-y-6">
                      <h3 className="mb-6 text-2xl font-medium">Complete Build Guide</h3>
                      <ol className="space-y-8">
                        <li className="border-b border-border/50 pb-8">
                          <h4 className="mb-3 text-xl font-medium">1. Prepare your components</h4>
                          <p className="mb-4 text-muted-foreground">
                            Make sure you have all the necessary components and tools before
                            starting. An electronics workspace with proper ESD protection is
                            recommended.
                          </p>
                          <div className="rounded-lg bg-muted/30 p-4">
                            <h5 className="mb-2 font-medium">Required Tools:</h5>
                            <ul className="list-inside list-disc space-y-1 text-sm">
                              <li>Soldering iron and solder</li>
                              <li>Wire cutters and strippers</li>
                              <li>Small Phillips screwdriver</li>
                              <li>Multimeter</li>
                              <li>Micro USB cable</li>
                              <li>Computer with Arduino IDE or PlatformIO installed</li>
                            </ul>
                          </div>
                        </li>

                        <li className="border-b border-border/50 pb-8">
                          <h4 className="mb-3 text-xl font-medium">2. Assemble the PCB</h4>
                          <p className="mb-4 text-muted-foreground">
                            Follow these steps to assemble the main circuit board and connect all
                            sensors.
                          </p>

                          <div className="mb-4 grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div>
                              <h5 className="mb-2 font-medium">Soldering the ESP32:</h5>
                              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                                <li>Solder header pins to the ESP32 development board</li>
                                <li>Mount the ESP32 on the perfboard</li>
                                <li>Create power distribution lanes on the perfboard</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="mb-2 font-medium">Connecting the Sensors:</h5>
                              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                                <li>Connect BME680 to I2C pins (SCL, SDA)</li>
                                <li>Connect SHT31 to I2C bus (address 0x44)</li>
                                <li>Connect BH1750 to I2C bus (address 0x23)</li>
                              </ul>
                            </div>
                          </div>

                          <div className="rounded-lg bg-muted/30 p-4">
                            <h5 className="mb-2 font-medium">Wiring Diagram:</h5>
                            <img
                              src="https://images.unsplash.com/photo-1597651590053-d4632787eac7?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80"
                              alt="Wiring Diagram"
                              className="h-auto w-full rounded-lg shadow-sm"
                            />
                            <p className="mt-2 text-xs text-muted-foreground">
                              Reference wiring diagram (Download full resolution from GitHub)
                            </p>
                          </div>
                        </li>

                        <li className="border-b border-border/50 pb-8">
                          <h4 className="mb-3 text-xl font-medium">3. Prepare the enclosure</h4>
                          <p className="mb-4 text-muted-foreground">
                            3D print the enclosure and prepare it for the electronics.
                          </p>

                          <div className="mb-4 rounded-lg bg-muted/30 p-4">
                            <h5 className="mb-2 font-medium">3D Printing Settings:</h5>
                            <ul className="grid grid-cols-2 gap-2 text-sm">
                              <li className="flex justify-between">
                                <span>Material:</span>
                                <span className="text-muted-foreground">PLA or PETG</span>
                              </li>
                              <li className="flex justify-between">
                                <span>Layer Height:</span>
                                <span className="text-muted-foreground">0.2mm</span>
                              </li>
                              <li className="flex justify-between">
                                <span>Infill:</span>
                                <span className="text-muted-foreground">20%</span>
                              </li>
                              <li className="flex justify-between">
                                <span>Supports:</span>
                                <span className="text-muted-foreground">Yes, for overhangs</span>
                              </li>
                              <li className="flex justify-between">
                                <span>Print Time:</span>
                                <span className="text-muted-foreground">~3-4 hours</span>
                              </li>
                            </ul>
                          </div>

                          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div>
                              <h5 className="mb-2 font-medium">Preparing the enclosure:</h5>
                              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                                <li>Remove supports and clean the print</li>
                                <li>Install M2 brass inserts using a soldering iron</li>
                                <li>Test fit the PCB inside the enclosure</li>
                                <li>Drill ventilation holes if not included in the design</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="mb-2 font-medium">Mounting hardware:</h5>
                              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                                <li>Use M2 screws to mount the PCB to the standoffs</li>
                                <li>Ensure all sensors have proper clearance</li>
                                <li>Install rubber feet on the bottom (optional)</li>
                              </ul>
                            </div>
                          </div>
                        </li>

                        <li className="border-b border-border/50 pb-8">
                          <h4 className="mb-3 text-xl font-medium">4. Flash the firmware</h4>
                          <p className="mb-4 text-muted-foreground">
                            Download the firmware from our GitHub repository and flash it to the
                            device.
                          </p>

                          <div className="mb-4 rounded-lg bg-muted/30 p-4">
                            <h5 className="mb-2 font-medium">Development environment setup:</h5>
                            <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                              <li>Install Arduino IDE or PlatformIO</li>
                              <li>Install ESP32 board support</li>
                              <li>Install required libraries (listed in GitHub README)</li>
                              <li>Clone or download the repository</li>
                            </ul>
                          </div>

                          <div className="mb-4 overflow-x-auto rounded-lg border p-4 font-mono text-sm">
                            <p># Clone repository</p>
                            <p className="text-green-600">
                              git clone https://github.com/48studios/smart-sensor.git
                            </p>
                            <p># Change to project directory</p>
                            <p className="text-green-600">cd smart-sensor</p>
                            <p># Configure your WiFi settings (optional)</p>
                            <p className="text-green-600">cp config.example.h config.h</p>
                            <p># Edit config.h with your preferred text editor</p>
                          </div>

                          <div className="space-y-2">
                            <h5 className="font-medium">Flashing instructions:</h5>
                            <p className="text-sm text-muted-foreground">
                              1. Connect the ESP32 to your computer via USB
                            </p>
                            <p className="text-sm text-muted-foreground">
                              2. Select the correct port and board in Arduino IDE or PlatformIO
                            </p>
                            <p className="text-sm text-muted-foreground">
                              3. Upload the firmware to the device
                            </p>
                            <p className="text-sm text-muted-foreground">
                              4. After successful upload, open the Serial Monitor to verify
                              functionality
                            </p>
                          </div>
                        </li>

                        <li>
                          <h4 className="mb-3 text-xl font-medium">5. Configure and use</h4>
                          <p className="mb-4 text-muted-foreground">
                            Set up the device and start monitoring your environment.
                          </p>

                          <div className="mb-4 grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div>
                              <h5 className="mb-2 font-medium">Initial Setup:</h5>
                              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                                <li>Power on the device</li>
                                <li>Connect to the &#34;SmartSensor&#34; WiFi access point</li>
                                <li>Navigate to 192.168.4.1 in your browser</li>
                                <li>Configure your WiFi network settings</li>
                                <li>The device will restart and connect to your network</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="mb-2 font-medium">Usage:</h5>
                              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                                <li>Access the web interface via the device&apos;s IP address</li>
                                <li>Configure update intervals and thresholds</li>
                                <li>Set up MQTT integration (optional)</li>
                                <li>Enable data logging (optional)</li>
                                <li>Monitor readings in real-time</li>
                              </ul>
                            </div>
                          </div>

                          <div className="rounded-lg bg-muted/30 p-4">
                            <h5 className="mb-2 font-medium">Integration Options:</h5>
                            <ul className="grid grid-cols-1 gap-2 text-sm md:grid-cols-2">
                              <li className="flex items-center">
                                <span className="mr-2">•</span>
                                <span>Home Assistant</span>
                              </li>
                              <li className="flex items-center">
                                <span className="mr-2">•</span>
                                <span>OpenHAB</span>
                              </li>
                              <li className="flex items-center">
                                <span className="mr-2">•</span>
                                <span>Node-RED</span>
                              </li>
                              <li className="flex items-center">
                                <span className="mr-2">•</span>
                                <span>Custom MQTT clients</span>
                              </li>
                              <li className="flex items-center">
                                <span className="mr-2">•</span>
                                <span>InfluxDB + Grafana</span>
                              </li>
                              <li className="flex items-center">
                                <span className="mr-2">•</span>
                                <span>RESTful API clients</span>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ol>

                      <div className="pt-6">
                        <a
                          href={product.githubLink || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="outline"
                            className="border-coral text-coral hover:bg-coral/5"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            View Complete Documentation on GitHub
                          </Button>
                        </a>
                      </div>
                    </div>
                  )}

                  {activeTab === 'materials' && <BillOfMaterials product={product} />}

                  {activeTab === 'community' && (
                    <div className="space-y-6">
                      <h3 className="mb-6 text-2xl font-medium">Community Resources</h3>

                      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="rounded-lg border border-border/50 bg-card p-6 transition-colors hover:border-coral/30">
                          <h4 className="mb-2 text-lg font-medium">GitHub Repository</h4>
                          <p className="mb-4 text-sm text-muted-foreground">
                            Explore the source code, contribute to development, and submit issues or
                            feature requests.
                          </p>
                          <a
                            href={product.githubLink || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button variant="outline" size="sm">
                              <Github className="mr-2 h-4 w-4" />
                              Visit Repository
                            </Button>
                          </a>
                        </div>
                        <div className="rounded-lg border border-border/50 bg-card p-6 transition-colors hover:border-coral/30">
                          <h4 className="mb-2 text-lg font-medium">Forum Discussions</h4>
                          <p className="mb-4 text-sm text-muted-foreground">
                            Join the community discussion, ask questions, and share your projects
                            and improvements.
                          </p>
                          <Button variant="outline" size="sm">
                            <Book className="mr-2 h-4 w-4" />
                            Visit Forums
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-8">
                        <h4 className="text-xl font-medium">Featured Community Projects</h4>

                        <div className="overflow-hidden rounded-lg border">
                          <div className="grid grid-cols-1 divide-x divide-y divide-border md:grid-cols-3 md:divide-y-0">
                            <div className="p-4">
                              <h5 className="mb-2 font-medium">Solar Powered Weather Station</h5>
                              <p className="mb-3 text-sm text-muted-foreground">
                                Modified design with weatherproof enclosure and solar charging for
                                outdoor placement.
                              </p>
                              <div className="flex items-center text-sm">
                                <span className="mr-2 text-muted-foreground">By</span>
                                <span className="font-medium">@maker_chris</span>
                              </div>
                            </div>
                            <div className="p-4">
                              <h5 className="mb-2 font-medium">Room Occupancy System</h5>
                              <p className="mb-3 text-sm text-muted-foreground">
                                Integration with PIR sensors and MQTT to track room occupancy and
                                automate lighting.
                              </p>
                              <div className="flex items-center text-sm">
                                <span className="mr-2 text-muted-foreground">By</span>
                                <span className="font-medium">@smart_home_diy</span>
                              </div>
                            </div>
                            <div className="p-4">
                              <h5 className="mb-2 font-medium">AI-Enhanced Monitoring</h5>
                              <p className="mb-3 text-sm text-muted-foreground">
                                Machine learning model that predicts air quality trends based on
                                collected data.
                              </p>
                              <div className="flex items-center text-sm">
                                <span className="mr-2 text-muted-foreground">By</span>
                                <span className="font-medium">@data_scientist_42</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-lg border border-border/50 p-6">
                          <h4 className="mb-4 text-lg font-medium">Share Your Project</h4>
                          <p className="mb-6 text-sm text-muted-foreground">
                            Have you built or modified your {product.name}? Share your project with
                            the community to inspire others and get feedback on your innovations!
                          </p>
                          <Button className="bg-coral text-white hover:bg-coral/90">
                            Submit Your Project
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto max-w-5xl px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">Additional Resources</h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="overflow-hidden rounded-lg border border-border/50 bg-card/50 transition-all duration-300 hover:border-coral/30">
                <div className="aspect-video overflow-hidden bg-black/5">
                  <img
                    src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80"
                    alt="Video tutorials"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-medium">Video Tutorials</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Step-by-step video guides for building and configuring your device.
                  </p>
                  <Button variant="link" className="p-0 text-coral hover:text-coral-dark">
                    Watch Videos
                  </Button>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg border border-border/50 bg-card/50 transition-all duration-300 hover:border-coral/30">
                <div className="aspect-video overflow-hidden bg-black/5">
                  <img
                    src="https://images.unsplash.com/photo-1506097425191-7ad538b29cef?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80"
                    alt="3D Printing Files"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-medium">3D Printing Files</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Download STL and other 3D model files for printing the enclosure.
                  </p>
                  <Button variant="link" className="p-0 text-coral hover:text-coral-dark">
                    Download Files
                  </Button>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg border border-border/50 bg-card/50 transition-all duration-300 hover:border-coral/30">
                <div className="aspect-video overflow-hidden bg-black/5">
                  <img
                    src="https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80"
                    alt="API Documentation"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-medium">API Documentation</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Detailed technical documentation for the device&apos;s REST and MQTT APIs.
                  </p>
                  <Button variant="link" className="p-0 text-coral hover:text-coral-dark">
                    View Documentation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-b from-muted/10 to-muted/50 py-16">
          <div className="container mx-auto max-w-3xl px-4 text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-6 text-3xl font-bold md:text-4xl"
            >
              Ready to build your {product.name}?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-10 text-xl text-muted-foreground"
            >
              Get started with all the resources you need or purchase a pre-assembled unit.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col justify-center gap-4 sm:flex-row"
            >
              <a href={product.githubLink || '#'} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-coral text-white hover:bg-coral-dark">
                  <Github className="mr-2 h-5 w-5" />
                  Get Source Code
                </Button>
              </a>

              <Link href={`/buy/${product.id}`}>
                <Button size="lg" variant="outline">
                  <FileCode className="mr-2 h-5 w-5" />
                  Buy Pre-assembled Unit
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default Documentation;
