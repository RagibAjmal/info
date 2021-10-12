import 'primereact/resources/themes/saga-green/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div>
          <header >
            <p className="Heading">Hai Everyone , I am Ragib Ajmal</p>
          
            <div className="p-text-italic"> <p>I am  beginner in Computer Science Field and  </p></div>
            <div className="p-text-italic"> <p>I would like to become a DEVOPS Engineers </p></div>
            <div className="p-text-italic"> <p>I have knowledge in Django, Docker, Kubernetes, React </p></div>
        
          </header>
        </div>
        
        <div className="p-d-flex p-jc-center p-ai-center"> You can find  me on 
          <div>
            <a
              href="https://twitter.com/RagibAjmal"
              className="p-mr-2"
            >
                <i className="pi pi-twitter" aria-hidden="true"></i>
            </a>   
            <a
              href="https://github.com/RagibAjmal/"
              className="p-mr-2"
            >
                <i className="pi pi-github" aria-hidden="true"></i>
            </a>    
          </div>    
        </div>
        <footer className="p-d-flex p-jc-center p-ai-center">
          <p>Made with  <i className="pi pi-heart" aria-hidden="true"></i> by Ragib Ajmal</p>
          <p>
            <span className="p-mr-2">Find the code on </span>
            <a
              href="https://github.com/RagibAjmal/info"
              className="p-mr-2"
              aria-label="MY website repository on GitHub"
            >
              <i className="pi pi-github" aria-hidden="true"></i>
            </a>
          </p>
        </footer>
      </div>
    </div>
  
    
  );
}

export default App;
