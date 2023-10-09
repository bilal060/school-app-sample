// // import React, { Component, useState } from 'react'
// // import { StyleSheet, View, Button, Text, Image, TouchableHighlight, Alert, LogBox, NativeEventEmitter } from 'react-native'
// // import { launchImageLibrary } from 'react-native-image-picker';
// // import FaceSDK, { Enum, FaceCaptureResponse, LivenessResponse, MatchFacesResponse, MatchFacesRequest, MatchFacesImage, MatchFacesSimilarityThresholdSplit, RNFaceApi } from '@regulaforensics/react-native-face-api'

// // LogBox.ignoreLogs(['new NativeEventEmitter']);
// // const eventManager = new NativeEventEmitter(RNFaceApi)

// // var image1 = new MatchFacesImage()
// // var image2 = new MatchFacesImage()

// // export default class FaceVerify extends Component {
// //   constructor(props) {
// //     super(props)

// //     eventManager.addListener('videoEncoderCompletionEvent', json => {
// //       response = JSON.parse(json)
// //       transactionId = response["transactionId"];
// //       success = response["success"];
// //       console.log("video_encoder_completion:");
// //       console.log("    success: " + success);
// //       console.log("    transactionId: " + transactionId);
// //     })

// //     FaceSDK.init(json => {
// //       response = JSON.parse(json)
// //       if (!response["success"]) {
// //         console.log("Init failed: ");
// //         console.log(json);
// //       }
// //     }, e => { })

// //     this.state = {
// //       img1: require('../../../../images/portrait.png'),
// //       img2: require('../../../../images/portrait.png'),
// //       similarity: "nil",
// //       liveness: "nil"
// //     }
// //     console.log('this?.props?.route?.params?.res?.image', this?.props?.route?.params?.res?.image);
// //   }

// //   pickImage(first) {
// //     Alert.alert("Select option", "", [
// //     //   {
// //     //     text: "Use gallery",
// //     //     onPress: () => launchImageLibrary({ includeBase64: true }, response => {
// //     //       if (response.assets == undefined) return
// //     //       this.setImage(first, response.assets[0].base64, Enum.ImageType.PRINTED)
// //     //     })
// //     //   },
// //       {
// //         text: "Use camera",
// //         onPress: () => FaceSDK.presentFaceCaptureActivity(result => {
// //           this.setImage(first, FaceCaptureResponse.fromJson(JSON.parse(result)).image.bitmap, Enum.ImageType.LIVE)
// //         }, e => { })
// //       }], { cancelable: true })
// //   }

// //   setImage(first, base64, type) {
// //     if (base64 == null) return
// //     this.setState({ similarity: "nil" })
// //     if (first) {
// //       image1.bitmap = base64
// //       image1.imageType = type
// //       this.setState({ img1: { uri: "data:image/png;base64," + base64 } })
// //       this.setState({ liveness: "nil" })
// //     } else {
// //       image2.bitmap = base64
// //       image2.imageType = type
// //       this.setState({ img2: { uri: "data:image/png;base64," + base64 } })
// //     }
// //   }

// //   clearResults() {
// //     this.setState({
// //       img1: require('../../../../images/portrait.png'),
// //       img2: require('../../../../images/portrait.png'),
// //       similarity: "nil",
// //       liveness: "nil"
// //     })
// //     image1 = new MatchFacesImage()
// //     image2 = new MatchFacesImage()
// //   }

// //  const  matchFaces = ()  => {
// //     if (image1 == null || image1.bitmap == null || image1.bitmap == "" )
// //       return
// //     this.setState({ similarity: "Processing..." })
// //     request = new MatchFacesRequest()
// //     request.images = [image1, image1]
// //     FaceSDK.matchFaces(JSON.stringify(request), response => {
// //       response = MatchFacesResponse.fromJson(JSON.parse(response))
// //       FaceSDK.matchFacesSimilarityThresholdSplit(JSON.stringify(response.results), 0.75, str => {
// //         var split = MatchFacesSimilarityThresholdSplit.fromJson(JSON.parse(str))
// //         this.setState({ similarity: split.matchedFaces.length > 0 ? ((split.matchedFaces[0].similarity * 100).toFixed(2) + "%") : "error" })
// //         dis
// //       }, e => { this.setState({ similarity: e }) })
// //     }, e => { this.setState({ similarity: e }) })
// //   }

