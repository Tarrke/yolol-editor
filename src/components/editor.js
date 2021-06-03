import React from 'react';

import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/lucario.css';

import '../index.css';

export default class Editor extends React.Component {
    render() {
        const code = 'const a = 0;\nconst b = 1;';
      return (
        <div className="editor">
            <CodeMirror
                value={code}
                options={{
                theme: 'lucario',
                keyMap: 'sublime',
                mode: 'jsx',
                }}
            />
        </div>
      );
    }
}