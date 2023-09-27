import mongoose from "mongoose";

const Schema = mongoose.Schema;

// function currencyToNumber(currencyString) {
//     return parseFloat(currencyString.replace(/[^0-9.-]+/g, ''));
//   }
  
//   // Define a function to convert numbers to currency strings
// function numberToCurrency(number) {
//     return `$${number.toFixed(2)}`;
//   }

// const daySchema = new Schema(
//     {
//     date:String,
//     revenue:{
//         type:mongoose.Types.Currency,
//         currency:"USD",
//         get:(v)=> v/100
//     },
//     expenses:{
//         type:mongoose.Types.Currency,
//         currency:"USD",
//         get:(v)=> v/100
//     },
// },
//     {toJSON:{getters:true} }
//     );

// // const monthSchema = new Schema(
// //     {
// //     month:String,
// //     revenue:{
// //         type:mongoose.Types.Currency,
// //         currency:"USD",
// //         get:(v)=> v/100
// //     },
// //     expenses:{
// //         type:mongoose.Types.Currency,
// //         currency:"USD",
// //         get:(v)=> v/100
// //     },
// //     operationalExpenses:{
// //         type:mongoose.Types.Currency,
// //         currency:"USD",
// //         get:(v)=> v/100
// //     },
// //     nonOperationalExpenses:{
// //         type:mongoose.Types.Currency,
// //         currency:"USD",
// //         get:(v)=> v/100
// //     },

// // },
// // {
// //     toJSON:{getters:true}
// // });

// // const KPISchema = new Schema(
// //     {
// //     totalProfit:{
// //         type:mongoose.Types.Currency,
// //         currency: 'USD',
// //         get: (v) => (v/100),
// //     },
// //     totalRevenue:{
// //         type:mongoose.Types.Currency,
// //         currency: 'USD',
// //         get: (v) => (v/100),
// //     },
// //     totalExpenses:{
// //         type:mongoose.Types.Currency,
// //         currency: 'USD',
// //         get: (v) => (v/100),
// //     },
// //     expenseByCategory:{
// //         type:Map,
// //         of:{
// //             type:mongoose.Types.Currency,
// //             currency: 'USD',
// //             get: (v) => (v/100),
// //         },
        
// //     },

// //     monthlyData:[monthSchema],
// //     dailyData:[daySchema],
// // },
// // {timestamps: true, toJSON:{getters:true}}
// // );

// const KPI =mongoose.model('KPI', KPISchema);

// export default KPI;

// Define a function to convert currency strings to numbers
function currencyToNumber(currencyString) {
    return parseFloat(currencyString.replace(/[^0-9.-]+/g, ''));
  }
  
  // Define a function to convert numbers to currency strings
  function numberToCurrency(number) {
    return parseFloat(number).toFixed(2);
  }
  
  const daySchema = new Schema({
    date: String,
    revenue: {
      type: String,
      get: currencyToNumber, // Convert currency string to number when reading
      set: numberToCurrency, // Convert number to currency string when saving
      validate: {
        validator: (value) => !isNaN(value),
        message: "Revenue must be a valid number.",
      },
    },
    expenses: {
      type: String,
      get: currencyToNumber, // Convert currency string to number when reading
      set: numberToCurrency, // Convert number to currency string when saving
      validate: {
        validator: (value) => !isNaN(value),
        message: "Expenses must be a valid number.",
      },
    },
  });
  
  const monthSchema = new Schema({
    month: String,
    revenue: {
      type: String,
      get: currencyToNumber, // Convert currency string to number when reading
      set: numberToCurrency, // Convert number to currency string when saving
    },
    expenses: {
      type: String,
      get: currencyToNumber, // Convert currency string to number when reading
      set: numberToCurrency, // Convert number to currency string when saving
    },
    operationalExpenses: {
      type: String,
      get: currencyToNumber, // Convert currency string to number when reading
      set: numberToCurrency, // Convert number to currency string when saving
    },
    nonOperationalExpenses: {
      type: String,
      get: currencyToNumber, // Convert currency string to number when reading
      set: numberToCurrency, // Convert number to currency string when saving
    },
  });
  
  const KPISchema = new Schema({
    totalProfit: {
      type: String,
      get: currencyToNumber, // Convert currency string to number when reading
      set: numberToCurrency, // Convert number to currency string when saving
    },
    totalRevenue: {
      type: String,
      get: currencyToNumber, // Convert currency string to number when reading
      set: numberToCurrency, // Convert number to currency string when saving
    },
    totalExpenses: {
      type: String,
      get: currencyToNumber, // Convert currency string to number when reading
      set: numberToCurrency, // Convert number to currency string when saving
    },
    expenseByCategory: {
      type: Map,
      of: String, // Store currency formatted values as strings in the Map
    },
    monthlyData: [monthSchema],
    dailyData: [daySchema],
  }, { timestamps: true });
  
  const KPI = mongoose.model('KPI', KPISchema);
  
  
  export default KPI;
  

