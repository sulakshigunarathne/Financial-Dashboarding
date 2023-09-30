import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Define a function to convert currency strings to numbers
function currencyToNumber(currencyString) {
    return parseFloat(currencyString.replace(/[^0-9.-]+/g, ''));
  }
  
  // Define a function to convert numbers to currency strings
  function numberToCurrency(number) {
    return parseFloat(number).toFixed(2);
  }
  
  const daySchema = new Schema(
    {
    date: String,
    revenue: {
      type: String,
      currency: "USD",
      get: currencyToNumber, 
      //set: numberToCurrency, 
      
    },
    expenses: {
      type: String,
      currency: "USD",
      get: currencyToNumber, 
      // set: numberToCurrency, 
      // validate: {
      //   validator: (value) => !isNaN(value),
      //   message: "Expenses must be a valid number.",
      // },
    },
  },
  {toJSON:{getters:true}}
  );
  
  const monthSchema = new Schema({
    month: String,
    revenue: {
      type: String,
      currency: "USD",
      get: currencyToNumber, 
      //set: numberToCurrency, 
    },
    expenses: {
      type: String,
      currency: "USD",
      get: currencyToNumber, 
      //set: numberToCurrency, 
    },
    operationalExpenses: {
      type: String,
      currency: "USD",
      get: currencyToNumber, 
      //set: numberToCurrency, 
    },
    nonOperationalExpenses: {
      type: String,
      currency: "USD",
      get: currencyToNumber, 
      //set: numberToCurrency, 
    },
  },
  {toJSON:{getters:true}}
  );
  
  const KPISchema = new Schema({
    totalProfit: {
      type: String,
      currency: "USD",
      get: currencyToNumber, 
      //set: numberToCurrency, 
    },
    totalRevenue: {
      type: String,
      currency: "USD",
      get: currencyToNumber, 
      //set: numberToCurrency, 
    },
    totalExpenses: {
      type: String,
      currency: "USD",
      get: currencyToNumber, 
      //set: numberToCurrency, 
    },
    expenseByCategory: {
      type: Map,
      of: {
        type: String,
        currency: "USD",
        get: currencyToNumber, 
      }, 
    },
    monthlyData: [monthSchema],
    dailyData: [daySchema],
  }, 
  { timestamps: true, toJSON:{getters:true}});
  
  const KPI = mongoose.model('KPI', KPISchema);
  
  
  export default KPI;
  

