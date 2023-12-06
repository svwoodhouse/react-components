import Button from "./lib/components/Button";
import { GoBellFill } from "react-icons/go";
import { GoHeart } from "react-icons/go";
import { GoInbox } from "react-icons/go";

function App() {
  return (
    <div>
        <div > 
          <Button success rounded outline className="mb-5"><GoBellFill/>Hi there</Button>
        </div>
        <div > 
          <Button danger outline><GoHeart/>Hi there</Button>
        </div>
        <div > 
          <Button warning><GoInbox/>Hi there</Button>
        </div>
        <div > 
          <Button secondary outline>Hi there</Button>
        </div>
        <div > 
          <Button primary rounded>Hi there</Button>
        </div>
    </div>
  );
}

export default App;
