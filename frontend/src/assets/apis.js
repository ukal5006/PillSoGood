const ENDPOINT = 'https://j11b308.p.ssafy.io/api/';
export const MAIN = `${ENDPOINT}`; // 메인화면 정보 불러오기
export const LOGIN = `${ENDPOINT}login`; //로그인
export const LOGOUT = `${ENDPOINT}logout`; //로그아웃
export const REFRESH = `${ENDPOINT}refresh`; //refresh token 재발급

//회원
export const USER = `${ENDPOINT}user`; //회원 정보 조회
export const USERGET = (family) => `${ENDPOINT}user?family=${family}`; //회원 정보 조회
export const REGISTER = `${USER}/register`; //회원 정보 등록
// export const MODIFY = `${USER}/modify`; // 회원 정보 수정
export const MODIFY = (family) => `${USER}/modify?family=${family}`; // 회원 정보 수정
export const SIGNOUT = `${USER}/withdraw`; //회원 탈퇴
export const FAMILY = `${USER}/family`; //회원 가족 조회
// export const DELETEFAMILY = `${FAMILY}/delete`; //가족 정보 삭제
export const DELETEFAMILY = (FAMILY) => `${USER}/family/delete?family=${FAMILY}`;

//복약
export const MEDICATIONADD = `${ENDPOINT}user-medication`; //복약 카드 추가
export const MYPILLS = (userDetailId) => {
    if (userDetailId === null) {
        return null;
    } else {
        return `${MEDICATIONADD}/${userDetailId}`;
    }
}; //모든 복약 카드 조회
export const ADDDETAIL = (userMedicationId) => `${MEDICATIONADD}-detail/${userMedicationId}`; //디테일 추가
export const MODIFYDETAIL = (userMedicationDetailId) => `${MEDICATIONADD}-detail/${userMedicationDetailId}`; //디테일 수정, 삭제
export const STATUS = (id) => `${MEDICATIONADD}/${id}/status`;

//복약기록
export const HISTORY = `${ENDPOINT}history`;

// 진료& 처방 내역
export const MEDICATION = `${ENDPOINT}medication-api/request`;
export const KAKAO_CERTIFY = `${ENDPOINT}medication-api/certify`; // 카카오 인증 요청

// 알약 객체탐지
export const MEDIPHOTO = `${ENDPOINT}medicine-image/upload`;

//알약조회
export const MEDICINE = `${ENDPOINT}medicine`; //알약 전체 조회
export const DETAILMEDICINE = (medicineId) => `${MEDICINE}/${medicineId}`; //알약 상세 조회
export const MEDICINEES = (prefix, categories) => {
    const categoryString = categories.join(','); // categories 배열을 문자열로 변환
    return `${ENDPOINT}medicine/d?prefix=${prefix}&categories=${categoryString}`;
};
export const COMPAREPILL = `${MEDICINE}/compare`; //알약 비교

//알림
const NOTI = `${ENDPOINT}remainder/`;
export const NOTIFICATION = (medicationId) => `${NOTI}${medicationId}`; //알림 조회
export const ADDNOTIFICATION = `${NOTI}register`; //알림 등록
// export const MODIFYNOTIFICATION = `${NOTI}modify`; //알림 수정
export const DELETENOTIFICATION = (id) => `${NOTI}delete/${id}`; //알림삭제
// export const DELAYNOTIFICATION = (medicationId) => `${NOTIFICATION}/dealy/${medicationId}`;
// export const RESTARTNOTIFICATION = (medicationId) => `${NOTIFICATION}/restart/${medicationId}`;
// export const CHECKNOTIFICATION = (medicationId) => `${NOTIFICATION}/check/${medicationId}`;
