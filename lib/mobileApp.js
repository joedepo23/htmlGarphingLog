
function changeHash()
{
    var thePage = window.location.hash;
    var thePage = thePage.split('#');
    var name = document.getElementById("name");
    var slideImg = document.getElementById("slideImg");
    var slideImg1 = document.getElementById("slideImg1");
    var thename = thePage[1];
    name.textContent = thename;
    
    if(thename == "CPU")
    {
        slideImg.src = "chart/CPU/BarChart.jpg"
        slideImg1.src = "chart/CPU/PieChart.jpg"
    }
    if(thename == "DomainName")
    {
        slideImg.src = "chart/DomainName/BarChart.jpg"
        slideImg1.src = "chart/DomainName/PieChart.jpg"
    }
    if(thename == "Enviroment")
    {
        slideImg.src = "chart/Enviroment/BarChart.jpg"
        slideImg1.src = "chart/Enviroment/PieChart.jpg"
    }
    if(thename == "Location")
    {
        slideImg.src = "chart/Location/BarChart.jpg"
        slideImg1.src = "chart/Location/PieChart.jpg"
    }
    if(thename == "Memory")
    {
        slideImg.src = "chart/Memory/BarChart.jpg"
        slideImg1.src = "chart/Memory/PieChart.jpg"
    }
    if(thename == "memorygb")
    {
        slideImg.src = "chart/memorygb/BarChart.jpg"
        slideImg1.src = "chart/memorygb/PieChart.jpg"
    }
    if(thename == "OSTemplate")
    {
        slideImg.src = "chart/OSTemplate/BarChart.jpg"
        slideImg1.src = "chart/OSTemplate/PieChart.jpg"
    }
    if(thename == "Purpose")
    {
        slideImg.src = "chart/Purpose/BarChart.jpg"
        slideImg1.src = "chart/Purpose/PieChart.jpg"
    }

}