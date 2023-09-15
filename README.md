# Web Frameworks Week Exercise 3

To goal of this exercise is to practise and demonstrate you skills in react component props, basic events and state handling.

You should clone this project to your own computer, write the solution for the task. Test it on your machine with 'npm test' and confirm that you pass all the test cases. Then commit and push your changes to the github classroom repository of your own.

## Task description

Your task is to create a cost estimation calculator for a cloud service provider.
The calculator should be able to calculate the cost of a cloud service based on the
following parameters:

- The number of virtual machines (VMs) required by the customer
- The price of a single VM per hour

The calculator should output the total cost per hour, day, month and year.

The calculator should be implemented as a React component named CostCalculator.\
The CostCalculator should accept the price of a single VM per hour as a prop (type number) with name priceOfSingleVMPerHour.\
The CostCalculator.js file should be in the same folder as App.js.\
The CostCalculator should render :
- a heading with text "VM Cost Calculator",
- "label" element for the input field with attributes:
    * "placeholder" with value "Number of VMs" and
    * "for" with value "vmNumber",
- an "input" element for the number of VMs with attributes:
    * "type" with value "text",
    * "id" with value "vmNumber" and
    * "placeholder" with value "Number of VMs"
- the results in format:\
Cost per hour: (cost)\
Cost per day: (cost)\
Cost per month: (cost)\
Cost per year: (cost)

The resulting HTML structure should look like this when the price of a single VM per hour is 0.5:

```
  <h1>VM Cost Calculator</h1>
  <label for="vmNumber">Number of VMs</label>
  <input type="text" id="vmNumber" placeholder="Number of VMs" value="1">
  <div>
    <p>Cost per hour: 0.5</p>
    <p>Cost per day: 12</p>
    <p>Cost per month: 360</p>
    <p>Cost per year: 4320</p>
  </div>
```

Notice that you must implement the DOM structure with the CostCalculator component. You are not allowed to
create the DOM structure in the App component.

## Useful Scripts for the exercise

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm test`

Launches the test runner in the interactive watch mode.\
This will execute the validation tests for your work. You can run the tests locally to make sure your implementation works. The github classroom will run the same tests when you commit and push to your exercise repository.
