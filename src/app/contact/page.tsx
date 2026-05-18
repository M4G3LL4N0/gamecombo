"use client";

import { useState } from "react";
import { SubpageVisual } from "@/components/SubpageVisual";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <>
    <SubpageVisual variant="contact" />
      <section className="mx-auto max-w-3xl px-5 py-14">
      <h1 className="text-4xl font-semibold text-white">Contact</h1>
      <p className="mt-3 text-white/75">
        Tell us what you want to build with GameCombo and we will follow up.
      </p>
      <Card className="mt-8">
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <label className="block">
            <span className="mb-2 block text-sm text-white/80">Name</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded-xl border border-white/15 bg-[#070d1f] px-3 py-2 text-sm text-white"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm text-white/80">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl border border-white/15 bg-[#070d1f] px-3 py-2 text-sm text-white"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm text-white/80">Message</span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              className="w-full rounded-xl border border-white/15 bg-[#070d1f] px-3 py-2 text-sm text-white"
            />
          </label>
          <Button type="submit">Send message</Button>
        </form>
        {sent && (
          <p className="mt-4 rounded-xl border border-emerald-300/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100">
            Message sent locally. Thanks, {name}. We will be in touch at {email}.
          </p>
        )}
      </Card>
    </section>
  </>
  )
}
