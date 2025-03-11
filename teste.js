import { Empresa, Cliente, Endereco, Telefone } from "modulo-base/src/index.js"

const enderecoEmpresa = new Endereco("SP", "São José dos Campos", "Av Andrômeda", 987)

const empresa = new Empresa("ABC LTDA", "Mercado Online", "12.345.678/0001-99", enderecoEmpresa)

empresa.telefones.add(new Telefone("12", "999999999"))
empresa.telefones.add(new Telefone("12", "888888888"))

const clientes = [
    new Cliente("João", "111.222.333-44", new Endereco("SP", "São José dos Campos", "Av Andrômeda", 987)),
    new Cliente("Gabriel", "222.333.444-55", new Endereco("SP", "São José dos Campos", "Av Andrômeda", 412)),
    new Cliente("Barbara", "333.444.555-66", new Endereco("SP", "São José dos Campos", "Av São João", 789)),
    new Cliente("Márcia", "444.555.666-77", new Endereco("SP", "São José dos Campos", "Av Andrômeda", 452)),
    new Cliente("Carlos", "555.666.777-88", new Endereco("SP", "São José dos Campos", "Av São João", 123))
]

clientes[0].telefones.add(new Telefone("12", "999999999"))
clientes[0].telefones.add(new Telefone("12", "999988888"))

clientes[1].telefones.add(new Telefone("11", "888888888"))
clientes[1].telefones.add(new Telefone("11", "888877777"))

clientes[2].telefones.add(new Telefone("13", "777777777"))
clientes[2].telefones.add(new Telefone("13", "777766666"))

clientes[3].telefones.add(new Telefone("14", "666666666"))
clientes[3].telefones.add(new Telefone("14", "666655555"))

clientes[4].telefones.add(new Telefone("15", "555555555"))
clientes[4].telefones.add(new Telefone("15", "555544444"))

clientes.forEach(cliente => empresa.clientes.add(cliente))

empresa.detalhe()