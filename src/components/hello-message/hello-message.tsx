import { component$ } from "@builder.io/qwik";

interface HelloMessageProps {
  message: string,
  courseVersion: number
}

export const HelloMessage = component$<HelloMessageProps>((props) => {

  // this is called destructuring
  const {message, courseVersion} = props;

  return (
    <div>
      {
        <>
        <h1>{message}: version-{courseVersion}</h1>
          <p>This is my first Qwik Application</p>
        </>
      }
    </div>

  );
});