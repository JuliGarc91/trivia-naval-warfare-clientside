import axios from "axios";
import { useEffect, useState } from "react";
import RssFeedForm from "./RssFeedForm";

const RssFeed = () => {
  const [articles, setArticles] = useState(null);

  const [selectedSection, setSelectedSection] = useState('');

  const getArticles = async (section) => {
    try {
      const res = await axios.get(`http://localhost:3003/section?section=${section}`);
      console.log(res.data)
      setArticles(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectSection = (section) => {
    setSelectedSection(section);
    getArticles(section);
  };

  let formatDate = { day: "numeric", month: "long", year: "numeric" };

  return (
    <div className="flex flex-col gap-2 p-2">
      <RssFeedForm onSelectSection={handleSelectSection} />
      <hr className="border-2"/>
      {Array.isArray(articles) && articles.map((item, i) => (
        <div key={i} className="m-2 p-4 bg-navy/60  text-white border-2 border-black" style={{ fontFamily: "Kode Mono, monospace", fontStyle: 'normal' }}>
          <h2 className="text-xl">Topic: {item.item.title}</h2>
          <p>Published: {new Date(item.item.pubDate).toLocaleDateString("en-US", formatDate)}</p>
          <p>Summary: {item.item.contentSnippet}... 
          {/* maybe make it into button */}
            <a href={item.item.link}>
              <strong>Click to read more</strong>
            </a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default RssFeed;