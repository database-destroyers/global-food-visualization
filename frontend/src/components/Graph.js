import { LineChart, Line, XAxis, ResponsiveContainer, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import chroma from "chroma-js";

const colors = chroma.scale('YlGnBu');

const Graph = ({ data, type, foodItems }) => {
    switch (type) {
        case 1:
            return (
                <ResponsiveContainer width="90%" height={500}>
                    <LineChart data={data}>
                        <XAxis label={{ value: 'Year', position: 'insideBottom' }} dataKey="year" />
                        <YAxis label={{ value: 'Inflation (%)', angle: -90, position: 'insideLeft' }} type='number' domain={[-100, 100]} />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Legend verticalAlign="top" height={36} />
                        {
                            foodItems.map((f, i) => <Line type="monotone" dataKey={f} stroke={colors((i+1)/(foodItems.length)).toString()} />)
                        }
                    </LineChart>
                </ResponsiveContainer>
            )
    }
}

export default Graph;