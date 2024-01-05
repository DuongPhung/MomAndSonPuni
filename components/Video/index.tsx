"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import { IconWatchYoutube } from "components/Icons";
import styles from "./styles";

import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className={styles.video}>
      <div className="container">
        <SectionTitle
          title="Dịch vụ tại Puni"
          paragraph="Theo dõi video để cảm nhận dịch vụ tại PuniSpa chúng tôi."
          center
          mb="80px"
        />

        <div className={styles.wrapper}>
          <div className="w-full px-4">
            <div className={styles.icon} data-wow-delay=".15s">
              <div className={styles.background}>
                <img src="https://nupakachi.com/uploaded/album-chup-anh-cuoi/studio-chup-anh-me-va-be-6.jpg" alt="video image" />
                <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                  <button
                    aria-label="video play button"
                    onClick={() => setOpen(true)}
                    className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                  >
                    <IconWatchYoutube />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="7UW9BpFb0Vs"
        onClose={() => setOpen(false)}
      />

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
