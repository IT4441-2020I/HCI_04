import React from 'react';
import '../../css/editor.css'
import VirtualKeyboard from "../components/virtualKeyboard";

export default class Editor extends React.Component {
    render() {
        return(
            <>
                <textarea
                    autoComplete="off"
                    className="form-control form-control-lg editor-input"
                    rows={14}
                />
                <VirtualKeyboard
                    disableHand={true}
                    hintKey=" "
                />
            </>
        );
    }
}
