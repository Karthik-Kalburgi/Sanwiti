import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Stethoscope, Shield, Eye, EyeOff, Brain } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [activeTab, setActiveTab] = useState("user");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple demo login - in real app, this would authenticate against a backend
    if (formData.email && formData.password) {
      toast({
        title: "Login Successful",
        description: `Welcome back! Redirecting to your ${activeTab} dashboard...`,
      });
      
      // Redirect to appropriate dashboard based on user type
      setTimeout(() => {
        switch (activeTab) {
          case "user":
            navigate("/dashboard/user");
            break;
          case "doctor":
            navigate("/dashboard/doctor");
            break;
          case "admin":
            navigate("/dashboard/admin");
            break;
          default:
            navigate("/dashboard/user");
        }
      }, 1500);
    } else {
      toast({
        title: "Login Failed",
        description: "Please enter your email and password.",
        variant: "destructive"
      });
    }
  };

  const loginTypes = [
    {
      id: "user",
      label: "Patient Login",
      icon: User,
      description: "Access your health records, appointments, and wellness tracking",
      demoCredentials: "patient@mindcare.com / demo123"
    },
    {
      id: "doctor",
      label: "Doctor Login", 
      icon: Stethoscope,
      description: "Manage patient appointments, notes, and treatment plans",
      demoCredentials: "doctor@mindcare.com / demo123"
    },
    {
      id: "admin",
      label: "Admin Login",
      icon: Shield,
      description: "Access clinic analytics, staff management, and system administration",
      demoCredentials: "admin@mindcare.com / demo123"
    }
  ];

  const currentLoginType = loginTypes.find(type => type.id === activeTab);

  return (
    <div className="min-h-screen subtle-gradient flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2">
            <Brain className="h-10 w-10 text-primary" />
            <span className="text-2xl font-bold text-primary">MindCare</span>
          </Link>
          <p className="text-muted-foreground mt-2">Professional Mental Health Platform</p>
        </div>

        <Card className="card-shadow">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Sign In to Your Account</CardTitle>
            <p className="text-muted-foreground">Choose your account type to continue</p>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3 mb-6">
                {loginTypes.map((type) => (
                  <TabsTrigger 
                    key={type.id} 
                    value={type.id}
                    className="flex flex-col items-center p-3 h-auto"
                  >
                    <type.icon className="h-4 w-4 mb-1" />
                    <span className="text-xs">{type.label.split(' ')[0]}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {loginTypes.map((type) => (
                <TabsContent key={type.id} value={type.id} className="space-y-6">
                  {/* Login Type Info */}
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <type.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold text-foreground">{type.label}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{type.description}</p>
                    <div className="mt-3 p-2 bg-primary/10 rounded text-xs text-primary">
                      <strong>Demo:</strong> {type.demoCredentials}
                    </div>
                  </div>

                  {/* Login Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email" 
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder={`Enter your ${type.label.toLowerCase()} email`}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          value={formData.password}
                          onChange={(e) => setFormData({...formData, password: e.target.value})}
                          placeholder="Enter your password"
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <Eye className="h-4 w-4 text-muted-foreground" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <Link 
                        to="/forgot-password" 
                        className="text-primary hover:underline"
                      >
                        Forgot password?
                      </Link>
                    </div>

                    <Button type="submit" className="w-full btn-hero" size="lg">
                      <type.icon className="h-4 w-4 mr-2" />
                      Sign In as {type.label.split(' ')[0]}
                    </Button>
                  </form>
                </TabsContent>
              ))}
            </Tabs>

            {/* Additional Links */}
            <div className="mt-6 text-center text-sm">
              <p className="text-muted-foreground">
                New patient? {" "}
                <Link to="/create-account" className="text-primary hover:underline font-medium">
                  Create an account
                </Link>
              </p>
            </div>

            <div className="mt-6 pt-6 border-t text-center">
              <p className="text-xs text-muted-foreground">
                Need help? Contact our support team at{" "}
                <a href="mailto:support@mindcare.com" className="text-primary hover:underline">
                  support@mindcare.com
                </a>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Security Notice */}
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            🔒 Your data is protected with enterprise-grade security and HIPAA compliance
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;