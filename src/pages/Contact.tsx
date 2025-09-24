import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageCircle,
  Calendar,
  Shield,
  Heart
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    contactReason: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll respond within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      contactReason: ""
    });
  };

  const contactReasons = [
    "General Information",
    "Schedule Appointment",
    "Insurance Questions",
    "Emergency Support",
    "Feedback/Complaint",
    "Media Inquiry",
    "Partnership Opportunity"
  ];

  const offices = [
    {
      name: "Main Office",
      address: "123 Wellness Street, Health City, HC 12345",
      phone: "(555) 123-4567",
      hours: "Monday-Friday: 8:00 AM - 7:00 PM\nSaturday: 9:00 AM - 5:00 PM\nSunday: Closed"
    },
    {
      name: "Downtown Branch",
      address: "456 Mental Health Ave, Downtown, HC 12346",
      phone: "(555) 234-5678",
      hours: "Monday-Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed"
    }
  ];

  const services = [
    {
      icon: Calendar,
      title: "Appointment Scheduling",
      description: "Schedule your therapy sessions online or by phone",
      contact: "appointments@mindcare.com"
    },
    {
      icon: Shield,
      title: "Crisis Support",
      description: "24/7 emergency mental health support",
      contact: "(555) 123-4567 ext. 911"
    },
    {
      icon: Heart,
      title: "Patient Advocacy",
      description: "Support with insurance, billing, and care coordination",
      contact: "advocacy@mindcare.com"
    },
    {
      icon: MessageCircle,
      title: "General Information",
      description: "Questions about our services and programs",
      contact: "info@mindcare.com"
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us Sanwiti
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              We're here to help with any questions about our mental health services. 
              Reach out to us and we'll respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Send className="h-6 w-6 text-primary mr-2" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactReason">Reason for Contact</Label>
                      <Select value={formData.contactReason} onValueChange={(value) => setFormData({...formData, contactReason: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a reason" />
                        </SelectTrigger>
                        <SelectContent>
                          {contactReasons.map((reason) => (
                            <SelectItem key={reason} value={reason}>{reason}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Please describe how we can help you..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full btn-hero" size="lg">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Office Locations */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Office Locations</h2>
              {offices.map((office, index) => (
                <Card key={index} className="card-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <MapPin className="h-5 w-5 text-primary mr-2" />
                      {office.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                      <p className="text-sm text-muted-foreground">{office.address}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">{office.phone}</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="h-4 w-4 text-muted-foreground mt-1" />
                      <div className="text-sm text-muted-foreground">
                        {office.hours.split('\n').map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Services Directory */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Services Directory</h2>
              {services.map((service, index) => (
                <Card key={index} className="card-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <service.icon className="h-6 w-6 text-primary mt-1" />
                      <div className="flex-1">
                        <h3 className="font-medium text-foreground">{service.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{service.description}</p>
                        <p className="text-sm font-medium text-primary">{service.contact}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Emergency Information */}
            <Card className="card-shadow border-warning">
              <CardHeader>
                <CardTitle className="text-warning">Emergency Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  If you're experiencing a mental health crisis or emergency:
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-warning" />
                    <span className="font-medium">Crisis Line: (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="h-4 w-4 text-warning" />
                    <span className="font-medium">Crisis Text: Text "HOME" to 741741</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-warning" />
                    <span className="font-medium">Emergency: Call 112</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="subtle-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our services
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="text-lg">How do I schedule an appointment?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  You can schedule online through our appointment form, call us directly, 
                  or email appointments@mindcare.com. We'll confirm within 24 hours.
                </p>
              </CardContent>
            </Card>

            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Do you accept insurance?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Yes, we accept most major insurance plans. Contact us to verify 
                  your coverage and understand your benefits before your first visit.
                </p>
              </CardContent>
            </Card>

            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="text-lg">What should I expect in the first session?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Your first session includes an assessment, discussion of your goals, 
                  and development of a personalized treatment plan with your therapist.
                </p>
              </CardContent>
            </Card>

            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Do you offer telehealth services?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Yes, we offer secure video sessions for your convenience. 
                  Many of our services are available both in-person and online.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Don't wait to get the support you deserve. Contact us today and 
            take the first step towards better mental health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero" asChild>
              <a href="/appointment">
                Schedule Appointment
                <Calendar className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <a href="tel:(555)123-4567">
                Call Now
                <Phone className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;