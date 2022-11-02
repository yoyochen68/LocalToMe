import React, { useState } from "react";
import { storage } from "../../firebase/clientApp";
import { addNews, getNewsCategories } from "../../server/database";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import TopBanner from "../../components/TopBanner";
import NewsForm from "../../components/NewsForm";
import axios from "axios";

export default function NewNews({ newsList, newsCategories }) {
    const [news, setNews] = useState({
        newsTitle: "",
        newsCreatorId: "Clover Food Bank",
        newsAvatar: "",
        newsDateCreated: new Date(),
        newsContent: undefined,
        newsImage: "",
        newsTags: [],
    });

    const [imageURL, setImageURL] = useState(null);

    // const onSubmit = async (e) => {
    //     e.preventDefault();

    //     axios.post("/api/news", news).then((res) => {
    //         console.log("posted successfully", res.data);
    //     });
    // };

    function handleChangeNewsTitle(newsTitle) {
        console.log(newsTitle);
        setNews({ ...news, newsTitle });
        console.log(news)
        return;
    }

    function handleChangeNewsCreator() {
        // setnewsCreator()
        return;
    }

    function handleChangeNewsContent(newsContent) {
        console.log(newsContent)
        setNews({ ...news, newsContent });
        console.log(news)
        return;
    }

    async function handleChangeNewsImage(img) {
        const imgRef = ref(storage, img.name);
        await uploadBytes(imgRef, img);
        const newImgRef = await getDownloadURL(imgRef);
        setNews({ ...news, newsImage: newImgRef });
        // console.log(img.name);
        setImageURL(img.name);
    }

    function handleChangeNewsCategory(e) {
        setNews({ ...news, newsTags: [...newsTags, e.target.id] });
        return;
    }

    function handleCancel() { }

    function handleConfirm() {
        // console.log(news);
        const postnews = {
            newsTitle: news.newsTitle,
            newsCreatorId: 1,
            newsAvatar: "",
            newsDateCreated: new Date(),
            newsContent: news.newsContent,
            newsImage: news.newsImage,
            newsTags: news.newsTags,
        }

        axios.post("/api/news", postnews).then((res) => {
            window.location = `/community`
            console.log("posted successfully", res.data);
        });
    }

    return (
        <div>
            <TopBanner text={"Create a News"} />
            <NewsForm
                news={news}
                onChangeNewsTitle={handleChangeNewsTitle}
                onChangeNewsCreator={handleChangeNewsCreator}
                onChangeNewsContent={handleChangeNewsContent}
                image={imageURL}
                onChangeNewsImage={handleChangeNewsImage}
                onChangeNewsCategory={handleChangeNewsCategory}
                onConfirm={handleConfirm}
            />

        </div>
    );
}

// export async function getServerSideProps(context) {
//     const newsData = await getAllNews();
//     const newsList = JSON.parse(JSON.stringify(newsData));

//     const newsCategoriesData = await getNewsCategories();
//     const newsCategories = JSON.parse(JSON.stringify(newsCategoriesData));

//     return {
//         props: { newsList, newsCategories }, // will be passed to the page component as props
//     };
// }
