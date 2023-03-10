import { $, component$ } from "@builder.io/qwik";
import { HelloMessage } from "~/components/hello-message/hello-message";


export default component$(() => {
  console.log('Initializing Hello World component');


  const sayHello = $( () =>  {
    alert("Hellow world")
  });

  return (
    <>
      <HelloMessage message= "Hello World" courseVersion={1}/>
      <HelloMessage message= "Welcome to this Qwik course" courseVersion={2}/>
      <HelloMessage message="Learn the Quik best practices" courseVersion={1}/>

      <button onClick$={() => sayHello() }>Say Hello</button>
    </>
  );
});

