'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Check, CreditCard, Shield, Package, TruckIcon } from 'lucide-react';
import { Button } from '@app/components/ui/button';
import { Separator } from '@app/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@app/components/ui/radio-group';
import { Label } from '@app/components/ui/label';
import { Input } from '@app/components/ui/input';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@app/components/Navbar';
import Footer from '@app/components/Footer';
import { toast } from '@app/hooks/use-toast';

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  price: number;
  available: boolean;
}

const products: Record<string, Product> = {
  'smart-sensor': {
    id: 'smart-sensor',
    name: 'Smart Environmental Sensor',
    description:
      'Monitor temperature, humidity, air quality, and more with this compact IoT sensor hub.',
    image:
      'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80',
    category: 'iot',
    price: 89.99,
    available: true,
  },
  'plant-monitor': {
    id: 'plant-monitor',
    name: 'Connected Plant Monitor',
    description:
      'Keep your plants thriving with automated soil moisture, light, and nutrient monitoring.',
    image:
      'https://images.unsplash.com/photo-1558383409-ab7ef8db3e01?ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80',
    category: 'iot',
    price: 49.99,
    available: true,
  },
  'motion-sensor': {
    id: 'motion-sensor',
    name: 'Wireless Motion Detector',
    description:
      'Secure your space with this precision motion sensor that connects to your smart home.',
    image:
      'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80',
    category: 'iot',
    price: 39.99,
    available: true,
  },
  'environment-tracker': {
    id: 'environment-tracker',
    name: 'Environmental Data Logger',
    description:
      'Long-term monitoring solution for scientific and agricultural applications with extended battery life.',
    image:
      'https://images.unsplash.com/photo-1580983218765-f663bec07b37?ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80',
    category: 'iot',
    price: 119.99,
    available: true,
  },
  'water-quality': {
    id: 'water-quality',
    name: 'Water Quality Monitor',
    description: 'Track pH, TDS, temperature and more for aquariums, pools, or hydroponics setups.',
    image:
      'https://images.unsplash.com/photo-1576400883215-7083980b6193?ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80',
    category: 'iot',
    price: 69.99,
    available: true,
  },
};

const Buy = () => {
  const { product: productId } = useParams<{ product: string }>();
  const product = productId ? products[productId] : null;
  const router = useRouter();

  const [quantity, setQuantity] = useState(1);
  const [shippingOption, setShippingOption] = useState('standard');

  if (!product || !product.available) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex flex-1 items-center justify-center">
          <div className="px-4 text-center">
            <h1 className="mb-4 text-3xl font-bold">Product Not Available</h1>
            <p className="mb-6">This product is not currently available for purchase.</p>
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

  const handlePurchase = () => {
    toast({
      title: 'Order Placed',
      description: `Thank you for your purchase! Your ${product.name} will be shipped soon.`,
    });
    router.push(`/products/${product.id}`);
  };

  const shippingCost = shippingOption === 'standard' ? 5.99 : 12.99;
  const totalCost = product.price * quantity + shippingCost;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4 text-sm">
          <nav className="flex">
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <Link href="/products" className="text-muted-foreground hover:text-foreground">
              Products
            </Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <Link
              href={`/products/${product.id}`}
              className="text-muted-foreground hover:text-foreground"
            >
              {product.name}
            </Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <span className="text-foreground">Buy</span>
          </nav>
        </div>

        {/* Purchase Content */}
        <div className="container mx-auto max-w-6xl px-4 py-8">
          <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Product Info - Left Column */}
            <div className="space-y-8 lg:col-span-2">
              <Link href={`/products/${product.id}`}>
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to product details
                </Button>
              </Link>

              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-3xl font-bold md:text-4xl"
              >
                Purchase {product.name}
              </motion.h1>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-lg bg-muted/20 p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-auto w-full rounded-md"
                  />
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-medium">{product.name}</h2>
                  <p className="text-muted-foreground">{product.description}</p>

                  <div className="flex items-center gap-2">
                    <span className="text-lg font-medium">${product.price.toFixed(2)}</span>
                    <span className="text-sm text-muted-foreground">per unit</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <Label htmlFor="quantity" className="min-w-20">
                      Quantity:
                    </Label>
                    <div className="flex">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="rounded-r-none"
                      >
                        -
                      </Button>
                      <Input
                        id="quantity"
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-16 rounded-none border-x-0 text-center"
                        min="1"
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setQuantity(quantity + 1)}
                        className="rounded-l-none"
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  <div className="pt-4">
                    <h3 className="text-md mb-3 font-medium">Shipping Options</h3>
                    <RadioGroup defaultValue="standard" onValueChange={setShippingOption}>
                      <div className="mb-3 flex items-start space-x-2">
                        <RadioGroupItem value="standard" id="standard" />
                        <div className="grid gap-1.5">
                          <Label htmlFor="standard" className="font-medium">
                            Standard Shipping
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Delivery in 5-7 business days
                            <span className="ml-2 font-medium">${(5.99).toFixed(2)}</span>
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <RadioGroupItem value="express" id="express" />
                        <div className="grid gap-1.5">
                          <Label htmlFor="express" className="font-medium">
                            Express Shipping
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Delivery in 2-3 business days
                            <span className="ml-2 font-medium">${(12.99).toFixed(2)}</span>
                          </p>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-muted/20 p-6">
                <h3 className="mb-4 text-lg font-medium">What&apos;s in the box</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-coral" />
                    <span>1x {product.name} device</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-coral" />
                    <span>USB-C charging cable</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-coral" />
                    <span>Quick start guide</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-coral" />
                    <span>1-year warranty card</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Order Summary - Right Column */}
            <div>
              <div className="sticky top-24 rounded-lg border border-border/50 bg-card/50 p-6">
                <h2 className="mb-4 text-xl font-medium">Order Summary</h2>

                <div className="mb-6 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Product</span>
                    <span>{product.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Quantity</span>
                    <span>{quantity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Price per unit</span>
                    <span>${product.price.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${(product.price * quantity).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>${shippingCost.toFixed(2)}</span>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="mb-6 flex justify-between text-lg font-medium">
                  <span>Total</span>
                  <span>${totalCost.toFixed(2)}</span>
                </div>

                <Button
                  onClick={handlePurchase}
                  className="mb-4 w-full bg-coral text-white hover:bg-coral-dark"
                  size="lg"
                >
                  Complete Purchase
                </Button>

                <div className="flex justify-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <Shield className="mr-1 h-3 w-3" />
                    <span>Secure Checkout</span>
                  </div>
                  <div className="flex items-center">
                    <CreditCard className="mr-1 h-3 w-3" />
                    <span>Multiple Payment Options</span>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-2">
                    <TruckIcon className="mt-1 h-4 w-4 text-coral" />
                    <p className="text-xs">
                      <span className="font-medium">Free shipping</span> on orders over $100.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Package className="mt-1 h-4 w-4 text-coral" />
                    <p className="text-xs">
                      <span className="font-medium">30-day returns</span> for unopened products.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Buy;
