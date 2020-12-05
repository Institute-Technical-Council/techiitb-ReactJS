// Information for Technical Teams

const techteams = [
    {
        heading : "UMIC",
        subheading : "Mahindra RISE Driverless Car Challenge" ,
        description : "Founded by Prof. C. Amarnath, Unmesh Mashruwala Innovation Cell (UMIC) is an interdisciplinary student team that focuses on solving global problems by designing innovative and cost-effective autonomous systems. Currently, we are working on two major long term projects with Team SeDriCa developing a fully autonomous driverless car, customized for the Indian road conditions and Team AeRoVe developing automated rescue drones equipped with remote payload delivery, human detection & interaction capabilities." ,
        img : "https://www.umiciitb.com/static/img/sedrica_final.png"  
    },
    {
        heading : "IITB Racing" ,
        subheading : "Formula Student" ,
        description : "The IITB Racing team had recently participated in the Formula Student 2014, the largest student motorsport competition in the world. Formula Student is run by the Institute of Mechanical Engineers- IMechE, a UK based body, which challenges student engineers to design, build and race a single seat race-car within a year" ,
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTcIXqVDO6hw-ajDXSPY9oaWZws2sJ3tsDKA&usqp=CAU"
    },
    {
        heading : "AUV - IITB" ,
        subheading : "AUVSI Robosub Competition" ,
        description : "AUV-IITB comprises of highly enthusiastic and hard working technocrats ranging from bright-eyed freshmen to driven senior undergraduates and tech-experienced post-graduates spanning various branches of engineering like Mechanical, Electrical, Software, Aerospace, Material Science and Civil at Indian Institute of Technology Bombay (IIT Bombay)." ,
        img : "data:image/png;base64,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"
    },
    {
        heading : "Student Satellite" ,
        subheading : "Adwaitya" ,
        description : "The IIT Bombay Student Satellite Project is a landmark project taken up by IIT Bombay students. The objective of this project is to make IIT Bombay a respected centre for advancement in Satellite and Space Technology in the world. The project aims at launching at least 5 satellites within the next few years. These Satellites could be test-beds for new technology that is being developed in the institute and also a method for space qualification." ,
        img : "https://www.aero.iitb.ac.in/satlab/images/IITBSSP2019.png"  ,
    },
    {
        heading : "Team Shunya" ,
        subheading : "Solar Decathlon", 
        description : "Team Shunya, the first Indian team to get selected in Solar Decathlon Europe, aims to change the meaning of comfortable and affordable living for the middle class Indian households. The Solar Decathlon is an international student competition taking place every two years. This competition was created in 2002 by the U.S. Department of Energy in order to develop the transmission of the knowledge and the research in the field of the green buildings, in particular solar energy." ,
        img : "https://upload.wikimedia.org/wikipedia/commons/c/c9/Team_shunya_logo.jpg" 
    },
    {
        heading : "IITB Racing" ,
        subheading : "Formula Student" ,
        description : "The IITB Racing team had recently participated in the Formula Student 2014, the largest student motorsport competition in the world. Formula Student is run by the Institute of Mechanical Engineers- IMechE, a UK based body, which challenges student engineers to design, build and race a single seat race-car within a year" ,
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTcIXqVDO6hw-ajDXSPY9oaWZws2sJ3tsDKA&usqp=CAU"
    },
    {
        heading : "IITB Racing" ,
        subheading : "Formula Student" ,
        description : "The IITB Racing team had recently participated in the Formula Student 2014, the largest student motorsport competition in the world. Formula Student is run by the Institute of Mechanical Engineers- IMechE, a UK based body, which challenges student engineers to design, build and race a single seat race-car within a year" ,
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTcIXqVDO6hw-ajDXSPY9oaWZws2sJ3tsDKA&usqp=CAU"
    },
    {
        heading : "IITB Racing" ,
        subheading : "Formula Student" ,
        description : "The IITB Racing team had recently participated in the Formula Student 2014, the largest student motorsport competition in the world. Formula Student is run by the Institute of Mechanical Engineers- IMechE, a UK based body, which challenges student engineers to design, build and race a single seat race-car within a year" ,
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTcIXqVDO6hw-ajDXSPY9oaWZws2sJ3tsDKA&usqp=CAU"
    }


];

export default techteams;