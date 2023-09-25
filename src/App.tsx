import { FC } from 'react';

import './style.css';
import { Button } from './component/button/Button';
import { Tabs } from './component/tabs/Tabs';
import { Typography } from './component/typography/Typography';
import { Badge } from './component/badge/Badge';
import { Card } from './component/card/Card';
import { Accordian } from './component/accordian/Accordian';
import { Slider } from './component/range-slider/Slider';
import { Input } from './component/input-field/Input';

export const App = () => {
  return (
    <div className='container'>

      <Button/>
      <Tabs/> 
      <Typography/>
      <Badge/>
      <Card/>
      <Accordian/>
      {/* <Slider/> */}
      <Input/>
    </div>
  );
};
