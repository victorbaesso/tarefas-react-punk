import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';

const Footer = () => (
  <div className="bg-bluegray-100 py-6">
    <div className="col-10 col-offset-1 py-4 my-5 border-top-1 border-bottom-1 border-bluegray-200">
      <h2 className="my-0 text-md font-light pb-2">Desenvolvido por:</h2>
      <a href="https://www.facebook.com/victhor.baesso" className="text-sm font-light no-underline text-primary" target="_blank">João Victor Baesso</a>
    </div>
    <div className="my-2">
      <a href="https://github.com/victorbaesso/tarefas-react-punk" className="text-sm font-light no-underline text-primary" target="_blank">Repositório</a>
    </div>
    <a href="https://relaxed-galileo-5401e6.netlify.app/" className="text-sm font-light no-underline text-primary" target="_blank">Versão inicial desse projeto</a>
  </div>
)

export default Footer;
