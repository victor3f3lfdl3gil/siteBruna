
import { getCSS, tickConfig } from "./common.js"

async function quantidadeUsuariosPorRede(){
const url= 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
const res = await fetch(url)
  const dados = await res.json()

  const nomeDasRedes = Object.keys(dados)
  const quantidadeDeUsuarios = Object.values(dados)

  const data = [
    {
      x: nomeDasRedes,
      y: quantidadeDeUsuarios,
      type: 'bar',
      marker: {
        color: getCSS('--primary-color')
      }
    }
  ]

  const layout = {
    plot_bgcolor: getCSS('--bg-color'),
    paper_bgcolor: getCSS('--bg-color'),
    title: {
        text: 'Redes sociais com mais usuários',
         x: 0,
         font: {
             color: getCSS('--primary-color'),
             font: getCSS('--font'),
             size: 30
         }
      },
      xaxis: {
        tickfont: tickConfig,
        title: {
            text: 'Nome das Redes Sociais',
        font: {
            color: getCSS('--secondary-color')
        }
        }
      },
      yaxis: {
        tickfont: tickConfig,
        tittle: {
            text: 'Bilhões de usuários ativos',
            font: {
                color: getCSS('--secondary-color')
            }
        }
      
      }
    

}

  
  const grafico = document.createElement('div')
  grafico.className = 'grafico'
  document.getElementById('graficos-container').appendChild(grafico)
  Plotly.newPlot(grafico, data, layout)
}

quantidadeUsuariosPorRede()