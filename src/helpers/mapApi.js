const mapApi = async (data) => {
  const apiData = [];
  const objects = Object.keys(data.near_earth_objects);
  objects.map(day => {
    const objectsForTheDay = data.near_earth_objects[day];
    objectsForTheDay.map(day => {
      return (
        apiData.push({
          id: day.id,
          name: day.name, 


          missDistance: Math.round((day.close_approach_data[0].miss_distance.lunar) * 1e2) / 1e2,
          avgSize: Math.round(((day.estimated_diameter.meters.estimated_diameter_min + day.estimated_diameter.meters.estimated_diameter_max) /2) * 1e2) / 1e2,
          closeApproachDate: day.close_approach_data[0].close_approach_date_full,
          speed: Math.round((day.close_approach_data[0].relative_velocity.kilometers_per_hour) * 1e2) / 1e2,
          url: day.nasa_jpl_url
        })
      );
    })
  });

  return apiData;
};

export default mapApi;