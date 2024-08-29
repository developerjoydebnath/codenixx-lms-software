import Highlighter from "react-highlight-words";

const Highlight = ({ info, text, highlightClassName }) => {
    const textValue = typeof info.getValue() === "number" ? info.getValue().toString() : info.getValue();
    return (
        <Highlighter
            highlightClassName={highlightClassName}
            searchWords={[info.table.options.state.globalFilter?.trim()]}
            autoEscape={true}
            textToHighlight={text || textValue}
        />
    );
};

export default Highlight;