// //   render() {
// //     return (
// //       <View style={styles.container}>
// //         <View style={styles.container}>
// //           <View style={{ flexDirection: "column", padding: 5 }}>
// //             <View style={{ flexDirection: "column", alignItems: "center" }}>
// //               <TouchableHighlight onPress={() => pickImage(true)}>
// //                 <Image
// //                   style={{
// //                     height: 150,
// //                     width: 150,
// //                   }}
// //                   source={this.state.img1}
// //                   resizeMode="contain" />
// //               </TouchableHighlight>
// //             </View>
// //             {/* <View style={{ flexDirection: "column", alignItems: "center", padding: 5 }}>
// //               <TouchableHighlight onPress={() => this.pickImage(false)}>
// //                 <Image
// //                   style={{
// //                     height: 150,
// //                     width: 200,
// //                   }}
// //                   source={"C:/Users/asadullah.shaikh/Documents/school_app_backend/uploads/image.jpg")}
// //                   resizeMode="contain" />
// //               </TouchableHighlight>
// //             </View> */}
// //           </View>

// //           <View style={{ flexDirection: 'column', width: "100%", alignItems: "center" }}>
// //             <View style={{ padding: 3, width: "75%" }}>
// //               <Button color="#4285F4"
// //                 onPress={() => {
// //                   matchFaces()
// //                 }}
// //                 title="     Match     "
// //               />
// //             </View>

// //             <View style={{ padding: 3, width: "75%" }}>
// //               <Button color="#4285F4"
// //                 onPress={() => {
// //                   this.clearResults()
// //                 }}
// //                 title="Clear"
// //               />
// //             </View>
// //           </View>
// //           <View style={{ flexDirection: 'row' }}>
// //             <Text style={{ marginLeft: -20 }}>Similarity: {this.state.similarity}</Text>
// //             <Text style={{ marginLeft: 20 }}>Liveness: {this.state.liveness}</Text>
// //           </View>
// //         </View>
// //       </View>
// //     )
// //   }
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     width: '100%',
// //     height: '100%',
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#F5FCFF',
// //     marginBottom: 12,
// //   },
// //   welcome: {
// //     fontSize: 20,
// //     textAlign: 'center',
// //     margin: 10,
// //   },
// //   instructions: {
// //     textAlign: 'center',
// //     color: '#333333',
// //     marginBottom: 5,
// //   },
// //   resultsScreenBackButton: {
// //     position: 'absolute',
// //     bottom: 0,
// //     right: 20
// //   }
// // })

// import {
//   StyleSheet,
//   View,
//   Button,
//   Text,
//   Image,
//   TouchableHighlight,
//   Alert,
//   LogBox,
//   NativeEventEmitter,
// } from 'react-native';
// import {launchImageLibrary} from 'react-native-image-picker';
// import FaceSDK, {
//   Enum,
//   FaceCaptureResponse,
//   LivenessResponse,
//   MatchFacesResponse,
//   MatchFacesRequest,
//   MatchFacesImage,
//   MatchFacesSimilarityThresholdSplit,
//   RNFaceApi,
// } from '@regulaforensics/react-native-face-api';
// import React, {useState} from 'react';
// import {useDispatch} from 'react-redux';

// import AUTH from '../../../redux/constants/Auth.constant';
// import {facialrecognition} from '../../../assets/images';
// import {themes} from '../../../theme/colors';

// LogBox.ignoreLogs(['new NativeEventEmitter']);
// const eventManager = new NativeEventEmitter(RNFaceApi);

// var image1 = new MatchFacesImage();
// var image2 = new MatchFacesImage();
// const FaceVerify = ({route, navigation}) => {
//   const {sleectecImage, sleectecImageBase64} = route?.params || {};
//   const dispatch = useDispatch();

//   const [similarity, setSimilarity] = useState('nill');
//   const [ima1, setImage1] = useState(
//     // require('../../../../images/portrait.png'),
//   );
//   const [img2, setImage2] = useState();

//   //   console.log("🚀 ~ file: FaceVerify.js:219 ~ ceVerify ~ image1:", image1 , image2)

//   eventManager.addListener('videoEncoderCompletionEvent', (json) => {
//     response = JSON.parse(json);
//     transactionId = response['transactionId'];
//     success = response['success'];
//     console.log('video_encoder_completion:');
//     console.log('    success: ' + success);
//     console.log('    transactionId: ' + transactionId);
//   });

