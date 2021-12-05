(function () {
    //DECLARE  ARRAYS
    let oddNumbers = []
    let evenNumbers = []

    //GET BODY ELEMENT
    const bodyEl = document.querySelector('body')

    //CREATE BUTTON ELEMENT
    //create button and add a text
    const btn = document.createElement('button')
    btn.innerHTML = 'Click me'

    //add events listener
    btn.addEventListener('click', () => random())

    //add styles
    btn.style.padding = '10px'
    btn.style.fontSize = '3em'
    btn.style.textAlign = 'center'
    btn.style.margin = 'auto'
    btn.style.display = 'flex'
    btn.style.borderRadius = '999px'
    btn.style.color = 'beige'
    btn.style.backgroundColor = 'black'


    //append button to page
    bodyEl.append(btn)

    //FUNCTIONS
    //sort function
    const sortArrays = (a, b) => a - b

    //main function, which generates random numbers and add it to the table
    const random = () => {
        //CREATE TABLE ELEMENST
        //create table lements and add a text
        let table = document.createElement('table')
        let thead = document.createElement('thead')
        let tbody = document.createElement('tbody')
        let theadRow = document.createElement('tr')

        let oddHeading = document.createElement('th')
        oddHeading.innerHTML = "Odd numbers"

        let evenHeading = document.createElement('th')
        evenHeading.innerHTML = "Even numbers"

        //add styles
        table.style.fontSize = '2em'
        table.style.textAlign = 'center'
        table.style.margin = 'auto'
        table.style.padding = '20px 0'
        oddHeading.style.borderBottom = '2px solid black'
        evenHeading.style.borderBottom = '2px solid black'

        //append table elements to the page
        theadRow.append(oddHeading, evenHeading)
        thead.append(theadRow)
        table.append(thead, tbody)
        bodyEl.append(table)

        //FOR LOOP, WHICH GENERATE RANDOM NUMBERS AND ADD IT TO SORTED ARRAYS
        for (let i = 1; i <= 20; i++) {
            let randomNum = Math.floor(Math.random() * 99) + 1
            randomNum % 2 === 0 ? oddNumbers.push(randomNum) : evenNumbers.push(randomNum)
            oddNumbers.sort(sortArrays)
            evenNumbers.sort(sortArrays)
        }
        //FOR LOOP, WHICH ADD NUMBERS TO TABLE
        for (let i = 0, j = 0; j < evenNumbers.length || i < oddNumbers.length; i++, j++) {
            let row = document.createElement('tr')
            let td1 = document.createElement('td')
            let td2 = document.createElement('td')
            td1.innerHTML = oddNumbers[i] ? oddNumbers[i] : ''
            td2.innerHTML = evenNumbers[j] ? evenNumbers[j] : ''
            row.append(td1, td2)
            tbody.append(row)
        }
    }
})()