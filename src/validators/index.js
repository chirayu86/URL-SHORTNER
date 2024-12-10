

const isValidUrl = (url)=>{
    if(!url) { return false }
    console.log(url)
    const urlRegex = /^(https:\/\/)(localhost|([\da-z.-]+)\.([a-z.]{2,6}))(:[\d]+)?(\/[\w .-]*)*\/?$/
    .test(url);
    return urlRegex;
  }



module.exports = {isValidUrl}