//   const matchFaces = () => {
//     if (image1 == null || image1.bitmap == null || image1.bitmap == '') return;
//     setSimilarity('Processing...');
//     try {
//       const request = new MatchFacesRequest();
//       request.images = [image1, image2];
//       FaceSDK.matchFaces(
//         JSON.stringify(request),
//         (response) => {
//           response = MatchFacesResponse.fromJson(JSON.parse(response));
//           FaceSDK.matchFacesSimilarityThresholdSplit(
//             JSON.stringify(response.results),
//             0.75,
//             (str) => {
//               var split = MatchFacesSimilarityThresholdSplit.fromJson(
//                 JSON.parse(str),
//               );
//               console.log("🚀 ~ file: FaceVerify.js:250 ~ FaceSDK.matchFacesSimilarityThresholdSplit ~ split:", split?.matchedFaces[0]?.similarity , split)
//               // setSimilarity(
//               //   split.matchedFaces.length > 5
//               //     ? (split.matchedFaces[0].similarity * 100).toFixed(2) + '%'
//               //     : 'error',
//               // );
//               setSimilarity(
//                 split.matchedFaces.length > 0
//                   ? "Face ID successfully authenticate"
//                   : 'Face ID  authenticated failed',
//               );
//               setTimeout(() => {
//               if(split.matchedFaces.length > 0 ){
//               navigation.navigate("Home")

//               }

//               }, 2000);
//             },
//             (e) => {
//               setSimilarity(e);
//             },
//           );
//         },
//         (e) => {
//           setSimilarity(e);
//         },
//       );
//     } catch (error) {
//       console.log('🚀 ~ file: FaceVerify.js:256 ~ matchFaces ~ error:', error);
//     }
//   };

//   FaceSDK.init(
//     (json) => {
//       const response = JSON.parse(json);
//       if (!response['success']) {
//         console.log('Init failed: ');
//         console.log(json);
//       }
//     },
//     (e) => {},
//   );

//   const pickImage = (first) => {
//     FaceSDK.presentFaceCaptureActivity(
//       (result) => {
//         setImage(
//           first,
//           FaceCaptureResponse.fromJson(JSON.parse(result)).image.bitmap,
//           Enum.ImageType.LIVE,
//         );
//       },
//       (e) => {},
//     );
//   };

//   const setImage = (first, base64, type) => {
//     if (base64 == null) return;
//     setSimilarity('loading..........');
//     if (first) {
//       image1.bitmap = base64;
//       image1.imageType = type;
//       setImage2('data:image/png;base64,' + base64);
//       image2.bitmap = sleectecImageBase64;
//       image2.imageType = type;
//        setSimilarity('you picture hase been captured');

//     }

//     setTimeout(() => {
//       setSimilarity('Loading.........');
//     }, 2000);

//     setTimeout(() => {
//       setSimilarity('Verifing your face....');

//       matchFaces();
//     }, 4000);

//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.container}>
//         <View style={{flexDirection: 'column', padding: 5}}>
//           <View style={{flexDirection: 'column', alignItems: 'center'}}>
//             <TouchableHighlight onPress={() => pickImage(true)}>
//               {img2 ? (
//                 <Image
//                   style={{
//                     height: 150,
//                     width: 150,
//                   }}
//                   source={{uri: img2 || ''}}
//                   resizeMode="contain"
//                 />
//               ) : (
//                 <Image
//                   style={{
//                     height: 150,
//                     width: 150,
//                   }}
//                   source={facialrecognition}
//                   resizeMode="contain"
//                 />
//               )}
//             </TouchableHighlight>
//           </View>

//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'center',
//               marginLeft: 20,
//               marginTop: 20,
//             }}>
//             <Text
//               onPress={() => pickImage()}
//               style={{
//                 marginLeft: -20,
//                 fontFamily: themes.font.regular,
//                 textAlign: 'center',
//                 width: '90%',
//               }}>
//               Click here to authenticate Face ID
//             </Text>
//           </View>
//         </View>

//         <View
//           style={{
//             flexDirection: 'column',
//             width: '100%',
//             alignItems: 'center',
//           }}>
//           <View style={{padding: 3, width: '75%', marginTop: 50}}>
//             <Button
//               color="#4285F4"
//               onPress={() => {
//                 matchFaces();
//               }}
//               title="     Match     "
//             />
//           </View>

