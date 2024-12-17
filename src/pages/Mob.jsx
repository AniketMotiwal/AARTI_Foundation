import React from 'react';
import { eMobilityData } from '../information/eMobilityData';
import bannerImage from '../assets/Divyangjan.webp'; 

const Yali = () => {
  const yaliData = eMobilityData.find(data => data.title === "Development of Accessible Mobility Vehicle for Divyangjan");

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>{yaliData.title}</h1>
      <div style={styles.banner}>
        <img src={bannerImage} alt="Yali Banner" style={styles.bannerImage} />
      </div>
      <p style={styles.subHeading}>No dependence and awesome experience for wheelchair users</p>
      <div style={styles.content}>
        <section style={styles.section}>
          <h2 style={styles.subHeading}>Description</h2>
          <p style={styles.paragraph}>{yaliData.description}</p>
        </section>
        <section style={styles.section}>
          <h2 style={styles.subHeading}>Features</h2>
          <ul style={styles.list}>
            {yaliData.features.map((feature, index) => (
              <li key={index} style={styles.listItem}>{feature}</li>
            ))}
          </ul>
        </section>
        <section style={styles.section}>
          <h2 style={styles.subHeading}>Technology</h2>
          <p style={styles.paragraph}>{yaliData.technology}</p>
        </section>
        <section style={styles.section}>
          <h2 style={styles.subHeading}>Future Scope</h2>
          <p style={styles.paragraph}>{yaliData.futureScope}</p>
        </section>
        <section style={styles.section}>
          <h2 style={styles.subHeading}>Video</h2>
          <video style={styles.video} controls>
            <source src={yaliData.videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Poppins, sans-serif', // Font family
  },
  heading: {
    fontSize: '2.5em',
    margin: '20px 0',
    fontWeight: 300, // Thin font weight
    fontFamily: 'Poppins, sans-serif', // Font family
  },
  banner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px 0',
  },
  bannerImage: {
    width: '100%',
    maxWidth: '800px',
    height: 'auto',
  },
  subHeading: {
    fontSize: '1.5em',
    color: '#333',
    margin: '20px 0 10px',
    fontWeight: 300, // Thin font weight
    fontFamily: 'Poppins, sans-serif', // Font family
    fontStyle: 'normal', // Remove italics
  },
  content: {
    textAlign: 'left',
    maxWidth: '900px',
    margin: '0 auto',
    fontFamily: 'Poppins, sans-serif', // Font family
  },
  section: {
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '1.1em',
    color: '#555',
    lineHeight: '1.6',
    fontWeight: 300, // Thin font weight
    fontFamily: 'Poppins, sans-serif', // Font family
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '20px',
    fontSize: '1.1em',
    color: '#555',
    textAlign: 'left',
    fontFamily: 'Poppins, sans-serif', // Font family
    fontWeight: 300, // Thin font weight
  },
  listItem: {
    marginBottom: '10px',
  },
  video: {
    width: '100%',
    maxWidth: '800px',
    height: 'auto',
    marginTop: '20px',
  },
};

export default Yali;
