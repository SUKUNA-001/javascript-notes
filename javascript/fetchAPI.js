const URL = "https://cat-fact.herokuapp.com/facts"
const factpara = document.querySelector("#fact")
const btn = document.querySelector("#btn")


// const getfacts = async () => {
//     console.log("getting data...")
//     let response = await fetch(URL);
//     console.log(response);//JSON
//     let data = await response.json();
//     // console.log(data[0].text);
//     factpara.innerText = data[1].text
// };

// function getfacts(){
//     fetch(URL)
//     .then((Response) => {
//         return Response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         factpara
//     })
// }

// btn.addEventListener("click", getfacts);