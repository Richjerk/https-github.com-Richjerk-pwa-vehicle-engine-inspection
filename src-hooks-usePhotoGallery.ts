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