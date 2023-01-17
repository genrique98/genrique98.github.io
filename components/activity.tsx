import * as React from "react"

// const activities = ["Learning", "Solving a problem", "Exploring"];
const activities = ["Learning", "Solving", "Exploring"];

export default function Activity() {
    const [current, changeActivity] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            changeActivity(current + 1);
            if (current >= 2) {
                changeActivity(0);
            }
            // console.log(current);
        }, 2000);
        // clearing interval
        return () => clearInterval(timer);
      });

    return (
        <span className="text-blue-500 font-bold">
            {activities[current]}
        </span>
    );
}