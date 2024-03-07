"use client";
import useSWR from "swr";

export default function Followers() {
  const fetcher = () => fetch("/api/trackers/followers").then((res) => res.json());
  const goalRes = useSWR < { goal: string; current: string }>("/api/trackers/followers", fetcher, { refreshInterval: 60 * 1000 });

  
  if (goalRes.isLoading) {
    return <div>Loading...</div>;
  }

  if (goalRes.error || !goalRes.data) {
    return <div>Error loading goal</div>;
  }

  const { goal, current } = goalRes.data;
  const followerCount = parseInt(current);


  if (!goal) {
    return (
      <div>
        <h1>Followers</h1>
        <p>Goal not set</p>
      </div>
    );
  }

  return (
    <div className="text-4xl">
      <h1 className="text-center">Follower Goal</h1>
      <div className="flex items-center">
      <div className="w-full h-12 bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          className="h-12 bg-canary rounded-full dark:bg-canary"
          style={{ width: `${(followerCount / parseInt(goal)) * 100}%` }}
        >
          <div className="w-full text-center text-black pt-1">{followerCount}</div>
          </div>
      </div>
        {goal}
        </div>
    </div>

  );
}