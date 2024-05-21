import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Card from "@/components/ui/cardArticles";
import { ArticleData } from "@/data/ArticlesData";
import Sidebar from "@/components/Sidebar"; // Import the Sidebar component
import { Metadata } from "next";
import FloatingIcon from "@/components/FloatingIcon";

const Page = () => {
  return (
    <div className="">
      <Header />
      <div>
        <h1 className="text-3xl font-bold mb-4 pt-20">Articles</h1>
        <Sidebar />
      </div>
      <div className="gap-6 flex flex-wrap justify-center">
        {ArticleData.map((article) => (
          <Card key={article.id} article={article} />
        ))}
      </div>
      <FloatingIcon />
      <Footer />
    </div>
  );
};

export default Page;
