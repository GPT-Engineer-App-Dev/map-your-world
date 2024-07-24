import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <Card>
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            We are dedicated to providing innovative solutions that empower businesses and individuals to achieve their goals. Our commitment to excellence and customer satisfaction drives everything we do.
          </p>
        </CardContent>
      </Card>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Our Team</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            Our diverse team of experts brings together a wealth of knowledge and experience from various fields. We work collaboratively to deliver cutting-edge products and services that meet the evolving needs of our clients.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;