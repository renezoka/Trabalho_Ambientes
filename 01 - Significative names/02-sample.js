let usuarioAdmin = true;

function verificarAcesso(usuario) {
    if (usuarioAdmin && usuario.isAdmin) {
        console.log("Acesso permitido ao administrador.");
    } else {
        console.log("Acesso negado.");
    }
}

let membro = { nome: "João", admin: true };
verAc(membro);
