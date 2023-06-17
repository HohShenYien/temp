import useStore from "@/utils/hooks/useStore";
import useMessageStore from "@/stores/useMessageStore";
import Button from "@/components/buttons/Button";
import { Input } from "@mantine/core";
import { FiSend, FiPaperclip, FiMic } from "react-icons/fi";
import { useState } from "react";

const InputSection = ({ onChange }: { onChange: () => void }) => {
  const [text, setText] = useState("");
  const { addMessage } = useStore(useMessageStore, (state) => state) ?? {
    addMessage: () => null,
  };

  const onEnter = ({ message }: { message: string }) => {
    addMessage({
      text: message,
      origin: "bot",
    });
    setText("");
    onChange();
  };

  return (
    <div className="grid w-full grid-cols-12 gap-4 p-2 ">
      <div className="col-span-10 w-full">
        <Input
          classNames={{ wrapper: "flex items-center", input: "py-3 h-[auto]" }}
          h={"100%"}
          placeholder="Ask a question"
          value={text}
          onChange={(event) => setText(event.currentTarget.value)}
          onKeyDown={(evt) => {
            if (evt.key === "Enter" && !evt.shiftKey && text.trim() !== "") {
              evt.preventDefault();
              onEnter({ message: text });
            }
          }}
        />
      </div>
      <div className="col-span-2 flex items-center justify-center space-x-2">
        <Button variant="subtle" w={"100%"} className="rounded-full">
          <FiMic size="1.5rem" />
        </Button>
        <Button variant="subtle" w={"100%"} className="rounded-full">
          <FiPaperclip size="1.5rem" />
        </Button>
        <Button
          variant="subtle"
          w={"100%"}
          className="rounded-full"
          onClick={() => {
            if (text.trim() !== "") onEnter({ message: text });
          }}
        >
          <FiSend size="1.5rem" />
        </Button>
      </div>
    </div>
  );
};

export default InputSection;
