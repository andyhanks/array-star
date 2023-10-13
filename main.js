import { getBusinesses } from "./database.js";

const businesses = getBusinesses()

const outputContainer = document.querySelector("#output")
outputContainer.innerHTML = "<h1>Active Businesses</h1>"
// foreach method to 
businesses.forEach(business => {
  outputContainer.innerHTML += `
    <h2>${business.companyName}</h2>
    <section>
      ${business.addressFullStreet}
    </section>
  `
  outputContainer.innerHTML += "<hr/>"
});

// Array to contain all the New York businesses
const newYorkBusinesses = businesses.filter(business => {
    let inNewYork = false


  
    if (business.addressStateCode === "NY") {
        inNewYork = true

        outputContainer.innerHTML += `
        <h1>New York</h1>
        <h2>${business.companyName}</h2>
        <section>
          ${business.addressStateCode}
        </section>
      `
      outputContainer.innerHTML += "<hr/>"
    }
  
    return inNewYork
  });

// Array to contain all the New York businesses
const manufacturingBusinesses = businesses.filter(business => {
    let inNewYork = false
    
    
    
    if (business.addressStateCode === "NY") {
        inNewYork = true
        
        outputContainer.innerHTML += `
        <h1>Manufacturing Businesses</h1>
        <h2>${business.companyName}</h2>
        <section>
        ${business.addressFullStreet}
        </section>
        `
        outputContainer.innerHTML += "<hr/>"
    }
  
    return inNewYork
  });
  
  outputContainer.innerHTML += "<h1>Purchasing Agents</h1>";

/*
    Using map(), you extract the purchasing agent object
    from each business and store it in a new array
*/
const agents = businesses.map(business => {
    return {
        fullName: business.purchasingAgent.nameFirst + " " + business.purchasingAgent.nameLast,
        companyName: business.companyName,
        phone: business.phoneWork
    }
});

console.table(agents)

agents.forEach(agent => {
  outputContainer.innerHTML += `<h2>${agent.fullName}</h2>
  <div> ${agent.companyName} </div>
  <div> ${agent.phone} </div>`;
  outputContainer.innerHTML += "<hr/>";
});

const candies = [
    {
        name: "Lollipop",
        price: 2.99
    },
    {
        name: "Tootsie Roll",
        price: 1.49
    },
    {
        name: "Sugar Daddy",
        price: 2.49
    }
]

const firstCheapCandy = candies.find(candy => candy.price < 2.00)

console.log(firstCheapCandy)
> { name: "Tootsie Roll", price: 1.49 }

document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
            const foundBusiness = businesses.find(
                business =>
                    business.companyName.includes(keyPressEvent.target.value)
            );

            outputContainer.innerHTML = `
                <h2>
                ${foundBusiness.companyName}
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
        }
    });