function soothingMessage()
{
    if(page.style.animationName != "newPage")
    {
        page.style.animationName = "newPage";
    }
     else if(page.style.animationName == "newPage")
    {
        page.style.animationName = "newPageReverse";
    }

}