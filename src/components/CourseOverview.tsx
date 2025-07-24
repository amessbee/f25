import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Info,
  Target,
  AlertTriangle,
  CheckCircle,
  Clock,
  Laptop,
  Star,
} from "lucide-react";
import type { CourseInfo } from "@/data/courseData";

interface CourseOverviewProps {
  courseInfo: CourseInfo;
  learningObjectives: string[];
}

export function CourseOverview({
  courseInfo,
  learningObjectives,
}: CourseOverviewProps) {
  const overviewItems = [
    {
      icon: <Star className="h-5 w-5" />,
      label: "Credits",
      value: `${courseInfo.credits} credit hours`,
      color: "text-yellow-600",
    },
    {
      icon: <AlertTriangle className="h-5 w-5" />,
      label: "Prerequisite",
      value: courseInfo.prerequisite,
      color: "text-red-600",
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      label: "Eligibility",
      value:
        "Open to undergraduate students. Graduate students may attend informally but cannot take for credit.",
      color: "text-green-600",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      label: "Schedule",
      value: courseInfo.schedule,
      color: "text-blue-600",
    },
    {
      icon: <Laptop className="h-5 w-5" />,
      label: "Format",
      value: courseInfo.format,
      color: "text-purple-600",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Course Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Info className="h-6 w-6 text-primary" />
              <CardTitle className="text-2xl">Course Overview</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-6 rounded-lg bg-amber-50 dark:bg-amber-950/20 p-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
                <span className="text-sm font-semibold text-amber-700 dark:text-amber-300">
                  Important Notice
                </span>
              </div>
              <p className="text-sm text-amber-700 dark:text-amber-200">
                Course details are tentative and subject to change based on
                enrollment and scheduling requirements.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {overviewItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex gap-3"
                >
                  <div className={`flex-shrink-0 ${item.color}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{item.label}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Learning Objectives */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Target className="h-6 w-6 text-primary" />
              <CardTitle className="text-2xl">Learning Objectives</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              By the end of the course, students will:
            </p>
            <div className="space-y-3">
              {learningObjectives.map((objective, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600" />
                  </div>
                  <p className="text-sm leading-relaxed">{objective}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
