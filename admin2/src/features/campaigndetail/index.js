import { useEffect, useState, useMemo, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import InputText from "../../components/Input/InputText";
import ErrorText from "../../components/Typography/ErrorText";
import axios from "axios";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import FormikRichText from "../../components/RichText/CampaignRichText";

function CampaignDetail() {
  const navigate = useNavigate();
  const { link } = useParams();
  const token = localStorage.getItem("token");

  const [initialImages, setInitialImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    status: "",
    amount: 0,
    beneficiaryName: "",
    content: "",
    thumbnail: "",
    thumbnailPreview: "",
    carouselImages: [],
    carouselPreviews: [],
  });

  const extractImageUrls = (content) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = content;
    const images = tempDiv.getElementsByTagName("img");
    const imageUrls = [];
    for (let img of images) {
      imageUrls.push(img.src);
    }
    return imageUrls;
  };

  const fetchData = async () => {
    try {
      if (token && link) {
        setLoading(true);
        const response = await axios.get(
          `${
            import.meta.env.VITE_SERVER_URL
          }/admin/get-campaign-details/${link}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const campaign = response.data.campaign;
        setFormData((prevFormData) => ({
          ...prevFormData,
          title: campaign.title,
          status: campaign.status,
          amount: campaign.amount,
          beneficiaryName: campaign.beneficiaryName,
          content: campaign.content,
          thumbnailPreview: campaign.thumbnail,
          carouselPreviews: campaign.carousel,
        }));
        const initialImages = extractImageUrls(campaign.content);
        setInitialImages(initialImages);
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 401) {
        return navigate(`/`);
      }
      NotificationManager.error(
        "Failed to fetch campaigns",
        "Error",
        5000,
        () => {
          alert(error.response.data.error);
        }
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [token]);

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

  const removeCarouselImage = (index) => {
    setFormData((prevFormData) => {
      const newCarouselImages = prevFormData.carouselImages.filter(
        (image, i) => i !== index
      );
      const newCarouselPreviews = prevFormData.carouselPreviews.filter(
        (preview, i) => i !== index
      );
      return {
        ...prevFormData,
        carouselImages: newCarouselImages,
        carouselPreviews: newCarouselPreviews,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (
      !formData.title ||
      !formData.status ||
      !formData.amount ||
      !formData.beneficiaryName ||
      !formData.thumbnailPreview ||
      formData.carouselPreviews.length === 0
    ) {
      setErrorMessage("All fields are required.");
      NotificationManager.error("Error", "All fields are required.");
      return;
    }
    const currentImages = extractImageUrls(formData.content);
    const imagesToDelete = initialImages.filter(
      (url) => !currentImages.includes(url)
    );

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("status", formData.status);
    formDataToSend.append("amount", formData.amount);
    formDataToSend.append("beneficiaryName", formData.beneficiaryName);
    formDataToSend.append("content", formData.content);

    if (formData.thumbnail) {
      formDataToSend.append("thumbnail", formData.thumbnail);
    }
    for (let i = 0; i < formData.carouselImages.length; i++) {
      formDataToSend.append("carouselImages", formData.carouselImages[i]);
    }
    if (imagesToDelete) {
      formDataToSend.append("imagesToDelete", JSON.stringify(imagesToDelete));
    }
    try {
      const response = await axios.put(
        `${
          import.meta.env.VITE_SERVER_URL
        }/admin/update-campaign-details/${link}`,
        formDataToSend,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      NotificationManager.success("Success", "Campaign Updated Successfully");
      fetchData();
    } catch (error) {
      setErrorMessage(error.response.data.error);
      NotificationManager.error(
        "Error",
        "Failed to update campaign",
        5000,
        () => {
          alert(error.response.data.error);
        }
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!link) {
      NotificationManager.error("Error", "Item couldn't be selected");
      return;
    }
    if (!window.confirm("Are you sure you want to delete this campaign?")) {
      return;
    }
    const password = window.prompt("Please enter your password to confirm:");
    if (!password) {
      NotificationManager.error("Error", "Password is required to delete");
      return;
    }
    try {
      setLoading(true);
      const response = await axios.delete(
        `${import.meta.env.VITE_SERVER_URL}/admin/campaign-delete/${link}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: {
            password: password,
          },
        }
      );
      NotificationManager.success("Success", "Deleted Successfully");
      navigate(`/app/campaigns`);
    } catch (error) {
      setErrorMessage(error.response.data.error);

      NotificationManager.error(
        "Error",
        "Failed to delete the Specialty",
        5000,
        () => {
          alert(error.response.data.error);
        }
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <NotificationContainer />
      {formData && formData.title && (
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
              // Chrome, Safari, Edge, Opera
              appearance: "textfield",
              // Firefox
              MozAppearance: "textfield",
              // Internet Explorer 10+
              MsAppearance: "textfield",
            }}
          />
          <div className="form-control flex flex-col gap-2">
            <label className="label">
              <span className="label-text">Upload Thumbnail Image</span>
            </label>{" "}
            <input
              type="file"
              accept="image/*"
              onChange={handleThumbnailChange}
              className="input input-bordered w-full"
            />{" "}
            {formData.thumbnailPreview && (
              <div>
                <img
                  src={formData.thumbnailPreview}
                  alt="Thumbnail Preview"
                  className="w-1/5 h-auto mt-4"
                />
              </div>
            )}
          </div>

          <div className="form-control flex flex-col gap-2">
            <label className="label">
              <span className="label-text">Upload Carousel Images (1-5)</span>
            </label>{" "}
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleCarouselImagesChange}
              className="input input-bordered w-full"
            />
            {formData.carouselPreviews &&
              formData.carouselPreviews.length > 0 && (
                <div className="w-full mt-4 flex flex-wrap gap-2">
                  {formData.carouselPreviews.map((preview, index) => (
                    <div key={index} className="relative flex w-1/3">
                      <img
                        src={preview}
                        alt={`Carousel Preview ${index + 1}`}
                        className="border w-full h-auto"
                      />
                      <button
                        className="absolute top-0 right-0 bg-red-600 text-white rounded-full p-1"
                        onClick={() => removeCarouselImage(index)}
                      >
                        X
                      </button>
                    </div>
                  ))}
                </div>
              )}
          </div>

          <FormikRichText
            id="description"
            name="description"
            label="Description"
            value={formData.content}
            setValue={(content) =>
              setFormData((prevFormData) => ({
                ...prevFormData,
                content: content,
              }))
            }
          />

          <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
          <button
            type="submit"
            onClick={handleSubmit}
            className={
              "btn mt-2 w-full btn-primary" + (loading ? " loading" : "")
            }
          >
            Update
          </button>
          <button
            onClick={handleDelete}
            className={
              "btn mt-6 w-full text-white bg-red-700" +
              (loading ? " loading" : "")
            }
          >
            Delete
          </button>
        </div>
      )}
    </>
  );
}

export default CampaignDetail;
