import React from "react";
import Button from "./components/button/Button";
import { TbAdFilled } from "react-icons/tb";

function App() {
  return (
    <>
      {/**section 1 */}
      <div className="p-6 space-x-4 flex-wrap">
        <Button buttonStyle={{ color: "green", rounded: "lg", size: "md" }}>
          Button
        </Button>
        <Button buttonStyle={{ color: "teal", rounded: "lg", size: "md" }}>
          Button
        </Button>
        <Button
          buttonStyle={{ color: "green", rounded: "lg", size: "md" }}
          isLoading
        >
          Button
        </Button>
        <Button buttonStyle={{ color: "yellow", rounded: "lg", size: "md" }}>
          Button
        </Button>
        <Button buttonStyle={{ color: "gray", rounded: "lg", size: "md" }}>
          Button
        </Button>
      </div>
      {/**section 2 */}
      <div className="p-6 space-x-4">
        <Button
          buttonStyle={{ color: "green", rounded: "lg", size: "md" }}
          buttonVariant="outline"
        >
          Button
        </Button>
        <Button
          buttonStyle={{ color: "teal", rounded: "lg", size: "md" }}
          buttonVariant="outline"
        >
          Button
        </Button>
        <Button
          buttonStyle={{ color: "yellow", rounded: "lg", size: "md" }}
          buttonVariant="outline"
        >
          Button
        </Button>
        <Button
          buttonStyle={{ color: "gray", rounded: "lg", size: "md" }}
          buttonVariant="outline"
        >
          Button
        </Button>
      </div>
      {/**section 3 */}
      <div className="p-6 space-x-4">
        <Button
          buttonStyle={{ color: "green", rounded: "lg", size: "md" }}
          isLoading
        >
          Button
        </Button>
        <Button
          buttonStyle={{ color: "teal", rounded: "lg", size: "md" }}
          leftIcon={<TbAdFilled size={20} />}
        >
          Button
        </Button>
        <Button
          buttonStyle={{ color: "yellow", rounded: "lg", size: "md" }}
          rightIcon={<TbAdFilled size={20} />}
        >
          Button
        </Button>
        <Button
          buttonStyle={{ color: "gray", rounded: "lg", size: "md" }}
          rightIcon={<TbAdFilled size={20} />}
        />
      </div>
      {/**section 4 */}
      <div className="p-6 space-x-4">
        <Button
          buttonStyle={{ color: "green", size: "md" }}
          buttonVariant="ghost"
        >
          Button
        </Button>
        <Button
          buttonStyle={{ color: "teal", size: "md" }}
          buttonVariant="ghost"
          leftIcon={<TbAdFilled size={20} />}
        >
          Button
        </Button>
        <Button
          buttonStyle={{ color: "yellow", size: "md" }}
          buttonVariant="ghost"
          rightIcon={<TbAdFilled size={20} />}
        >
          Button
        </Button>
        <Button
          buttonStyle={{ color: "gray", size: "md" }}
          buttonVariant="ghost"
          rightIcon={<TbAdFilled size={20} />}
        />
      </div>

      {/**section 5*/}
      <div className="flex p-6">
        <Button
          className="px-[100px]"
          buttonStyle={{
            color: "green",
            rounded: "lg",
            size: "md",
            align: "center",
          }}
        >
          Button
        </Button>
      </div>
    </>
  );
}

export default App;
