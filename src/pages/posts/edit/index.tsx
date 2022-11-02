import React, { useRef, useState } from 'react';
import AceEditor from 'react-ace';
import ace from 'ace-builds';

// import styles from './index.less';

import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/ext-language_tools';
import { Col, Row } from 'antd';
import { marked } from 'marked';
// import { useParams } from 'umi';

ace.config.set('basePath', '/node_modules/ace-builds/src-min-noconflict');

export default function Page() {
  const [value, setValue] = useState('');
  const divRef = useRef<HTMLDivElement>(null);
  const onLoad = () => {};
  // const params  = useParams();

  const onChange = (value: string) => {
    setValue(value);
    if (divRef.current) {
      divRef.current.innerHTML = marked.parse(value);
    }
  };

  // const onSave = () => {
  // console.log(save)
  // }

  return (
    <>
      <Row>
        <Col></Col>
      </Row>
      <Row>
        <Col>
          <AceEditor
            placeholder="请输入内容"
            mode="markdown"
            name="blah2"
            onLoad={onLoad}
            onChange={onChange}
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={value}
            setOptions={{
              enableBasicAutocompletion: false,
              enableLiveAutocompletion: false,
              enableSnippets: false,
              showLineNumbers: true,
              tabSize: 2,
            }}
          />
        </Col>
        <Col ref={divRef}></Col>
      </Row>
    </>
  );
}
