import { useParams } from "react-router-dom";
import activityData from "../data/activityData";

const ActivityPage = () => {
  const { activityName } = useParams();
  const activity = activityData[activityName];

  if (!activity) {
    return (
      <div className="min-h-screen pt-24 px-6 text-center">
        <h1 className="text-3xl font-bold text-red-600">Activity Not Found</h1>
        <p className="text-gray-500 mt-2">Check the URL or return to home.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{activity.title}</h1>

      {/* Activity Image */}
      <img
        src={activity.image}
        alt={activity.title}
        className="w-full h-64 object-cover rounded-xl shadow-md mb-6"
      />

      {/* Description */}
      <p className="text-lg text-gray-700 mb-6">{activity.description}</p>

      {/* Features */}
      <h2 className="text-2xl font-semibold mb-2">What's Included:</h2>
      <ul className="list-disc list-inside space-y-1 text-gray-600">
        {activity.features.map((feature, index) => (
          <li key={index}>✓ {feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityPage;
