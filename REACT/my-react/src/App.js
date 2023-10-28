import './App.css'
import NewProduct from './components/NewProduct'
// import ProductForm from './components/ProductForm'
// import Item from './components/Item'
// import ItemDate from './components/ItemDate'
import Products from './components/Products'

// function App() {
//   const itemTwoName = 'SurfExcel'
//   return (
//     <div>
//       <Item name="Nirma"></Item>
//       <ItemDate day="20" month="june" year="1998"></ItemDate>

//       <Item name={itemTwoName}></Item>
//       <ItemDate day="19" month="dec" year="2002"></ItemDate>

//       <Item name="Tide"></Item>
//       <ItemDate day="29" month="march" year="2002"></ItemDate>
//       <div className="App">Hello Everyone</div>
//     </div>
//   )
// }
// function App() {
//   const response = [
//     {
//       itemName: 'Nirma',
//       itemDate: '20',
//       itemMonth: 'june',
//       itemYear: '1998',
//     },
//     {
//       itemName: 'Nirma',
//       itemDate: '20',
//       itemMonth: 'june',
//       itemYear: '1998',
//     },
//     {
//       itemName: 'Nirma',
//       itemDate: '20',
//       itemMonth: 'june',
//       itemYear: '1998',
//     },
//   ]
//   return (
//     <div>
//       <Item name={response[0].itemName}></Item>
//       <ItemDate
//         day={response[0].itemDate}
//         month={response[0].itemMonth}
//         year={response[0].itemYear}
//       ></ItemDate>

//       <Item name={response[1].itemName}></Item>
//       <ItemDate
//         day={response[1].itemDate}
//         month={response[1].itemMonth}
//         year={response[1].itemYear}
//       ></ItemDate>

//       <Item name={response[2].itemName}></Item>
//       <ItemDate
//         day={response[2].itemDate}
//         month={response[2].itemMonth}
//         year={response[2].itemYear}
//       ></ItemDate>
//       <div className="App">Hello Everyone</div>
//     </div>
//   )
// }

const App = () => {
  const products = [
    { id: 'p1', title: 'Nirma', amount: 100, date: new Date(2021, 8, 10) },
    { id: 'p2', title: 'Surf-Excel', amount: 400, date: new Date(2021, 2, 2) },
    { id: 'p3', title: 'Tide', amount: 190, date: new Date(2021, 12, 18) },
    { id: 'p4', title: 'Henko', amount: 276, date: new Date(2021, 7, 29) },
  ]

  function printProductData(data) {
    console.log('i am inside API.js')
    console.log(data)
  }
  return (
    <div>
      <NewProduct ppd={printProductData} />
      <Products items={products}></Products>
    </div>
  )
}

export default App
