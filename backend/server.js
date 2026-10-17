const express = require('express');
const cors = require('cors');
const trophiesRoutes = require('./routes/trophiesRoutes');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));
app.use('/api', trophiesRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});