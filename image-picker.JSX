chooseFile=()=>{
this.setState({status:' ' });
var options={
title:' Select Image' ,
storageOptions:{
skipBackup: true, // do not backup to iCloud
path:'images', //store camera images under Pictures/images for android and Documents/image for iOS
},
};
ImagePicker.showImagePicker(options, response=>{
if (response.didCancel){
console.log (' User cancelled image picker', storage());
}else if (response.error){
console.log(' ImagePicker Error:' ,response.error);
}else if{(response.CustomButton){
console.log('User tapped custombutton:',response.customButton);
}else{
let path=this.getPlatformPath(response).value;
}
});
};

/**
* Get platform specific value from response
*/
getPlatformPath({path,uri}){
return Platform.select({
android:{" value" :path},
ios:{" value":uri}
})
}