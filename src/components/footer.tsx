import { memo } from "react";

function Footer() {
  return <>
    <div className="Footer" >
      <h5>
        Copyright ©  <a href="http://system-bee.com.br/">System-Bee.</a> Todos os Direitos Reservados
      </h5>
    </div>
  </>
}

export default memo(Footer)