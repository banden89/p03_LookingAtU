'use strict';

// On this codelab, you will be streaming only video (video: true).
const mediaStreamConstraints = 
{
  video: true,
};

// Video element where stream will be placed.
const video = document.querySelector('video');

// Local stream that will be reproduced on the video.
let localStream;

// Handles success by adding the MediaStream to the video element.
function gotLocalMediaStream(mediaStream) 
{
  localStream = mediaStream;
  video.srcObject = mediaStream;
}

// Handles error by logging a message to the console with the error message.
function handleLocalMediaStreamError(error) 
{
  console.log('navigator.getUserMedia error: ', error);
}

// Initializes media stream.
navigator.mediaDevices.getUserMedia(mediaStreamConstraints).then(gotLocalMediaStream).catch(handleLocalMediaStreamError);


















/*'use strict'; //嚴格模式

var constraints = {
  video: true
};

var video = document.querySelector('video');

function handleSuccess(stream) {
  window.stream = stream; // only to make stream available to console
  video.srcObject = stream;
}

function handleError(error) {
  console.log('getUserMedia error: ', error);
}

navigator.mediaDevices.getUserMedia(constraints).
  then(handleSuccess).catch(handleError);*/