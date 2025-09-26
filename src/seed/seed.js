require('dotenv').config();
const { connectDB } = require('../config/db');
const User = require('../models/User');
const Subject = require('../models/Subject');
const Enrollment = require('../models/Enrollment');

async function run() {
  await connectDB();
  console.log('Seeding data...');

  await Enrollment.deleteMany({});
  await Subject.deleteMany({});
  await User.deleteMany({});

  // Professors (password = username@123)
  const professorData = [
    { fullName: 'Dr. Hardik Molia', username: 'hardikmolia' },
    { fullName: 'Mr. K P Kandoriya', username: 'kpkandoriya' },
    { fullName: 'Mr. Ashish Nimavat', username: 'ashishnimavat' },
    { fullName: 'Mr. Chinmay Vyas', username: 'chinmayvyas' },
    { fullName: 'Prof. H. S. Sanghavi', username: 'hssanghavi' },
    { fullName: 'Mr. Kirit Rathod', username: 'kiritrathod' },
    { fullName: 'Sahista Machchhar', username: 'sahistamachchhar' },
    { fullName: 'Mr. Vishal Andodariya', username: 'vishalandodariya' },
    { fullName: 'Mr. Kamlesh Makvana', username: 'kamleshmakvana' },
    { fullName: 'Urvashi Solanki', username: 'urvashisolanki' }
  ];

  const professors = await User.insertMany(
    professorData.map(p => ({
      username: p.username,
      password: `${p.username}@123`,
      role: 'PROFESSOR',
      fullName: p.fullName
    }))
  );

  // Students (password = username@123)
  const studentData = [
    { enrollmentNumber: '220210107002', fullName: 'Bhesaniya Vaidik Nileshbhai', username: 'vaidikbhesaniya' },
    // { enrollmentNumber: '220210107003', fullName: 'Bhil Hiteshbhai Batukbhai', username: 'bhilbatukbhai' },
    // { enrollmentNumber: '220210107004', fullName: 'Chauhan Umeshbhai Jagdishbhai', username: 'chauhanjagdishbhai' },
    // { enrollmentNumber: '220210107006', fullName: 'Chavda Rahulkumar Rameshbhai', username: 'chavdarameshbhai' },
    // { enrollmentNumber: '220210107007', fullName: 'Chudasama Avira Dipakbhai', username: 'chudasamadipakbhai' },
    // { enrollmentNumber: '220210107008', fullName: 'Dave Dhavalkumar Rajendrkumar', username: 'daverajendrkumar' },
    // { enrollmentNumber: '220210107009', fullName: 'Dhandhukiya Milan Laljibhai', username: 'dhandhukiyalaljibhai' },
    // { enrollmentNumber: '220210107010', fullName: 'Dhedhi Krinsh Rameshbhai', username: 'dhedhirameshbhai' },
    // { enrollmentNumber: '220210107012', fullName: 'Ghoyal Prakashbhai Premjibhai', username: 'ghoyalpremjibhai' },
    // { enrollmentNumber: '220210107013', fullName: 'Gohil Ankitaben Jivrajbhai', username: 'gohiljivrajbhai' },
    // { enrollmentNumber: '220210107014', fullName: 'Gohil Harshana Rameshbhai', username: 'gohilrameshbhai' },
    // { enrollmentNumber: '220210107015', fullName: 'Gohil Jaydip', username: 'gohiljaydip' },
    // { enrollmentNumber: '220210107016', fullName: 'Gohil Pratikkumar Jasvantbhai', username: 'gohiljasvantbhai' },
    // { enrollmentNumber: '220210107017', fullName: 'Gondaliya Yash Hareshbhai', username: 'gondaliyahareshbhai' },
    // { enrollmentNumber: '220210107018', fullName: 'Goswami Virajbharthi Raijiv', username: 'goswamiraijiv' },
    // { enrollmentNumber: '220210107019', fullName: 'Hadiya Kiran Nareshbhai', username: 'hadiyanareshbhai' },
    // { enrollmentNumber: '220210107021', fullName: 'Jani Kartik Kalpesh', username: 'janikartikkalpesh' },
    // { enrollmentNumber: '220210107022', fullName: 'Jethwani Nitin Bhagwandas', username: 'jethwanibhagwandas' },
    // { enrollmentNumber: '220210107023', fullName: 'Kachhatiya Jaydip Vallabhbhai', username: 'kachhatiyavallabhbhai' },
    // { enrollmentNumber: '220210107024', fullName: 'Kamaliya Mandipbhai Madhubhai', username: 'kamaliyamadhubhai' },
    // { enrollmentNumber: '220210107025', fullName: 'Kanjariya Jay Hasmukhbhai', username: 'kanjariyahasmukhbhai' },
    // { enrollmentNumber: '220210107026', fullName: 'Kapasi Abbas Nurudinbhai', username: 'kapasinurudinbhai' },
    // { enrollmentNumber: '220210107027', fullName: 'Karmur Jay Tapubhai', username: 'karmurtapubhai' },
    // { enrollmentNumber: '220210107028', fullName: 'Kava Om Prakashbhai', username: 'kavaprakashbhai' },
    // { enrollmentNumber: '220210107029', fullName: 'Kulkarni Priya Vijay', username: 'kulkarnipriyavijay' },
    // { enrollmentNumber: '220210107030', fullName: 'Kumbhani Nikheel Sanjaybhai', username: 'kumbhanisanjaybhai' },
    // { enrollmentNumber: '220210107031', fullName: 'Lad Aayushkumar Vimalbhai', username: 'ladaayushkumar' },
    // { enrollmentNumber: '220210107032', fullName: 'Mangukiya Pramit Pravinbhai', username: 'mangukiyapravinbhai' },
    // { enrollmentNumber: '220210107033', fullName: 'Maru Bhargav Hamirbhai', username: 'maruhamirbhai' },
    // { enrollmentNumber: '220210107035', fullName: 'Odedra Jaybhai Murubhai', username: 'odedramurubhai' },
    // { enrollmentNumber: '220210107036', fullName: 'Paghadal Sujal Dineshbhai', username: 'paghadaldineshbhai' },
    // { enrollmentNumber: '220210107037', fullName: 'Pandav Jigar Jayeshbhai', username: 'pandavjayeshbhai' },
    // { enrollmentNumber: '220210107038', fullName: 'Pandit Shivam Sureshkumar', username: 'panditsureshkumar' },
    // { enrollmentNumber: '220210107040', fullName: 'Pandya Vishwa Viratkumar', username: 'pandyaviratkumar' },
    // { enrollmentNumber: '220210107049', fullName: 'Parmar Keval Kiritbhai', username: 'parmarkiritbhai' },
    // { enrollmentNumber: '220210107050', fullName: 'Patel Priyansh Ileshkumar', username: 'patelileshkumar' },
    // { enrollmentNumber: '220210107051', fullName: 'Patel Urvaben Arjunbhai', username: 'patelarjunbhai' },
    // { enrollmentNumber: '220210107052', fullName: 'Poriya Rajubhai Damjibhai', username: 'poriyarajubhaidamjibhai' },
    // { enrollmentNumber: '220210107053', fullName: 'Punani Vishal Ukabhai', username: 'punaniukabhai' },
    // { enrollmentNumber: '220210107054', fullName: 'Purvish Joshi', username: 'purvishjoshi' },
    // { enrollmentNumber: '220210107055', fullName: 'Rajankumar', username: 'rajankumar' },
    // { enrollmentNumber: '220210107058', fullName: 'Regar Omprakash Shravankumar', username: 'regarshravankumar' },
    // { enrollmentNumber: '220210107060', fullName: 'Sachapara Hasti Kishorbhai', username: 'sachaparahastikishorbhai' },
    // { enrollmentNumber: '220210107061', fullName: 'Sarvaiya Harsh Nareshbhai', username: 'sarvaiyanarehbhai' },
    // { enrollmentNumber: '220210107063', fullName: 'Savani Riya Vipulbhai', username: 'savanivipulbhai' },
    // { enrollmentNumber: '220210107064', fullName: 'Shah Krisha Kamleshbhai', username: 'shahkamleshbhai' },
    // { enrollmentNumber: '220210107066', fullName: 'Solanki Mahek Natvarlal', username: 'solankimaheknatvarlal' },
    // { enrollmentNumber: '220210107067', fullName: 'Solanki Tusharkumar Ramajibhai', username: 'solankitusharkumar' },
    // { enrollmentNumber: '220210107068', fullName: 'Soliya Utsav Bhaveshbhai', username: 'soliyabhaveshbhai' },
    // { enrollmentNumber: '220210107069', fullName: 'Sonani Ruchit Maheshbhai', username: 'sonanimaheshbhai' },
    // { enrollmentNumber: '220210107070', fullName: 'Sondagar Yogesh Bharatbhai', username: 'sondagaryogeshbhai' },
    // { enrollmentNumber: '220210107071', fullName: 'Trapasiya Kirtan Arvindbhai', username: 'trapasiyakirtan' },
    // { enrollmentNumber: '220210107072', fullName: 'Ukani Arasi Sanjaybhai', username: 'ukaniarasisanjaybhai' },
    // { enrollmentNumber: '220210107073', fullName: 'Vadher Harsh Nileshbhai', username: 'vadhernileshbhai' },
    // { enrollmentNumber: '220210107074', fullName: 'Vaghasiya Meet Nitinbhai', username: 'vaghasiyameet' },
    // { enrollmentNumber: '220210107075', fullName: 'Vala Parimal Nareshbhai', username: 'valaparimalnaresh' },
    // { enrollmentNumber: '220210107076', fullName: 'Vasoya Vishalbhai Parshottambhai', username: 'vasoyavishalbhai' },
    // { enrollmentNumber: '220210107077', fullName: 'Vegad Kushal Pravinbhai', username: 'vegadkushalpravinbhai' },
    // { enrollmentNumber: '220210107078', fullName: 'Vinit Pankajbhai Roshiya', username: 'vinitroshiya' },
    // { enrollmentNumber: '220210107079', fullName: 'Vora Diya Hirenbhai', username: 'vorahirenbhai' },
    // { enrollmentNumber: '220210107080', fullName: 'Ritik Sharma', username: 'ritiksharma' },
    // { enrollmentNumber: '230213107002', fullName: 'Baraiya Urvashi Pravinbhai', username: 'baraiyauvashi' },
    // { enrollmentNumber: '230213107004', fullName: 'Dave Rathin Nischal', username: 'daverathinnischal' },
    // { enrollmentNumber: '230213107005', fullName: 'Degda Jignasha Jatinbhai', username: 'degdajignashajatinbhai' },
    // { enrollmentNumber: '230213107006', fullName: 'Dixit Param Dharmendrakumar', username: 'dixitdharmendrakumar' },
    // { enrollmentNumber: '230213107007', fullName: 'Gadhiya Gautam Chandubhai', username: 'gadhiyagautamchandubhai' },
    // { enrollmentNumber: '230213107008', fullName: 'Jadeja Mandeepsinh Kiritsinh', username: 'jadejakiritsinh' },
    // { enrollmentNumber: '230213107009', fullName: 'Kewal Gauttambhai Tailor', username: 'kewaltailor' },
    // { enrollmentNumber: '230213107011', fullName: 'Parikh Diya Rajivbhai', username: 'parikhdiya' },
    // { enrollmentNumber: '230213107012', fullName: 'Thanki Keval Mahesh', username: 'thankikevalmahes' }
  ];

  const students = await User.insertMany(
    studentData.map(s => ({
      username: s.username,
      password: `${s.username}@123`,
      role: 'STUDENT',
      fullName: s.fullName,
      enrollmentNumber: s.enrollmentNumber
    }))
  );

  // Assign two subjects to first professor only (as per requirements max 2 subjects/professor)
  const firstProf = professors[0];
  const mad = await Subject.create({ subjectCode: 'MAD001', subjectName: 'Mobile Application Development', professorId: firstProf._id });
  const se = await Subject.create({ subjectCode: 'SE001', subjectName: 'Software Engineering', professorId: firstProf._id });

  // Enroll all students in MAD; first 3 students in SE
  for (let i = 0; i < students.length; i++) {
    await Enrollment.create({ studentId: students[i]._id, subjectId: mad._id });
    if (i < 3) {
      await Enrollment.create({ studentId: students[i]._id, subjectId: se._id });
    }
  }

  console.log('Seed complete');
  process.exit(0);
}

run().catch(err => { console.error(err); process.exit(1); });
