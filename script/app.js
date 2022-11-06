

function LoadBio() {
    var data = {
        logo: 'assets/logo1.png',
        myimg: 'assets/my.jpeg',
        content: "The mission of The Kid Company is to be one of the world's leading IT service providers. Using our portfolio of brands to differentiate our content, services and consumer products, we strive to develop the most creative, innovative and profitable entertainment experiences and related products in the world."
    };
    $("#logo").attr('src', data.logo);
    $("#myimg").attr('src', data.myimg);
    $("#content").html(data.content);
}

function LoadProjects() {
    var data1 = {
        text1: "This is my project based on Georgian Parking.This was time taking project.I work for 20 days just for this Project. This project was basd on asp.net language."
    };
    var data2 = {
        text2: 'This is my Project frmo first semester of my IMDW.This project is from my communication field from Nature and beauty.'
    };
    var data3 = {
        text3: 'This is my Project frmo first semester of my IMDW.This project is from my communication field from Nature and beauty.'
    };
    $(".data1").html(data1.text1);
    $(".data2").html(data2.text2);
    $(".data3").html(data3.text3);
}
// calling both function
LoadBio();
LoadProjects();