//           {/* <View style={{padding: 3, width: '75%'}}>
//             <Button color="#4285F4" onPress={() => {}} title="Clear" />
//           </View> */}
//         </View>
//         <View style={{flexDirection: 'row'}}>
//           <Text style={{fontFamily:themes.font.regular , textAlign:"center"}}>Status: {similarity}</Text>
//           {/* <Text style={{ marginLeft: 20 }}>Liveness: {thiliveness}</Text> */}
//         </View>
//       </View>
//     </View>
//   );
// };

// export default FaceVerify;

import {
  StyleSheet,
  View,
  Button,
  Text,
  Image,
  TouchableHighlight,
  Alert,
  LogBox,
  NativeEventEmitter,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import FaceSDK, {
  Enum,
  FaceCaptureResponse,
  LivenessResponse,
  MatchFacesResponse,
  MatchFacesRequest,
  MatchFacesImage,
  MatchFacesSimilarityThresholdSplit,
  RNFaceApi,
} from '@regulaforensics/react-native-face-api';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import AUTH from '../../../redux/constants/Auth.constant';
import {facialrecognition} from '../../../assets/images';
import {themes} from '../../../theme/colors';

LogBox.ignoreLogs(['new NativeEventEmitter']);
const eventManager = new NativeEventEmitter(RNFaceApi);

var image1 = new MatchFacesImage();
var image2 = new MatchFacesImage();

const FaceVerify = ({route, navigation}) => {
  const {sleectecImage, sleectecImageBase64} = route?.params || {};
  const dispatch = useDispatch();

  const [similarity, setSimilarity] = useState('nill');
  const [ima1, setImage1] =
    useState();
    // require('../../../../images/portrait.png'),
  const [img2, setImage2] = useState();

    FaceSDK.init(
    (json) => {
      const response = JSON.parse(json);
      if (!response['success']) {
        console.log('Init failed: ');
        console.log(json);
      }
    },
    (e) => {},
  );

  const pickImage = first => {
    FaceSDK.presentFaceCaptureActivity(
      result => {
        setImage(
          first,
          FaceCaptureResponse.fromJson(JSON.parse(result)).image.bitmap,
          Enum.ImageType.LIVE,
        );
      },
      e => {},
    );
  };

  const setImage = (first, base64, type) => {
    if (base64 == null) return;
    setSimilarity('loading..........');
    if (first) {
      image1.bitmap = base64;
      image1.imageType = type;
      setImage2('data:image/png;base64,' + base64);
      image2.bitmap = sleectecImageBase64;
      image2.imageType = type;
      setSimilarity('you picture hase been captured');
    }

    setTimeout(() => {
      setSimilarity('Loading.........');
    }, 2000);

    setTimeout(() => {
      setSimilarity('Verifing your face....');

      matchFaces();
    }, 4000);
  };
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.container}>
          <View style={{flexDirection: 'column', padding: 5}}>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <TouchableHighlight onPress={() => pickImage(true)}>
                {img2 ? (
                  <Image
                    style={{
                      height: 150,
                      width: 150,
                    }}
                    source={{uri: img2 || ''}}
                    resizeMode="contain"
                  />
                ) : (
                  <Image
                    style={{
                      height: 150,
                      width: 150,
                    }}
                    source={facialrecognition}
                    resizeMode="contain"
                  />
                )}
              </TouchableHighlight>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginLeft: 20,
                marginTop: 20,
              }}>
              <Text
                onPress={() => pickImage()}
                style={{
                  marginLeft: -20,
                  fontFamily: themes.font.regular,
                  textAlign: 'center',
                  width: '90%',
                }}>
                Click here to authenticate Face ID
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'column',
              width: '100%',
              alignItems: 'center',
            }}>
            <View style={{padding: 3, width: '75%', marginTop: 50}}>
              <Button
                color="#4285F4"
                onPress={() => {
                  matchFaces();
                }}
                title="     Match     "
              />
            </View>

            {/* <View style={{padding: 3, width: '75%'}}>
            <Button color="#4285F4" onPress={() => {}} title="Clear" />
          </View> */}
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{fontFamily: themes.font.regular, textAlign: 'center'}}>
              Status: {similarity}
            </Text>
            {/* <Text style={{ marginLeft: 20 }}>Liveness: {thiliveness}</Text> */}
          </View>
        </View>
      </View>
    </View>
  );
};

export default FaceVerify;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginBottom: 12,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  resultsScreenBackButton: {
    position: 'absolute',
    bottom: 0,
    right: 20,
  },
});
