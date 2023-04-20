import { LineChart, Line, XAxis, ResponsiveContainer, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Graph = ({ data }) => {
    return (
        <ResponsiveContainer width="90%" height={500}>
            <LineChart data={data}>
                <XAxis label={{ value: 'Year', position: 'insideBottom' }} dataKey="year" />
                <YAxis label={{ value: 'Inflation (%)', angle: -90, position: 'insideLeft' }} type='number' domain={[-100, 100]} />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend verticalAlign="top" height={36}/>
                <Line type="monotone" dataKey="Maize" stroke="#8884d8" />
                <Line type="monotone" dataKey="Wheat" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default Graph;