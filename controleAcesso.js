// As atividades devem ser entregues através do link do GitHub. Fique atento para que o repositório seja público, assim poderei corrigir :)

// Crie um sistema de controle de acesso para um prédio que precisa verificar se um usuário tem permissão para entrar. O programa deve analisar 3 dados: nome do usuário, seu nível de acesso (visitante, funcionário, gerente ou administrador) e o horário de acesso como entrada. O programa deve:

//     Verificar se o horário de acesso está dentro do horário de funcionamento do prédio (8h às 22h).
//     Caso seja visitante, o horário de visitas só é permitido entre 9h e 18h.
//     Verificar se o nível de acesso do usuário é suficiente para entrar no prédio no horário especificado.
//     Conceder acesso ao usuário se todas as condições forem atendidas.
//     Negar acesso ao usuário se alguma das condições não for atendida.
//     Ao fim exiba uma frase amigável dizendo se a entrara está permitida. Caso não seja permitida, deixe claro oporquê.

let nomeUsuario = "tati",
  tipoAcesso = "adm",
  horaEntrada = 23;

if (nomeUsuario !== "" && tipoAcesso !== "" && horaEntrada !== null) {
  console.log(`Olá: ${nomeUsuario} `);
  if (tipoAcesso !== "visitante" && horaEntrada >= 8 && horaEntrada <= 22) {
    console.log(
      ` ${nomeUsuario} Você é um ${tipoAcesso}. Seu horário de entrada no predio é as: ${horaEntrada}`
    );
  } else {
    if (tipoAcesso === "visitante" && horaEntrada >= 9 && horaEntrada <= 18) {
      console.log(
        ` ${nomeUsuario} Você é um ${tipoAcesso}. Seu horário de entrada no predio é as: ${horaEntrada}`
      );
    } else {
      console.log(
        `${tipoAcesso}, Agora é: ${horaEntrada}. Infelizmente nesse horário seu acesso não esta permitido`
      );
    }
  }
} else {
  console.log("Por favor preencha todos os dados!");
}
