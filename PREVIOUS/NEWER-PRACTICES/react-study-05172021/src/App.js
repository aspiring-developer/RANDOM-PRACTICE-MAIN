import ExpenseItem from './components/ExpenseItem';
import expenses from './dataFile';
//import Card from './components/Card';

function App() {
  return (
    <>

      <h2>Let's get started!</h2>
      {/*<ExpenseItem date={expenses[0].date}  title={expenses[0].title} amount={expenses[0].amount}/>
      <ExpenseItem date={expenses[1].date}  title={expenses[1].title} amount={expenses[1].amount}/>
      <ExpenseItem date={expenses[2].date}  title={expenses[2].title} amount={expenses[2].amount}/>
      <ExpenseItem date={expenses[3].date}  title={expenses[3].title} amount={expenses[3].amount}/>*/}

      {expenses.map(function(eachItem) {
        return <ExpenseItem date={eachItem.date}  title={eachItem.title} amount={eachItem.amount} key={eachItem.id}/>
      })}

    </>
  );
}

export default App;