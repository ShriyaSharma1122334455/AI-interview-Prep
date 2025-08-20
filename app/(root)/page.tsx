import { Button } from '@/components/ui/button';
import { dummyInterviews } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import InterviewCard from '@/components/InterviewCard';
import {
  getInterviewByUserId,
  getLatestInterview,
} from '@/lib/actions/general.action';
import { getCurrentUser } from '@/lib/actions/auth.action';

const page = async () => {
  const user = await getCurrentUser();
  const [userInterviews, allInterview] = await Promise.all([
    getInterviewByUserId(user?.id!),
    getLatestInterview({ userId: user?.id! }),
  ]);

  const hasPastInterviews = userInterviews?.length! > 0;
  const hasUpcomingInterviews = allInterview?.length! > 0;

  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Interview Prep with AI-Powered Voice Agents & Feedback</h2>
          <p>
            Practice on real interviews with AI voice agents and get instant
            feedback on your performance.
          </p>

          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Get Started</Link>
          </Button>
        </div>
        <Image
          src="/robot.png"
          alt="robo-buddy"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>

        <div className="interviews-section">
          {hasPastInterviews ? (
            userInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <p>You have&apos;t taken any interviews yet</p>
          )}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Take your first Interview</h2>

        <div className="interviews-section">
          {hasUpcomingInterviews ? (
            allInterview?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <p>No New Interviews Available</p>
          )}
        </div>
      </section>
    </>
  );
};

export default page;
