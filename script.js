


/* Task 01: */

/*Iterating with Async/Await: Write an async function iterateWithAsyncAwait that takes an array of values and
logs each value with a delay of 1 second between logs.*/

/*
let arrayOfValues = [1,2,3,4,5,6];

const myPromise = new Promise( (resolve, reject) => {
    setTimeout(() => {
        if(arrayOfValues.length > 0){
            for(let i = 0; i<arrayOfValues.length; i++){
                console.log(arrayOfValues[i]);
            }
        }else{
            throw new Error('Array Is Empty')
        }
    },1000)
})

async function iterateWithAsyncAwait(){
    myPromise.then( 
        (resolvedValue) => console.log(resolvedValue),
        (rejectedValue) => console.log(rejectedValue)
    );
}

iterateWithAsyncAwait();
*/



/* Task 02: */

/*Awaiting a Call: Create an async function awaitCall that simulates fetching data from an API. Use await to wait 
for the API response and then log the data.*/

/*
const url = 'https://jsonplaceholder.typicode.com/todos/1';

const awaitCall = async (url) => {
    try{
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);                                                                                                                                                                       return data
    }catch(Error){ 
        console.log('error')
    }
}

awaitCall(url)
*/




/* Task 03: */

/*Handling Errors with Async/Await: Modify the awaitCall function to handle errors gracefully. 
If the API call fails, catch the error and log a user-friendly error message.*/

// I make a deliberate mistake here in the url 'htttps' to catch the error
/*
const url = 'htttps://jsonplaceholder.typicode.com/todos/1';

const awaitCall = async (url) => {
    try{
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);                                                                                                                                                                       return data
    }catch(error){ 
        console.log('Error', error)
    }
}

awaitCall(url)
*/





/* Task 04: */

/*Awaiting Concurrent Requests: Create an async function concurrentRequests that makes two API calls concurrently using Promise.all(). 
Log the combined results after both requests have resolved.*/

/*
const concurrentRequests = async () => {
    try {
      const res = await Promise.all([
        fetch("https://dummy.restapiexample.com/api/v1/employees"),
        fetch("https://reqres.in/api/users/2")
      ]);
      const data = await Promise.all(res.map(r => r.json()))
      //const data1 = await res1.json()
      //const data2 = await res2.json()
      //console.log(data1);
      //console.log(data2);
      console.log(data.flat())
    } catch {
      throw Error("Promise failed");
    }
};

concurrentRequests();





/* Task 05: */

/*Awaiting Parallel Calls: Write a function parallelCalls that takes an array of URLs and fetches data from each URL concurrently using Promise.all(). 
Log the responses once all requests are complete.*/

const urlsToFetch = [
    'https://reqres.in/api/users/2',
    'https://dummy.restapiexample.com/api/v1/employees',
    ];

const parallelCalls = async (urls) => {

    try{
        const promises = urls.map(url => fetch(url));
        const responses = await Promise.all(promises);

        const data = await Promise.all(responses.map(response => response.json()));

        return data
    }
    catch (error) {

        throw new Error(`Failed to fetch data: ${error}`)
    }
}

parallelCalls(urlsToFetch)
    .then(data => {
        console.log('Fetched data:', data)})
    .catch(error => {
        console.error('Error fetching data:', error)});