
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const eventRouter = require('./routes/event');
const projectRouter = require('./routes/project');
const videoRouter = require('./routes/video');

const app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/', indexRouter);
app.use('/api/events', eventRouter);
app.use('/api/projects', projectRouter);
app.use('/api/videos', videoRouter);

module.exports = app;
