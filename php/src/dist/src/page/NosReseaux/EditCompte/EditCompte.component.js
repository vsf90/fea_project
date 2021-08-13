
import { Steps, Button, message, Input } from 'antd';
import Form from 'antd/lib/form/Form';
import React from 'react';
import First from './First.component';
import FormAbonne2 from './FormAbonne2.component';
import FormAbonne from './FormAbonne.component';
import FormAbonne0 from './FormAbonne0.component';


const { Step } = Steps;

const steps = [
  {
    title: 'First',
    content: <FormAbonne0/>,
  },
  {
    title: 'Second',
    content: <FormAbonne/>,
  },
  {
    title: 'Last',
    content: <FormAbonne2/>,

  },
];

export default function EditCompte(){
    const [current, setCurrent] = React.useState(0);

    const next = () => {
      setCurrent(current + 1);
    };
  
    const prev = () => {
      setCurrent(current - 1);
    };
  
        return (
           
            <div className="col-md-12">
               <Steps current={current}>
                    <Step key="First" title="First" />
                    <Step key="Second" title="Second" />
                    <Step key="Last" title="Last" />
             </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
             </div>
             
        )
    
}