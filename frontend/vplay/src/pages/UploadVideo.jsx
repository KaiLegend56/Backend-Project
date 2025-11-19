import { useState } from "react";
import api from "../api/axios";

export default function UploadVideo() {
  const [data, setData] = useState({
    videoFile: null,
    thumbnail: null,
    title: "",
    description: "",
  });

  const submit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    Object.keys(data).forEach((k) => form.append(k, data[k]));

    const res = await api.post("/videos", form, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    alert("Uploaded!");
    console.log("Uploaded Cloudinary URLs:", res.data);
  };

  return (
    <div className="p-5 max-w-xl mx-auto">
      <h1 className="text-xl mb-4 font-bold">Upload Video</h1>

      <form className="flex flex-col gap-3" onSubmit={submit}>

        <input type="file" accept="video/*"
          onChange={(e) => setData({ ...data, videoFile: e.target.files[0] })}
        />

        <input type="file" accept="image/*"
          onChange={(e) => setData({ ...data, thumbnail: e.target.files[0] })}
        />

        <input className="border p-2" placeholder="Title"
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />

        <textarea className="border p-2" placeholder="Description"
          onChange={(e) => setData({ ...data, description: e.target.value })}
        />

        <button className="bg-blue-600 text-white p-2 rounded">
          Upload
        </button>
      </form>
    </div>
  );
}
