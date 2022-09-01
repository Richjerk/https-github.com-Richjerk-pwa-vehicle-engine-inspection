import{useState, useEffect}from 'react';
import{isPlatform}from'@ionic/react';


import{Camera, CameraResultType, CameraSource, Photo}from '@capacitor/camera';
import{Filesystem, Directory}from '@capacitor/filesystem';
import{Storage}from '@capacitor/storage';
{Capacitor}from '@capacitor/core';


export function usePhotoGallery(){
const takePhoto=async()=>{
const photo=await Camera.getPhoto({
resultType:CameraResultType.Uri,
source:CameraSource.Camera,
quality:100,
});
};
return{
takePhoto,
};
}

import{usePhotoGallery}from '../hooks/usePhotoGallery';
const Tab2:React.FC=()=>{
const {takePhoto}=usePhotoGallery();

//snip-rest of code

export interface UserPhoto{
filepath:string;
webviewPath?:string;
}

const [photos, setPhotos]=useState<UserPhoto[]>([]);
const fileName=new Date().getTime()+'.jpeg;
const newPhotos=[
{
filepath:fileName,
webviewPath:photo.webPath,
},
...photos,
];
setPhotos,
];
setPhotos(newPhotos);

return{
photos,
takePhoto,
};

const{photos, takePhoto}=usePhotoGallery();

<IonContent>
<IonGrid>
<IonRow>
{photos.map((photo,index)=>(
<IonCol, size="6"key={index}>
<IonImg src={photo.webviewPath}/>
</IonCol>
))}
</IonRow>
</IonGrid>
<!--<IonFab> markup -->
</IonContent>