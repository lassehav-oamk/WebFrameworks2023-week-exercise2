# Web Frameworks Week Exercise 2

To goal of this exercise is to practise and demonstrate you skills in react component props and basic events.

You should clone this project to your own computer, write the solution for the task. Test it on your machine with 'npm test' and confirm that you pass all the test cases. Then commit and push your changes to the github classroom repository of your own.

## Task description

Your task is to create a cost estimation calculator for a cloud service provider.
The calculator should be able to calculate the cost of a cloud service based on the
following parameters:\
\
- The number of virtual machines (VMs) required by the customer\
- The price of a single VM per hour\

The calculator should output the total cost per hour, day, month and year.\

The calculator should be implemented as a React component and named CostCalculator.\
The component should accept the price of a single VM per hour as a prop with name priceOfSingleVMPerHour.\
The component should render : - a heading with text "VM Cost Calculator", - label for the input field with text "Number of VMs" and for attribute "vmNumber", - an input field for the number of VMs with type "text" and id "vmNumber" and placeholder "Number of VMs", - the results in format:\
Cost per hour: <cost>\
Cost per day: <cost>\
Cost per month: <cost>\
Cost per year: <cost>\

The resulting HTML structure should look like this when the price of a single VM per hour is 0.5:\

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

Notice that you must implement the DOM structure using react components. You are not allowed to
create the DOM structure in the App component. The App component should only render the question component
and the question component should render the question and options.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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
