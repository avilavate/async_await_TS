// import * as $ from "jquery";

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

let getData = (delay: number, should_resolve: boolean = true): Promise<string> => {
    let promise = new Promise<string>((resolve, reject) => {
        if (should_resolve) {
            setTimeout(() => {
                resolve("Hey promise resolved");
            }, delay);
        } else {
            setTimeout(() => {
                resolve("Hey promise rejected!");
            }, delay);
        }
    });
    return promise;
}

let async_consumer = async (delay: number, should_resolve: boolean = true) => {
    try {
        let val = await getData(delay, should_resolve);
        console.log(val);
    }
    catch (err) {
        console.log('Error: ', err.message);
    }
}

async_consumer(1000,false);
