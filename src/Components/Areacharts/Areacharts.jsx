
import PropTypes from 'prop-types'
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const Areacharts = () => {
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
          name: 'Johnson',
          id: 104,
          physics: 88,
          chemistry: 79,
          math: 92,
        },
        {
          name: 'Alice ',
          id: 105,
          physics: 88,
          chemistry: 79,
          math: 92,
        },
        {
          name: 'Alinson',
          id: 106,
          physics: 88,
          chemistry: 79,
          math: 92,
        },
      ];
  return (
    <div>
<AreaChart width={500}
          height={400}
          data={students}>
            <XAxis></XAxis>
            <YAxis></YAxis>
            <Area dataKey={'name'}></Area>
            <Area dataKey={'math'}></Area>
</AreaChart>
    </div>
  )
}

Areacharts.propTypes = {}

export default Areacharts