import { useState, useEffect } from "react";
import { Video } from "../types/video";

const HOLODEX_API_KEY = import.meta.env.VITE_HOLODEX_API_KEY
const apiUrl = "https://holodex.net/api/v2/live"

export function useLiveData(org: string) {
  const [liveData, setLiveData] = useState<Array<Video> | null>(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLiveData = async (org: string) => {
      try {
        let fetchUrl = new URL(apiUrl);
        if (org !== "All") { fetchUrl.searchParams.append("org", org) };
        console.log(fetchUrl);
        const response = await fetch(fetchUrl, {
          headers: {
            "X-APIKEY": HOLODEX_API_KEY
          }
        });
        const live = await response.json();
        console.log(live);
        setLiveData(live);
        setLoading(false);
      } catch (error) {
        console.log(error)
        setLoading(false);
      }
    }

    fetchLiveData(org);
  }, [org])

  return { liveData, loading };
}