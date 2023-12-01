import axios from "axios";
import actions from "./actions";
import * as FileSystem from "expo-file-system"
export const baseUrl = "https://ra.rantzon.com";

const dispatch = async (action, headerParams = {}, body = {}, token = "") => {
    try {
        let axiosOptions = {};
        let response = {};
        switch (action) {
            case actions.getHospitals:
                axiosOptions = getAxiosOptions("GET", `${baseUrl}/hospital`);
                response = await axios(axiosOptions);
                return response.data;
            case actions.getDoctors:
                axiosOptions = getAxiosOptions("GET",`${baseUrl}/doctor`)
                response = await axios(axiosOptions)
                return response.data
            case actions.getDoctor:
                axiosOptions = getAxiosOptions("GET",`${baseUrl}/doctor/getOne/${headerParams.id}`)
                response = await axios(axiosOptions)
                return response.data
            case actions.getOneHospital:
                axiosOptions = getAxiosOptions("GET",`${baseUrl}/hospital/getOne/${headerParams.id}`)
                response = await axios(axiosOptions)
                return response.data
            case actions.getOwn:
                axiosOptions = getAxiosOptions("POST",`${baseUrl}/user/get/own`, body, token)
                response = await axios(axiosOptions)
                return response.data
            case actions.getToken:
                axiosOptions = getAxiosOptions("POST",`${baseUrl}/user/getToken`, body, token)
                response = await axios(axiosOptions)
                return response.data
            case actions.editProfile:
                axiosOptions = getAxiosOptions("PUT",`${baseUrl}/user/edit`, body, token)
                response = await axios(axiosOptions)
                return response.data
            case actions.createCrowdFunding:
                axiosOptions = getAxiosOptions("POST",`${baseUrl}/crowdfunding/create`, body, token)
                response = await axios(axiosOptions)
                return response.data
            case actions.uploadCrowdFundingImage:
                axiosOptions = getAxiosOptions("PUT",`${baseUrl}/crowdfunding/add/image/${headerParams.id}`, body, token)
                response = await axios(axiosOptions)
                return response.data
            case actions.uploadCrowdFundingFile:
                axiosOptions = getAxiosOptions("PUT",`${baseUrl}/crowdfunding/add/file/${headerParams.id}`, body, token)
                response = await axios(axiosOptions)
                return response.data
            case actions.getAllCrowdFunding:
                axiosOptions = getAxiosOptions("GET",`${baseUrl}/crowdfunding/get/${headerParams.type}`, body, token)
                response = await axios(axiosOptions)
                return response.data
            case actions.getOneCrowdFunding:
                axiosOptions = getAxiosOptions("GET",`${baseUrl}/crowdfunding/getOne/${headerParams.id}`, body, token)
                response = await axios(axiosOptions)
                return response.data
            case actions.registerToken:
                axiosOptions = getAxiosOptions("POST",`${baseUrl}/expopushtoken/register`, body, token)
                response = await axios(axiosOptions)
                return response.data
            case actions.enrollBloodDonor:
                axiosOptions = getAxiosOptions("PUT",`${baseUrl}/user/blooddonor/enroll`,body, token)
                response = await axios(axiosOptions)
                return response.data
            case actions.getAllBloodRequest:
                axiosOptions = getAxiosOptions("GET",`${baseUrl}/bloodrequest/get/${headerParams.type}`, body, token)
                response = await axios(axiosOptions)
                return response.data
            case actions.createBloodRequestOffer:
                axiosOptions = getAxiosOptions("POST",`${baseUrl}/bloodrequestoffer/create`, body, token)
                response = await axios(axiosOptions)
                return response.data
            case actions.createBloodRequest:
                axiosOptions = getAxiosOptions("POST",`${baseUrl}/bloodRequest/create`,body, token)
                response = await axios(axiosOptions)
                return response.data
            case actions.getOneBloodRequest:
                axiosOptions = getAxiosOptions("GET",`${baseUrl}/bloodRequest/getOne/${headerParams.id}`, body, token)
                response = await axios(axiosOptions)
                return response.data
            case actions.checkBloodRequestOfferStatus:
                axiosOptions = getAxiosOptions("GET",`${baseUrl}/bloodrequestoffer/check/status/${headerParams.bloodRequestId}`, body, token)
                response = await axios(axiosOptions)
                return response.data
            case actions.getOwnBloodRequestOffers:
                axiosOptions = getAxiosOptions("GET",`${baseUrl}/bloodrequestoffer/get/own`, {}, token)
                response = await axios(axiosOptions)
                return response.data
            case actions.getBloodRequestOffers:
                axiosOptions = getAxiosOptions("GET",`${baseUrl}/bloodrequestoffer/get/bloodRequest/${headerParams.bloodRequestId}`, body, token)
                response = await axios(axiosOptions)
                return response.data
            case actions.acceptBloodRequestOffer:
                axiosOptions = getAxiosOptions("PUT",`${baseUrl}/bloodrequestoffer/edit/${headerParams.id}`, {status: true})
                response = await axios(axiosOptions)
                return response.data
            case actions.getAllBloodBanks:
                axiosOptions = getAxiosOptions("GET",`${baseUrl}/bloodbank/`)
                response = await axios(axiosOptions)
                return response.data
            case actions.getOneBloodBank:
                axiosOptions = getAxiosOptions("GET",`${baseUrl}/bloodBank/getOne/${headerParams.id}`)
                response = await axios(axiosOptions)
                return response.data
            case actions.giveBlood:
                axiosOptions = getAxiosOptions("PUT",`${baseUrl}/bloodrequestoffer/edit/given/${headerParams.id}`, body, token)
                response = await axios(axiosOptions)
                return response.data
            case actions.registerLocation:
                axiosOptions = getAxiosOptions("POST",`${baseUrl}/user/register/location`, body, token)
                response = await axios(axiosOptions)
                return response.data
            case actions.detailLocation:
                axiosOptions = getAxiosOptions("POST",`${baseUrl}/user/own/location`, body, token)
                response = await axios(axiosOptions)
                return response.data
            case actions.getAll:
                axiosOptions = getAxiosOptions("GET", `${baseUrl}/user/get/all`, body, token)
                response = await axios(axiosOptions)
                return response.data
            case actions.login:
                axiosOptions = getAxiosOptions("POST", `${baseUrl}/auth/login`, body, token)
                response = await axios(axiosOptions)
                return response.data
            case actions.signup:
                axiosOptions = getAxiosOptions("POST",`${baseUrl}/user`, body, token)
                response = await axios(axiosOptions)
                return response.data
            case actions.uploadImage:
                response = await FileSystem.uploadAsync(`${baseUrl}/user/uploadImage`, body, {
                    uploadType: FileSystem.FileSystemUploadType.MULTIPART,
                    fieldName: "image",
                    httpMethod: "PUT",
                    headers: {
                        "x-auth-token": token
                    }
                })
                return JSON.parse(response.body)
            case actions.editPersonalData:
                axiosOptions = getAxiosOptions("PUT",`${baseUrl}/user/edit/${headerParams.fieldName}`, body, token)
                response = await axios(axiosOptions)
                return response.data
            case actions.requestVerification:
                axiosOptions = getAxiosOptions("POST",`${baseUrl}/auth`, body, token)
                response = await axios(axiosOptions)
                return response.data
        }
    } catch (err) {
        console.log(err)
        return err.response.data;
    }
};

const getAxiosOptions = (method, url, body, token) => {
    const headers = {
        "x-auth-token": token,
    };
    switch (method) {
        case "GET":
            return {
                method: "GET",
                url,
                headers,
            };
            break;
        case "POST":
            return {
                method: "POST",
                url,
                headers,
                data: body,
            };
            break;
        case "PUT":
            return {
                method: "PUT",
                url,
                headers,
                data: body,
            };
            break;
        case "DELETE":
            return {
                method: "DELETE",
                url,
                headers,
            };
            break;
    }
};

export default dispatch