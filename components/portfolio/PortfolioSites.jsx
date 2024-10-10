"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";

const PortfolioSites = () => {
  const [items, setItems] = useState([]);
  const [displayedItems, setDisplayedItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 12;
  const observerRef = useRef();

  const router = useRouter();

  const openProjectHandle = (id) => {
    router.push(`/portfolio/${id}`);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("/api/portfolio/get", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: "" }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await response.json();
        const filteredData = data
          .filter((item) => item.Type === "website")
          .sort((a, b) => new Date(b.Date) - new Date(a.Date));
        
        setItems(filteredData);
        setDisplayedItems(filteredData.slice(0, itemsPerPage)); 
      } catch (error) {
        console.log(error);
      }
      finally{
        setLoading(false);
      }
    };

    getData();
  }, []);

  const loadMoreItems = () => {
    const nextPage = page + 1;
    const newItems = items.slice(0, nextPage * itemsPerPage);
    setDisplayedItems(newItems);
    setPage(nextPage);
  };

  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreItems();
        }
      },
      { threshold: 1.0 }
    );

    observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [items, page]);

  return (
    <article className="flex flex-wrap gap-[25px] justify-center gap-y-[50px]">
      {loading && <div className="loader"></div>}
      {displayedItems.map((item, index) => (
        <div key={index} className="w-[250px] h-[500px] relative flex flex-col items-center justify-center portfolio-item-hovered duration-500 p-[20px] cursor-pointer" onClick={() => openProjectHandle(item._id)}>
          <div className="absolute top-0 left-0 w-full h-full transparent-y bg-cover bg-center saturate-0 brightness-50 z-10  duration-500" style={{ backgroundImage: `url(${item.Background})` }} ></div>
          <Image src={item.Logo} width={0} height={0} sizes="100vw" alt={`logo ${item.Name}`} className="w-auto h-[50px] z-10 absolute top-[50px] duration-500 xxl:h-[60px]" />
          <p className="z-10 text-[17px] duration-500 absolute bottom-[50%] translate-y-[50%] xxl:text-[22px] xxl:text-center xxl:px-[10px]">
            {item.Name}
          </p>
        </div>
      ))}
      <div ref={observerRef} className="w-full h-10"></div>
    </article>
  );
};

export default PortfolioSites;
