import { memo } from "react"

function Home() {
  return <>
    <div className="Home">
      <section className="header_home">
        <h4>Repositorio no GitHubi: <a href="https://github.com/guilhermeforprojeto/react_ts_tests.git">Clique aqui</a></h4><br />
        <h4>Perfil no Linkedin: <a href="https://www.linkedin.com/in/guilhermessantos-dev/">Clique aqui</a></h4>
      </section>
      <div className="galery" >

      </div>
    </div>
  </>
}

export default memo(Home)