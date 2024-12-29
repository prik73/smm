import React from "react";
import { motion } from "framer-motion";

import i1 from "../../assets/images/team/ten.jpg"
import i2 from "../../assets/images/team/1.jpg"
import i3 from "../../assets/images/team/2.jpg"
import i4 from "../../assets/images/team/3.jpg"
import i5 from "../../assets/images/team/4.jpg"
import i6 from "../../assets/images/team/6.jpg"
import i7 from "../../assets/images/team/7.jpg"
import i8 from "../../assets/images/team/8.jpg"

const teamMembers = [
    {
      "name": "Prof. Vageshwari Deswal",
      "designation": "Chief Advisor",
      "description": "Prof. Vageshwari Deswal, a distinguished professor of Law at the University of Delhi, is renowned with over 20 years of teaching and research experience. Specializing in family law, criminal law, jurisprudence, and gender justice, Dr. Deswal’s research contributions, spanning topics such as rape laws, acid violence, and judicial discourse, have been widely published in esteemed journals. Recognized with multiple awards and honors, her expertise extends to supervising research with a keen focus on gender issues, making her a leading voice in shaping legal discourse on women’s rights in India.",
      "image": i1
    },
    {
      "name": "Dr. Princy",
      "designation": "Director",
      "description": "An academician, lawyer, social worker, feminist, certified POSH trainer, and author, Dr. Princy completed her Ph.D. in law from Delhi University. Currently, a faculty in the Department of Law at Gurugram University, she has over a decade of academic experience. She is also a certified POSH trainer and a visiting faculty at Haryana Institute of Public Administration, Haryana. Dr. Princy has written numerous articles on contemporary legal issues and presented papers at various national and international conferences. She has served as General Secretary of Disha, an NGO under the aegis of the Commissioner of Police, Gurugram, and edited a book on legal issues while supervising dissertations. She has delivered online lectures through UGC-ePG Pathshala and SWAYAM portals.",
      "image": i2
    },
    {
      "name": "Mr. Rajesh Singh Chahar",
      "designation": "Director",
      "description": "Rajesh Singh Chahar, a director at Rekart Innovations Pvt. Ltd., is a dynamic professional with over 13 years of extensive experience in waste management projects. His expertise includes sustainability, energy, power, and environmental commodities. He actively prepares ESG reports, develops corporate-level carbon and water footprints, and identifies sustainable management opportunities. He plays a pivotal role in carbon credit projects and assesses GHG reduction potentials across various sectors. His commitment to environmental stewardship is underscored by his active involvement in global initiatives like COP28.",
      "image": i3
    },
    {
      "name": "Mr. M.C. Chaturvedi",
      "designation": "Director",
      "description": "Mr. Chaturvedi is a dynamic and renowned social worker from Gurugram who also serves as Managing Director at Chaturvedi Associates and as a taxation consultant. He is the Chairman of Shanti Charitable Foundation and Shiv Shakti Sewa Samita. He has held various respectable positions such as President of Dusshera Mela Samiti and Vice-President of Shree Khatu Shayam Sewa Mandal. His active involvement in social and cultural initiatives highlights his commitment to community service.",
      "image": i4
    },
    {
      "name": "Adv. Arun Singh Chahar",
      "designation": "Director",
      "description": "Adv. Arun Singh Chahar, a senior lawyer, specializes in taxation law with offices in Gurugram and Rewari. With extensive experience in direct and indirect taxes, his skills in interpretation and argumentation are evident from appellate body orders. He is the District Coordinator of Haryana Tax Bar Association and an active member of both Rewari and Gurugram District Taxation Bar Associations.",
      "image": i5
    },
    {
      "name": "Mr. Arjun Chaturvedi",
      "designation": "Auditor",
      "description": "Arjun Chaturvedi, a fellow member of the Institute of Chartered Accountants of India and a partner at N V A & Co., specializes in international and domestic taxation. An alumnus of KPMG, he has assisted in corporate taxation and represented clients in assessments and appellate matters. Arjun graduated from Delhi College of Arts and Commerce, Delhi University, and also holds an LLB degree.",
      "image": i6
    },
    {
      "name": "Mr. Jagvinder Brar",
      "designation": "Volunteer",
      "description": "Jagvinder Brar is a forensic accountant and investigator with over 24 years of experience, including roles at KPMG and the World Bank Group. His expertise spans fraud and corruption investigations, anti-money laundering, and forensic accounting. He has provided training on anti-fraud and anti-corruption measures and has been actively involved in global investigations and regulatory compliance initiatives.",
      "image": i7
    },
    {
      "name": "Ms. Vaishnavi Kaushik",
      "designation": "Head Volunteer",
      "description": "Vaishnavi Kaushik, a law student from Gurugram University, is an active social worker and leader. She has served as a Student Council Member and Internship Cell Member. An alumna of the University of Delhi, she was the President of the E-Journal Department of Mata Sundri College. She has volunteered at Anganwadi centers in Haryana and completed English proficiency courses from Trinity College London.",
      "image": i8
    }
  ]
  

const TheTeam = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900">Meet The Team</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Our dedicated team is the driving force behind our mission to
            empower communities and create lasting change.
          </p>
        </motion.div>

        {/* Team Member Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}
            >
              {/* Image */}
              <div className="w-full h-64 rounded-t-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-blue-500 text-sm font-medium">
                  {member.designation}
                </p>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TheTeam;
