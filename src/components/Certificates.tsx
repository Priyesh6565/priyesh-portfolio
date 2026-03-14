import "./styles/Certificates.css";

const certificates = [
  {
    title: "GeeksforGeeks Cyber Security",
    image: "/images/cert-gfg.png",
  },
  {
    title: "Wireshark Network Sniffing",
    image: "/images/cert-wireshark.png",
  },
  {
    title: "Angular Real-World",
    image: "/images/cert-angular.png",
  },
  {
    title: "Hashgraph Developer",
    image: "/images/cert-hashgraph.png",
  },
];

const Certificates = () => {
  return (
    <div className="certificates-section section-container" id="certificates">
      <div className="certificates-container">
        <h2>
          My <span>Certificates</span>
        </h2>
        
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div className="certificate-card" key={index}>
              <div className="certificate-image-wrapper">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="certificate-image" 
                  loading="lazy" 
                />
              </div>
              <div className="certificate-info">
                <h4>{cert.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
