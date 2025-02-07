import Logo from "../../assets/Tela Login/imagem tela de login.png"
function Login() {
    return (
        <main>
            <section>
                <p>Reservando para a imagem </p>
            </section>

            <section>
            <img src={Logo} alt="Logo da Wilson sons" />
                <h1> Boas vindas ao novo portal SISPAR</h1>
                <p>Sistema de emissão de boletos e parcelamento</p>

                <form action="">
                    <input type="Email" name="Email" id="email" placeholder="email" />
                    <input type="senha" name="senha" id="senha" placeholder="senha" />

                    <a href="">Esqueci minha senha</a>

                    <div>
                        <button>Entrar</button>
                        <button>Criar conta</button>
                    </div>

                </form>

            </section>
        </main>


    )
}






export default Login;
