import { CButton } from "@coreui/react";
import { render } from "preact-render-to-string";

function MyComponent() {
  return (
    <div>
      <CButton>Hello World</CButton>
      hello
    </div>
  );
}

if (import.meta.main) {
  console.log("Hello World");
  const s = render(MyComponent());
  console.log(s);
}
