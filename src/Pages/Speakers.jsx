import React, { useState } from 'react';
import '../styles/Speakers.css';


const speakersData = {
  2026:[{name: 'STAY TUNED', image: 'src/assets/coming soon.jpeg'}],
  2019: [
    { name: 'Pooja Sachdeva', designation: 'Storyteller,Social Media Influencer', image: 'src/assets/speakers_pic/2019/19pooja.jpeg' },
    { name: 'Santa Santosh Avvannavar', designation: 'Radio Jockey and Public Speaker', image: 'src/assets/speakers_pic/2019/19santa.webp' },
    { name: 'Alcatraz Dey', designation: 'Author and Mentor', image: 'src/assets/speakers_pic/2019/19dey.jpeg' },
    { name: 'Baisakhi Saha', designation: 'Author , Speaker and Performer', image: 'src/assets/speakers_pic/2019/19baisakhi.jpg' },
    { name: 'The Params', designation: 'Father Daughter Duo-"Survivors"', image: '' },
    { name: 'Goonjan Mall', designation: 'Entrepreneur and Investor', image: 'src/assets/speakers_pic/2019/19mall.jpeg' },
    { name: 'Rohit Dey', designation:'Drone Scientist', image: 'src/assets/speakers_pic/2019/19rohith.jpeg' },
    { name: 'Dr. Dakshayini Kanna', designation: 'Educationist', image: 'src/assets/speakers_pic/2019/19dakshayini.jpg' },
    { name: 'Natasha Noel', designation: 'Yoga Guru and Fitness Expert', image: 'src/assets/speakers_pic/2019/19noel.jpeg' },
    { name: 'Surender Shah', designation: 'Business Leader and Social Worker', image: 'src/assets/speakers_pic/2019/19shah.jpeg' },
    { name: 'Dr. Praveen Kumar', designation: 'Innovator, Entrepreneur, Mentor', image: 'src/assets/speakers_pic/2019/19kumar.jpeg' },
    { name: 'Prasanna Murthy', designation: 'Agriculturist', image: 'src/assets/speakers_pic/2019/19murthy.jpeg' },
  ],
  2020: [
    { name: 'Avelo Roy', designation: 'Tech Entrepreneur and Investor', image: 'src/assets/speakers_pic/2020/20avelo.jpg' },
    { name: 'K Visalini', designation: 'Indian Prodigy', image: 'src/assets/speakers_pic/2020/20visalini.webp' },
    { name: 'Shweta Ratanpura', designation: 'Graphics Designer & World Skills International Competition Awardee', image: 'src/assets/speakers_pic/2020/20sweta.webp' },
    { name: 'Mohd Shams Alam', designation: 'Para Swimmer', image: 'src/assets/speakers_pic/2020/20alam.jpeg' },
    { name: 'Shweta Kothari', designation: 'Journalist & News Presenter', image: 'src/assets/speakers_pic/2020/20skoth.png' },
    { name: 'Dr Shyam Vasudeva Rao', designation: 'Healthcare Innovator', image: 'src/assets/speakers_pic/2020/20syam.jpg' },
    { name: 'Piali Bopanna', designation: 'Debater', image: 'src/assets/speakers_pic/2020/20piali.jpg' },
    { name: 'Binay Kumar', designation: 'Permaculturist', image: 'src/assets/speakers_pic/2020/20binay.jpg' },
    { name: 'Swamy Veereshanda', designation: 'Spiritual Leader', image: 'src/assets/speakers_pic/2020/20swami.jpeg' },
    { name: 'Dr YS Rajan', designation: 'ISRO Scientist & Author', image: 'src/assets/speakers_pic/2020/20rajan.jpeg' },
    { name: 'Dhanush Devang', designation: 'Youth Speaker and Founder of Super Youth', image: 'src/assets/speakers_pic/2020/20dhanush.jpg' },
  ],
  2021: [
    { name: 'Hitesh Choudhary', designation: 'Educator & CTO at iNeuron', image: 'src/assets/speakers_pic/2021/21hitesh.jpeg' },
    { name: 'Dr Syed Asad Abbas', designation: 'Millenial Politician', image: 'src/assets/speakers_pic/2021/21syedasad.jpeg' },
    { name: 'Clince Varghese', designation: 'Guinness World Record Holder', image: 'src/assets/speakers_pic/2021/21clince.jpeg' },
    { name: 'Mira Erda', designation: 'India’s Youngest Female F4 Racer', image: 'src/assets/speakers_pic/2021/21mira.jpeg' },
    { name: 'Radhika Bajoria', designation: 'LinkedIn Top Voice', image: 'src/assets/speakers_pic/2021/21radhika.webp' },
    { name: 'Abhay Chopra', designation: 'UX Designer', image: 'src/assets/speakers_pic/2021/21abhay.jpeg' },
    { name: 'Shreya Pattar', designation: 'Content Writer and Creator', image: 'src/assets/speakers_pic/2021/21shreya.jpeg' },
    { name: 'Dravisha Katoch', designation: "Founder of 'Learn For Less'", image: 'src/assets/speakers_pic/2021/21dravisha.jpeg' },
    { name: 'Ankur Chaudhary', designation: 'Economist and Policy Analyst', image: 'src/assets/speakers_pic/2021/21ankur.jpeg' },
  ],
  2023: [
    { name: 'Prakash Belawadi', designation: 'Actor', image: 'src/assets/speakers_pic/2023/23prakash.jpg' },
    { name: 'Shilpa Kulshrestha', designation: 'Game Changer Coach', image: 'src/assets/speakers_pic/2023/23shilpa.jpeg' },
    { name: 'Akshay Chopra', designation: 'Fitness Coach', image: 'src/assets/speakers_pic/2023/23akshay.jpeg' },
    { name: 'Major Aditi', designation: 'Ex-Army Officer', image: 'src/assets/speakers_pic/2023/23aditi.jpg' },
    { name: 'Nithyashree Mani', designation: 'International Table Tennis Player', image: 'src/assets/speakers_pic/2023/23initya.png' },
    { name: 'Ganesh Datta Lakkur', designation: 'Author and Educationist', image: 'src/assets/speakers_pic/2023/23ganesh.jpg' },
    { name: 'Ajinkya Lohakare', designation: 'Founder of Ditto Security', image: 'src/assets/speakers_pic/2023/23ajinkya.jpg' },
    { name: 'Yashwant J', designation: 'Food Entrepreneur', image: 'src/assets/speakers_pic/2023/23yashwanth.jpg' },
    { name: 'Suma Annegowda', designation: 'LinkedIn Personal Branding Expert', image: 'src/assets/speakers_pic/2023/23suma.jpg' },
    { name: 'Pushpalatha', designation: 'Healthpreneur', image: 'src/assets/speakers_pic/2023/23pushpa.jpg' },
    { name: 'Santa Santosh Avvannavar', designation: 'CEO QTSTEAM', image: 'src/assets/speakers_pic/2023/23 santosh.webp' }
  ],
  
  2024: [
    { name: 'Shreya Rao Kumavarapu', designation: 'Miss India 2018 Runner-up', image: 'src/assets/speakers_pic/2024/24shreya.jpg' },
    { name: 'Anurag Maurya', designation: 'Artist and Motivational Speaker', image: '' },
    { name: 'Karen Vincent', designation: 'Social Media Influencer', image: 'src/assets/speakers_pic/2024/24karen.jpeg' },
    { name: 'Ashok Venkat Karaku', designation: 'IPS Officer', image: 'src/assets/speakers_pic/2024/24ashok.jpeg' },
    { name: 'Vignesh Shankar', designation: 'Performer - Singer', image: 'src/assets/speakers_pic/2024/24vignesh.jpeg' },
    { name: 'Pavana Ganga', designation: 'Performer - Classical Dancer', image: '' },
    { name: 'Sadhwin Shetty', designation: 'Performer - Dancer', image: 'src/assets/speakers_pic/2024/24sadhwin.jpeg' },
    { name: 'Kalyan Manjunath', designation: 'Performer- Singer', image: 'src/assets/speakers_pic/2024/24kalyan.jpeg' },
  ],
  2025: [
    { name: 'Badekilla Pradeep', designation: 'Voice Artist', image: 'src/assets/speakers_pic/2025/25pradeep.jpeg' },
    { name: 'Sakshi Baid', designation: 'North Indian Learning and Teaching Kannada', image: 'src/assets/speakers_pic/2025/25sakshi.jpeg' },.
    { name: 'Dr. John Ebnezar', designation: 'Padma Shri Awardee', image: 'src/assets/speakers_pic/2025/25john.png' },
    { name: 'Nisha Jamvwal', designation: 'Columnist Poet and Author', image: 'src/assets/speakers_pic/2025/25nisha.jpg' },
    { name: 'Srihari Dhandapani', designation: ' Enterprise Cloud Architect', image: 'src/assets/speakers_pic/2025/25srihari.jpg' },
    { name: 'Pallavi Pareek', designation: 'Founder of Ungender and Part Time Poetess', image: 'src/assets/speakers_pic/2025/25pallavi.jpeg' },
    
    { name: 'Gubbi', designation: 'Performer - Rapper', image: 'src/assets/speakers_pic/2025/25gubbi.jpeg' },
    { name: 'Dhruthi R S', designation: 'Performer - Classical Dancer', image: 'src/assets/speakers_pic/2025/25dhruthi.png' },
    { name: 'Shreeya Hegdalmath', designation: 'Performer - Classical Dancer', image: '' },
  ],
  
};


const Speakers = () => {
  const years = Object.keys(speakersData).sort((a, b) => b - a);
  const [selectedYear, setSelectedYear] = useState(2026);

  return (
    <div className="speakers-container">
      <h1 className="speakers-title">SPEAKERS</h1>

      <div className="year-buttons">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`year-button ${selectedYear === year ? 'active' : ''}`}
          >
            {year}
          </button>
        ))}
      </div>

      {selectedYear && (
        <div className="speakers-list">
          {speakersData[selectedYear].length === 0 ? (
            <p className="no-speakers">No speakers listed for {selectedYear}.</p>
          ) : (
            <div className="speakers-grid">
              {speakersData[selectedYear].map((speaker, index) => (
                <div key={index} className="speaker-card">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="speaker-image"
                  />
                  <h3 className="speaker-name">{speaker.name}</h3>
                  <p className="speaker-designation">{speaker.designation}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Speakers;
