
   /**
 *This funtion loads bio which display logo, image and text on html page
 *
 */
  function LoadBio(): void  {
    const data =  {
        logo : 'assets/logo1.png',
        myimg : 'assets/my.jpeg',
        content: "The mission of The Kid Company is to be one of the world's leading IT service providers. Using our portfolio of brands to differentiate our content, services and consumer products, we strive to develop the most creative, innovative and profitable entertainment experiences and related products in the world."
    };
    $("#logo").attr('src',data.logo);
    $("#myimg").attr('src',data.myimg);
    $("#content").html(data.content);
  }
/**
 *THis funtion makes three section which containes text in each section
 *
 */
  function LoadProjects(): void  {
     const data1={
      text1: "This is my project based on Georgian Parking.This was time taking project.I work for 20 days just for this Project. This project was basd on asp.net language."
     } 
     const data2={
      text2: 'This is my Project from first semester of my IMDW.This project is from my communication field from Nature and beauty.'
     }
     const data3={
      text3: 'This was my first project from my database class.In this project my prof. gave me to arrange field under perticular table.i like this project because in this assignemt i learned, how great is database.'
     }
     $(".data1").html(data1.text1);
     $(".data2").html(data2.text2);
     $(".data3").html(data3.text3);
    
  }

  LoadBio()
  LoadProjects()