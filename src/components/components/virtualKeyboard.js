import React from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import "../../css/virtualKeyboard.css"
import {MDBCol, MDBRow} from "mdbreact";

export default class VirtualKeyboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        };
    }

    handVisibility = ()=>{
        if(!this.props.disableHand) {
            return (
                <MDBRow center>
                    <MDBCol size="5">
                        <img alt="hand" className="hand-img" src="/img/hand.png"/>
                    </MDBCol>
                </MDBRow>
            )
        }
    }

    render(){
        let sharedProps = {
            physicalKeyboardHighlightPress: true,
            physicalKeyboardHighlight: true,
            physicalKeyboardHighlightBgColor: "#000000",
            physicalKeyboardHighlightTextColor: "white",
            buttonTheme: [
                {
                    class: "thumbF",
                    buttons: "c v n m"
                },
                {
                    class: "indexF",
                    buttons: "r t f g u i j k"
                },
                {
                    class: "middleF",
                    buttons: "e d o l"
                },
                {
                    class: "ringF",
                    buttons: "w s p ;"
                },
                {
                    class: "smolF",
                    buttons: "q a [ '"
                },
                {
                    class: "hint",
                    buttons: this.props.hintKey
                }
            ],
            // This syncs the input of all keyboards
            syncInstanceInputs: true,
        };
        return (
            <>
                <MDBRow>
                    <MDBCol size="8">
                        <Keyboard
                            {...sharedProps}
                            baseClass={"stdKeyboard"}
                            layout={{
                                'default': [
                                    '` 1 2 3 4 5 6 7 8 9 0 - = {backspace}',
                                    '{tab} q w e r t y u i o p [ ] \\',
                                    '{capslock} a s d f g h j k l ; \' {enter}',
                                    '{shiftleft} z x c v b n m , . / {shiftright}',
                                    '{controlleft} {metaleft} {altleft} {space} {altright} {metaright} {controllright}'
                                ]
                            }}
                            display={{
                                "{escape}": "esc ⎋",
                                "{space}": "______________________Space______________________",
                                "{tab}": "tab ⇥",
                                "{backspace}": "backspace ⌫",
                                "{enter}": "enter ↵",
                                "{capslock}": "caps lock ⇪",
                                "{shiftleft}": "shift ⇧",
                                "{shiftright}": "shift ⇧",
                                "{controlleft}": "ctrl ⌃",
                                "{controllright}": "ctrl ⌃",
                                "{altleft}": "alt ⌥",
                                "{altright}": "alt ⌥",
                                "{metaleft}": "cmd ⌘",
                                "{metaright}": "cmd ⌘"
                            }}
                        />
                    </MDBCol>
                    <MDBCol size="4">
                        <MDBRow>
                            <MDBCol>
                                <Keyboard
                                    {...sharedProps}
                                    baseClass={"StenoKeyboard1"}
                                    layout={{
                                        'default': [
                                            'q w e r t u i o p [',
                                            'a s d f g j k l ; \''
                                        ]
                                    }}
                                    display={{
                                        'q': 'S',
                                        'w': 'K',
                                        'e': 'R',
                                        'r': 'N',
                                        't': 'H',
                                        'u': '*',
                                        'i': 'W',
                                        'o': 'J',
                                        'p': 'N',
                                        '[': 'T',
                                        'a': 'T',
                                        's': 'P',
                                        'd': 'H',
                                        'f': 'N',
                                        'g': 'S',
                                        'j': 'I',
                                        'k': 'Y',
                                        'l': 'J',
                                        ';': 'G',
                                        '\'': 'K'
                                    }}
                                />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow center>
                            <MDBCol size="5">
                                <Keyboard
                                    {...sharedProps}
                                    baseClass={"StenoKeyboard2"}
                                    layout={{
                                        'default': [
                                            'c v n m'
                                        ]
                                    }}
                                    display={{
                                        'c': 'U',
                                        'v': 'O',
                                        'n': 'E',
                                        'm': 'A'
                                    }}
                                />
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
                {this.handVisibility()}
            </>
        );
    }
}
