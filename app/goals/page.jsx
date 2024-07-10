import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Goals = () => {
  return (
    <div className="flex-1 flex flex-col">
      <header className=" bg-gradient-to-r from-[#9b59b6] to-[#8e44ad] text-primary-foreground py-4 px-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Goals</h1>
          <p className="text-sm text-primary-foreground/80">
            Set and update your habit goals.
          </p>
        </div>
        <Button>Edit Goals</Button>
      </header>
      <div className="flex-1 overflow-auto p-6">
        <Card>
          <CardHeader>
            <CardTitle>Habit Completion Rate</CardTitle>
            <CardDescription>
              Maintain a habit completion rate of at least 80%.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">75%</div>
              <Progress value={75} />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Streak Length</CardTitle>
            <CardDescription>
              Maintain a streak of at least 30 consecutive days.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">15</div>
              <Progress value={50} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Goals;
