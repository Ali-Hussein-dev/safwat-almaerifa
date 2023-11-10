import dynamic from "next/dynamic";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabContentFullList } from "@/components/God-Names/tab-content-full-list";
import { getAllPages } from "../../../sanity/lib/get-name-page";

const content = {
  buttons: {
    showAll: "عرض الكل",
    // showFav: "المفضلة",
    similars: "أسماء متشابهة",
  },
};
const TabContentSimilarNamesDynamic = dynamic(
  () =>
    import("./tab-content-similar-names").then((r) => r.TabContentSimilarNames),
  {
    loading: () => <div>loading similar names content...</div>,
  },
);

export const AllahNamesTabs = async () => {
  const names = (await getAllPages()).sort((a, b) => +a.slug - +b.slug);

  return (
    <div className="grow pb-10">
      <Tabs dir="rtl" defaultValue="all">
        <TabsList className="w-full">
          <TabsTrigger value="all" className="w-full">
            {content.buttons.showAll}
          </TabsTrigger>
          <TabsTrigger value="similars" className="w-full">
            {content.buttons.similars}
          </TabsTrigger>
        </TabsList>
        <TabContentFullList names={names} />
        <TabContentSimilarNamesDynamic />
      </Tabs>
    </div>
  );
};
