// // import { useDispatch  } from "react-redux";
// // import { openMessage, closeMessage, toggleLoader } from "../store/store.popup";

// const useHttp = () => {
//     // const dispatch = useDispatch();

//     // KHỞI TẠO PHƯƠNG THỨC HTTP
//     const httpMethod = async (option = {url: '', method: '', author: '', payload: null, customForm: false}, callback) => {
//         try {
//             // dispatch(toggleLoader());
//             // TẠO REQUEST ĐẾN SERVER
//             let res = null;

//             // TRƯỜNG HỢP GỬI REQUEST THÔNG THƯỜNG
//             if(!option.customForm) {
//                 res = await fetch(option.url, {
//                     method: option.method? option.method : "GET",
//                     headers: {
//                         "Content-Type": "application/json",
//                         "Authorization": option.author? `Bearer ${option.author}` : ''
//                     },
//                     body: option.method !== "GET"? option.payload : null,
//                 });

//             } else {
//                 // TRƯỜNG HỢP TẠO FORMDATA ĐỂ GỬI ẢNH
//                 res = await fetch(option.url, {
//                     method: option.method? option.method : "GET",
//                     body: option.method !== "GET"? option.payload : null,
//                 });
//             }
    
//             if(!res.ok) {
//                 let infor = await res.json();
//                 throw Error(infor.message);
//             }

//             // TRẢ KẾT QUẢ ĐẾ VIEW
//             callback(await res.json());

//         } catch (error) {

//             // BẬT THÔNG BÁO KHI XUẤT HIỆN LỖI
//         //    dispatch(openMessage({content: error.message}));

//            // ĐÓNG THÔNG BÁO SAU MỘT KHOẢN THỜI GIAN
//         //    setTimeout(() => {
//         //     dispatch(closeMessage());
//         //    }, 2500)
//         }

//         // dispatch(toggleLoader());
//     }

//     // TRẢ VỀ PHƯƠNG THỨC HTTP
//     return {
//         httpMethod
//     }
// }

// export default useHttp;