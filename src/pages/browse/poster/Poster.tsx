import iMedia from "../../../interfaces/iMedia";
import fallback from "assets/images/authBanner.jpg";
import VideoModal from "../video/VideoModal";
import Modal from "../../../components/modal/Modal";
import { useState } from "react";
import { FindTrailer } from "../../../scripts/findTrailer";
import { newTrailer } from "../../../types/newTrailer";
interface iProps {
  media: iMedia;
  baseURL: string;
}
export default function Poster({ media }: iProps) {
  const baseURL = "https://image.tmdb.org/t/p/original";
  const posterObject = `${baseURL}${media.backdrop_path}`;
  const [openModal, setModalOpen] = useState(false);
  const title = media.title || media.name || media.original_name;
  const [trailer, setTrailer] = useState(newTrailer);

  async function handleClick() {
    setModalOpen(true);
    await FindTrailer({ media, trailer, setTrailer });
    trailer.key ? await onSuccess() : await onFail();
  }

  async function onSuccess() {
    setTrailer({ ...trailer, isLoaded: true });
  }
  async function onFail() {
    setTrailer({ ...trailer, isLoaded: false });
  }

  return (
    <li className="row-poster">
      <button onClick={(e) => handleClick()}>
        <img src={posterObject || fallback} alt={title} />
      </button>
      <Modal openModal={openModal} setModalOpen={setModalOpen}>
        <VideoModal media={media} trailer={trailer} />
      </Modal>
    </li>
  );
}
