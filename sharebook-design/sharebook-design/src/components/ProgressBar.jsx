import React, { useState } from 'react';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Progress } from 'antd';

const ProgressBar=()=>{
    const [percent, setPercent] = useState(0);
  
    const increase = () => {
      setPercent((prevPercent) => {
        const newPercent = prevPercent + 10;
        if (newPercent > 100) {
          return 100;
        }
        return newPercent;
      });
    };
  
    const decline = () => {
      setPercent((prevPercent) => {
        const newPercent = prevPercent - 10;
        if (newPercent < 0) {
          return 0;
        }
        return newPercent;
      });
    };
  
    return (
      <>
        <div style={{ marginBottom: 10 }}>
          <Progress percent={percent} />
        </div>
        <Button.Group>
          <Button onClick={decline} icon={<MinusOutlined />} />
          <Button onClick={increase} icon={<PlusOutlined />} />
        </Button.Group>
      </>
    );
  };

  export default ProgressBar;