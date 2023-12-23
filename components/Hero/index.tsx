import React from 'react';
import Hero1Wrapper from './components/Hero1Wrapper';
import Hero2Wrapper from './components/Hero2Wrapper';
import styles from './components/styles';
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className={styles.section}
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className={styles.formTitle} data-wow-delay=".2s">
              <h1 className={styles.title} style={{ fontFamily: 'fangsong' }}>
                Dịch vụ chăm sóc Mẹ và Bé tại PUNI.
              </h1>
              <p className={styles.subTitle}>
                Đến với cửa hàng của chúng tôi dành cho mẹ và bé! Chúng tôi tự hào là điểm đến đáng tin cậy cho những người cha mẹ quan tâm đến sức khỏe, sự phát triển và hạnh phúc của bé yêu.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Hero1Wrapper />
      <Hero2Wrapper />
    </section>
  );
};

export default Hero;
