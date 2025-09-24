import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar, Clock, User, Phone, Mail, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Appointment = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    serviceType: "",
    preferredDate: "",
    preferredTime: "",
    therapistPreference: "",
    isEmergency: false,
    previousTherapy: "",
    insuranceProvider: "",
    concernsDescription: "",
    communicationPreference: "phone"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Appointment Request Submitted",
      description: "We'll contact you within 24 hours to confirm your appointment.",
    });
  };

  const serviceTypes = [
    "Individual Therapy",
    "Couples Therapy", 
    "Family Therapy",
    "Group Therapy",
    "Child/Adolescent Therapy",
    "Psychiatric Consultation",
    "Crisis Intervention"
  ];

  const therapists = [
    "Dr. Sarah Johnson - Clinical Psychology",
    "Dr. Michael Chen - Psychiatry",
    "Lisa Rodriguez, LCSW - Family Therapy",
    "Dr. Amanda White - Child Psychology",
    "No preference"
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Schedule Your Appointment
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              Take the first step towards better mental health. Fill out the form below 
              and we'll contact you to confirm your appointment within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Appointment Form */}
          <div className="lg:col-span-2">
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Calendar className="h-6 w-6 text-primary mr-2" />
                  Appointment Request Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Service Details</h3>
                    <div className="space-y-2">
                      <Label htmlFor="serviceType">Type of Service *</Label>
                      <Select value={formData.serviceType} onValueChange={(value) => setFormData({...formData, serviceType: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceTypes.map((service) => (
                            <SelectItem key={service} value={service}>{service}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="therapistPreference">Therapist Preference</Label>
                      <Select value={formData.therapistPreference} onValueChange={(value) => setFormData({...formData, therapistPreference: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a therapist or no preference" />
                        </SelectTrigger>
                        <SelectContent>
                          {therapists.map((therapist) => (
                            <SelectItem key={therapist} value={therapist}>{therapist}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Scheduling */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Preferred Schedule</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="preferredDate">Preferred Date *</Label>
                        <Input
                          id="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                          min={new Date().toISOString().split('T')[0]}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="preferredTime">Preferred Time *</Label>
                        <Select value={formData.preferredTime} onValueChange={(value) => setFormData({...formData, preferredTime: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>{time}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Additional Information</h3>
                    <div className="space-y-2">
                      <Label htmlFor="insuranceProvider">Insurance Provider</Label>
                      <Input
                        id="insuranceProvider"
                        value={formData.insuranceProvider}
                        onChange={(e) => setFormData({...formData, insuranceProvider: e.target.value})}
                        placeholder="e.g., Blue Cross Blue Shield, Aetna, etc."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="previousTherapy">Previous Therapy Experience</Label>
                      <Select value={formData.previousTherapy} onValueChange={(value) => setFormData({...formData, previousTherapy: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your experience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">No previous therapy</SelectItem>
                          <SelectItem value="some">Some previous therapy</SelectItem>
                          <SelectItem value="extensive">Extensive therapy experience</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="concernsDescription">Brief Description of Concerns</Label>
                      <Textarea
                        id="concernsDescription"
                        value={formData.concernsDescription}
                        onChange={(e) => setFormData({...formData, concernsDescription: e.target.value})}
                        placeholder="Please briefly describe what brings you to therapy (optional)"
                        rows={4}
                      />
                    </div>
                  </div>

                  {/* Emergency and Communication */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="isEmergency"
                        checked={formData.isEmergency}
                        onCheckedChange={(checked) => setFormData({...formData, isEmergency: checked as boolean})}
                      />
                      <Label htmlFor="isEmergency" className="text-sm">
                        This is an urgent/emergency situation requiring immediate attention
                      </Label>
                    </div>
                    <div className="space-y-2">
                      <Label>Preferred Contact Method</Label>
                      <div className="flex space-x-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="phone"
                            checked={formData.communicationPreference === "phone"}
                            onCheckedChange={() => setFormData({...formData, communicationPreference: "phone"})}
                          />
                          <Label htmlFor="phone" className="text-sm">Phone</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="email"
                            checked={formData.communicationPreference === "email"}
                            onCheckedChange={() => setFormData({...formData, communicationPreference: "email"})}
                          />
                          <Label htmlFor="email" className="text-sm">Email</Label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full btn-hero" size="lg">
                    Submit Appointment Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Information */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-2" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">appointments@mindcare.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Office Hours</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri: 8AM-7PM</p>
                    <p className="text-sm text-muted-foreground">Sat: 9AM-5PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Notice */}
            <Card className="card-shadow border-warning">
              <CardHeader>
                <CardTitle className="text-warning">Emergency Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  If you're experiencing a mental health emergency, please:
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Call 911 for immediate emergency</li>
                  <li>• Call our crisis line: (555) 123-4567</li>
                  <li>• Text "HOME" to 741741 for crisis support</li>
                  <li>• Visit your nearest emergency room</li>
                </ul>
              </CardContent>
            </Card>

            {/* What to Expect */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle>What to Expect</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-3">
                  <li className="flex items-start">
                    <MessageCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>We'll contact you within 24 hours to confirm your appointment</span>
                  </li>
                  <li className="flex items-start">
                    <User className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Your first session will include an assessment and treatment planning</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Sessions are typically 50 minutes long</span>
                  </li>
                  <li className="flex items-start">
                    <Calendar className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>We offer flexible scheduling including evenings and weekends</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;