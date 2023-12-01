import React, { useContext, useEffect, useState } from "react";
import * as FileSystem from "expo-file-system";
import { FileSystemUploadType } from "expo-file-system";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import * as DocumentPicker from "expo-document-picker";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image,
    ToastAndroid,
} from "react-native";
import CustomImage from "../CustomImage.Component";
import ContextStore from "../../Context/ContextStore";
import dispatch, { baseUrl } from "../../dispatch/dispatch";
import actions from "../../dispatch/actions";

const FundingApplicationBody = ({navigation}) => {
    const {contextStore, setContextStore} = useContext(ContextStore)
    const [formData, setFormData] = useState({
        patientName: "",
        age: "",
        detailsOfIllness: "",
        admittedHospital: "",
        timeLimit: "",
        requiredFund: "",
    });
    const onChangeData = (objectName, fieldName, value) => {
        let obj, setObj;
        switch (objectName) {
            case "formData":
                obj = formData;
                setObj = setFormData;
                break;
            case "bank":
                obj = bank;
                setObj = setBank;
                break;
            case "mfs":
                obj = mfs;
                setObj = setMfs;
                break;
        }
        if(obj && setObj){
            setObj({...obj, [fieldName]: value})
        }
    };
    const [bank, setBank] = useState({
        name: "",
        branchName: "",
        routingNo: "",
        accountName: "",
        accountNo: "",
        accountPhoneNo: "",
    });
    const [mfs, setMfs] = useState({
        bkash: "",
        nagad: "",
    });
    const onPressRemove = (assetId) => {
        setPhotos(photos.filter((photo) => photo.assetId !== assetId));
    };
    const handleChoosePhoto = async () => {
        if (photos.length < 4) {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 1,
                allowsMultipleSelection: true,
                selectionLimit: 4 - photos.length,
            });

            if (!result.canceled) {
                setPhotos([
                    ...photos,
                    ...result.assets.slice(0, 4 - photos.length),
                ]);
            }
        }
    };
    const handleChooseFiles = async () => {
        if (files.length < 4) {
            let result = await DocumentPicker.getDocumentAsync();
            if (result.type !== "cancel") {
                const vFiles = [...files];
                vFiles.push(result.assets[0]);
                console.log(vFiles);
                setFiles(vFiles);
            }
        }
    };
    const onPressRemoveFiles = (name) => {
        setFiles(files.filter((file) => file.name !== name));
    };
    const [photos, setPhotos] = useState([]);
    const indexes = [0, 1, 2, 3];
    const [files, setFiles] = useState([]);
    useEffect(() => {
        (async () => {
            await MediaLibrary.getPermissionsAsync();
        })();
    }, []);
    const onClickSubmit = async () => {
        console.log("Trying to submit")
        contextStore.setShowSpinner(true);
        const crowdFunding = await dispatch(
          actions.createCrowdFunding,
          {},
          { ...formData, bank, mfs },
          contextStore.token
        );
        contextStore.setShowSpinner(false);
        console.log(crowdFunding)
        if (!crowdFunding.error) {
        contextStore.setShowSpinner(true, "Uploading Pictures..");
          for (const vPhoto of photos) {
            const result = await FileSystem.uploadAsync(
              `${baseUrl}/crowdfunding/add/picture/${crowdFunding._id}`,
              vPhoto.uri,
              {
                uploadType: FileSystemUploadType.MULTIPART,
                fieldName: 'image',
                httpMethod: 'PUT',
                headers: {
                  'x-auth-token': contextStore.token,
                },
              }
            );
          }
          contextStore.setShowSpinner(true, "Uploading Documents..");
          for (const file of files) {
            const result = await FileSystem.uploadAsync(
              `${baseUrl}/crowdfunding/add/file/${crowdFunding._id}`,
              file.uri,
              {
                uploadType: FileSystemUploadType.MULTIPART,
                fieldName: 'file',
                httpMethod: 'PUT',
                headers: {
                  'x-auth-token': contextStore.token,
                },
              }
            );
          }
          contextStore.setShowSpinner(false)
        }
        ToastAndroid.show("Request Successful for Crowd Funding", ToastAndroid.SHORT)
        navigation.navigate('HomePage');
      };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Apply for crowdfunding</Text>
            <Text style={styles.subtitle}>Patient Information</Text>

            <View style={styles.patientInfoContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Name..."
                    placeholderTextColor="#777"
                    value={formData.patientName}
                    onChangeText={(text) => {
                        onChangeData("formData", "patientName", text)
                    }}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Age"
                    placeholderTextColor="#777"
                    keyboardType={"numeric"}
                    value={formData.age}
                    onChangeText={(text) => {
                        onChangeData("formData", "age", text)
                    }}
                />
            </View>
            <TouchableOpacity onPress={handleChoosePhoto}>
                <View style={styles.addPictureButton}>
                    <Text style={styles.addPicture}>Add Pictures</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.cardContainer}>
                {indexes.map((index) => (
                    <View style={styles.card}>
                        {photos.length > index && (
                            <View
                                style={{
                                    position: "relative",
                                    width: "100%",
                                    height: "100%",
                                    overflow: "hidden",
                                }}
                            >
                                <Image
                                    source={{ uri: photos[index].uri }}
                                    style={{ width: "100%", height: "100%" }}
                                />
                                <TouchableOpacity
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        right: 0,
                                    }}
                                    onPress={() => {
                                        onPressRemove(photos[index].assetId);
                                    }}
                                >
                                    <View
                                        style={{
                                            width: 20,
                                            height: 20,
                                            borderRadius: 30,
                                            backgroundColor: "#f1fafd",
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: "black",
                                                fontWeight: "bold",
                                                textAlign: "center",
                                            }}
                                        >
                                            X
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                ))}
            </View>
            <View style={styles.textAreaContainer}>
                <TextInput
                    style={styles.textArea}
                    underlineColorAndroid="transparent"
                    placeholder="Details about disease..."
                    placeholderTextColor="grey"
                    numberOfLines={10}
                    multiline={true}
                    value={formData.detailsOfIllness}
                    onChangeText={(text) => {
                        onChangeData("formData", "detailsOfIllness", text)
                    }}
                />
                <Text style={styles.wordCount}>Minimum 2000 words</Text>
            </View>

            <TextInput
                style={styles.fullWidthInput}
                placeholder="Currently admitted at..."
                placeholderTextColor="grey"
                value={formData.admittedHospital}
                    onChangeText={(text) => {
                        onChangeData("formData", "admittedHospital", text)
                    }}
            />

            <TextInput
                style={styles.halfWidthInput}
                placeholder="Required Fund..."
                placeholderTextColor="grey"
                value={formData.requiredFund}
                    onChangeText={(text) => {
                        onChangeData("formData", "requiredFund", text)
                    }}
                keyboardType="numeric"
            />
            <TouchableOpacity onPress={handleChooseFiles}>
                <View style={styles.addPaperworksButton}>
                    <Text style={styles.addPaperworksText}>Add Paperworks</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.cardContainer}>
                {indexes.map((index) => (
                    <View style={styles.card}>
                        {files.length > index && (
                            <View
                                style={{
                                    position: "relative",
                                    width: "100%",
                                    height: "100%",
                                    overflow: "hidden",
                                }}
                            >
                                <CustomImage name={files[index].name} />

                                <TouchableOpacity
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        right: 0,
                                    }}
                                    onPress={() => {
                                        onPressRemoveFiles(files[index].name);
                                    }}
                                >
                                    <View
                                        style={{
                                            width: 20,
                                            height: 20,
                                            borderRadius: 30,
                                            backgroundColor: "#f1fafd",
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: "black",
                                                fontWeight: "bold",
                                                textAlign: "center",
                                            }}
                                        >
                                            X
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                ))}
            </View>

            <View style={styles.paymentOptionsButton}>
                <Text style={styles.paymentOptionsText}>Payment Options</Text>
            </View>

            <Text style={styles.subtitle}>MFS Information</Text>

            <TextInput
                style={styles.halfWidthInput}
                placeholder="bKash Number"
                placeholderTextColor="grey"
                value={mfs.bkash}
                    onChangeText={(text) => {
                        onChangeData("mfs", "bkash", text)
                    }}
                keyboardType="numeric"
            />

            <TextInput
                style={styles.halfWidthInput}
                placeholder="Nagad Number"
                placeholderTextColor="grey"
                value={mfs.nagad}
                    onChangeText={(text) => {
                        onChangeData("mfs", "nagad", text)
                    }}
                    keyboardType="numeric"
            />

            <Text style={styles.subtitle}>Bank Information</Text>

            <TextInput
                style={styles.halfWidthInput}
                placeholder="Bank Name"
                placeholderTextColor="grey"
                value={bank.name}
                    onChangeText={(text) => {
                        onChangeData("bank", "name", text)
                    }}
            />

            <TextInput
                style={styles.halfWidthInput}
                placeholder="Branch Name"
                placeholderTextColor="grey"
                value={bank.branchName}
                    onChangeText={(text) => {
                        onChangeData("bank", "branchName", text)
                    }}
            />

            <TextInput
                style={styles.halfWidthInput}
                placeholder="Bank Account Number"
                placeholderTextColor="grey"
                value={bank.accountNo}
                    onChangeText={(text) => {
                        onChangeData("bank", "accountNo", text)
                    }}
            />

            <TextInput
                style={styles.halfWidthInput}
                placeholder="Bank Account Name"
                placeholderTextColor="grey"
                value={bank.accountName}
                    onChangeText={(text) => {
                        onChangeData("bank", "accountName", text)
                    }}
            />

            <TextInput
                style={styles.halfWidthInput}
                placeholder="Bank Account Phone Number"
                placeholderTextColor="grey"
                value={bank.accountPhoneNo}
                    onChangeText={(text) => {
                        onChangeData("bank", "accountPhoneNo", text)
                    }}
            />

            <TextInput
                style={styles.halfWidthInput}
                placeholder="Routing Number"
                placeholderTextColor="grey"
                value={bank.routingNo}
                    onChangeText={(text) => {
                        onChangeData("bank", "routingNo", text)
                    }}
            />

            <TouchableOpacity style={styles.submitReviewButton} onPress={onClickSubmit}>
                <Text style={styles.submitReviewText} >Submit Review</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        marginHorizontal: 16,
    },
    textAreaContainer: {
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 12,
        padding: 10,
    },
    textArea: {
        height: 80,
        justifyContent: "flex-start",
        textAlignVertical: "top",
        fontSize: 10,
    },
    wordCount: {
        alignSelf: "flex-end",
        fontSize: 8,
        color: "#898988",
    },
    fullWidthInput: {
        width: "100%",
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 16,
        paddingVertical: 2,
        paddingHorizontal: 12,
        marginTop: 8,
        fontSize: 10,
    },
    halfWidthInput: {
        width: "50%",
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 16,
        paddingVertical: 2,
        paddingHorizontal: 12,
        marginTop: 8,
        fontSize: 10,
    },
    addPaperworksButton: {
        alignItems: "center",
        borderColor: "black",
        borderRadius: 16,
        paddingVertical: 6,
        paddingHorizontal: 12,
        backgroundColor: "black",
        width: "32%",
        marginTop: 8,
    },
    addPaperworksText: {
        color: "white",
        fontSize: 12,
    },
    paymentOptionsButton: {
        alignItems: "center",
        borderColor: "black",
        borderRadius: 16,
        paddingVertical: 6,
        paddingHorizontal: 12,
        backgroundColor: "black",
        width: "33%",
        marginTop: 8,
    },
    paymentOptionsText: {
        color: "white",
        fontSize: 12,
    },
    cardContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    card: {
        width: 80,
        height: 80,
        borderRadius: 12,
        borderColor: "#c5c4c5",
        borderWidth: 1,
    },
    subtitle: {
        fontSize: 16,
        marginTop: 8,
    },
    submitReviewButton: {
        alignItems: "center",
        borderRadius: 32,
        paddingVertical: 20,
        paddingHorizontal: 12,
        backgroundColor: "#11462f",
        width: "100%",
        marginTop: 16,
        marginBottom: 16,
    },
    submitReviewText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 6,
    },
    subtitle: {
        fontSize: 16,
    },
    patientInfoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 6,
        alignItems: "center",
        marginBottom: 8,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 16,
        paddingVertical: 2,
        paddingHorizontal: 12,
        marginRight: 8,
        fontSize: 10,
    },
    selectAgeButton: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 16,
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    selectAgeText: {
        marginRight: 6,
        fontSize: 10,
    },
    dropdownIcon: {
        width: 13,
        height: 13,
    },
    addPictureButton: {
        alignItems: "center",
        borderColor: "black",
        borderRadius: 16,
        paddingVertical: 6,
        paddingHorizontal: 12,
        backgroundColor: "black",
        width: "27%",
    },
    addPicture: {
        color: "white",
        fontSize: 12,
    },
    cardContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    card: {
        width: 80,
        height: 80,
        borderRadius: 12,
        borderColor: "#c5c4c5",
        borderWidth: 1,
    },
});

export default FundingApplicationBody;
