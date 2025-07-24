import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PieChart, AlertTriangle } from "lucide-react";
import type { AssessmentItem } from "@/data/courseData";

interface AssessmentBreakdownProps {
  assessmentItems: AssessmentItem[];
}

export function AssessmentBreakdown({
  assessmentItems,
}: AssessmentBreakdownProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <PieChart className="h-6 w-6 text-primary" />
            <CardTitle className="text-2xl">Assessment Breakdown</CardTitle>
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
              Assessment weights are preliminary and can be refined till the end of first week of classes.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {assessmentItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative overflow-hidden rounded-lg border bg-gradient-to-r from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <Badge variant="secondary" className="mt-1">
                        {item.percentage}%
                      </Badge>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                {/* Progress bar */}
                <div className="mt-4">
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.percentage}%` }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                    />
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-muted-foreground">0%</span>
                    <span className="text-xs font-medium">
                      {item.percentage}%
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
