
export default async function getImages(numCards) {
    const URL_API = `https://dog.ceo/api/breed/pug/images/random/${numCards}`

    const res = await fetch(URL_API);
    const data = await res.json();
    const listImgs = data.message;
    console.log(listImgs);
};

