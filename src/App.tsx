import firebase from "firebase/app";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Helmet } from "react-helmet";

import "./App.css";

export const App = () => {
  const { slug } = useParams<{ slug: string }>();
  const [meta, setMeta] = useState({ title: "", description: "", image: "" });

  console.log(slug);

  useEffect(() => {
    if (!slug) return;
    const fetchData = async () => {
      const res = await firebase
        .firestore()
        .collection("rollers")
        .where("slug", "==", slug)
        .get();
      const { title, description, image } = res.docs[0].data();
      setMeta({ title, description, image });
    };
    fetchData();
  }, [slug]);

  useEffect(() => {
    if (process.env.NODE_ENV === "development") return;
    setTimeout(() => {
      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }, 500);
  }, []);

  return (
    <div className="App">
      <Helmet>
        <title>{meta.title}</title>
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
      </Helmet>

      <p>Loading...</p>
    </div>
  );
};
