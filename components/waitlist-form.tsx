"use client";

import * as React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { CheckCircle2, Loader2 } from "lucide-react";

export function WaitlistForm() {
  const [ email, setEmail ] = React.useState("");
  const [ status, setStatus ] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [ errorMessage, setErrorMessage ] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setEmail("");
    } catch(error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to subscribe");
    }
  };

  if (status === "success") {
    return (
      <div
        className="flex items-center gap-3 rounded-2xl border border-green-500/20 bg-green-50 p-4 dark:bg-green-950/20">
        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
        <p className="text-sm font-medium text-green-900 dark:text-green-100">
          Thanks for joining! We'll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === "loading"}
          className="flex-1"
          aria-label="Email address"
        />
        <Button type="submit" disabled={status === "loading"}
                className="sm:w-auto">
          {status === "loading" ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Joining...
            </>
          ) : (
            "Join Waitlist"
          )}
        </Button>
      </div>
      {status === "error" && (
        <p className="text-sm text-destructive">{errorMessage}</p>
      )}
    </form>
  );
}