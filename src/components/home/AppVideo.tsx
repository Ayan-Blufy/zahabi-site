
import React, { useState, useEffect } from "react";
import { Play, Pause, Loader } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

// Video API interface
interface VideoData {
  id: string;
  title: string;
  description: string;
  url: string;
  posterUrl: string;
  features: {
    title: string;
    description: string;
  }[];
}

// Fetch video data from API
const fetchVideoData = async (): Promise<VideoData> => {
  // For demo purposes, we're returning mock data
  // In a real application, this would be a fetch call to your API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: "gold-demo-1",
        title: "See Zahabi in Action",
        description: "Watch how our platform revolutionizes gold-backed financing and investing",
        url: "https://zahabi-test-78997878.s3.ap-south-1.amazonaws.com/zahabi.mp4",
        posterUrl: "https://images.unsplash.com/photo-1610375461369-d613b564dbdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        features: [
          {
            title: "Secure Vaulting",
            description: "See how we safely store and insure your physical gold"
          },
          {
            title: "Instant Loans",
            description: "Watch the streamlined process for obtaining gold-backed loans"
          },
          {
            title: "Digital Investing",
            description: "Discover how easily you can invest in fractional gold ownership"
          }
        ]
      });
    }, 1500); // Simulate network delay
  });
};

const AppVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const { data: videoData, isLoading, isError } = useQuery({
    queryKey: ['appVideo'],
    queryFn: fetchVideoData
  });
  
  const togglePlay = () => {
    const video = document.getElementById("app-demo-video") as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Reset playing state when video data changes
  useEffect(() => {
    setIsPlaying(false);
  }, [videoData]);

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 flex justify-center items-center" style={{ minHeight: "400px" }}>
          <div className="flex flex-col items-center gap-4">
            <Loader className="h-12 w-12 animate-spin text-zahabi-gold" />
            <p className="text-lg text-muted-foreground">Loading video...</p>
          </div>
        </div>
      </section>
    );
  }

  if (isError || !videoData) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 flex justify-center items-center" style={{ minHeight: "400px" }}>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Sorry, we couldn't load the video</h2>
            <p className="text-muted-foreground">Please try again later or contact support if the problem persists.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{videoData.title}</h2>
          <p className="text-muted-foreground">
            {videoData.description}
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-zahabi-gold/20">
          <video 
            id="app-demo-video"
            className="w-full aspect-video"
            poster={videoData.posterUrl}
            onEnded={() => setIsPlaying(false)}
          >
            <source src={videoData.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Play/Pause Button */}
          <button 
            onClick={togglePlay}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-zahabi-gold text-white hover:bg-zahabi-gold transition-all duration-300 focus:outline-none"
          >
            {isPlaying ? (
              <Pause className="h-8 w-8" />
            ) : (
              <Play className="h-8 w-8 ml-1" />
            )}
          </button>
          
          {/* Video Controls */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 flex items-center">
            <button 
              onClick={togglePlay}
              className="text-white mr-4 flex items-center gap-1 text-sm"
            >
              {isPlaying ? (
                <>
                  <Pause className="h-4 w-4" /> Pause
                </>
              ) : (
                <>
                  <Play className="h-4 w-4" /> Play
                </>
              )}
            </button>
            <div className="text-white text-xs">Experience how Zahabi transforms gold ownership</div>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {videoData.features.map((feature, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppVideo;