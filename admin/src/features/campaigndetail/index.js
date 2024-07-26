import React, { useState, useCallback } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { useParams, useNavigate } from "react-router-dom";

const modules = {
  toolbar: {
    container: [
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
        { align: [] },
      ],
      [
        {
          color: [
            "#000000",
            "#e60000",
            "#ff9900",
            "#ffff00",
            "#008a00",
            "#0066cc",
            "#9933ff",
            "#ffffff",
            "#facccc",
            "#ffebcc",
            "#ffffcc",
            "#cce8cc",
            "#cce0f5",
            "#ebd6ff",
            "#bbbbbb",
            "#f06666",
            "#ffc266",
            "#ffff66",
            "#66b966",
            "#66a3e0",
            "#c285ff",
            "#888888",
            "#a10000",
            "#b26b00",
            "#b2b200",
            "#006100",
            "#0047b2",
            "#6b24b2",
            "#444444",
            "#5c0000",
            "#663d00",
            "#666600",
            "#003700",
            "#002966",
            "#3d1466",
            "custom-color",
          ],
        },
      ],
    ],
    handlers: {
      image: function () {
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();

        input.onchange = async () => {
          const file = input.files[0];
          const formData = new FormData();
          formData.append("image", file);

          try {
            const response = await axios.post(
              `${process.env.REACT_APP_SERVER_URL}/upload-image`,
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            );
            const url = response.data.url;
            const quill = this.quill;
            const range = quill.getSelection();
            quill.insertEmbed(range.index, "image", url);
          } catch (error) {
            NotificationManager.error("Image upload failed");
          }
        };
      },
    },
  },
};

const formats = [
  "header",
  "height",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "color",
  "bullet",
  "indent",
  "link",
  "image",
  "align",
  "size",
];

const CampaignDetail = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { link } = useParams();
  const [formData, setFormData] = useState();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchData = async () => {
    try {
      if (token && link) {
        setLoading(true);
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/admin/get-campaign-details/${link}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setFormData(response.data.campaignDetail);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        return navigate(`/`);
      }
      NotificationManager.error("Failed to fetch campaigns", "Error", 5000);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [token]);

  const handleProcedureContentChange = (content) => {
    setFormData({ ...formData, description: content });
  };

  const handleFormData = ({ updateType, value }) => {
    setFormData({ ...formData, [updateType]: value });
  };

  const updateToggleValue = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      status: prevFormData.status === "private" ? "public" : "private",
    }));
  };

  const handleAmountChange = (value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      amount: value,
    }));
  };

  const handleThumbnailChange = (event) => {
    const file = event.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      thumbnail: file,
      thumbnailPreview: URL.createObjectURL(file),
    }));
  };

  const handleCarouselImagesChange = (event) => {
    const files = Array.from(event.target.files);
    const carouselPreviews = files.map((file) => URL.createObjectURL(file));
    setFormData((prevFormData) => ({
      ...prevFormData,
      carouselImages: [...prevFormData.carouselImages, ...files],
      carouselPreviews: [...prevFormData.carouselPreviews, ...carouselPreviews],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (
      !formData.title ||
      !formData.status ||
      !formData.amount ||
      !formData.beneficiaryName ||
      !formData.thumbnail ||
      formData.carouselImages.length === 0
    ) {
      setErrorMessage("All fields are required.");
      NotificationManager.error("Error", "All fields are required.");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("status", formData.status);
    formDataToSend.append("amount", formData.amount);
    formDataToSend.append("beneficiaryName", formData.beneficiaryName);

    if (formData.thumbnail) {
      formDataToSend.append("thumbnail", formData.thumbnail);
    }
    for (let i = 0; i < formData.carouselImages.length; i++) {
      formDataToSend.append("carouselImages", formData.carouselImages[i]);
    }

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_SERVER_URL}/admin/update-campaign-details/${link}`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      NotificationManager.success(
        "Success",
        "Created new Campaign Successfully"
      );
      fetchData();
    } catch (error) {
      setErrorMessage(error.response.data.error);
      NotificationManager.error(
        "Error",
        "Failed to create new campaign",
        5000
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NotificationContainer />
      {formData && formData.id && (
        <div className="w-full flex flex-col gap-8">
          <InputText
            type="text"
            defaultValue={formData.title}
            updateType="title"
            containerStyle="mt-4"
            labelTitle="Enter Campaign Title"
            updateFormValue={handleFormData}
          />
          <InputText
            type="text"
            defaultValue={formData.beneficiaryName}
            updateType="beneficiaryName"
            labelTitle="Enter Beneficiary Name"
            updateFormValue={handleFormData}
          />
          <label className="label cursor-pointer flex justify-start gap-4 w-fit">
            <span className="label-text text-base-content">
              Status: {formData.status}
            </span>
            <input
              type="checkbox"
              className="toggle"
              checked={formData.status === "public"}
              onChange={updateToggleValue}
            />
          </label>
          <input
            type="number"
            value={formData.amount}
            placeholder="Enter Campaign Amount"
            onChange={(e) => handleAmountChange(e.target.value)}
            className="input input-bordered w-full"
            style={{
              appearance: "textfield",
              MozAppearance: "textfield",
              MsAppearance: "textfield",
            }}
          />
          <div className="form-control flex flex-col gap-2">
            <label className="label">
              <span className="label-text">Upload Thumbnail Image</span>
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleThumbnailChange}
              className="input input-bordered w-full"
            />
            {formData.thumbnailPreview && (
              <img
                src={formData.thumbnailPreview}
                alt="Thumbnail Preview"
                className="w-32 h-32 mt-2 object-cover"
              />
            )}
          </div>
          <div className="form-control flex flex-col gap-2">
            <label className="label">
              <span className="label-text">Upload Carousel Images</span>
            </label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleCarouselImagesChange}
              className="input input-bordered w-full"
            />
            {formData.carouselPreviews &&
              formData.carouselPreviews.map((preview, index) => (
                <img
                  key={index}
                  src={preview}
                  alt={`Carousel Preview ${index + 1}`}
                  className="w-32 h-32 mt-2 object-cover"
                />
              ))}
          </div>
          <div className="form-control flex flex-col gap-2">
            <label className="label">
              <span className="label-text">Enter Campaign Description</span>
            </label>
            <ReactQuill
              value={formData.description}
              onChange={handleProcedureContentChange}
              modules={modules}
              formats={formats}
              theme="snow"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <Button
              title="Update Campaign"
              type="submit"
              onClick={handleSubmit}
              loading={loading}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CampaignDetail;
