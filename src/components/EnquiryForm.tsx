import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const EnquiryForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    relation: "",
    preferredTime: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name ||
      !formData.phone ||
      !formData.relation ||
      !formData.preferredTime
    ) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to process your enquiry.",
        variant: "destructive",
      });
      return;
    }

    // Here you would normally send the data to your backend
    toast({
      title: "Enquiry Submitted Successfully!",
      description:
        "We'll call you back within 2 hours during the preferred time.",
    });

    window.open(`https://docs.google.com/forms/d/e/1FAIpQLSdYJ7pE680Tj-_09GllIDvVtMPJlV1H3NY_VGcnB0ycULGpVA/viewform?usp=pp_url&entry.1238028834=${formData.name.toString()}&entry.1076504006=${formData.phone.toString()}&entry.2013149247=${formData.relation.toString()}&entry.1870962813=${formData.preferredTime.toString()}`)
    // Reset form
    setFormData({
      name: "",
      phone: "",
      relation: "",
      preferredTime: "",
    });
  };

  return (
    <section className="py-20 gradient-bg" id="contactus">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm animate-fade-in">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl md:text-4xl font-serif font-bold text-sage-900 mb-4">
              Schedule a Personal Visit
            </CardTitle>
            <p className="text-lg text-sage-700 leading-relaxed">
              Experience Grace Garden yourself. Schedule a visit to see our
              facilities, meet our team, and feel the warmth of our community.
            </p>
          </CardHeader>

          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sage-900 font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="border-sage-200 focus:border-sage-500 focus:ring-sage-500"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sage-900 font-medium">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="border-sage-200 focus:border-sage-500 focus:ring-sage-500"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="relation"
                    className="text-sage-900 font-medium"
                  >
                    Relation with Elder *
                  </Label>
                  <Select
                    value={formData.relation}
                    onValueChange={(value) =>
                      setFormData({ ...formData, relation: value })
                    }
                    required
                  >
                    <SelectTrigger className="border-sage-200 focus:border-sage-500 focus:ring-sage-500">
                      <SelectValue placeholder="Select your relation" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-sage-200">
                      <SelectItem value="self">Self</SelectItem>
                      <SelectItem value="child">Child</SelectItem>
                      <SelectItem value="spouse">Spouse</SelectItem>
                      <SelectItem value="other">Other Family Member</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="preferredTime"
                    className="text-sage-900 font-medium"
                  >
                    Preferred Callback Time *
                  </Label>
                  <Select
                    value={formData.preferredTime}
                    onValueChange={(value) =>
                      setFormData({ ...formData, preferredTime: value })
                    }
                    required
                  >
                    <SelectTrigger className="border-sage-200 focus:border-sage-500 focus:ring-sage-500">
                      <SelectValue placeholder="Select preferred time" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-sage-200">
                      <SelectItem value="morning">
                        Morning (9AM-12PM)
                      </SelectItem>
                      <SelectItem value="afternoon">
                        Afternoon (12PM-4PM)
                      </SelectItem>
                      <SelectItem value="evening">
                        Evening (4PM-7PM)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
                <div className="pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-sage-600 hover:bg-sage-700 text-white font-medium py-4 text-lg rounded-full hover-lift"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Submit Enquiry
                  </Button>
                </div>
            </form>

            <div className="mt-8 text-center text-sm text-sage-600">
              <p>
                We respect your privacy and will never share your information.
              </p>
              <p className="mt-1">
                Our team will contact you within 30 mins during your preferred
                time.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EnquiryForm;
