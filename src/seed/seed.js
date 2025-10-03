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
    { enrollmentNumber: '220210107001', fullName: 'Baldha Raj Dipakbhai', username: 'baldharaj' },
    { enrollmentNumber: '220210107002', fullName: 'Bhesaniya Vaidik Nileshbhai', username: 'bhesaniavaidik' },
    { enrollmentNumber: '220210107003', fullName: 'Bhil Hiteshbhai Batukbhai', username: 'bhilhitesh' },
    { enrollmentNumber: '220210107004', fullName: 'Chauhan Umeshbhai Jagdishbhai', username: 'chauhanumesh' },
    { enrollmentNumber: '220210107006', fullName: 'Chavda Rahulkumar Rameshbhai', username: 'chavdarahul' },
    { enrollmentNumber: '220210107007', fullName: 'Chudasama Avira Dipakbhai', username: 'chudasamaavira' },
    { enrollmentNumber: '220210107008', fullName: 'Dave Dhavalkumar Rajendrkumar', username: 'davedhaval' },
    { enrollmentNumber: '220210107009', fullName: 'Dhandhukiya Milan Laljibhai', username: 'dhandhukiyamilan' },
    { enrollmentNumber: '220210107010', fullName: 'Dhedhi Krinsh Rameshbhai', username: 'dhedhikrinsh' },
    { enrollmentNumber: '220210107012', fullName: 'Ghoyal Prakashbhai Premjibhai', username: 'ghoyalprakash' },
    { enrollmentNumber: '220210107013', fullName: 'Gohil Ankitaben Jivrajbhai', username: 'gohilankita' },
    { enrollmentNumber: '220210107014', fullName: 'Gohil Harshana Rameshbhai', username: 'gohilharshana' },
    { enrollmentNumber: '220210107015', fullName: 'Gohil Jaydip', username: 'gohiljaydip' },
    { enrollmentNumber: '220210107016', fullName: 'Gohil Pratikkumar Jasvantbhai', username: 'gohilpratik' },
    { enrollmentNumber: '220210107017', fullName: 'Gondaliya Yash Hareshbhai', username: 'gondaliyayash' },
    { enrollmentNumber: '220210107018', fullName: 'Goswami Virajbharthi Raijiv', username: 'goswamiviraj' },
    { enrollmentNumber: '220210107019', fullName: 'Hadiya Kiran Nareshbhai', username: 'hadiyakiran' },
    { enrollmentNumber: '220210107021', fullName: 'Jani Kartik Kalpesh', username: 'janikartik' },
    { enrollmentNumber: '220210107022', fullName: 'Jethwani Nitin Bhagwandas', username: 'jethwaninitin' },
    { enrollmentNumber: '220210107023', fullName: 'Kachhatiya Jaydip Vallabhbhai', username: 'kachhatiyajaydip' },
    { enrollmentNumber: '220210107024', fullName: 'Kamaliya Mandipbhai Madhubhai', username: 'kamaliyamandip' },
    { enrollmentNumber: '220210107025', fullName: 'Kanjariya Jay Hasmukhbhai', username: 'kanjariyajay' },
    { enrollmentNumber: '220210107026', fullName: 'Kapasi Abbas Nurudinbhai', username: 'kapasiabbas' },
    { enrollmentNumber: '220210107027', fullName: 'Karmur Jay Tapubhai', username: 'karmurjay' },
    { enrollmentNumber: '220210107028', fullName: 'Kava Om Prakashbhai', username: 'kavaom' },
    { enrollmentNumber: '220210107029', fullName: 'Kulkarni Priya Vijay', username: 'kulkarnipriya' },
    { enrollmentNumber: '220210107030', fullName: 'Kumbhani Nikheel Sanjaybhai', username: 'kumbhaninikheel' },
    { enrollmentNumber: '220210107031', fullName: 'Lad Aayushkumar Vimalbhai', username: 'ladaayush' },
    { enrollmentNumber: '220210107032', fullName: 'Mangukiya Pramit Pravinbhai', username: 'mangukiyapramit' },
    { enrollmentNumber: '220210107033', fullName: 'Maru Bhargav Hamirbhai', username: 'marubhargav' },
    { enrollmentNumber: '220210107035', fullName: 'Odedra Jaybhai Murubhai', username: 'odedrajay' },
    { enrollmentNumber: '220210107036', fullName: 'Paghadal Sujal Dineshbhai', username: 'paghadalsujal' },
    { enrollmentNumber: '220210107037', fullName: 'Pandav Jigar Jayeshbhai', username: 'pandavjigar' },
    { enrollmentNumber: '220210107038', fullName: 'Pandit Shivam Sureshkumar', username: 'panditshivam' },
    { enrollmentNumber: '220210107040', fullName: 'Pandya Vishwa Viratkumar', username: 'pandyavishwa' },
    { enrollmentNumber: '220210107049', fullName: 'Parmar Keval Kiritbhai', username: 'parmarkeval' },
    { enrollmentNumber: '220210107050', fullName: 'Patel Priyansh Ileshkumar', username: 'patelpriyansh' },
    { enrollmentNumber: '220210107051', fullName: 'Patel Urvaben Arjunbhai', username: 'patelurvaben' },
    { enrollmentNumber: '220210107052', fullName: 'Poriya Rajubhai Damjibhai', username: 'poriyaraju' },
    { enrollmentNumber: '220210107053', fullName: 'Punani Vishal Ukabhai', username: 'punanivishal' },
    { enrollmentNumber: '220210107054', fullName: 'Purvish Joshi', username: 'joshipurvish' },
    { enrollmentNumber: '220210107055', fullName: 'Rajankumar', username: 'rajankumar' },
    { enrollmentNumber: '220210107058', fullName: 'Regar Omprakash Shravankumar', username: 'regaromprakash' },
    { enrollmentNumber: '220210107060', fullName: 'Sachapara Hasti Kishorbhai', username: 'sachaparahasti' },
    { enrollmentNumber: '220210107061', fullName: 'Sarvaiya Harsh Nareshbhai', username: 'sarvaiyaharsh' },
    { enrollmentNumber: '220210107063', fullName: 'Savani Riya Vipulbhai', username: 'savaniriya' },
    { enrollmentNumber: '220210107064', fullName: 'Shah Krisha Kamleshbhai', username: 'shahkrisha' },
    { enrollmentNumber: '220210107066', fullName: 'Solanki Mahek Natvarlal', username: 'solankimahek' },
    { enrollmentNumber: '220210107067', fullName: 'Solanki Tusharkumar Ramajibhai', username: 'solankitushar' },
    { enrollmentNumber: '220210107068', fullName: 'Soliya Utsav Bhaveshbhai', username: 'soliyautsav' },
    { enrollmentNumber: '220210107069', fullName: 'Sonani Ruchit Maheshbhai', username: 'sonaniruchit' },
    { enrollmentNumber: '220210107070', fullName: 'Sondagar Yogesh Bharatbhai', username: 'sondagaryogesh' },
    { enrollmentNumber: '220210107071', fullName: 'Trapasiya Kirtan Arvindbhai', username: 'trapasiyakirtan' },
    { enrollmentNumber: '220210107072', fullName: 'Ukani Arasi Sanjaybhai', username: 'ukaniarasi' },
    { enrollmentNumber: '220210107073', fullName: 'Vadher Harsh Nileshbhai', username: 'vadherharsh' },
    { enrollmentNumber: '220210107074', fullName: 'Vaghasiya Meet Nitinbhai', username: 'vaghasiyameet' },
    { enrollmentNumber: '220210107075', fullName: 'Vala Parimal Nareshbhai', username: 'valaparimal' },
    { enrollmentNumber: '220210107076', fullName: 'Vasoya Vishalbhai Parshottambhai', username: 'vasoyavishal' },
    { enrollmentNumber: '220210107077', fullName: 'Vegad Kushal Pravinbhai', username: 'vegadkushal' },
    { enrollmentNumber: '220210107078', fullName: 'Vinit Pankajbhai Roshiya', username: 'roshiyavinit' },
    { enrollmentNumber: '220210107079', fullName: 'Vora Diya Hirenbhai', username: 'voradiya' },
    { enrollmentNumber: '220210107080', fullName: 'Ritik Sharma', username: 'sharmaritik' },
    { enrollmentNumber: '230213107002', fullName: 'Baraiya Urvashi Pravinbhai', username: 'baraiyaurvashi' },
    { enrollmentNumber: '230213107004', fullName: 'Dave Rathin Nischal', username: 'daverathin' },
    { enrollmentNumber: '230213107005', fullName: 'Degda Jignasha Jatinbhai', username: 'degdajignasha' },
    { enrollmentNumber: '230213107006', fullName: 'Dixit Param Dharmendrakumar', username: 'dixitparam' },
    { enrollmentNumber: '230213107007', fullName: 'Gadhiya Gautam Chandubhai', username: 'gadhiyagautam' },
    { enrollmentNumber: '230213107008', fullName: 'Jadeja Mandeepsinh Kiritsinh', username: 'jadejamandeepsinh' },
    { enrollmentNumber: '230213107009', fullName: 'Kewal Gauttambhai Tailor', username: 'tailorkewal' },
    { enrollmentNumber: '230213107011', fullName: 'Parikh Diya Rajivbhai', username: 'parikhdiya' },
    { enrollmentNumber: '230213107012', fullName: 'Thanki Keval Mahesh', username: 'thankikeval' }
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
 
  const mad = await Subject.create({ subjectCode: '3170726', subjectName: 'Mobile Application Development', professorId: professors[3]._id });
  const ml = await Subject.create({ subjectCode: '3170724', subjectName: 'Machine Learning', professorId: professors[0]._id });
  const mcwc = await Subject.create({ subjectCode: '3170710', subjectName: 'Mobile Computing and Wireless Communication', professorId: professors[5]._id });
  const cd = await Subject.create({ subjectCode: '3170701', subjectName: 'Compiler Design', professorId: professors[9]._id });
  const ai = await Subject.create({ subjectCode: '3170716', subjectName: 'Artificial Intelligence', professorId: professors[2]._id });
  const is = await Subject.create({ subjectCode: '3170720', subjectName: 'Information security', professorId: professors[6]._id });
  const subjects = [mad, ml, mcwc, cd, ai, is];
  // Enroll all students in MAD; first 3 students in SE
  for (let student of students) {
    for (let subject of subjects) {
      await Enrollment.create({ studentId: student._id, subjectId: subject._id });
    }
  }
  console.log('Seed complete');
  process.exit(0);
}

run().catch(err => { console.error(err); process.exit(1); });
