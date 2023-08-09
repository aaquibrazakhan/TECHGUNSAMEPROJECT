import ExpenseItem from "./component/ExpenseItem";

function App() {
  let expenses = [
    {
      id: 'e1',
      titel:'School Fee ',
      amount:'250',
      date: new Date(2021, 5, 12)
    }, 
    {
      id: 'e2',
      titel:'Books ',
      amount:'230',
      date: new Date(2021, 2, 23)
    }, 
    {
      id: 'e3',
      titel:'House Rent ',
      amount:'700',
      date: new Date(2021, 4, 2)
    },
    {
      id: 'e4',
      titel:'Food',
      amount:'540',
      date: new Date(2021, 5, 5)
    }
  ];
  return (
    <div className="App">
      <h2>Let's get started</h2>
     <ExpenseItem 
      date={expenses[0].date}
      title={expenses[0].titel} 
      amount={expenses[0].amount}
      />
     <ExpenseItem 
      date={expenses[1].date}
      title={expenses[1].titel} 
      amount={expenses[1].amount}
      />
     <ExpenseItem 
      date={expenses[2].date}
      title={expenses[2].titel} 
      amount={expenses[2].amount}
      />
     <ExpenseItem 
      date={expenses[3].date}
      title={expenses[3].titel} 
      amount={expenses[3].amount}
      />
    </div>
  );
}

export default App;
