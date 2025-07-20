// igotthispiyu: Hostel Life Blog Website (Creative + Monetized Ready)

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function IgotThisPiyu() {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 px-6 py-8 font-sans">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-pink-600">igotthispiyu 💕</h1>
          <p className="text-base mt-2 text-pink-400 italic">
            Hostel drama, glow ups & real girl fixes ✨
          </p>
        </header>

        <section className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-pink-500 mb-2">
                💅 10 Things Only Hostel Girls Get
              </h2>
              <p>
                From bucket baths to 3AM Maggi therapy — here’s the unfiltered list of daily chaos and comfort in hostel life. Don’t lie, you’ve done at least 7 of these.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-pink-500 mb-2">
                🧠 I Was Too Free. Here’s How I Fixed My Brain
              </h2>
              <p>
                If you’re in the “I have time but no will” phase, this post is your holy list of dopamine boosters that *actually* work — no BS.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-pink-500 mb-2">
                👯 Roommate Things That Deserve Jail
              </h2>
              <p>
                Bathing at 6AM, eating your chips without asking, or judging your glow-up phase? We list them all. #hosteltrauma
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mt-10 text-center">
          <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-6 py-2 text-lg">
            ✨ Read More Posts
          </Button>
        </section>

        <footer className="mt-16 text-center text-sm text-pink-400">
          made with chai & chappals @igotthispiyu 💗
        </footer>
      </div>
    </div>
  );
}
