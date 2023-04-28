// https://www.nps.gov/subjects/developer/api-documentation.htm#/

const data = `
{
  "Yellowstone": {
    "name": "Yellowstone National Park",
    "state": "Wyoming",
    "description": "Yellowstone was the first national park in the world and is known for its wildlife and geothermal features, including the famous Old Faithful geyser.",
    "image": "https://www.nps.gov/common/uploads/grid_builder/yell/crop16_9/25AB6CCF-1DD8-B71B-0B5B630CB5EA9E5A.jpg?width=950&quality=90&mode=crop",
    "link": "https://www.nps.gov/yell/index.htm"
  }, "Yosemite": {
    "name": "Yosemite National Park",
    "state": "California",
    "description": "Almost 95 percent of the park is designated wilderness. Yosemite receives millions of visitors each year who come to hike, rock climb, bike, fish, and enjoy.",
    "image": "https://www.nps.gov/common/uploads/grid_builder/yose/crop16_9/9E50F06F-1DD8-B71B-0BAC76232DA2D65E.jpg?width=950&quality=90&mode=crop",
    "link": "https://www.nps.gov/yose/index.htm"
  }, "GrandCanyon": {
    "name": "Grand Canyon National Park",
    "state": "Arizona",
    "description": "The Grand Canyon is a steep-sided canyon carved by the Colorado River and is considered one of the Seven Natural Wonders of the World.",
    "image": "https://www.nps.gov/common/uploads/grid_builder/imr/crop16_9/467A951C-1DD8-B71B-0BC3832E395BAF5B.jpg?width=950&quality=90&mode=crop",
    "link": "https://www.nps.gov/grca/index.htm"
  }, "Glacier": {
    "name": "Glacier National Park",
    "state": "Montana",
    "description": "Glacier National Park is known for its glacially-carved valleys, alpine meadows, and towering peaks, including the famous Going-to-the-Sun Road.",
    "image": "https://www.nps.gov/common/uploads/grid_builder/glac/crop16_9/9D16EC83-1DD8-B71B-0BEFC6326A391B6A.jpg?width=950&quality=90&mode=crop",
    "link": "https://www.nps.gov/glac/index.htm"
  }, "Zion": {
    "name": "Zion National Park",
    "state": "Utah",
    "description": "Zion is famous for its towering sandstone cliffs, narrow canyons, and diverse plant and animal life.",
    "image": "https://www.nps.gov/common/uploads/grid_builder/zion/crop16_9/5C5E76C9-1DD8-B71B-0B8B69D82A45A026.jpg?width=950&quality=90&mode=crop",
    "link": "https://www.nps.gov/zion/index.htm"
  }, "RockyMountain": {
    "name": "Rocky Mountain National Park",
    "state": "Colorado",
    "description": "Rocky Mountain National Park is known for its jagged peaks, alpine lakes, and abundant wildlife, including elk and bighorn sheep.",
    "image": "https://www.nps.gov/common/uploads/grid_builder/romo/crop16_9/DE34D152-1DD8-B71B-0B2A6A9C36B1EB6B.jpg?width=950&quality=90&mode=crop",
    "link": "https://www.nps.gov/romo/index.htm"
  }, "GreatSmokyMountains": {
    "name": "Great Smoky Mountains National Park",
    "state": "Tennessee",
    "description": "Great Smoky Mountains is known for its diverse plant and animal life, including black bears, elk, and more than 100 species of trees.",
    "image": "https://www.nps.gov/common/uploads/grid_builder/grsm/crop16_9/C600B216-1DD8-B71B-0B2C5812C0F9D089.jpg?width=950&quality=90&mode=crop",
    "link": "https://www.nps.gov/grsm/index.htm"
  }, "Arches": {
    "name": "Arches National Park",
    "state": "Utah",
    "description": "Arches is known for its more than 2,000 natural sandstone arches, as well as balanced rocks, fins, and pinnacles.",
    "image": "https://www.nps.gov/common/uploads/grid_builder/arch/crop16_9/1ABF5F5E-1DD8-B71B-0B2E67AB15F44F00.jpg?width=950&quality=90&mode=crop",
    "link": "https://www.nps.gov/arch/index.htm"
  }, "GrandTeton": {
    "name": "Grand Teton National Park",
    "state": "Wyoming",
    "description": "Grand Teton is known for its towering peaks, pristine lakes, and abundant wildlife, including grizzly bears, wolves, and bison.",
    "image": "https://www.nps.gov/common/uploads/grid_builder/grte/crop16_9/4D7AFAA9-1DD8-B71B-0B3A3ECEA04C0D68.jpg?width=950&quality=90&mode=crop",
    "link": "https://www.nps.gov/grte/index.htm"
  }, "BryceCanyon": {
    "name": "Bryce Canyon National Park",
    "state": "Utah",
    "description": "Bryce Canyon is known for its colorful hoodoos, or spire-shaped rock formations, as well as natural bridges, windows, and fins.",
    "image": "https://www.nps.gov/common/uploads/grid_builder/brca/crop16_9/002B38FA-1DD8-B71B-0B0F3301DA9D50AF.jpg?width=950&quality=90&mode=crop",
    "link": "https://www.nps.gov/brca/index.htm"
  }, "Everglades": {
    "name": "Everglades National Park",
    "state": "Florida",
    "description": "Everglades is known for its vast wetlands, home to alligators, crocodiles, panthers, and a variety of bird species.",
    "image": "https://www.nps.gov/common/uploads/grid_builder/ever/crop16_9/9A221DF6-1DD8-B71B-0B398D80D6550A01.jpg?width=950&quality=90&mode=crop",
    "link": "https://www.nps.gov/ever/index.htm"
  }, "Denali": {
    "name": "Denali National Park",
    "state": "Alaska",
    "description": "Denali is known for its namesake peak, the tallest mountain in North America, as well as its abundant wildlife, including grizzly bears, wolves, and moose.",
    "image": "https://www.nps.gov/common/uploads/grid_builder/dena/crop16_9/61C3337B-1DD8-B71B-0B1871CEC7E4C4D4.jpg?width=950&quality=90&mode=crop",
    "link": "https://www.nps.gov/dena/index.htm"
  }, "Olympic": {
    "name": "Olympic National Park",
    "state": "Washington",
    "description": "Olympic is known for its incredible diversity of ecosystems, from glacier-capped peaks to temperate rainforests to rugged coastline. The park is also home to a variety of wildlife, including Roosevelt elk, black bears, and mountain goats.",
    "image": "https://www.nps.gov/common/uploads/grid_builder/olym/crop16_9/94E67928-1DD8-B71B-0B4A2C4E57C2DA83.jpg?width=950&quality=90&mode=crop",
    "link": "https://www.nps.gov/olym/index.htm"
  }
}
`
