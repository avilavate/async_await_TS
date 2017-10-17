// import * as $ from "jquery";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//  function CallApi(url :string="https://jsonplaceholder.typicode.com/posts/1") {
//     let value=$.ajax({
//         type: 'get',
//         url: url,
//       //  data: postedData,
//         dataType: 'json',
//        // success: callback
//       });
//     var p = new Promise<string>((resolve, reject) => { 
//         resolve(value); 
//     });
//     return p;
// }
// async function foo() {
//     try {
//         let val = await CallApi();
//         console.log(val);
//     }
//     catch(err) {
//         console.log('Error: ', err.message);
//     }
// }
// foo();
let getData = (delay, should_resolve = true) => {
    let promise = new Promise((resolve, reject) => {
        if (should_resolve) {
            setTimeout(() => {
                resolve("Hey promise resolved");
            }, delay);
        }
        else {
            setTimeout(() => {
                resolve("Hey promise rejected!");
            }, delay);
        }
    });
    return promise;
};
let async_consumer = (delay, should_resolve = true) => __awaiter(this, void 0, void 0, function* () {
    try {
        let val = yield getData(delay, should_resolve);
        console.log(val);
    }
    catch (err) {
        console.log('Error: ', err.message);
    }
});
async_consumer(1000, false);
