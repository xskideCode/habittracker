"use client";

import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Auth = () => {
  return (
    <div className="flex-1 flex items-center justify-center bg-gradient-to-r from-[#9b59b6] to-[#8e44ad]">
        
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Welcome to Habit Tracker</CardTitle>
            <CardDescription>
              Track your habits and achieve your goals.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex justify-between">
              <Button variant="outline">Sign Up</Button>
              <Button>Log In</Button>
            </div>
          </CardContent>
        </Card>
      </div>
  )
}

export default Auth