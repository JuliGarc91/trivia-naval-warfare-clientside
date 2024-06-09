const RssFeedForm= ({ onSelectSection }) => {
  const sections = [
    'Africa', 'Americas', 'ArtandDesign', 'Arts', 'AsiaPacific', 'Automobiles', 'Baseball', 
    'Books/Review', 'Business', 'Climate', 'CollegeBasketball', 'CollegeFootball', 'Dance', 
    'Dealbook', 'DiningandWine', 'Economy', 'Education', 'EnergyEnvironment', 'Europe', 
    'FashionandStyle', 'Golf', 'Health', 'Hockey', 'HomePage', 'Jobs', 'Lens', 
    'MediaandAdvertising', 'MiddleEast', 'MostEmailed', 'MostShared', 'MostViewed', 'Movies', 
    'Music', 'NYRegion', 'Obituaries', 'PersonalTech', 'Politics', 'ProBasketball', 'ProFootball', 
    'RealEstate', 'Science', 'SmallBusiness', 'Soccer', 'Space', 'Sports', 'SundayBookReview', 
    'Sunday-Review', 'Technology', 'Television', 'Tennis', 'Theater', 'TMagazine', 'Travel', 
    'Upshot', 'US', 'Weddings', 'Well', 'World', 'YourMoney'
  ];

  const handleChange = (event) => {
    const section = event.target.value;
    onSelectSection(section);
  };

  return (
    <div>
      <label htmlFor="section">
        <h1 className="text-4xl text-white p-2" style={{ fontFamily: "Black Ops One, system-ui", fontStyle: 'normal' }}>Fact Fleet</h1>
      </label>
      <select className="p-2 rounded-sm m-2" id="section" onChange={handleChange} style={{ fontFamily: "Orbitron, sans-serif", fontStyle: 'normal' }}
      >
        <option value="">Select a section</option>
        {sections.map((section, index) => (
          <option key={index} value={section}>{section}</option>
        ))}
      </select>
    </div>
  );
};

export default RssFeedForm