import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Brain, Eye, EyeOff, UserPlus, Shield, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CreateAccount = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [step, setStep] = useState(1);
  
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    
    // Account Security
    password: "",
    confirmPassword: "",
    
    // Health Information
    emergencyContact: "",
    emergencyPhone: "",
    primaryConcerns: "",
    previousTherapy: "",
    medications: "",
    
    // Preferences
    communicationPreferences: [],
    sessionPreference: "",
    
    // Agreements
    termsAccepted: false,
    privacyAccepted: false,
    communicationConsent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step < 3) {
      setStep(step + 1);
      return;
    }

    // Validate final step
    if (!formData.termsAccepted || !formData.privacyAccepted) {
      toast({
        title: "Please accept terms",
        description: "You must accept the terms and privacy policy to create an account.",
        variant: "destructive"
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please ensure both password fields match.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Account Created Successfully!",
      description: "Welcome to MindCare. You can now login to your account.",
    });

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  const genderOptions = [
    "Female",
    "Male", 
    "Non-binary",
    "Other",
    "Prefer not to say"
  ];

  const previousTherapyOptions = [
    "No previous therapy",
    "Some previous therapy (less than 1 year)",
    "Moderate experience (1-3 years)",
    "Extensive experience (3+ years)"
  ];

  const sessionPreferences = [
    "In-person only",
    "Telehealth only", 
    "Both in-person and telehealth",
    "No preference"
  ];

  return (
    <div className="min-h-screen subtle-gradient flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2">
            <Brain className="h-10 w-10 text-primary" />
            <span className="text-2xl font-bold text-primary">Sanwiti</span>
          </Link>
          <p className="text-muted-foreground mt-2">Create Your Patient Account</p>
        </div>

        <Card className="card-shadow">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl flex items-center justify-center">
              <UserPlus className="h-6 w-6 mr-2 text-primary" />
              Create Your Account
            </CardTitle>
            <div className="flex justify-center mt-4">
              <div className="flex space-x-2">
                {[1, 2, 3].map((stepNumber) => (
                  <div
                    key={stepNumber}
                    className={`w-3 h-3 rounded-full ${
                      step >= stepNumber ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Step {step} of 3: {
                step === 1 ? "Personal Information" :
                step === 2 ? "Account Security & Health" :
                "Preferences & Agreements"
              }
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Step 1: Personal Information */}
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Personal Information</h3>
                  
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender Identity</Label>
                    <Select value={formData.gender} onValueChange={(value) => setFormData({...formData, gender: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your gender identity" />
                      </SelectTrigger>
                      <SelectContent>
                        {genderOptions.map((option) => (
                          <SelectItem key={option} value={option}>{option}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {/* Step 2: Account Security & Health */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Account Security</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="password">Create Password *</Label>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          value={formData.password}
                          onChange={(e) => setFormData({...formData, password: e.target.value})}
                          placeholder="Create a strong password"
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password *</Label>
                      <div className="relative">
                        <Input
                          id="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          value={formData.confirmPassword}
                          onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                          placeholder="Confirm your password"
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Emergency Contact</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="emergencyContact">Emergency Contact Name</Label>
                        <Input
                          id="emergencyContact"
                          value={formData.emergencyContact}
                          onChange={(e) => setFormData({...formData, emergencyContact: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="emergencyPhone">Emergency Contact Phone</Label>
                        <Input
                          id="emergencyPhone"
                          type="tel"
                          value={formData.emergencyPhone}
                          onChange={(e) => setFormData({...formData, emergencyPhone: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Health Information</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="primaryConcerns">Primary Concerns (Optional)</Label>
                      <Textarea
                        id="primaryConcerns"
                        value={formData.primaryConcerns}
                        onChange={(e) => setFormData({...formData, primaryConcerns: e.target.value})}
                        placeholder="Briefly describe what brings you to therapy..."
                        rows={3}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="previousTherapy">Previous Therapy Experience</Label>
                      <Select value={formData.previousTherapy} onValueChange={(value) => setFormData({...formData, previousTherapy: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          {previousTherapyOptions.map((option) => (
                            <SelectItem key={option} value={option}>{option}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="medications">Current Medications (Optional)</Label>
                      <Textarea
                        id="medications"
                        value={formData.medications}
                        onChange={(e) => setFormData({...formData, medications: e.target.value})}
                        placeholder="List any current medications..."
                        rows={2}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Preferences & Agreements */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Session Preferences</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="sessionPreference">Session Type Preference</Label>
                      <Select value={formData.sessionPreference} onValueChange={(value) => setFormData({...formData, sessionPreference: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your preference" />
                        </SelectTrigger>
                        <SelectContent>
                          {sessionPreferences.map((option) => (
                            <SelectItem key={option} value={option}>{option}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Required Agreements</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-2">
                        <Checkbox 
                          id="termsAccepted"
                          checked={formData.termsAccepted}
                          onCheckedChange={(checked) => setFormData({...formData, termsAccepted: checked as boolean})}
                        />
                        <Label htmlFor="termsAccepted" className="text-sm leading-relaxed">
                          I agree to the{" "}
                          <Link to="/terms" className="text-primary hover:underline">
                            Terms of Service
                          </Link>{" "}
                          and understand the treatment policies. *
                        </Label>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox 
                          id="privacyAccepted"
                          checked={formData.privacyAccepted}
                          onCheckedChange={(checked) => setFormData({...formData, privacyAccepted: checked as boolean})}
                        />
                        <Label htmlFor="privacyAccepted" className="text-sm leading-relaxed">
                          I have read and agree to the{" "}
                          <Link to="/privacy" className="text-primary hover:underline">
                            Privacy Policy
                          </Link>{" "}
                          and HIPAA Notice. *
                        </Label>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox 
                          id="communicationConsent"
                          checked={formData.communicationConsent}
                          onCheckedChange={(checked) => setFormData({...formData, communicationConsent: checked as boolean})}
                        />
                        <Label htmlFor="communicationConsent" className="text-sm leading-relaxed">
                          I consent to receive appointment reminders and important updates 
                          via email, phone, or secure messaging.
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <Shield className="h-5 w-5 text-primary mt-0.5" />
                      <div className="text-sm">
                        <p className="font-medium text-foreground mb-1">Your Privacy is Protected</p>
                        <p className="text-muted-foreground">
                          All information is encrypted and stored securely in compliance with HIPAA regulations. 
                          Your personal health information will never be shared without your explicit consent.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                {step > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(step - 1)}
                  >
                    Previous
                  </Button>
                )}
                
                <Button 
                  type="submit" 
                  className={`btn-hero ${step === 1 ? 'ml-auto' : ''}`}
                  size="lg"
                >
                  {step < 3 ? (
                    "Continue"
                  ) : (
                    <>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Create Account
                    </>
                  )}
                </Button>
              </div>
            </form>

            {/* Additional Links */}
            <div className="mt-6 text-center text-sm">
              <p className="text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="text-primary hover:underline font-medium">
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateAccount;