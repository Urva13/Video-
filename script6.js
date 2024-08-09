var btn = document.getElementById("upload");
btn.onchange = function()
{
    var reader = new FileReader();
    reader.readAsDataURL(btn.files[0]);

    reader.onload = function()
    {
        var file_name = reader.result;
        var video = document.getElementById("box");
        video.src = file_name;
    }
}