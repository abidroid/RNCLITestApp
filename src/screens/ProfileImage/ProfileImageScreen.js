import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import ReactNativeModal from 'react-native-modal';
import {
  check,
  openSettings,
  PERMISSIONS,
  request,
  RESULTS,
} from 'react-native-permissions';

const ProfileImageScreen = () => {
  const [image, setImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

const getPermission = async (type) => {
  let permission;

  if (type === 'camera') {
    permission = Platform.select({
      android: PERMISSIONS.ANDROID.CAMERA,
      ios: PERMISSIONS.IOS.CAMERA,
    });
  } else if (type === 'gallery') {
    permission = Platform.select({
      android:
        Platform.Version >= 33
          ? PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
          : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
    });
  }

  const result = await check(permission);
  console.log('Permission result:', result); // Add logging to debug

  switch (result) {
    case RESULTS.UNAVAILABLE:
      Alert.alert('Permission unavailable', 'This feature is not available on this device.');
      return false;

    case RESULTS.DENIED: {
      const requestResult = await request(permission);
      console.log('Request result:', requestResult);
      return requestResult === RESULTS.GRANTED;
    }

    case RESULTS.GRANTED:
      return true;

    case RESULTS.LIMITED: // iOS only
      return true;

    case RESULTS.BLOCKED:
      Alert.alert(
        'Permission Blocked',
        'Please enable it manually from settings.',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Open Settings', onPress: () => openSettings() },
        ]
      );
      return false;

    default:
      return false;
  }
};


  const pickFromGallery = async () => {
    const hasPermission = await getPermission('gallery');
    if (!hasPermission) return;

    setModalVisible(false);
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: false,
    }).then(img => {
      setImage(img.path);
    });
  };

  const pickFromCamera = async () => {
    Alert.alert('camera will open');
    console.log('Opening Camera');
    
    const hasPermission = await getPermission('camera');
        Alert.alert(`Cmera permission: $hasPermission`);

    console.log('Gallery permission: ', hasPermission);
    
    if (!hasPermission) return;

    setModalVisible(false);
    ImageCropPicker.openCamera({
      width: 300,
      height: 400,
      cropping: false,
    }).then(img => {
      setImage(img.path);
    });
  };

  return (
    <View style={{padding: 20, alignItems: 'center'}}>

      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image
          source={{uri: image}}
          style={{width: 300, height: 400, borderRadius: 10, borderWidth: 2}}
        />
      </TouchableOpacity>
      <ReactNativeModal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        style={styles.bottomModal}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={() => pickFromCamera()} style={styles.option}>
            <Text style={styles.optionText}>Camera</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={pickFromGallery} style={styles.option}>
            <Text style={styles.optionText}>Gallery</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={styles.option}>
            <Text style={[styles.optionText, {color: 'red'}]}>Close</Text>
          </TouchableOpacity>
        </View>
      </ReactNativeModal>
    </View>
  );
};
const styles = StyleSheet.create({
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    paddingVertical: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  option: {
    paddingVertical: 15,
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  optionText: {
    fontSize: 18,
  },
});
export default ProfileImageScreen;
