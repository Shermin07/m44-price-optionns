
import PropTypes from 'prop-types'
import { LineChart, Line,XAxis, YAxis } from 'recharts';

function Linecharts() {

  
        const students = [
          {
            name: 'John Doe',
            id: 101,
            physics: 85,
            chemistry: 78,
            math: 90,
          },
          {
            name: 'Jane Smith',
            id: 102,
            physics: 80,
            chemistry: 82,
            math: 88,
          },
          {
            name: 'Alice Johnson',
            id: 103,
            physics: 88,
            chemistry: 79,
            math: 92,
          },
        ];
      
       
      
  return (
    <div>
        <LineChart  width={400} height={400} data = {students}>
            <XAxis></XAxis>
            <YAxis></YAxis>
            <Line type={'monotone'} dataKey={'physics'}></Line>
            <Line type={'monotone'}  dataKey={'chemistry'}></Line>
        </LineChart>
    </div>
  )
}

Linecharts.propTypes = {}

export default Linecharts
