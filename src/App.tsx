import { useState } from "react"
import { Button } from "./components/Button/Button"
import { Card } from "./components/Card/Card"
import { Header } from "./components/Header/Header"
import { Forecast } from "./components/Forecast/Forecast"


// const abobrinha = () => {
//   alert("Abobrinha")
// }

function App() {
  const userInfo = {
    name: "Leonardo",
    surname: "Santos",
  }

  const userList = [
    {
      id: 0,
      name: "Leonardo Santos",
      age: 25,
    },
    {
      id: 1,
      name: "Caio Liang",
      age: 22,
    },
    {
      id: 2,
      name: "Rodrigo Rios",
      age: 49,
    },
  ]
  // VDom -> Class components
  // Fiber -> Function components
  // Estado interno do componente -> STATE
  // Prefixo use -> Hook

  // 1 - Chuchu (VARIAVEL)
  // 2 - Abobrinha (Função: que atualiza a variavel)
  const [chuchu, abobrinha] = useState() // hook pra manipulação do estado interno de um componente

  const [state, setState] = useState()

  const [name, setName] = useState<string>("")
  const [age, setAge] = useState()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.value)
    setName(event.target.value)
  }

  const handleSave = () => {
    alert("Café")
  }

  return (
    <>
      <Header name={userInfo.name} surname={userInfo.surname} />
      <h1>Meu primeiro projeto</h1>
      {/* <Card>
        <h2>Titulo 2</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          consequuntur cum, inventore unde voluptate recusandae laboriosam nemo
          veniam hic, incidunt laborum aspernatur accusamus commodi itaque.
          Doloribus praesentium similique modi temporibus!
        </p>
        <Button>Adicionar</Button>
      </Card> */}

      <form>
        <label htmlFor="name">Nome completo</label>
        <br />
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <label htmlFor="age">Idade</label>
        <br />
        <input type="text" name="age" id="age" />
        <br />
        <button type="button" onClick={handleSave}>
          Salvar
        </button>
      </form>

      <h2>{name}</h2>

      {userList.map((user, index) => (
        <Card key={index}>
          <h3>{user.name}</h3>
          <p>{user.age}</p>
        </Card>
      ))}

      <Forecast day="19/08/2024" min={14} max={33} condition="Limpo"/>
      <Forecast day="20/08/2024" min={15} max={35} condition="Limpo" large/>
      

      {/* <Button>salvar</Button> */}
    </>
  )
}

export default App
