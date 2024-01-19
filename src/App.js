import { useState } from 'react';
import './styles.css';

const trackRef = (name) => (element) => console.log({ name, element });

const Section = ({ children }) => {
  console.log('render Section');
  return <section ref={trackRef('section')}>{children}</section>;
};

const Div = ({ children }) => {
  console.log('render Div');
  return <div ref={trackRef('div')}>{children}</div>;
};

const P = ({ children }) => {
  console.log('render P');
  return <p ref={trackRef('p')}>{children}</p>;
};

const Span = ({ children }) => {
  console.log('render Span');
  return <span ref={trackRef('span')}>{children}</span>;
};

export default function App() {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => setShow((bool) => !bool)}>show</button>
      <button onClick={() => setCount((count) => count + 1)}>increment</button>
      {show && (
        <Section>
          <Div>
            <P>
              <Span>hey</Span>
            </P>
          </Div>
        </Section>
      )}
    </div>
  );
}
