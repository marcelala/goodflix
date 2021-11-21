import iMedia from "../../../interfaces/iMedia";
import fallback from "assets/images/authBanner.jpg";
import VideoModal from "../video/VideoModal";
import Modal from "../../../components/modal/Modal";
import { useState } from "react";
interface iProps {
  media: iMedia;
  baseURL: string;
}

export default function Poster({ media }: iProps) {
  const baseURL = "https://image.tmdb.org/t/p/original";
  const posterObject = `${baseURL}${media.backdrop_path}`;
  const [openModal, setModalOpen] = useState(false);

  return (
    <li className="row-poster">
      <button onClick={() => setModalOpen(true)}>
        <img src={posterObject || fallback} alt={media.title} />
      </button>
      <Modal openModal={openModal} setModalOpen={setModalOpen}>
        <VideoModal media={media} />
      </Modal>
    </li>
  );
}
