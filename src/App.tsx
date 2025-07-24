import { motion } from "framer-motion";
import { Calendar, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CourseHeader } from "@/components/CourseHeader";
import { CourseOverview } from "@/components/CourseOverview";
import { WeekCard } from "@/components/WeekCard";
import { courseInfo, learningObjectives, units } from "@/data/courseData";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <div className="container mx-auto px-4 py-8 space-y-12">
        {/* Course Header */}
        <CourseHeader courseInfo={courseInfo} />

        {/* Course Overview */}
        <CourseOverview
          courseInfo={courseInfo}
          learningObjectives={learningObjectives}
        />

        {/* Weekly Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Calendar className="h-6 w-6 text-primary" />
                <CardTitle className="text-2xl">Weekly Breakdown</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg bg-blue-50 dark:bg-blue-950/20 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                    Schedule Notice
                  </span>
                </div>
                <p className="text-sm text-blue-700 dark:text-blue-200">
                  Weekly schedule is tentative and may be adjusted throughout
                  the semester to accommodate learning pace and student needs.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Units */}
          <div className="space-y-12">
            {units.map((unit, unitIndex) => (
              <motion.div
                key={unit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + unitIndex * 0.2, duration: 0.6 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-2xl">{unit.icon}</div>
                  <div>
                    <Badge variant="outline" className="mb-2">
                      Unit {unitIndex + 1}
                    </Badge>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {unit.title}
                    </h2>
                    <p className="text-muted-foreground">
                      Weeks {unit.weeks[0].number}–
                      {unit.weeks[unit.weeks.length - 1].number}
                    </p>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {unit.weeks.map((week, weekIndex) => (
                    <WeekCard key={week.number} week={week} index={weekIndex} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-center py-8 text-muted-foreground"
        >
          <p>
            © 2025 {courseInfo.instructor} • {courseInfo.semester}
          </p>
        </motion.footer>
      </div>
    </div>
  );
}

export default App;
