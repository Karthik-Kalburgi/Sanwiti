import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, 
  Users, 
  Calendar, 
  DollarSign, 
  TrendingUp, 
  Activity,
  AlertTriangle,
  Clock,
  FileText,
  Settings,
  UserCheck,
  Building
} from "lucide-react";
import adminDashboardImage from "@/assets/admin-dashboard.jpg";

const AdminDashboard = () => {
  const keyMetrics = [
    { label: "Total Patients", value: "1,247", change: "+12%", icon: Users },
    { label: "Monthly Revenue", value: "$89,450", change: "+8%", icon: DollarSign },
    { label: "Active Therapists", value: "24", change: "+2", icon: UserCheck },
    { label: "Appointments Today", value: "156", change: "+15%", icon: Calendar }
  ];

  const departmentStats = [
    { name: "Individual Therapy", patients: 485, revenue: 32400, utilization: 87 },
    { name: "Couples Therapy", patients: 142, revenue: 18600, utilization: 76 },
    { name: "Group Therapy", patients: 298, revenue: 12200, utilization: 92 },
    { name: "Child Psychology", patients: 186, revenue: 15800, utilization: 83 },
    { name: "Psychiatry", patients: 136, revenue: 21600, utilization: 71 }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">MindCare Admin Dashboard</h1>
              <p className="text-primary-foreground/80">Clinic Operations & Analytics Overview</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Alerts (2)
              </Button>
              <Button variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-6 space-y-6">
        {/* Dashboard Overview Image */}
        <Card className="card-shadow overflow-hidden">
          <div className="relative h-48 bg-gradient-to-r from-primary/10 to-secondary/20">
            <img 
              src={adminDashboardImage} 
              alt="Healthcare administration dashboard showing clinic analytics and management interface" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
            <div className="absolute bottom-4 left-4 text-primary-foreground">
              <h2 className="text-lg font-semibold">Comprehensive Clinic Management</h2>
              <p className="text-sm opacity-90">Real-time analytics and operational insights</p>
            </div>
          </div>
        </Card>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {keyMetrics.map((metric, index) => (
            <Card key={index} className="card-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{metric.label}</p>
                    <p className="text-2xl font-bold text-primary">{metric.value}</p>
                    <div className="flex items-center mt-1">
                      <TrendingUp className="h-3 w-3 text-success mr-1" />
                      <span className="text-xs text-success">{metric.change}</span>
                    </div>
                  </div>
                  <metric.icon className="h-8 w-8 text-primary/60" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Department Performance */}
          <div className="xl:col-span-2">
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 text-primary mr-2" />
                  Department Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {departmentStats.map((dept, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium">{dept.name}</h4>
                        <Badge variant="secondary">{dept.patients} patients</Badge>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Revenue</p>
                          <p className="font-medium">${dept.revenue.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Utilization</p>
                          <p className="font-medium">{dept.utilization}%</p>
                        </div>
                        <div>
                          <Progress value={dept.utilization} className="mt-1" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions & Alerts */}
          <div className="space-y-6">
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle>System Alerts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-warning/10 border-l-4 border-warning rounded">
                  <p className="text-sm font-medium">Staff Schedule Conflict</p>
                  <p className="text-xs text-muted-foreground">Dr. Chen has overlapping appointments</p>
                </div>
                <div className="p-3 bg-primary/10 border-l-4 border-primary rounded">
                  <p className="text-sm font-medium">Insurance Update Required</p>
                  <p className="text-xs text-muted-foreground">3 patients need coverage verification</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-shadow">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Staff Management
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Building className="h-4 w-4 mr-2" />
                  Resource Planning
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Reports
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Activity className="h-4 w-4 mr-2" />
                  System Analytics
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;