const path = require('path');
const express = require('express');
const app = express();

// Serve static files from the root directory
app.use(express.static(__dirname));

// Send index.html as the default page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // Removed 'public'
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
