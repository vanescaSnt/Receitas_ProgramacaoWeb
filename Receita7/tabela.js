const montarTabela = (itens, cabecalhos, propriedades) => {
    const cabecalhosHtml = cabecalhos.map( c => `<th>${c}</th>` )
 
    const linhasHtml = itens.map( item => {
        const colunasHtml = propriedades.map( p => `<td>${item[p]}</td>` )
        return `<tr>${colunasHtml.join("")}</tr>`
    })
 
    return `<table>
        <tr>${cabecalhosHtml.join("")}</tr>
        ${linhasHtml.join("\n")}
    </table>`
}